import { Injectable, signal, effect } from '@angular/core';
import type { Lang } from './i18n';

export type Theme = 'light' | 'dark' | 'auto';

export interface Reminder {
  id: string;
  daysBefore: number;
  hour: number;
  minute: number;
}

export interface Settings {
  lang: Lang;
  theme: Theme;
  reminders: Reminder[];
}

const KEY = 'smieci.settings.v1';

const DEFAULT_SETTINGS: Settings = {
  lang: 'pl',
  theme: 'auto',
  reminders: [
    { id: 'r1', daysBefore: 1, hour: 16, minute: 0 },
  ],
};

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<Settings>;
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      reminders: (parsed.reminders ?? DEFAULT_SETTINGS.reminders).slice(0, 2),
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

@Injectable({ providedIn: 'root' })
export class SettingsService {
  readonly settings = signal<Settings>(loadSettings());

  constructor() {
    effect(() => {
      const s = this.settings();
      try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {}
      this.applyTheme(s.theme);
    });
  }

  setLang(lang: Lang): void {
    this.settings.update(s => ({ ...s, lang }));
  }

  setTheme(theme: Theme): void {
    this.settings.update(s => ({ ...s, theme }));
  }

  addReminder(): void {
    if (this.settings().reminders.length >= 2) return;
    const id = 'r' + Math.random().toString(36).slice(2, 8);
    this.settings.update(s => ({
      ...s,
      reminders: [...s.reminders, { id, daysBefore: 1, hour: 18, minute: 0 }],
    }));
  }

  updateReminder(id: string, patch: Partial<Reminder>): void {
    this.settings.update(s => ({
      ...s,
      reminders: s.reminders.map(r => r.id === id ? { ...r, ...patch } : r),
    }));
  }

  removeReminder(id: string): void {
    this.settings.update(s => ({
      ...s,
      reminders: s.reminders.filter(r => r.id !== id),
    }));
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    root.classList.remove('theme-light', 'theme-dark');
    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(prefersDark ? 'theme-dark' : 'theme-light');
    } else {
      root.classList.add(`theme-${theme}`);
    }
  }
}
