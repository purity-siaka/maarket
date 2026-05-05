export type Product = {
  id: string;
  name: string;
  category: string;
  meaning: string;
  story: string;
  price: number;
  artisanId: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "enkarewa-necklace",
    name: "Enkarewa Beaded Necklace",
    category: "Necklaces",
    meaning: "Unity and strength",
    story:
      "Traditionally worn during ceremonies, symbolizing unity within the community.",
    price: 120,
    artisanId: "olpiron-lengai",
    image: "/images/products/enkarewa-necklace.jpg",
  },

  {
    id: "olpiron-bracelet",
    name: "Olpiron Warrior Bracelet",
    category: "Bracelets",
    meaning: "Courage and bravery",
    story:
      "Worn by warriors, representing strength and protection in Maasai culture.",
    price: 45,
    artisanId: "olpiron-lengai",
    image: "/images/products/olpiron-bracelet.jpg",
  },

  {
    id: "naserian-earrings",
    name: "Naserian Beaded Earrings",
    category: "Earrings",
    meaning: "Peace and elegance",
    story:
      "Lightweight beadwork representing beauty and calmness among Maasai women.",
    price: 35,
    artisanId: "naserian-enkai",
    image: "/images/products/naserian-earrings.jpg",
  },

  {
    id: "enkai-choker",
    name: "Enkai Choker Necklace",
    category: "Necklaces",
    meaning: "Spiritual connection",
    story:
      "Symbolizes connection to Enkai (God) and spiritual identity.",
    price: 95,
    artisanId: "naserian-enkai",
    image: "/images/products/enkai-choker.png",
  },

  {
    id: "warrior-anklet",
    name: "Warrior Beaded Anklet",
    category: "Anklets",
    meaning: "Movement and energy",
    story:
      "Worn during dances, symbolizing rhythm, life, and vitality.",
    price: 30,
    artisanId: "olpiron-lengai",
    image: "/images/products/warrior-anklet.png",
  },

  {
    id: "necklace-maasai-royal-collar",
    name: "Maasai Royal Collar Necklace",
    category: "Necklaces",
    meaning: "Symbol of unity and pride",
    story: "A ceremonial piece worn during important Maasai celebrations.",
    price: 150,
    artisanId: "olpiron-lengai",
    image: "/images/products/necklace-maasai-royal-collar.png",
  },

  {
    id: "bracelet-warrior-pattern",
    name: "Warrior Pattern Bracelet",
    category: "Bracelets",
    meaning: "Courage and strength",
    story: "Inspired by Maasai warrior symbolism and tradition.",
    price: 40,
    artisanId: "olpiron-lengai",
    image: "/images/products/bracelet-warrior-pattern.png",
  },

  {
    id: "earrings-naserian-classic",
    name: "Naserian Classic Earrings",
    category: "Earrings",
    meaning: "Peace and elegance",
    story: "Lightweight beadwork representing beauty and calmness.",
    price: 35,
    artisanId: "naserian-enkai",
    image: "/images/products/earrings-naserian-classic.png",
  },

  
];