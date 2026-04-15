export type Lang = 'pl' | 'en';

export interface Strings {
  appTitle: string;
  subtitle: string;
  nextPickup: string;
  noUpcoming: string;
  upcoming: string;
  options: string;
  close: string;
  language: string;
  theme: string;
  themeLight: string;
  themeDark: string;
  themeAuto: string;
  calendarReminders: string;
  calendarRemindersDescription: string;
  daysBefore: string;
  zeroDaysBefore: string;
  oneDayBefore: string;
  multiDaysBefore: (n: number) => string;
  time: string;
  addReminder: string;
  remove: string;
  source: string;
  offlineReady: string;
  appLanguage: string;
  fullSchedule: string;
  showFullSchedule: string;
  hideFullSchedule: string;
  installTitle: string;
  installDescription: string;
  installIosStep1: string;
  installIosStep2: string;
  installIosStep3: string;
  installMacStep1: string;
  installMacStep2: string;
  installMacStep3: string;
  installAndroidStep1: string;
  installAndroidStep2: string;
  installIosLabel: string;
  installMacLabel: string;
  installAndroidLabel: string;
  supportTitle: string;
  supportLine1: string;
  supportLine2: string;
  addToCalendar: string;
  addToCalendarHint: string;
  calendarReminderSummary: (types: string) => string;
  calendarReminderDescription: string;
}

const PL: Strings = {
  appTitle: 'Wywóz śmieci · Mościska',
  subtitle: 'Gmina Izabelin · 2026',
  nextPickup: 'Najbliższy wywóz',
  noUpcoming: 'Brak zaplanowanych wywozów.',
  upcoming: 'Kolejne wywozy',
  options: 'Opcje',
  close: 'Zamknij',
  language: 'Język',
  theme: 'Motyw',
  themeLight: 'Jasny',
  themeDark: 'Ciemny',
  themeAuto: 'Auto',
  calendarReminders: 'Przypomnienia w kalendarzu',
  calendarRemindersDescription: 'Ustaw kiedy kalendarz ma Ci przypomnieć o wywozie. Kliknij przycisk poniżej, aby pobrać plik .ics.',
  daysBefore: 'Dni przed',
  zeroDaysBefore: 'W dniu wywozu',
  oneDayBefore: 'Dzień przed',
  multiDaysBefore: (n) => `${n} dni przed`,
  time: 'Godzina',
  addReminder: 'Dodaj przypomnienie',
  remove: 'Usuń',
  source: 'Dane z harmonogramu Gminy Izabelin 2026',
  offlineReady: 'Aplikacja działa offline',
  appLanguage: 'Polski',
  fullSchedule: 'Pełny harmonogram 2026',
  showFullSchedule: 'Pokaż harmonogram',
  hideFullSchedule: 'Ukryj harmonogram',
  installTitle: 'Zainstaluj aplikację',
  installDescription: 'Dodaj aplikację do ekranu głównego, aby działała offline — bez internetu.',
  installIosLabel: 'iPhone / iPad (Safari)',
  installIosStep1: 'Naciśnij przycisk Udostępnij (kwadrat ze strzałką ↑).',
  installIosStep2: 'Wybierz „Do ekranu początkowego".',
  installIosStep3: 'Potwierdź i naciśnij „Dodaj".',
  installMacLabel: 'Mac (Chrome / Edge)',
  installMacStep1: 'Kliknij ikonę instalacji na pasku adresu (lub menu ⋮ → „Zainstaluj aplikację").',
  installMacStep2: 'Potwierdź instalację.',
  installMacStep3: 'Aplikacja pojawi się w Launchpadzie i Docku.',
  installAndroidLabel: 'Android (Chrome)',
  installAndroidStep1: 'Naciśnij menu ⋮ → „Dodaj do ekranu głównego".',
  installAndroidStep2: 'Potwierdź i naciśnij „Dodaj".',
  supportTitle: 'Wsparcie',
  supportLine1: 'Jeśli podoba Ci się ten projekt i jest dla Ciebie pomocny, będę bardzo wdzięczny za wsparcie.',
  supportLine2: 'Utrzymywanie open source wymaga czasu, a Twoje wsparcie pomaga rozwijać projekt i utrzymać go przy życiu.',
  addToCalendar: 'Dodaj wszystkie wywozy do kalendarza',
  addToCalendarHint: 'Pobierz plik .ics i zaimportuj do Apple/Google Calendar — przypomnienia wg ustawień powyżej.',
  calendarReminderSummary: (types) => `Wywóz śmieci: ${types}`,
  calendarReminderDescription: 'Pamiętaj wystawić odpady wieczorem dnia poprzedniego.',
};

