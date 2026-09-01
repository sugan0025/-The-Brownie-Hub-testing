// ============================================
// THE BROWNIE HUB — Master Catalog & Product Data
// Single Source of Truth (SSOT) Catalog
// ============================================

export interface BrownieItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  dietary: 'veg' | 'nonveg'; // 'veg' = 100% Eggless, 'nonveg' = Contains Egg
  badge?: string;
  isPopular?: boolean;
  image: string;
  ingredients: string;
  flavorNotes: string;
}

export interface CuratedBox {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pieceCount: number;
  price: number;
  originalPrice: number;
  badge?: string;
  includes: string[];
  dietary: 'veg' | 'nonveg' | 'mixed';
  image: string;
}

export interface BoxTier {
  size: 4 | 6 | 12;
  name: string;
  price: number;
  regularValue: number;
  savings: number;
  description: string;
}

// 🍫 Active Individual Brownies
export const INDIVIDUAL_BROWNIES: BrownieItem[] = [
  {
    id: 'signature-classic-brownie',
    name: 'Signature Classic Brownie',
    tagline: 'The timeless rich dark chocolate original.',
    description: 'Dense, gooey, dark-chocolate base with a glossy crinkle surface — freshly baked, rich, and indulgent for every chocolate lover.',
    price: 69,
    dietary: 'veg',
    badge: 'Bestseller',
    isPopular: true,
    image: '/images/brownies/classic-fudge.jpg',
    ingredients: '70% Belgian Couverture, French Butter, Pure Dutch Cocoa, Cultured Curd',
    flavorNotes: 'Intense Dark Cocoa · Paper-Thin Crinkle Top · Melt-in-Mouth Fudge',
  },
  {
    id: 'double-chocolate-brownie',
    name: 'Double Chocolate Brownie',
    tagline: 'Extra dark fudge loaded with hand-cut couverture chunks.',
    description: 'Extra rich and intensely fudgy, loaded with double chocolate couverture chunks for an explosion of pure chocolate in every bite.',
    price: 99,
    dietary: 'veg',
    badge: 'Chocoholic Favorite',
    isPopular: true,
    image: '/images/brownies/double-chocolate.jpg',
    ingredients: '70% Belgian Dark Chunks, Dark Cocoa Liquor, Pure Butter, Vanilla Extract',
    flavorNotes: 'Ultra Dark · Hand-Cut Chunks · Double Chocolate Core',
  },

  /* =========================================================================
   * [ARCHIVED / UPCOMING FLAVORS — KEPT SAFE FOR FUTURE EXPANSION]
   * =========================================================================
  {
    id: 'walnut-crackle-veg',
    name: 'Walnut Crackle',
    tagline: 'Toasted walnut crunch in every bite.',
    description: 'Slow-roasted premium walnuts folded through velvety classic fudge for the ultimate nutty chew.',
    price: 89,
    dietary: 'veg',
    badge: 'Nutty Indulgence',
    isPopular: true,
    image: '/images/brownies/walnut-crackle.jpg',
    ingredients: 'Roasted California Walnuts, Dark Chocolate Ganache, Pure Butter',
    flavorNotes: 'Nutty Crunch · Deep Chocolate Aroma',
  },
  {
    id: 'salted-caramel-swirl-veg',
    name: 'Salted Caramel Swirl',
    tagline: 'House amber caramel & fleur de sel.',
    description: 'Slow-simmered buttery caramel ribboned through dark cocoa batter, topped with delicate flakes of sea salt.',
    price: 109,
    dietary: 'veg',
    badge: 'Signature',
    isPopular: true,
    image: '/images/brownies/salted-caramel.jpg',
    ingredients: 'House-Cooked Amber Caramel, Maldon Sea Salt Flakes, Dark Couverture',
    flavorNotes: 'Sweet Molten Caramel · Bittersweet Cocoa · Salty Finish',
  },
  {
    id: 'choco-chip-overload-veg',
    name: 'Choco-Chip Overload',
    tagline: 'Triple milk and dark chocolate pockets.',
    description: 'Folded with a generous avalanche of milk and dark chocolate chips for gooey pockets in every single bite.',
    price: 69,
    dietary: 'veg',
    badge: 'Crowd Favorite',
    image: '/images/brownies/choco-chip.jpg',
    ingredients: 'Milk & Dark Chocolate Morsels, Cocoa Nibs, Brown Sugar',
    flavorNotes: 'Melty Chocolate Pockets · Double Texture Chew',
  },
  {
    id: 'nutella-stuffed-veg',
    name: 'Nutella Stuffed',
    tagline: 'Molten hazelnut core.',
    description: 'A decadent molten core of pure hazelnut Nutella encased in rich fudge — pure indulgence when warmed for 10 seconds.',
    price: 89,
    dietary: 'veg',
    badge: 'Molten Core',
    isPopular: true,
    image: '/images/brownies/nutella-stuffed.jpg',
    ingredients: 'Pure Roasted Hazelnut Spread, Nutella Heart, Belgian Dark Fudge',
    flavorNotes: 'Molten Lava Center · Rich Hazelnut Praline',
  },
  {
    id: 'traditional-fudge-egg',
    name: 'Traditional Fudge Brownie',
    tagline: 'Bakery-style crispy crinkle & rich fudgy core.',
    description: 'The bakery-style classic crafted with pasture-raised farm eggs, giving it a paper-thin crackly top and intensely rich center.',
    price: 79,
    dietary: 'nonveg',
    badge: 'Classic Original',
    isPopular: true,
    image: '/images/brownies/traditional-fudge.jpg',
    ingredients: 'Pasture-Raised Farm Eggs, Dutch Processed Cocoa, Creamery Butter',
    flavorNotes: 'Crispy Meringue Crust · Super Fudgy Center',
  },
  {
    id: 'red-velvet-egg',
    name: 'Red Velvet Brownie',
    tagline: 'Cocoa buttermilk with cream cheese swirl.',
    description: 'Vibrant crimson cocoa batter with tangy cultured buttermilk and hand-piped artisanal cream cheese swirls.',
    price: 99,
    dietary: 'nonveg',
    badge: 'Artisanal Swirl',
    isPopular: true,
    image: '/images/brownies/red-velvet.jpg',
    ingredients: 'Tangy Cream Cheese Marbling, Cultured Buttermilk, Crimson Cocoa',
    flavorNotes: 'Velvety Tang · Subtle Cocoa · Cheesecake Cream',
  },
  {
    id: 'coffee-mocha-egg',
    name: 'Coffee Mocha Brownie',
    tagline: 'Fresh espresso roast folded into dark cocoa.',
    description: 'Infused with freshly extracted South Indian espresso for a sophisticated, bittersweet, aromatic edge.',
    price: 79,
    dietary: 'nonveg',
    badge: 'Espresso Infused',
    image: '/images/brownies/coffee-mocha.jpg',
    ingredients: 'Fresh Arabica Espresso Extract, Dark Chocolate Ganache, Butter',
    flavorNotes: 'Rich Coffee Aroma · Bittersweet Dark Roast',
  },
  {
    id: 'biscoff-crunch-egg',
    name: 'Biscoff Crunch Brownie',
    tagline: 'Creamy speculoos & spiced cookie crumble.',
    description: 'Lotus Biscoff spread melted directly into the batter, crowned with crunchy caramelized spiced cookie crumbles.',
    price: 99,
    dietary: 'nonveg',
    badge: 'Trending',
    isPopular: true,
    image: '/images/brownies/biscoff-crunch.jpg',
    ingredients: 'Lotus Biscoff Speculoos, Crushed Belgian Spiced Cookies, Dark Cocoa',
    flavorNotes: 'Caramelized Cinnamon Cookie · Crunchy Crumble',
  },
  ========================================================================= */
];

