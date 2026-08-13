import concept001Cover from "../assets/images/concepts/concept-001-cover.jpg";
import concept001Hero from "../assets/images/concepts/concept-001-hero.jpg";
import concept001Logo from "../assets/images/concepts/concept-001-logo.jpg";
import concept001Branding from "../assets/images/concepts/concept-001-branding-01.jpg";
import concept001Packaging from "../assets/images/concepts/concept-001-packaging-01.jpg";
import concept001Product from "../assets/images/concepts/concept-001-product-01.jpg";
import concept001Photography from "../assets/images/concepts/concept-001-photography-01.jpg";
import concept001Digital from "../assets/images/concepts/concept-001-digital-01.jpg";
import concept001Film from "../assets/videos/concepts/concept-001-film.mp4";

const conceptsData = [
  {
    id: 1,
    slug: "concept-001",
    number: "ND / 001",
    title: "Concept 001",
    category: "Business Concept",
    status: "Available",

    image: concept001Cover,
    heroImage: concept001Hero,

    featured: true,

    shortDescription:
      "A complete ready-made business concept imagined and developed by NDOSSEEYY.",

    conceptIdea:
      "This concept has been developed as a complete business world — considering not only how the brand looks, but how the idea could be positioned, presented, experienced and eventually brought to life.",

    previewHighlights: [
      "Business direction",
      "Brand identity",
      "Target customer",
      "Product direction",
      "Visual world",
      "Launch possibilities",
    ],

    startingPrice: "R15,000+",

    media: {
      logo: concept001Logo,
      branding: concept001Branding,
      packaging: concept001Packaging,
      product: concept001Product,
      photography: concept001Photography,
      digital: concept001Digital,
      film: concept001Film,
    },
  },

  {
    id: 2,
    slug: "concept-002",
    number: "ND / 002",
    title: "Concept 002",
    category: "Brand Concept",
    status: "Available",
    image: null,
    heroImage: null,
    featured: false,

    shortDescription:
      "An original NDOSSEEYY concept built around a distinctive brand opportunity.",

    conceptIdea:
      "Selected information about this concept will eventually appear here alongside imagery, mockups and creative direction.",

    previewHighlights: [
      "Concept positioning",
      "Identity direction",
      "Customer profile",
      "Packaging direction",
      "Content direction",
      "Brand experience",
    ],

    startingPrice: "R15,000+",
    media: null,
  },

  {
    id: 3,
    slug: "concept-003",
    number: "ND / 003",
    title: "Concept 003",
    category: "Creative Concept",
    status: "Acquired",
    image: null,
    heroImage: null,
    featured: false,

    shortDescription:
      "An NDOSSEEYY concept that has already been acquired and now remains inside the archive.",

    conceptIdea:
      "Acquired concepts remain visible as part of the NDOSSEEYY creative history while protected strategic information remains private.",

    previewHighlights: [
      "Creative direction",
      "Brand world",
      "Business idea",
      "Visual identity",
    ],

    startingPrice: null,
    media: null,
  },
];

export default conceptsData;