const EN: Strings = {
  appTitle: 'Garbage pickup · Mościska',
  subtitle: 'Izabelin commune · 2026',
  nextPickup: 'Next pickup',
  noUpcoming: 'No upcoming pickups scheduled.',
  upcoming: 'Upcoming pickups',
  options: 'Options',
  close: 'Close',
  language: 'Language',
  theme: 'Theme',
  themeLight: 'Light',
  themeDark: 'Dark',
  themeAuto: 'Auto',
  calendarReminders: 'Calendar reminders',
  calendarRemindersDescription: 'Set when your calendar should remind you about pickup. Then tap the button below to download the .ics file.',
  daysBefore: 'Days before',
  zeroDaysBefore: 'On pickup day',
  oneDayBefore: 'Day before',
  multiDaysBefore: (n) => `${n} days before`,
  time: 'Time',
  addReminder: 'Add reminder',
  remove: 'Remove',
  source: 'Data from Izabelin commune 2026 schedule',
  offlineReady: 'App works offline',
  appLanguage: 'English',
  fullSchedule: 'Full 2026 schedule',
  showFullSchedule: 'Show schedule',
  hideFullSchedule: 'Hide schedule',
  installTitle: 'Install the app',
  installDescription: 'Add the app to your home screen so it works offline — no internet needed.',
  installIosLabel: 'iPhone / iPad (Safari)',
  installIosStep1: 'Tap the Share button (square with arrow ↑).',
  installIosStep2: 'Choose "Add to Home Screen".',
  installIosStep3: 'Confirm and tap "Add".',
  installMacLabel: 'Mac (Chrome / Edge)',
  installMacStep1: 'Click the install icon in the address bar (or menu ⋮ → "Install app").',
  installMacStep2: 'Confirm installation.',
  installMacStep3: 'The app will appear in Launchpad and Dock.',
  installAndroidLabel: 'Android (Chrome)',
  installAndroidStep1: 'Tap menu ⋮ → "Add to Home screen".',
  installAndroidStep2: 'Confirm and tap "Add".',
  supportTitle: 'Support',
  supportLine1: 'If you like this project and it helps you, I would really appreciate your support.',
  supportLine2: 'Maintaining open source takes time, and your support helps keep it alive and improving.',
  addToCalendar: 'Add all pickups to calendar',
  addToCalendarHint: 'Downloads an .ics file for Apple/Google Calendar — reminders per settings above.',
  calendarReminderSummary: (types) => `Garbage pickup: ${types}`,
  calendarReminderDescription: 'Remember to take the trash out the evening before.',
};

export const STRINGS: Record<Lang, Strings> = { pl: PL, en: EN };

const EN_DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const EN_MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatDateLang(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  if (lang === 'pl') {
    const PL_DAY = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
    const PL_MONTH = [
      'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
      'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia',
    ];
    return `${PL_DAY[date.getDay()]}, ${date.getDate()} ${PL_MONTH[date.getMonth()]} ${date.getFullYear()}`;
  }
  return `${EN_DAY_NAMES[date.getDay()]}, ${EN_MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function relativeLabelLang(iso: string, lang: Lang, now: Date = new Date()): string {
  const [y, m, d] = iso.split('-').map(Number);
  const target = new Date(y, m - 1, d).getTime();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const n = Math.round((target - today) / 86400000);
  if (lang === 'pl') {
    if (n === 0) return 'dzisiaj';
    if (n === 1) return 'jutro';
    if (n < 0) return `${-n} dni temu`;
    return `za ${n} dni`;
  }
  if (n === 0) return 'today';
  if (n === 1) return 'tomorrow';
  if (n < 0) return `${-n} days ago`;
  return `in ${n} days`;
}
