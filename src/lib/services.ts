/**
 * GBP-mirrored service architecture. Category names match the Google Business
 * Profile exactly ("Website Designer", "Internet Marketing Service",
 * "Marketing Consultant") so Google crawls the same structure in both places.
 * Each service carries its GBP description verbatim as `gbp`, plus unique
 * long-form page copy. Voice rules hold: plain speech, no niches, no hype.
 */

export type ServiceCategory = {
  id: "web-design" | "internet-marketing" | "marketing-consultant";
  name: string;
  /** hub URL for the category (existing ranking page where one exists) */
  href: string;
  blurb: string;
};

export const CATEGORIES: ServiceCategory[] = [
  {
    id: "web-design",
    name: "Website Designer",
    href: "/locations/hamilton-web-design/",
    blurb:
      "Our primary craft: custom websites designed to look genuinely great, load fast, and bring in customers — never templates with a logo dropped in.",
  },
  {
    id: "internet-marketing",
    name: "Internet Marketing Service",
    href: "/services/internet-marketing/",
    blurb:
      "Everything that gets a website found and read: search rankings, AI answers, your Google listing, and the words on the page itself.",
  },
  {
    id: "marketing-consultant",
    name: "Marketing Consultant",
    href: "/services/marketing-consultant/",
    blurb:
      "Arms-length clarity before spending: audits with concrete plans, and automation scoped to your business instead of sold as a bundle.",
  },
];

