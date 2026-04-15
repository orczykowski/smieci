export type WasteType =
  | 'MIXED_PAPER'
  | 'MIXED_GLASS'
  | 'BIO_KITCHEN'
  | 'BIO_KITCHEN_GARDEN'
  | 'BULKY_ELECTRO'
  | 'TEXTILES'
  | 'TIRES';

export interface WasteTypeInfo {
  label: string;
  short: string;
  color: string;
  swatch: string;
  outline?: string;
  emoji: string;
}

const C = {
  blue:   '#4470c4',
  yellow: '#e8c358',
  green:  '#5aa566',
  red:    '#cc5a52',
  purple: '#8a5fa1',
  brown:  '#8a5836',
  olive:  '#85a259',
  navy:   '#2b3a6e',
};

const triangleSwatch = (top: string, bottom: string) =>
  `linear-gradient(135deg, ${top} 0%, ${top} 49%, ${bottom} 51%, ${bottom} 100%)`;

const splitSwatch = (top: string, bottom: string) =>
  `linear-gradient(180deg, ${top} 0%, ${top} 49%, ${bottom} 51%, ${bottom} 100%)`;

export const WASTE_TYPES: Record<WasteType, WasteTypeInfo> = {
  MIXED_PAPER: {
    label: 'Odpady zmieszane + segregowane (plastik, metal, papier)',
    short: 'Zmieszane + papier/plastik/metal',
    color: C.blue,
    swatch: triangleSwatch(C.blue, C.yellow),
    emoji: '📦',
  },
  MIXED_GLASS: {
    label: 'Odpady zmieszane + segregowane (plastik, metal, szkło)',
    short: 'Zmieszane + szkło/plastik/metal',
    color: C.green,
    swatch: triangleSwatch(C.green, C.yellow),
    emoji: '🍾',
  },
  BIO_KITCHEN: {
    label: 'Bioodpady kuchenne',
    short: 'Bio kuchenne',
    color: C.brown,
    swatch: C.brown,
    emoji: '🥕',
  },
  BIO_KITCHEN_GARDEN: {
    label: 'Bioodpady kuchenne + ogrodowe',
    short: 'Bio kuchenne + ogrodowe',
    color: C.brown,
    swatch: splitSwatch(C.brown, C.olive),
    emoji: '🌿',
  },
  BULKY_ELECTRO: {
    label: 'Odpady wielkogabarytowe + Elektroodpady',
    short: 'Wielkogabaryty + elektro',
    color: C.red,
    swatch: triangleSwatch(C.red, C.yellow),
    emoji: '🛋️',
  },
  TEXTILES: {
    label: 'Odpady tekstyliów i odzieży',
    short: 'Tekstylia i odzież',
    color: C.purple,
    swatch: triangleSwatch(C.blue, C.purple),
    outline: C.purple,
    emoji: '👕',
  },
  TIRES: {
    label: 'Zużyte opony',
    short: 'Opony',
    color: C.blue,
    swatch: triangleSwatch(C.blue, C.navy),
    emoji: '🛞',
  },
};

export interface PickupDay {
  date: string;
  types: WasteType[];
}

export const SCHEDULE: PickupDay[] = [
  { date: '2026-01-05', types: ['MIXED_GLASS'] },
  { date: '2026-01-08', types: ['BIO_KITCHEN'] },
  { date: '2026-01-19', types: ['MIXED_PAPER'] },
  { date: '2026-01-22', types: ['BIO_KITCHEN_GARDEN'] },

  { date: '2026-02-02', types: ['MIXED_GLASS', 'TEXTILES'] },
  { date: '2026-02-05', types: ['BIO_KITCHEN'] },
  { date: '2026-02-16', types: ['MIXED_PAPER'] },
  { date: '2026-02-19', types: ['BIO_KITCHEN_GARDEN'] },

  { date: '2026-03-02', types: ['MIXED_GLASS'] },
  { date: '2026-03-05', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-03-16', types: ['MIXED_PAPER'] },
  { date: '2026-03-19', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-03-30', types: ['MIXED_GLASS'] },

  { date: '2026-04-02', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-04-13', types: ['MIXED_PAPER'] },
  { date: '2026-04-16', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-04-25', types: ['MIXED_GLASS'] },
  { date: '2026-04-29', types: ['BIO_KITCHEN_GARDEN'] },

  { date: '2026-05-11', types: ['MIXED_PAPER', 'TEXTILES'] },
  { date: '2026-05-14', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-05-25', types: ['BULKY_ELECTRO'] },
  { date: '2026-05-28', types: ['BIO_KITCHEN_GARDEN'] },

  { date: '2026-06-08', types: ['MIXED_PAPER'] },
  { date: '2026-06-11', types: ['BIO_KITCHEN'] },
  { date: '2026-06-22', types: ['MIXED_GLASS'] },
  { date: '2026-06-25', types: ['BIO_KITCHEN_GARDEN'] },

  { date: '2026-07-06', types: ['MIXED_PAPER'] },
  { date: '2026-07-09', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-07-20', types: ['MIXED_GLASS'] },
  { date: '2026-07-23', types: ['BIO_KITCHEN_GARDEN'] },

  { date: '2026-08-03', types: ['MIXED_PAPER'] },
  { date: '2026-08-06', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-08-17', types: ['MIXED_PAPER', 'TEXTILES'] },
  { date: '2026-08-20', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-08-31', types: ['MIXED_PAPER'] },

  { date: '2026-09-03', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-09-14', types: ['MIXED_GLASS'] },
  { date: '2026-09-17', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-09-28', types: ['MIXED_PAPER'] },

  { date: '2026-10-01', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-10-12', types: ['MIXED_GLASS'] },
  { date: '2026-10-15', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-10-26', types: ['MIXED_PAPER'] },
  { date: '2026-10-29', types: ['BIO_KITCHEN_GARDEN'] },

  { date: '2026-11-09', types: ['MIXED_GLASS'] },
  { date: '2026-11-12', types: ['BIO_KITCHEN_GARDEN'] },
  { date: '2026-11-23', types: ['MIXED_PAPER', 'TEXTILES'] },
  { date: '2026-11-26', types: ['BIO_KITCHEN_GARDEN'] },

  { date: '2026-12-07', types: ['MIXED_PAPER', 'TEXTILES'] },
  { date: '2026-12-10', types: ['BIO_KITCHEN'] },
  { date: '2026-12-19', types: ['MIXED_PAPER'] },
  { date: '2026-12-24', types: ['BIO_KITCHEN_GARDEN'] },
];

export function nextPickup(now: Date = new Date()): PickupDay | null {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  for (const p of SCHEDULE) {
    if (parseDate(p.date).getTime() >= today) return p;
  }
  return null;
}

export function upcomingPickups(now: Date = new Date(), limit = 6): PickupDay[] {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return SCHEDULE.filter(p => parseDate(p.date).getTime() >= today).slice(0, limit);
}

export function parseDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

