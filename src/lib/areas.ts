/**
 * Unique body copy per Hamilton sub-region. Every page is written from
 * scratch — no templated sentences repeated across pages (doorway risk).
 * Same rules everywhere: plain speech, no niche naming, no jargon.
 */

/** The seven Hamilton sub-region pages. Single source for nav + sitemap. */
export const AREAS = [
  { slug: "ancaster", name: "Ancaster" },
  { slug: "dundas", name: "Dundas" },
  { slug: "stoney-creek", name: "Stoney Creek" },
  { slug: "waterdown", name: "Waterdown" },
  { slug: "hamilton-mountain", name: "Hamilton Mountain" },
  { slug: "downtown-hamilton", name: "Downtown Hamilton" },
  { slug: "east-hamilton", name: "East Hamilton" },
  { slug: "binbrook", name: "Binbrook" },
] as const;

export function areaHref(slug: string) {
  return `/locations/${slug}/`;
}
export type AreaCopy = {
  slug: string;
  name: string;
  intro: string;
  section1: [string, string];
  section2: [string, string];
  meta: string;
};

export const AREA_COPY: AreaCopy[] = [
  {
    slug: "ancaster",
    name: "Ancaster",
    intro:
      "Looking for a web design company in Ancaster? Here's the short version: your website should look genuinely great and actually bring in customers. You shouldn't have to pick one.",
    section1: [
      "Ancaster is two places at once — a historic village along Wilson Street and a fast-growing suburb up around the Meadowlands Business Park. The businesses here range from shops that have been on the same corner for decades to newer firms serving the whole city. Different streets, same problem: their websites either look dated and amateurish, or they look fine and nobody can find them.",
      "Studio Nallan Web Design is a Hamilton web design studio built on one idea: your website should be the best one your business ever has. Not the most complicated or the most expensive — the best. Think of us as your website designer in Ancaster, ON — even though the studio sits just down the road in Hamilton.",
    ],
    section2: [
      "People in Ancaster search the way everyone searches now — from the couch, from the car on Wilson, from a phone outside the Meadowlands. We set every site up to rank on Google, so you show up when someone nearby searches for what you do.",
      "And we set it up so your business shows up when people ask ChatGPT or Google's AI for a recommendation, with smart automation where it actually saves you time — booking, follow-ups, and the questions you answer five times a day.",
    ],
    meta: "Web design in Ancaster, Ontario — sites that look genuinely great and bring in customers. Fast, found on Google and by AI search.",
  },
  {
    slug: "dundas",
    name: "Dundas",
    intro:
      "Looking for Dundas web design? We'd want you to know one thing first: your website should look genuinely great and actually bring in customers — never one without the other.",
    section1: [
      "Dundas has a character all its own. A valley town with a real downtown on King Street West, artists and makers mixed in with shops and services that locals rely on daily. Businesses here trade on reputation — people know your name before they walk in. Your website should carry that same reputation online instead of undermining it with something dated.",
      "We're Studio Nallan Web Design, doing website design in Dundas, Ontario and right across the city from our Hamilton studio. Every site we build is one built-in package: a design that looks genuinely great, built fast, set up to rank on Google, and set up for AI search. Not a bundle of add-ons — simply how we build.",
    ],
    section2: [
      "Most Dundas customers live within a few kilometres of King Street, which makes local search everything. We build pages that say clearly what you do and where you do it, in a form Google and the AI search tools can read without guessing.",
      "The result is a site that shows up when someone nearby searches for what you do — and so your business shows up when people ask ChatGPT or Google's AI for a recommendation. Built in weeks, not months, and it stays fast and stays found.",
    ],
    meta: "Web design in Dundas, Ontario — a site with the same reputation as your King Street shop. Found on Google and by AI search.",
  },
  {
    slug: "stoney-creek",
    name: "Stoney Creek",
    intro:
      "Running a business in Stoney Creek and need a website? Ours look genuinely great and actually bring in customers — built fast, and set up to be found from day one.",
    section1: [
      "Stoney Creek stretches from the lakefront up the Mountain and out toward Winona — older village streets around King and Queenston, Battlefield landmarks, the Centennial corridor, Fruitland orchards, and street after street of new subdivisions. It's one of the fastest-changing parts of the city, and a lot of local websites haven't kept up. If yours still describes the business you were five years ago, customers notice.",
      "As a web designer serving Stoney Creek, Studio Nallan Web Design builds websites from Hamilton for businesses across the creek and beyond. The standard never moves: it has to look right the moment the page loads, load fast, and bring in customers instead of just sitting there.",
    ],
    section2: [
      "When it comes to Stoney Creek web design, growth means competition. When new customers move into the area, they search — Lake Avenue to Fifty Road, the mountain to the lake. We set your site up to rank on Google for the searches that matter, with the right words in the right places.",
      "We also set it up so your business shows up when people ask ChatGPT or Google's AI for a recommendation, and wire in smart automation where it saves you real time — booking, follow-ups, the questions you answer five times a day.",
    ],
    meta: "Web design in Stoney Creek, Ontario — keep up with how fast the area is growing. Found on Google and by AI search. Book a call.",
  },
  {
    slug: "waterdown",
    name: "Waterdown",
    intro:
      "Need a web design company in Waterdown? Here's our whole pitch in two sentences: your website should look genuinely great and actually bring in customers. That's what we build.",
    section1: [
      "Waterdown has changed more in ten years than most places change in thirty. The old village core around Mill Street is still there, and Clappison's Corners keeps filling in — but around them are subdivisions full of young families, exactly the customers who search for everything on their phones first. A dated website doesn't just look old here; it reads as a business that hasn't kept up with its own street.",
      "We're Studio Nallan Web Design, a short drive down Dundas Street East. We do website design across Waterdown and Flamborough: sites that look great and are set up to be found — by Google, and by the AI search tools people use now. Then it goes live, and you keep looking sharp as things change.",
    ],
    section2: [
      "For Waterdown web design, new neighbourhoods mean new buying habits. Nobody asks a neighbour for a recommendation before checking their phone anymore — and increasingly they ask an AI instead. Every site we build is ready for both: pages Google can rank, and pages set up so your business shows up when people ask ChatGPT or Google's AI for a recommendation.",
      "Nallan has eighteen years in visual communication and brand strategy, and Meena, co-founder, brings an architecture and interior design background. You're welcome to see the work before you talk to us.",
    ],
    meta: "Web design in Waterdown, Ontario — a site that kept up with your street. Found on Google and by AI search. Weeks away — book a call.",
  },
  {
    slug: "hamilton-mountain",
    name: "Hamilton Mountain",
    intro:
      "If your business is on the Mountain, your website has one job: look the part and bring in customers. We build sites that do both — no picking one.",
    section1: [
      "The Mountain is a city unto itself. The Upper James corridor, Concession Street, Mohawk, Fennell — and the Lime Ridge district drawing from right across the city — commercial strips that run for kilometres, serving neighbourhoods where people live, shop, and search within a few blocks of home. The business with the better website wins the customer who searched from their couch.",
      "Hamilton Mountain web design comes down to one idea: your website should be the best one your business ever has. Studio Nallan Web Design builds it from Hamilton — it looks right, loads fast, and brings in customers instead of just sitting there, built in weeks, not months.",
    ],
    section2: [
      "When every nearby competitor is one search away, being found is everything — whether you need web design on Upper James or all the way out Rymal Road. We build clean pages that load fast, with the right words in the right places, so you rank on Google for what you do and where you do it.",
      "And because more people now ask AI than type keywords, we set the site up so your business shows up when people ask ChatGPT or Google's AI for a recommendation — plus smart automation where it actually saves you time.",
    ],
    meta: "Web design on Hamilton Mountain, Ontario — win the customer searching from their couch. Found on Google and by AI search.",
  },
  {
    slug: "downtown-hamilton",
    name: "Downtown Hamilton",
    intro:
      "Looking for downtown Hamilton web design — or a web designer on James St North? Here's the short version: your website should look genuinely great and actually bring in customers.",
    section1: [
      "Nobody has to tell you downtown Hamilton is changing. Condos over storefronts, new openings next to old institutions, the James North art crawl drawing crowds every month — from Locke Street shops to International Village storefronts and the Corktown blocks in between. First impressions here happen fast, on the sidewalk and on the screen.",
      "We're Studio Nallan Web Design, based right here in the city. Every site is one built-in package: genuinely great design, fast build, set up to rank on Google, set up for AI search, and wired with smart automation where it helps. Never a bundle of add-ons.",
    ],
    section2: [
      "Downtown customers decide in seconds, usually on a phone, usually while already out. Your site has to load instantly, say what you do immediately, and make reaching you effortless — booking, directions, one tap to call.",
      "Behind that, we handle being found: pages Google can rank, and pages set up so your business shows up when people ask ChatGPT or Google's AI for a recommendation. You keep looking sharp as the street around you keeps changing.",
    ],
    meta: "Web design in Downtown Hamilton, Ontario — a site with the same momentum as your street. Found on Google and by AI search.",
  },
  {
    slug: "binbrook",
    name: "Binbrook",
    intro:
      "Binbrook businesses deserve better than a template site nobody finds. We build websites that look genuinely great and actually bring in customers — from a studio that knows the area.",
    section1: [
      "Binbrook is a small town with deep roots — the conservation area, the agricultural fair, neighbours who actually know each other — now ringed by new subdivisions, from Binbrook Village out to Mount Hope and the airport corridor. Local businesses here run on trust and word of mouth, and a website should extend that trust online, not sit there looking like an afterthought from 2014.",
      "Studio Nallan Web Design is the website designer Binbrook and Glanbrook businesses call when the template site stops working. The promise is the same everywhere: it looks right the moment the page loads, it loads fast, and it brings in customers instead of just sitting there.",
    ],
    section2: [
      "In a town this size, good Binbrook web design comes down to this: every search counts. When someone new to the area looks for what you do, there are only a handful of results — we make sure you're the obvious choice, with pages Google can rank and read without guessing.",
      "We also set the site up so your business shows up when people ask ChatGPT or Google's AI for a recommendation, with automation where it saves you time — booking, follow-ups, the questions you answer five times a day.",
    ],
    meta: "Web design in Binbrook, Ontario — a site your neighbours would recommend. Found on Google and by AI search. Book a call.",
  },
  {
    slug: "east-hamilton",
    name: "East Hamilton",
    intro:
      "Looking for an East Hamilton web designer? From Ottawa Street North to Kenilworth, here's the short version: your website should look genuinely great and actually bring in customers.",
    section1: [
      "East Hamilton doesn't pretend. Crown Point blocks, the Ottawa Street design and textile district, the Kenilworth corridor — makers, shops, and services with loyal customers and zero patience for fluff. A website here earns trust the same way the street does: by being straight, solid, and obviously cared for.",
      "We're Studio Nallan Web Design, based in Hamilton. Whether you need web design on Ottawa Street North in Hamilton or a full rebuild further east, every site is one built-in package: genuinely great design, fast build, set up to rank on Google, and set up for AI search.",
    ],
    section2: [
      "East-end customers search close to home — Barton, Kenilworth, Ottawa, the Centre. We build pages that say clearly what you do and where you do it, in a form Google and the AI search tools can read without guessing, so you show up in the searches that feed your street.",
      "And we set the site up so your business shows up when people ask ChatGPT or Google's AI for a recommendation, with smart automation where it actually saves you time — booking, follow-ups, and the questions you answer five times a day.",
    ],
    meta: "Web design in East Hamilton, Ontario — Ottawa Street to Kenilworth. Found on Google and by AI search. Book a call today.",
  },
];