export type ServiceDetail = {
  slug: string;
  /** canonical URL (existing ranking page where one exists) */
  href: string;
  /** display price, e.g. "From $2,500" */
  price: string;
  /** numeric anchor for schema Offer */
  priceAmount: string;
  /** qualifier line under the price */
  priceNote?: string;
  name: string;
  categoryId: ServiceCategory["id"];
  /** GBP description, verbatim — doubles as the page lede */
  gbp: string;
  h1: string;
  metaTitle: string;
  meta: string;
  image: string;
  imageAlt: string;
  /** what-it-is paragraphs, then how-we-do-it paragraphs */
  sections: [string[], string[]];
  bullets: string[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "custom-website-design",
    href: `/services/custom-website-design/`,
    price: "From $2,500",
    priceAmount: "2500",
    priceNote: "Final quote after one conversation.",
    name: "Custom Website Design",
    categoryId: "web-design",
    gbp: "Custom-built business websites designed to look genuinely great and load fast. Every build includes strategy, design, copywriting, and launch — not a template with your logo dropped in.",
    h1: "Custom Website Design in Hamilton, Ontario",
    metaTitle: "Custom Website Design Hamilton | Studio Nallan Web Design",
    meta: "Custom website design in Hamilton, Ontario — strategy, design, copywriting, and launch. No templates, built to rank and convert.",
    image: "/services/custom-website-design.jpg",
    imageAlt: "Custom website design showpiece",
    sections: [
      [
        "A template asks your business to fit inside someone else's boxes. A custom website starts from the opposite end: what you do, who you're trying to reach, and what should happen the moment they land. Then every part — layout, words, images, the path to contacting you — is designed around that answer.",
        "You can feel the difference in three seconds. Template sites look familiar in the worst way; visitors have seen the same layout a hundred times and their eyes glaze over. A custom site looks like nowhere else on your street, which is exactly why people stay, read, and call.",
      ],
      [
        "Every build includes the same four things: strategy first (we look at your business and your competitors and tell you plainly what we'd do), design that looks genuinely great, copywriting in plain language your customers actually use, and a careful launch where everything is checked twice.",
        "And because it's built by us from nothing, it's fast, it's set up to rank on Google, and it's set up so your business shows up when people ask ChatGPT or Google's AI for a recommendation. Weeks, not months — then it goes live and keeps working while you run your business.",
      ],
    ],
    bullets: [
      "Strategy before pixels — we study your business and competitors first.",
      "Design nobody else has — nothing off a template shelf.",
      "Copywriting included — words your customers use, written to rank.",
      "Built to be found — Google rankings and AI search from day one.",
    ],
  },
  {
    slug: "website-redesign",
    href: `/services/website-redesign/`,
    price: "From $1,000",
    priceAmount: "1000",
    priceNote: "Final quote after one conversation.",
    name: "Website Redesign",
    categoryId: "web-design",
    gbp: "A full rebuild for sites that look dated or aren't converting. We keep what works, fix what's costing you customers, and relaunch without losing your existing search rankings.",
    h1: "Website Redesign in Hamilton, Ontario",
    metaTitle: "Website Redesign Hamilton | Studio Nallan Web Design",
    meta: "Website redesign in Hamilton, Ontario — keep what works, fix what's costing customers, relaunch without losing rankings.",
    image: "/services/website-redesign.jpg",
    imageAlt: "Website redesign showpiece",
    sections: [
      [
        "Most redesigns start with embarrassment. The site was fine five years ago; now it loads slowly, looks tired on phones, and the contact form might as well be decorative. Meanwhile competitors with weaker businesses look sharper online — and take the customers who searched first.",
        "A redesign isn't a fresh coat of paint. We take the whole thing apart: what earns trust, what confuses people, where visitors give up. We keep whatever is working — your words, your reviews, your search positions — and rebuild everything that's costing you around it.",
      ],
      [
        "The part owners fear most is losing Google rankings in the move. That's handled deliberately: every old page is mapped to its replacement, addresses redirect properly, and nothing that earned you traffic disappears overnight. You relaunch without starting from zero.",
        "What comes back is the best website your business has ever had — genuinely great to look at, fast to load, set up for Google and AI search, with automation where it saves you time. Your regulars will notice. So will new customers.",
      ],
    ],
    bullets: [
      "Full audit first — what converts, what confuses, what must go.",
      "Rankings protected — every page mapped and redirected at launch.",
      "Rebuilt to today's standard — fast, mobile-first, ready to be found.",
      "Live in weeks — then kept sharp as things change.",
    ],
  },
  {
    slug: "landing-page-design",
    href: `/services/landing-page-design/`,
    price: "From $750",
    priceAmount: "750",
    priceNote: "Final quote after one conversation.",
    name: "Landing Page Design",
    categoryId: "web-design",
    gbp: "Focused, single-purpose pages built to convert — for a specific campaign, service, or offer — designed and live in days, not weeks.",
    h1: "Landing Page Design in Hamilton, Ontario",
    metaTitle: "Landing Page Design Hamilton | Studio Nallan Web Design",
    meta: "Landing page design in Hamilton, Ontario — focused pages that convert campaigns into customers. Live in days, not weeks.",
    image: "/services/landing-page-design.jpg",
    imageAlt: "Landing page design showpiece",
    sections: [
      [
        "A homepage has to welcome everyone. A landing page has exactly one job: turn the visitor who just clicked into the customer who just called. One offer, one audience, one action — everything else is removed.",
        "This is where most campaigns quietly fail. Money goes into ads or flyers, and the link lands on a generic homepage where the offer is three scrolls down and the phone number is nowhere. A dedicated page fixes the leak at the exact point it happens.",
      ],
      [
        "We build landing pages fast because focus makes them fast: one message matched to the campaign that sends the traffic, one clear next step, and nothing to distract from it. Designed and live in days, not weeks — in time for the campaign, not after it.",
        "Every page still carries our full standard underneath: genuinely great design, fast loading, set up to be found, and wired to hand you the lead the moment it arrives — booking, follow-up, or straight to your inbox.",
      ],
    ],
    bullets: [
      "One page, one offer, one action — zero distractions.",
      "Message-matched to your campaign, ad, or flyer.",
      "Designed and live in days, not weeks.",
      "Every lead routed to you instantly.",
    ],
  },
  {
    slug: "website-maintenance-hosting",
    href: `/services/website-maintenance-hosting/`,
    price: "From $175/mo",
    priceAmount: "175",
    priceNote: "Hosting-only tier: $95/mo.",
    name: "Website Maintenance & Hosting",
    categoryId: "web-design",
    gbp: "Ongoing care after launch: hosting, updates, uptime monitoring, and small content changes, so the site stays fast and current as your business grows.",
    h1: "Website Maintenance & Hosting in Hamilton, Ontario",
    metaTitle: "Website Maintenance & Hosting | Studio Nallan Web Design",
    meta: "Website maintenance and hosting in Hamilton, Ontario — updates, uptime monitoring, and small changes handled for you.",
    image: "/services/website-maintenance-hosting.jpg",
    imageAlt: "Website maintenance and hosting showpiece",
    sections: [
      [
        "Websites rot quietly. Software goes unpatched, pages slow down, opening hours go stale, and one day a customer tells you the contact form has been broken for a month. Nobody's job was watching — until now.",
        "Maintenance and hosting means the site is someone's responsibility, and that someone is us. The people who built it keep it running: hosted properly, updated regularly, watched around the clock, and adjusted in small ways as your business changes.",
      ],
      [
        "What that looks like in practice: hosting on fast, looked-after servers. Updates applied before they become emergencies. Uptime monitoring that tells us about a problem before your customers do. And small content changes — new photos, new hours, a new service line — handled without you touching a thing.",
        "No dashboards to learn, no 2am panic, no annual surprise where everything breaks at once. Just a site that stays fast, stays found, and stays current while you get on with work.",
      ],
    ],
    bullets: [
      "Proper hosting — fast servers, looked after around the clock.",
      "Updates applied before they become emergencies.",
      "Uptime monitoring — we hear about problems first.",
      "Small content changes handled for you.",
    ],
  },
  {
    slug: "ecommerce-website-design",
    href: `/services/ecommerce-website-design/`,
    price: "From $5,000",
    priceAmount: "5000",
    priceNote: "Final quote after one conversation.",
    name: "E-Commerce Website Design",
    categoryId: "web-design",
    gbp: "Online stores built to sell — clean product pages, fast checkout, and the same design and SEO standards as every site we build.",
    h1: "E-Commerce Website Design in Hamilton, Ontario",
    metaTitle: "Ecommerce Web Design Hamilton | Studio Nallan Web Design",
    meta: "Ecommerce website design in Hamilton, Ontario — clean product pages, fast checkout, built to rank and sell.",
    image: "/services/ecommerce-website-design.jpg",
    imageAlt: "Ecommerce website design showpiece",
    sections: [
      [
        "Selling online forgives nothing. A shopper who can't find the size, the price, or the buy button in seconds is gone — to a competitor whose store simply worked better. Most small online stores lose sales they never hear about, every single day.",
        "We build online stores the way we build everything else: genuinely great to look at, ruthlessly simple to use. Clean product pages where the thing you're selling is the hero. A checkout with nowhere to get lost. And the same design and SEO standards as every site we make — because a store nobody finds is a warehouse.",
      ],
      [
        "The unglamorous parts matter most here: pages that load instantly on phones, product descriptions written the way customers actually search, and a structure Google can read all the way down to the last item. Your products show up in search results looking like somewhere worth buying from.",
        "Then it keeps selling while you sleep — with automation where it helps: order confirmations, follow-ups, and the questions customers ask five times a day, answered without you lifting a finger.",
      ],
    ],
    bullets: [
      "Product pages that put what you're selling first.",
      "Fast, friction-free checkout on any device.",
      "Descriptions written the way customers search.",
      "Orders, confirmations, and follow-ups automated.",
    ],
  },
  {
    slug: "ai-search-optimization",
    href: `/services/ai-search-optimization/`,
    price: "$500 setup + $150/mo",
    priceAmount: "500",
    priceNote: "Ongoing management keeps you recommended.",
    name: "AI Search Optimization (GEO)",
    categoryId: "internet-marketing",
    gbp: "Content and site structure set up so your business shows up when people ask ChatGPT, Google AI, or other AI tools for a recommendation — the newest channel your customers are searching on.",
    h1: "AI Search Optimization (GEO) in Hamilton, Ontario",
    metaTitle: "AI Search Optimization (GEO) | Studio Nallan Web Design",
    meta: "AI search optimization in Hamilton, Ontario — get recommended by ChatGPT, Google AI, and every answer engine.",
    image: "/services/ai-search-optimization.jpg",
    imageAlt: "AI search optimization showpiece",
    sections: [
      [
        "Search changed while nobody was looking. A growing share of your customers no longer type keywords into Google — they ask ChatGPT or Google's AI a plain question and take whatever business it recommends. If your business isn't in that answer, you were never in the running.",
        "AI tools don't rank pages the way Google does. They read, summarize, and recommend — which means they favour businesses whose websites state clearly what they do, where they do it, and why they're trustworthy, in language a machine can quote without guessing.",
      ],
      [
        "That's what we set up: content written as direct answers to the questions your customers actually ask, site structure the answer engines can parse cleanly, and consistent facts everywhere — your site, your listings, your reviews all telling the same story.",
        "It's the newest channel your customers search on, and most of your competitors haven't noticed yet. The businesses that get set up now are the ones the AI names first for years.",
      ],
    ],
    bullets: [
      "Content written as answers AI tools can quote directly.",
      "Site structure the answer engines parse without guessing.",
      "Consistent facts across your site, listings, and reviews.",
      "Set up before your competitors notice the channel exists.",
    ],
  },
  {
    slug: "google-business-profile",
    href: `/services/google-business-profile/`,
    price: "$400 setup + $150/mo",
    priceAmount: "400",
    priceNote: "Management optional — your call.",
    name: "Google Business Profile Optimization",
    categoryId: "internet-marketing",
    gbp: "Full setup and ongoing management of your Google Business Profile — categories, posts, photos, and review strategy — to help you rank in the local map pack.",
    h1: "Google Business Profile Optimization in Hamilton, Ontario",
    metaTitle: "Google Business Profile SEO | Studio Nallan Web Design",
    meta: "Google Business Profile setup and management in Hamilton — rank in the local map pack with posts, photos, and reviews.",
    image: "/services/google-business-profile.jpg",
    imageAlt: "Google Business Profile optimization showpiece",
    sections: [
      [
        "When someone nearby searches for what you do, the first thing they see isn't websites — it's the map. Three businesses, star ratings, hours, photos, a call button. That little box decides where a huge share of local customers go, and most businesses set theirs up once and never touch it again.",
        "Your Google Business Profile is free real estate at the top of Google, and almost everyone underuses it. Wrong categories, three-year-old photos, unanswered reviews, silence for months — each one quietly hands the map pack to a competitor.",
      ],
      [
        "We set the whole thing up properly and then keep it alive: the right categories and services, regular posts, current photos, and a review strategy that turns happy customers into the stars that convince the next ones. Ongoing management, not a one-time setup that rots.",
        "The map pack is where nearby customers decide. We make sure your business is the obvious choice sitting in it.",
      ],
    ],
    bullets: [
      "Full setup — categories, services, hours, done right.",
      "Regular posts and current photos that keep the listing alive.",
      "Review strategy that turns customers into stars.",
      "Managed ongoing, not set up once and forgotten.",
    ],
  },
  {
    slug: "content-copywriting",
    href: `/services/content-copywriting/`,
    price: "From $200/page",
    priceAmount: "200",
    priceNote: "Final quote after one conversation.",
    name: "Content Strategy & Copywriting",
    categoryId: "internet-marketing",
    gbp: "Website and blog copy written to rank and to convert — plain language, no filler, built around what your customers actually search for.",
    h1: "Content Strategy & Copywriting in Hamilton, Ontario",
    metaTitle: "Content Strategy & Copywriting | Studio Nallan Web Design",
    meta: "Content strategy and copywriting in Hamilton, Ontario — plain-language copy that ranks on Google and converts readers.",
    image: "/services/content-copywriting.jpg",
    imageAlt: "Content strategy and copywriting showpiece",
    sections: [
      [
        "Most business websites fail at the sentence level. Jargon nobody uses, paragraphs nobody reads, and pages that say everything except the one thing the customer came to find out. Google can't rank what it can't understand — and neither can a person in a hurry.",
        "Good copy does two jobs at once: it answers the exact question the customer typed in, in words they'd actually use, and it makes the next step obvious. No filler, no corporate fog, no paragraphs that exist to fill space.",
      ],
      [
        "We build copy around what your customers really search for — the plain questions they type and ask out loud — then write pages and posts that answer them directly. That directness is what ranks on Google, what AI tools quote, and what turns a reader into a caller.",
        "Every website we build includes its copywriting for exactly this reason. But if your site's structure is fine and only the words are failing you, we'll fix the words on their own.",
      ],
    ],
    bullets: [
      "Written around real customer searches, not keyword stuffing.",
      "Plain language a tradesperson's customer would use.",
      "Every page answers one question and offers one next step.",
      "Blog and article copy that keeps working for years.",
    ],
  },
  {
    slug: "digital-marketing-strategy",
    href: `/services/digital-marketing-strategy/`,
    price: "From $1,200",
    priceAmount: "1200",
    priceNote: "Final quote after one conversation.",
    name: "Digital Marketing Strategy",
    categoryId: "marketing-consultant",
    gbp: "A plain-language audit of your business, your competitors, and where your customers are going instead of you — with a concrete plan for what to fix first.",
    h1: "Digital Marketing Strategy in Hamilton, Ontario",
    metaTitle: "Digital Marketing Strategy | Studio Nallan Web Design",
    meta: "Digital marketing strategy in Hamilton, Ontario — a plain-language audit with a concrete plan for what to fix first.",
    image: "/services/digital-marketing-strategy.jpg",
    imageAlt: "Digital marketing strategy showpiece",
    sections: [
      [
        "Most marketing advice fails at the first step: it never looks at YOUR business. Generic playbooks, packages named after metals, reports full of charts nobody explains. You end up spending on motion instead of direction.",
        "A strategy engagement starts with looking — at your site, your competitors, your reviews, and the searches your customers are actually making. Then we tell you plainly where your customers are going instead of you, and give you a concrete plan for what to fix first, second, and not at all.",
      ],
      [
        "What you get is a document you can actually use: what's working, what's broken, what matters most, and what each fix is worth to you. Hire us to implement it, hand it to someone else, or do it yourself — the plan doesn't care who executes it.",
        "One conversation starts it. No retainers, no fog, no fifty-page deck. Just a clear-eyed look at where you stand and the shortest path to where your customers are.",
      ],
    ],
    bullets: [
      "Full audit — your site, competitors, reviews, and real searches.",
      "Plain-language findings, no agency fog.",
      "A ranked plan: what to fix first, second, and never.",
      "Yours to keep — implement with us or anyone.",
    ],
  },
  {
    slug: "local-seo",
    href: "/services/seo-hamilton/",
    price: "From $650/mo",
    priceAmount: "650",
    priceNote: "Range $650–$1,500/mo depending on scope.",
    name: "Local SEO",
    categoryId: "internet-marketing",
    gbp: "On-page and technical SEO built into the site itself — the right structure, content, and local signals so you show up when nearby customers search for what you do.",
    h1: "",
    metaTitle: "",
    meta: "",
    image: "",
    imageAlt: "",
    sections: [[], []],
    bullets: [],
  },
  {
    slug: "ai-automation-consulting",
    href: "/services/ai-automation/",
    price: "From $850",
    priceAmount: "850",
    priceNote: "Final quote after one conversation.",
    name: "AI Automation Consulting",
    categoryId: "marketing-consultant",
    gbp: "Smart automation added where it actually saves time — booking, follow-ups, and the questions you answer five times a day — scoped to your business, not sold as a generic bundle.",
    h1: "",
    metaTitle: "",
    meta: "",
    image: "",
    imageAlt: "",
    sections: [[], []],
    bullets: [],
  },
];
export function serviceHref(slug: string) {
  return `/services/${slug}/`;
}
