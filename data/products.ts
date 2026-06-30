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
    price: 800,
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
    price: 500,
    artisanId: "naserian-enkai",
    image: "/images/products/naserian-earrings.jpg",
  },

  {
    id: "engotoo-fullset",
    name: "Engotoo fullset Necklace",
    category: "Necklaces",
    meaning: "Spiritual connection",
    story:
      "Symbolizes connection to Enkai (God) by the singing of praises.",
    price: 4500,
    artisanId: "engotoo-set",
    image: "/images/products/engotoo-fullset.png",
  },

  {
    id: "zigzag-bracelet",
    name: "Zigzag Beaded Bracelet",
    category: "Bracelets",
    meaning: "Movement and energy",
    story:
      "Worn during dances, symbolizing rhythm, life, and vitality.",
    price: 30,
    artisanId: "olpiron-lengai",
    image: "/images/products/zigzag-bracelet.png",
  },

  {
    id: "maasai-royal-collar-necklace",
    name: "Maasai Royal Collar Necklace",
    category: "Necklaces",
    meaning: "Symbol of unity and pride",
    story: "A ceremonial piece worn during important Maasai celebrations.",
    price: 3500,
    artisanId: "olpiron-lengai",
    image: "/images/products/maasai-royal-collar-necklace.jpg",
  },

  {
    id: "warrior-pattern-bracelet",
    name: "Warrior Pattern Bracelet",
    category: "Bracelets",
    meaning: "Courage and strength",
    story: "Inspired by Maasai warrior symbolism and tradition.",
    price: 2400,
    artisanId: "olpiron-lengai",
    image: "/images/products/warrior-pattern-bracelet.jpg",
  },

  {
    //Edit here for anotha 
    id: "sidan-classic-earrings",
    name: "Sidan Classic Earrings",
    category: "Earrings",
    meaning: "Peace and elegance",
    story: "Lightweight beadwork representing beauty and calmness.",
    price: 500,
    artisanId: "naserian-enkai",
    image: "/images/products/sidan-classic-earrings.png",
  },

  {
    id: "kenyan-bracelet",
    name: "Kenyan Design Bracelet",
    category: "Bracelets",
    meaning: "Representing our Country",
    story:
      "Worn by citizens, representing unity and and love in Maa-culture and as a Country.",
    price: 400,
    artisanId: "olpiron-lengai",
    image: "/images/products/kenyan-bracelet.jpg",
  },

  {
    id: "emoji-bracelet",
    name: "Modern Emoji Bracelet",
    category: "Bracelets",
    meaning: "Aesthetic mode of communication",
    story:
      "Unique art, representing Emotions in our human nature",
    price: 400,
    artisanId: "olpiron-lengai",
    image: "/images/products/emoji-bracelet.jpg",
  },

  {
    id: "male-flowery-belt",
    name: "Male Flowery Belt",
    category: "Belts",
    meaning: "--------",
    story:
      "Beautiful art, representing the love of nature in flowers",
    price: 3000,
    artisanId: "olpiron-lengai",
    image: "/images/products/male-flowery-belt.jpg",
  },

  {
    id: "maa-traditional-wear",
    name: "Maa Traditional Wear Fullset",
    category: "Attire",
    meaning: "Symbol of a unique and very important occassion for the women in Maa-culture",
    story:
      "An attire worn by maa women on special occasions such as weddings or graduation ceremonies",
    price: 9500,
    artisanId: "olpiron-lengai",
    image: "/images/products/maa-traditional-wear.jpg",
  },

  {
    id: "enkoipilai-watch",
    name: "Enkoipilai Watch",
    category: "Bracelets",
    meaning: "Beautifully Integrted watch into a bracelet",
    story:
      "Unique art, representing time & timelessness",
    price: 750,
    artisanId: "olpiron-lengai",
    image: "/images/products/enkoipilai-watch.png",
  },

  {
    id: "ras-hairbead",
    name: "Ras Hairbead",
    category: "Bracelets",
    meaning: "Beautifully Integrted watch into a bracelet",
    story:
      "For beautiful and shiny hair",
    price: 70,
    artisanId: "olpiron-lengai",
    image: "/images/products/ras-hairbead.png",
  },

  {
    id: "imborro-dressing",
    name: "Imborro Dressing",
    category: "Attire",
    meaning: "A champion's been identified",
    story:
      "It is put on a person being celebrated on that particular occasion, like a graduation ceremony or a wedding, or even a leadership position acquired.",
    price: 5000,
    artisanId: "olpiron-lengai",
    image: "/images/products/imborro-dressing.jpg",
  },

  {
    id: "zigzag-pattern-belt",
    name: "Zigzag Pattern Belt",
    category: "Belts",
    meaning: "Transition and graduation",
    story:
      "Worn by young men transitioning into worriors and morans",
    price: 3000,
    artisanId: "olpiron-lengai",
    image: "/images/products/zigzag-pattern-belt.jpg",
  },
  
  {
    id: "leather-coster",
    name: "Leather Coster",
    category: "Specials",
    meaning: "Beautiful home decore and aesthetic choice of great beverage enjoyment",
    story:
      "Was used by elders and leaders during a feast ceremony",
    price: 1000,
    artisanId: "olpiron-lengai",
    image: "/images/products/leather-coster.jpg",
  },
  
  {
    id: "addidas-bracelet",
    name: "Addidas Bracelet",
    category: "Bracelets",
    meaning: "Unique design of a great brand in history",
    story:
      "It is a modern and trending brand recognized in the market.",
    price: 300,
    artisanId: "olpiron-lengai",
    image: "/images/products/addidas-bracelet.jpg",
  },

{
    id: "aesthetic-bracelets",
    name: "Aesthetic Bracelets",
    category: "Bracelets",
    meaning: "Simple designs highlighting a mood, or name initials.",
    story:
      "It is a sentimental kind of bracelet given to represent a mood or a name initial. Mostly presented as gifts to loved ones",
    price: 300,
    artisanId: "olpiron-lengai",
    image: "/images/products/aesthetic-bracelets.jpg",
  },

  {
    id: "shami-choker-necklace",
    name: "Shami Choker Necklace",
    category: "Necklaces",
    meaning: "Symbol of beauty and elegance",
    story: "A ceremonial piece worn during important Maasai celebrations.",
    price: 2000,
    artisanId: "olpiron-lengai",
    image: "/images/products/shami-choker-necklace.jpg",
  },

  {
    id: "elegant-materpiece",
    name: "Elegant Materpiece",
    category: "Specials",
    meaning: "Classic Set Wear",
    story: "A combination of a necklace, both hands bracelets and arms as well. Worn by women during ceremonies to match their aesthetic",
    price: 4500,
    artisanId: "olpiron-lengai",
    image: "/images/products/elegant-materpiece.jpg",
  },

  {
    id: "olmelepishoi-necklace",
    name: "Olmelepishoi Necklace",
    category: "Necklaces",
    meaning: "Symbol of victory and success",
    story: "A ceremonial piece worn by candidates during important Maasai celebrations.",
    price: 4000,
    artisanId: "olpiron-lengai",
    image: "/images/products/olmelepishoi-necklace.jpg",
  },
];
