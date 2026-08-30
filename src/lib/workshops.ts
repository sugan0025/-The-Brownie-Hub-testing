// ============================================
// THE BROWNIE HUB — Offline Workshop Program Catalog
// Hands-On Baking Masterclasses in Chennai
// ============================================

export interface Workshop {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'All Ages';
  tagline: string;
  description: string;
  duration: string;
  frequency: string;
  price: number;
  maxSeats: number;
  badge?: string;
  syllabus: string[];
  inclusions: string[];
  upcomingDates: {
    date: string;
    day: string;
    time: string;
    seatsLeft: number;
  }[];
}

export const WORKSHOPS: Workshop[] = [
  {
    id: 'brownie-basics',
    name: 'Brownie Basics',
    level: 'Beginner',
    tagline: 'The foundational masterclass for guaranteed fudgy perfection.',
    description:
      'Master the science of one-pan chocolate fudge brownies, crinkle-top emulsion, dry-to-wet ratios, and oven calibration. You take home the master recipe and a fresh 4-pack you baked yourself.',
    duration: '2 Hours',
    frequency: 'Every Weekend (Sat & Sun)',
    price: 1499,
    maxSeats: 8,
    badge: 'Most Popular',
    syllabus: [
      'Cocoa vs. Couverture fat crystallization physics',
      'The secret to the coveted crackly, tissue-thin crinkle crust',
      'Batter folding technique to avoid cakey texture',
      'Baking temperature zones & exact toothpick timing',
    ],
    inclusions: [
      'All premium baking ingredients & equipment',
      'The Brownie Hub Recipe Binder & troubleshooting guide',
      'Artisanal apron for use during session',
      'Box of 4 brownies baked by you to take home',
      'Certificate of Completion',
    ],
    upcomingDates: [
      { date: '2026-09-05', day: 'Saturday', time: '10:30 AM – 12:30 PM', seatsLeft: 3 },
      { date: '2026-09-06', day: 'Sunday', time: '03:30 PM – 05:30 PM', seatsLeft: 5 },
      { date: '2026-09-12', day: 'Saturday', time: '10:30 AM – 12:30 PM', seatsLeft: 6 },
    ],
  },
  {
    id: 'flavour-lab',
    name: 'Flavour Lab',
    level: 'Intermediate',
    tagline: 'Gourmet fillings, molten centers, and artisanal swirls.',
    description:
      'Push past the basics into advanced brownie artistry. Learn house-made salted caramel reductions, molten cream cheese spirals, stuffed cores, and how to engineer your own signature brownie flavor.',
    duration: '3 Hours',
    frequency: 'Bi-Weekly (Sundays)',
    price: 2299,
    maxSeats: 6,
    badge: 'Artisanal Lab',
    syllabus: [
      'Crafting amber salted caramel that won’t harden during bake',
      'Suspended molten centers (Nutella, peanut butter, ganache)',
      'Cream cheese marbling & cheesecake brownie stabilization',
      'Developing your custom signature crunch and fruit infusions',
    ],
    inclusions: [
      'Master pastry chef 1-on-1 feedback in small group',
      'All gourmet ingredients (Belgian couverture, French butter, Maldon sea salt)',
      'Box of 6 assorted gourmet creations',
      'Advanced Recipe Booklet + WhatsApp Chef Q&A Access for 30 days',
    ],
    upcomingDates: [
      { date: '2026-09-06', day: 'Sunday', time: '11:00 AM – 02:00 PM', seatsLeft: 2 },
      { date: '2026-09-20', day: 'Sunday', time: '11:00 AM – 02:00 PM', seatsLeft: 4 },
    ],
  },
  {
    id: 'kids-family-baking',
    name: 'Kids & Family Baking',
    level: 'All Ages',
    tagline: 'Mess-friendly, joyful, 100% eggless baking adventure.',
    description:
      'A delightful, hands-on session designed for parents and kids (ages 5+) to bake together. Pure fun, safe equipment, cookie crumbles, fun sprinkles, and warm family bonding in our kitchen.',
    duration: '1.5 Hours',
    frequency: 'Monthly (Special Batches)',
    price: 1799,
    maxSeats: 6,
    badge: '100% Eggless & Fun',
    syllabus: [
      'Whisking, scooping, and measuring basics for young chefs',
      'Fun topping decoration: Marshmallows, gems, choco-chips, & swirls',
      'Kitchen safety and joyful baking teamwork',
      'Tasting and custom box packing ceremony',
    ],
    inclusions: [
      '1 Parent + 1 Kid admission (pair ticket)',
      'Mini Junior Chef Hat & souvenir wooden spoon',
      'Decorated assorted brownie gift box to take home',
      'Polaroid photo souvenir in The Brownie Hub kitchen',
    ],
    upcomingDates: [
      { date: '2026-09-13', day: 'Sunday', time: '10:00 AM – 11:30 AM', seatsLeft: 3 },
      { date: '2026-09-27', day: 'Sunday', time: '10:00 AM – 11:30 AM', seatsLeft: 5 },
    ],
  },
];

export function getWorkshopById(id: string): Workshop | undefined {
  return WORKSHOPS.find((w) => w.id === id);
}