// 🎁 Active Curated Boxes & Packs
export const CURATED_BOXES: CuratedBox[] = [
  {
    id: 'pack-4-classic-brownies',
    name: 'Pack of 4 Classic Brownies',
    tagline: '4 freshly baked Signature Classic Brownies in a gift box.',
    description: 'Our most loved Signature Classic Brownies packed in an artisanal luxury box — dense, gooey, and rich in every bite.',
    pieceCount: 4,
    price: 256,
    originalPrice: 276,
    badge: 'Value Pack',
    dietary: 'veg',
    image: '/images/brownies/luxury-box-mockup.jpg',
    includes: ['4x Signature Classic Brownie (Eggless)'],
  },
  {
    id: 'pack-4-double-chocolate-brownies',
    name: 'Pack of 4 Double Chocolate Brownies',
    tagline: '4 extra dark, chunk-loaded Double Chocolate Brownies.',
    description: 'For real chocolate lovers: 4 decadent Double Chocolate Brownies packed with molten couverture chunks.',
    pieceCount: 4,
    price: 376,
    originalPrice: 396,
    badge: 'Chocoholic Box',
    dietary: 'veg',
    image: '/images/brownies/double-chocolate.jpg',
    includes: ['4x Double Chocolate Brownie (Eggless)'],
  },

  /* =========================================================================
   * [ARCHIVED / UPCOMING BOXES — KEPT SAFE FOR FUTURE EXPANSION]
   * =========================================================================
  {
    id: 'box-signature-4',
    name: 'Signature 4-Piece Taster Box',
    tagline: 'Our 4 most celebrated flavors in a gift box.',
    description: 'The perfect introduction to The Brownie Hub: Classic Fudge, Salted Caramel Swirl, Walnut Crackle, and Nutella Stuffed.',
    pieceCount: 4,
    price: 329,
    originalPrice: 356,
    badge: 'Starter Favorite',
    dietary: 'veg',
    image: '/images/brownies/luxury-box-mockup.jpg',
    includes: ['Classic Fudge (Veg)', 'Salted Caramel (Veg)', 'Walnut Crackle (Veg)', 'Nutella Stuffed (Veg)'],
  },
  {
    id: 'box-bestsellers-6',
    name: 'Chennai Bestsellers 6-Pack',
    tagline: 'A balanced assortment of our top crowd pleasers.',
    description: 'Generous 6-piece box packed with 3 Eggless and 3 Classic Egg favorites for families and office celebrations.',
    pieceCount: 6,
    price: 489,
    originalPrice: 534,
    badge: 'Best Value',
    dietary: 'mixed',
    image: '/images/brownies/luxury-box-mockup.jpg',
    includes: [
      'Classic Fudge (Veg)',
      'Salted Caramel (Veg)',
      'Nutella Stuffed (Veg)',
      'Traditional Fudge (Egg)',
      'Red Velvet (Egg)',
      'Biscoff Crunch (Egg)'
    ],
  },
  {
    id: 'box-party-12',
    name: 'Grand Party Indulgence 12-Pack',
    tagline: '12 assorted luxury brownies in a magnetic keepsake box.',
    description: 'The ultimate dessert centerpiece. Includes every single signature flavor on our menu plus duplicate crowd favorites.',
    pieceCount: 12,
    price: 929,
    originalPrice: 1048,
    badge: 'Grand Feast',
    dietary: 'mixed',
    image: '/images/brownies/luxury-box-mockup.jpg',
    includes: [
      '2x Classic Fudge (Veg)',
      '2x Salted Caramel (Veg)',
      '2x Nutella Stuffed (Veg)',
      '2x Walnut Crackle (Veg)',
      '2x Double Chocolate (Egg)',
      '1x Red Velvet (Egg)',
      '1x Biscoff Crunch (Egg)'
    ],
  },
  ========================================================================= */
];

