export const site = {
  name: "The Styloria",
  tagline: "Hair & Beauty Studio",
  url: "https://thestyloria.ca",
  phone: "+1 (905) 497-2489",
  phoneHref: "tel:+19054972489",
  whatsapp: "https://wa.me/19054972489",
  rating: "4.5",
  reviewCount: 731,
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/thestyloria/" },
    { label: "Facebook", href: "https://www.facebook.com/thestyloria/" },
    { label: "TikTok", href: "https://www.tiktok.com/@thestyloria" },
    { label: "YouTube", href: "https://www.youtube.com/@thestyloria" },
  ],
};

export const hours = [
  { days: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
  { days: "Saturday", time: "10:00 AM – 6:00 PM" },
  { days: "Sunday", time: "11:00 AM – 5:00 PM" },
];

export type Location = {
  slug: string;
  city: string;
  street: string;
  region: string;
  postal: string;
  phone: string;
  phoneHref: string;
  parking: string;
  mapQuery: string;
};

export const locations: Location[] = [
  {
    slug: "brampton",
    city: "Brampton",
    street: "83 Clarence St",
    region: "ON",
    postal: "L6W 1S5",
    phone: "+1 (905) 497-2489",
    phoneHref: "tel:+19054972489",
    parking:
      "Street parking is available along Clarence St, with additional public parking nearby in central Brampton. Please confirm current signage, as availability can vary.",
    mapQuery: "83 Clarence St, Brampton, ON L6W 1S5, Canada",
  },
  {
    slug: "oakville",
    city: "Oakville",
    street: "328 Kerr St",
    region: "ON",
    postal: "L6K 3B5",
    phone: "+1 (905) 497-2489",
    phoneHref: "tel:+19054972489",
    parking:
      "Street parking is available along Kerr St, with additional public parking nearby in central Oakville. Please confirm current signage, as availability can vary.",
    mapQuery: "328 Kerr St, Oakville, ON L6K 3B5, Canada",
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export type Service = {
  slug: string;
  name: string;
  short: string;
  tag: string;
  audience: string;
  image: string;
  imageAlt: string;
  intro: string;
  menu: string[];
};

// Slugs match the original WordPress URLs so old links redirect cleanly.
export const services: Service[] = [
  {
    slug: "haircut",
    name: "Haircut",
    short: "Precision cuts shaped around your hair, your routine and the look you want. Every cut finishes with a full style.",
    tag: "Cuts",
    audience: "WOMEN · GIRLS · RESTYLES",
    image: "/images/services/1.webp",
    imageAlt: "Stylist trimming long glossy brunette hair",
    intro:
      "Every haircut starts with a conversation about your hair type, your routine, and the look you want, so the cut is shaped around you rather than copied from a template. Your stylist finishes every appointment with a full style, so you can see the result and learn how to recreate it at home.",
    menu: ["Women's Trim & Shape", "Layered Haircut", "Bob & Short Cuts", "Fringe & Face-Framing Cuts", "Girls' Haircut", "Restyle"],
  },
  {
    slug: "hair-colour",
    name: "Hair Colour",
    short: "From a root touch-up to full grey coverage or a bold fashion shade, built around your undertone.",
    tag: "Colour",
    audience: "WELLA COLOUR SYSTEMS",
    image: "/images/services/2.webp",
    imageAlt: "Rich, freshly coloured hair after a colour service",
    intro:
      "From a simple root touch-up to full grey coverage or a bold fashion colour, every service is built around your hair's condition, natural undertone, and how much upkeep you're realistically willing to commit to. Colourists work with professional Wella colour systems and begin every appointment with a proper consultation.",
    menu: ["Global / All-Over Colour", "Root Touch-Up", "Grey Coverage", "Fashion & Vivid Colour"],
  },
  {
    slug: "hair-highlighting-balayage",
    name: "Highlights & Balayage",
    short: "Soft, hand-painted dimension that grows out gracefully. Foils, balayage, ombré and face-framing.",
    tag: "Balayage",
    audience: "HAND-PAINTED · DIMENSIONAL",
    image: "/images/services/3.webp",
    imageAlt: "Sun-kissed balayage on long wavy hair",
    intro:
      "Whether you want precise foil highlights, soft hand-painted balayage, or a full ombré transition, every service is built around your base colour, hair density, and skin tone rather than a fixed formula. Colourists use professional Wella lightening and toning systems.",
    menu: ["Full Head Highlights", "Classic Balayage", "Ombré", "Face-Framing Highlights"],
  },
  {
    slug: "hair-treatments",
    name: "Hair Treatments",
    short: "Keratin, deep conditioning, scalp and protein treatments, matched to what your hair actually needs.",
    tag: "Repair",
    audience: "KERATIN · SCALP · REPAIR",
    image: "/images/services/5.webp",
    imageAlt: "Smooth, healthy hair after a restorative treatment",
    intro:
      "Whether your hair needs deep repair after colour or heat damage, a scalp reset, or a smoothing service for frizz-free styling, every treatment is matched to your hair's actual condition, not a generic add-on menu. Stylists assess your hair and scalp before recommending a formula.",
    menu: ["Keratin Treatment", "Deep Conditioning Treatment", "Scalp Treatment", "Protein Treatment", "Botoplexx", "Nanoplastia", "K18 / Olaplex"],
  },
  {
    slug: "hair-extensions",
    name: "Hair Extensions",
    short: "Length, volume or a full transformation, blended so it moves like your own hair.",
    tag: "Extensions",
    audience: "LENGTH · VOLUME",
    image: "/images/services/5.webp",
    imageAlt: "Long, voluminous hair with seamless extensions",
    intro:
      "Whether you want added length, extra volume, or a full transformation, every service is matched to your hair's density, condition, and growth pattern rather than a single default method. Stylists select the application technique and blend colour carefully so extensions integrate seamlessly.",
    menu: ["Tape-In Extensions", "Micro Ring Extensions", "Fusion (Keratin Bond) Extensions", "Weft / Sew-In Extensions", "Clip-In Extensions"],
  },
  {
    slug: "hair-perm",
    name: "Hair Perm",
    short: "Soft waves, bouncy curls or a sleek straight finish that looks intentional, never overprocessed.",
    tag: "Texture",
    audience: "WAVES · CURLS · REBONDING",
    image: "/images/services/6-1.webp",
    imageAlt: "Defined, bouncy curls after a perm",
    intro:
      "Whether you want soft, natural waves, bouncy defined curls, or a smoother, straighter finish, every perm is built around your hair's texture and current condition rather than a fixed processing time. Stylists check your hair's history and, where needed, run a strand test first.",
    menu: ["Digital Perm", "Spiral Perm", "Body Wave Perm", "Straight Perm (Rebonding)"],
  },
  {
    slug: "makeup",
    name: "Makeup",
    short: "Bridal, party, photoshoot and everyday looks built around your features, skin and outfit.",
    tag: "Glam",
    audience: "BRIDAL · PARTY · EVERYDAY",
    image: "/images/services/7.webp",
    imageAlt: "Soft glam makeup look",
    intro:
      "Whether you are getting ready for a wedding, a special night out, a photoshoot, or simply want a polished everyday look, your makeup artist starts with a conversation about the look you want and builds it around your features, your skin, and your outfit. Every look is finished to last.",
    menu: ["Bridal Makeup", "Bridal Party Makeup", "Party & Event Makeup", "Natural & Everyday Makeup", "Photoshoot Makeup", "Makeup Trial", "Airbrush"],
  },
  {
    slug: "barber",
    name: "Barber",
    short: "Classic cuts, fades, tapers, beard trims and shaves for men and kids, sharp every time.",
    tag: "Barber",
    audience: "MEN · KIDS · BEARDS",
    image: "/images/services/8.webp",
    imageAlt: "Clean fade haircut at the barber",
    intro:
      "From classic haircuts, fades, and tapers to beard trims and shaves, every appointment starts with a short conversation about the look you want. Your barber finishes with a clean, sharp style and shows you how to keep it looking good at home.",
    menu: ["Men's Haircut", "Kids' Haircut", "Fades & Tapers", "Beard Trim", "Shave", "Haircut & Beard Combo"],
  },
  {
    slug: "skin-care-and-rejuvenation",
    name: "Skin Care & Rejuvenation",
    short: "Facials and clean-ups for a fresh, bright, rested glow, from basic to anti-ageing.",
    tag: "Skin",
    audience: "FACIALS · GLOW",
    image: "/images/services/9.webp",
    imageAlt: "Relaxing facial treatment",
    intro:
      "Facials at The Styloria are chosen for your skin on the day: a quick clean-up to reset, a hydrating facial for dull or tired skin, or an anti-ageing and brightening treatment when you want a visible glow. Your esthetician checks your skin first and talks you through the best option.",
    menu: ["Basic Facial", "Anti-Ageing Facial", "Hydro Facial", "O3+ Facial", "Brightening Facial", "Clean-Up"],
  },
  {
    slug: "nail-extensions",
    name: "Nail Extensions",
    short: "Acrylic, gel and polygel sets shaped to your nails, your length and how you use your hands.",
    tag: "Nails",
    audience: "ACRYLIC · GEL · POLYGEL",
    image: "/images/services/10.webp",
    imageAlt: "Glossy nail extensions",
    intro:
      "Whether you want a strong, long-wearing set with acrylic, a lightweight and natural-looking finish with gel, or a balance of both with polygel, every set is shaped to your nails, your preferred length, and the way you actually use your hands.",
    menu: ["Acrylic Nail Extensions", "Gel Nail Extensions", "Polygel Nail Extensions"],
  },
  {
    slug: "threading-waxing",
    name: "Threading & Waxing",
    short: "Clean, defined brows and smooth skin with precise shaping and a gentle technique.",
    tag: "Brows",
    audience: "BROWS · FACE · BODY",
    image: "/images/services/11-1.webp",
    imageAlt: "Defined, freshly threaded eyebrows",
    intro:
      "Whether you need eyebrows threaded into a clean, defined shape or full-body waxing for smooth, longer-lasting results, every service is matched to the area and your skin's sensitivity. Estheticians assess your skin and hair growth before starting, and take extra care around sensitive areas.",
    menu: ["Eyebrow Threading", "Face Threading", "Upper Lip & Forehead", "Body Waxing", "Bikini & Brazilian Waxing", "Full / Half Arms & Legs"],
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    short: "Long-term hair reduction with a plan built around your skin tone, hair colour and area.",
    tag: "Laser",
    audience: "BRAMPTON STUDIO",
    image: "/images/services/12.webp",
    imageAlt: "Smooth skin after laser hair removal",
    intro:
      "Whether you're treating a small area like the upper lip or committing to full-body sessions, every treatment plan is built around your skin tone, hair colour, and the treatment area rather than a fixed number of sessions. Technicians assess your skin and hair type before selecting laser settings. Available at our Brampton studio.",
    menu: ["Face & Upper Lip", "Underarms", "Legs & Arms", "Full Body & Bikini Line"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const reviews = [
  {
    name: "Ramanpreet Kaur",
    text: "After seeing them on TikTok, I made the decision to go have balayage and hair colour. I got wonderful service from Anita and Raman. My hair looks just the way I want it to. My hair colour makes me very joyful.",
  },
  {
    name: "Paras",
    text: "Anita gave me a haircut and styled my hair today and I couldn't be happier, not only with her advanced skills but also with her lovely personality. For over 15 years I drove to Richmond Hill for haircuts. I'm so thrilled to find a stylist in Brampton who does such an outstanding job.",
  },
  {
    name: "rami kaur",
    text: "Anita did a consultation with me first and a patch test, which gave me great confidence. The result was awesome. They gave the same look I asked for. So professional and friendly, and I enjoyed the snacks and coffee they served. Definitely my go-to salon.",
  },
  {
    name: "J P",
    text: "Wow, I had the best haircut ever. I was so impressed with their service. Saw real talent here. They know what they are doing. Aneetha and Suman were excellent. Definitely coming back!",
  },
  {
    name: "Ricky Madaan",
    text: "Excellent service by Upninder. I went for hair colour only. Due to the excellent service I took a facial too. Overall a wonderful experience.",
  },
  {
    name: "Daman Kaur",
    text: "I came here for a haircut and got a really nice cut as I wanted, with lots of volume and layers. Highly recommended!",
  },
];

export const brands = [
  { name: "Wella Professionals", src: "/images/brands/wella_img.webp" },
  { name: "Dyson", src: "/images/brands/dyson_img.webp" },
  { name: "Mon Platin", src: "/images/brands/mon_platin_img.webp" },
  { name: "Beauty Garage", src: "/images/brands/beauty_garage_img.webp" },
  { name: "Diana", src: "/images/brands/dianalogox2.png" },
];
