const makeThumb = ({ title, label, bg, accent, dark = "#170f0d" }) => {
  const svg = `
    <svg width="1200" height="850" viewBox="0 0 1200 850" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="850" rx="56" fill="${bg}"/>
      <circle cx="980" cy="120" r="220" fill="${accent}" opacity="0.32"/>
      <circle cx="130" cy="720" r="260" fill="#fff5ed" opacity="0.34"/>
      <rect x="92" y="88" width="1016" height="610" rx="38" fill="${dark}" opacity="0.94"/>
      <rect x="128" y="130" width="944" height="58" rx="24" fill="#fff5ed" opacity="0.08"/>
      <circle cx="166" cy="159" r="10" fill="${accent}"/>
      <circle cx="198" cy="159" r="10" fill="#f7a693"/>
      <circle cx="230" cy="159" r="10" fill="#ad6f7a"/>
      <rect x="128" y="228" width="420" height="330" rx="30" fill="#fff5ed" opacity="0.12"/>
      <rect x="592" y="228" width="356" height="44" rx="22" fill="#fff5ed" opacity="0.75"/>
      <rect x="592" y="304" width="470" height="26" rx="13" fill="#fff5ed" opacity="0.34"/>
      <rect x="592" y="350" width="390" height="26" rx="13" fill="#fff5ed" opacity="0.24"/>
      <rect x="592" y="430" width="142" height="54" rx="27" fill="${accent}"/>
      <rect x="754" y="430" width="142" height="54" rx="27" fill="#fff5ed" opacity="0.14"/>
      <rect x="128" y="600" width="944" height="58" rx="24" fill="#fff5ed" opacity="0.08"/>
      <text x="128" y="768" fill="${dark}" font-family="Georgia, serif" font-size="66" font-weight="500">${title}</text>
      <text x="132" y="806" fill="${dark}" font-family="Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="5">${label}</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const projects = [
  {
    slug: "css-frameworks-social",
    title: "CSS Frameworks Social",
    number: "01",
    category: "CSS Frameworks",
    shortDescription:
      "A responsive social platform concept with cleaner hierarchy, sharper UI rhythm and stronger mobile flow.",
    image: makeThumb({
      title: "CSS Frameworks Social",
      label: "RESPONSIVE SOCIAL UI",
      bg: "#f7a693",
      accent: "#e86f6f",
    }),
    theme: "peach",
    live: "https://helena-crusepor1.netlify.app",
    github:
      "https://github.com/helena-cruse/css-frameworks-social/blob/main/README.md",
    caption:
      "Custom lightweight SVG thumbnail for the portfolio. Replace with a final optimized screenshot before delivery.",
    stack: ["HTML", "CSS", "Bootstrap", "Responsive UI"],
    role: "UI structure, responsive layout, visual refinement and portfolio preparation.",
    intro:
      "This project started as a social platform, but the portfolio version is about showing the decisions behind the interface: structure, spacing, visual rhythm and responsive behaviour.",
    details:
      "I refined the way the project is presented so it feels more like a designed product and less like a school hand-in. The main focus is hierarchy, mobile stability and clearer communication of what the interface is trying to do.",
    focus: [
      "Responsive layout",
      "UI hierarchy",
      "Component consistency",
      "Visual rhythm",
    ],
    improvements: [
      "Refined spacing and hierarchy so the interface feels less crowded.",
      "Improved responsive behaviour across smaller screens.",
      "Prepared README structure, screenshots and project description for portfolio presentation.",
    ],
  },
  {
    slug: "little-shop",
    title: "Little Shop",
    number: "02",
    category: "JavaScript Frameworks",
    shortDescription:
      "An e-commerce experience focused on product clarity, cart logic, API data and trustworthy interaction.",
    image: makeThumb({
      title: "Little Shop",
      label: "ECOMMERCE FLOW",
      bg: "#df9aa1",
      accent: "#ad6f7a",
    }),
    theme: "rose",
    live: "#",
    github:
      "https://github.com/NoroffFEU/jsfw-2025-v1-helena-m-c/blob/main/README.md",
    caption:
      "Custom lightweight SVG thumbnail for the portfolio. Replace with a final optimized screenshot before delivery.",
    stack: ["React", "Next.js", "TypeScript", "API"],
    role: "Frontend architecture, product UI, cart behaviour and API-driven pages.",
    intro:
      "Little Shop is where product data, state and shopping flow meet. The project pushed me to think about clarity, trust and small interaction details.",
    details:
      "I want this case to show that frontend is not only about placing elements on a page. It is about guiding decisions: where users look first, what feedback they receive and how the interface behaves when data changes.",
    focus: ["Product cards", "Cart logic", "API data", "Trust signals"],
    improvements: [
      "Improved product card hierarchy and product detail presentation.",
      "Refined cart interactions for clearer feedback.",
      "Updated documentation so setup, features and decisions are easier to review.",
    ],
  },
  {
    slug: "evergreen-auction-house",
    title: "Evergreen Auction House",
    number: "03",
    category: "Semester Project 2",
    shortDescription:
      "An auction platform with bidding logic, authentication and a calmer interface for high-value listings.",
    image: makeThumb({
      title: "Evergreen Auction House",
      label: "AUCTION PRODUCT SYSTEM",
      bg: "#df7655",
      accent: "#c95f45",
    }),
    theme: "terracotta",
    live: "https://evergreen-auction.netlify.app",
    github:
      "https://github.com/helena-cruse/Evergreen-Auction-House/blob/main/README.md",
    caption:
      "Custom lightweight SVG thumbnail for the portfolio. Replace with a final optimized screenshot before delivery.",
    stack: ["HTML", "Tailwind", "JavaScript", "Noroff API"],
    role: "Auction flow, API communication, listing UI and responsive product experience.",
    intro:
      "Evergreen Auction House is a product-focused auction platform where user confidence matters. The interface needs to make listings, bidding and ownership feel clear.",
    details:
      "This project combines authentication, API communication, listing creation and bidding logic. In the portfolio, I present it as a user flow problem, not only a technical delivery.",
    focus: [
      "Bidding flow",
      "Authentication",
      "Listing creation",
      "Responsive UX",
    ],
    improvements: [
      "Refined bid feedback and action clarity.",
      "Improved mobile layout for listing and profile sections.",
      "Polished visual presentation so the project feels more complete and portfolio-ready.",
    ],
  },
];
