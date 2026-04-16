import { Component, inject, computed, signal } from '@angular/core';
import { SettingsService, type Reminder } from './settings';
import {
  SCHEDULE, WASTE_TYPES, nextPickup, upcomingPickups, parseDate, type PickupDay,
} from './schedule';
import { STRINGS, formatDateLang, relativeLabelLang, type Lang, type Strings } from './i18n';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private settingsSvc = inject(SettingsService);

  protected readonly WASTE_TYPES = WASTE_TYPES;
  protected readonly settings = this.settingsSvc.settings;

  protected readonly optionsOpen = signal(false);
  protected readonly photoOpen = signal(false);
  protected readonly toast = signal<string | null>(null);

  protected readonly t = computed(() => STRINGS[this.settings().lang]);
  protected readonly next = computed(() => nextPickup());
  protected readonly upcoming = computed(() => upcomingPickups(new Date(), 6));

  formatDate(iso: string): string {
    return formatDateLang(iso, this.settings().lang);
  }

  relative(iso: string): string {
    return relativeLabelLang(iso, this.settings().lang);
  }

  toggleOptions(): void {
    this.optionsOpen.update(v => !v);
  }

  togglePhoto(): void {
    this.photoOpen.update(v => !v);
  }

  setLang(lang: Lang): void { this.settingsSvc.setLang(lang); }
  setTheme(theme: 'light' | 'dark' | 'auto'): void { this.settingsSvc.setTheme(theme); }

  downloadCalendar(): void {
    const strings = this.t();
    const reminders = this.settings().reminders;
    const ics = buildIcs(SCHEDULE, strings, reminders);
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wywoz-smieci-moscicka-2026.ics';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    this.flash(this.t().addToCalendar);
  }

  addReminder(): void { this.settingsSvc.addReminder(); }
  removeReminder(id: string): void { this.settingsSvc.removeReminder(id); }
  updateReminderDays(id: string, value: string): void {
    this.settingsSvc.updateReminder(id, { daysBefore: Math.max(0, Math.min(14, +value)) });
  }
  updateReminderTime(id: string, value: string): void {
    const [h, m] = value.split(':').map(Number);
    this.settingsSvc.updateReminder(id, { hour: h, minute: m });
  }

  formatTime(r: { hour: number; minute: number }): string {
    return `${String(r.hour).padStart(2, '0')}:${String(r.minute).padStart(2, '0')}`;
  }

  daysBeforeLabel(n: number): string {
    const t = this.t();
    if (n === 0) return t.zeroDaysBefore;
    if (n === 1) return t.oneDayBefore;
    return t.multiDaysBefore(n);
  }

  private flashTimer: ReturnType<typeof setTimeout> | null = null;
  private flash(msg: string): void {
    this.toast.set(msg);
    if (this.flashTimer) clearTimeout(this.flashTimer);
    this.flashTimer = setTimeout(() => this.toast.set(null), 3000);
  }
}

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function icsDate(iso: string): string {
  return iso.replace(/-/g, '');
}

function icsDatePlusDays(iso: string, days: number): string {
  const d = parseDate(iso);
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}`;
}

function icsEscape(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

function nowStamp(): string {
  const d = new Date();
  return `${d.getUTCFullYear()}${pad2(d.getUTCMonth() + 1)}${pad2(d.getUTCDate())}T${pad2(d.getUTCHours())}${pad2(d.getUTCMinutes())}${pad2(d.getUTCSeconds())}Z`;
}


function reminderTrigger(r: Reminder): string {
  const minBefore = r.daysBefore * 1440 - (r.hour * 60 + r.minute);
  if (minBefore <= 0) return `TRIGGER:PT${-minBefore}M`;
  return `TRIGGER:-PT${minBefore}M`;
}

function buildIcs(schedule: PickupDay[], strings: Strings, reminders: Reminder[]): string {
  const stamp = nowStamp();
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//smieci-moscicka//PL',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Wywóz śmieci · Mościska 2026',
    'X-WR-TIMEZONE:Europe/Warsaw',
  ];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayMs = today.getTime();
  for (const pickup of schedule.filter(p => parseDate(p.date).getTime() >= todayMs)) {
    const types = pickup.types
      .map(t => `${WASTE_TYPES[t].emoji} ${WASTE_TYPES[t].short}`)
      .join(', ');
    const summary = icsEscape(strings.calendarReminderSummary(types));
    const description = icsEscape(strings.calendarReminderDescription);
    lines.push(
      'BEGIN:VEVENT',
      `UID:smieci-${pickup.date}@moscicka`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${icsDate(pickup.date)}`,
      `DTEND;VALUE=DATE:${icsDatePlusDays(pickup.date, 1)}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      'TRANSP:TRANSPARENT',
    );
    for (const r of reminders) {
      lines.push(
        'BEGIN:VALARM',
        'ACTION:DISPLAY',
        `DESCRIPTION:${summary}`,
        reminderTrigger(r),
        'END:VALARM',
      );
    }
    lines.push('END:VEVENT');
  }
  lines.push('END:VCALENDAR');
  return lines.join('\r\n') + '\r\n';
}