// 🎛️ Custom Box Builder Pricing Tiers
export const BOX_BUILDER_TIERS: BoxTier[] = [
  {
    size: 4,
    name: 'Pack of 4 Box',
    price: 256,
    regularValue: 276,
    savings: 20,
    description: 'Mix & match 4 freshly baked Signature Classic and Double Chocolate brownies.',
  },
  /* =========================================================================
  {
    size: 6,
    name: 'Box of 6',
    price: 489,
    regularValue: 534,
    savings: 45,
    description: 'Select any 6 custom brownies of your choice.',
  },
  {
    size: 12,
    name: 'Box of 12',
    price: 929,
    regularValue: 1048,
    savings: 119,
    description: 'Select any 12 custom brownies of your choice.',
  },
  ========================================================================= */
];

// Helper functions
export function getBrownieById(id: string): BrownieItem | undefined {
  return INDIVIDUAL_BROWNIES.find((b) => b.id === id);
}

export function getCuratedBoxById(id: string): CuratedBox | undefined {
  return CURATED_BOXES.find((b) => b.id === id);
}

export function getBoxTier(size: number): BoxTier | undefined {
  return BOX_BUILDER_TIERS.find((t) => t.size === size);
}

// Server-side price resolver
export function getCatalogItemPrice(name: string): number | null {
  const brownie = INDIVIDUAL_BROWNIES.find(
    (b) => b.name.toLowerCase() === name.toLowerCase()
  );
  if (brownie) return brownie.price;

  const box = CURATED_BOXES.find(
    (b) => b.name.toLowerCase() === name.toLowerCase()
  );
  if (box) return box.price;

  if (name.includes('Pack of 4 Classic') || name.includes('4 Classic')) return 256;
  if (name.includes('Pack of 4 Double Chocolate') || name.includes('4 Double')) return 376;
  if (name.includes('Pack of 4') || name.includes('Box of 4')) return 256;

  return null;
}
