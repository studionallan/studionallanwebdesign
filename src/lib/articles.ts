/**
 * Google Business Profile posts, reproduced verbatim as articles.
 * Words are never edited here — only split into paragraphs/bullets for layout.
 */
export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  date: string;
  dateISO: string;
  paragraphs: string[];
  bullets?: string[];
  /** body-paragraph index after which bullets render (-1 = before all body text) */
  bulletsAfterBody?: number;
  cta: "call" | "learn";
  image: string;
  imageAlt: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "pest-control-web-design",
    title: "Bespoke Web Design for a Pest Control Service",
    metaTitle: "Pest Control Web Design | Studio Nallan Web Design",
    date: "September 10, 2026",
    dateISO: "2026-09-10",
    paragraphs: [
      "Stand out from the generic competition. 🦝 We recently completely reimagined the digital presence for a pest control service, moving away from boring templates to a bespoke, high-converting web system. This build merges fine-art visual direction with stark brand architecture, featuring a high-contrast hero section and an interactive, click-based service carousel to drive immediate engagement. At Studio Nallan Web Design, we provide custom web design that commands attention and turns visitors into clients. Ready to upgrade your digital infrastructure? Let's talk.",
    ],
    cta: "call",
    image: "/articles/pest-control-showpiece.svg",
    imageAlt: "Placeholder showpiece graphic for a custom pest control web design",
  },
  {
    slug: "answerall-ai-receptionist",
    title: "AnswerAll: AI Instant Response for Local Businesses",
    metaTitle: "AnswerAll AI Receptionist | Studio Nallan Web Design",
    date: "September 2, 2026",
    dateISO: "2026-09-02",
    paragraphs: [
      "Never miss another customer call — AI-powered instant response for local businesses in Hamilton, Burlington & Oakville. Introducing AnswerAll by Studio Nallan Web Design: when a call goes unanswered, our AI instantly texts your customer back, answers their questions, and books them straight into your calendar — even after hours. Built for plumbers, pest control companies, and home service businesses across the Golden Horseshoe who can't afford to lose a lead to a ringing phone.",
      "Serving Hamilton, Burlington, Oakville, and the Golden Horseshoe.",
    ],
    bullets: [
      "✅ Instant AI text-back on missed calls",
      "✅ Automatic lead follow-up for days, not just once",
      "✅ Books directly into your calendar",
      "✅ No new app, no extra staff",
    ],
    cta: "learn",
    bulletsAfterBody: -1,
    image: "/articles/answerall-receptionist.svg",
    imageAlt: "Placeholder graphic of the AnswerAll AI receptionist interface",
  },
  {
    slug: "clinic-website-foundation",
    title: "Stabilize Your Clinic Website Foundation First",
    metaTitle: "Clinic Website Foundation | Studio Nallan Web Design",
    date: "August 24, 2026",
    dateISO: "2026-08-24",
    paragraphs: [
      "In martial arts, if your stance is unstable, throwing more strikes will not win the match. Many dental, physiotherapy, and chiropractic clinic owners across the Greater Toronto and Hamilton Area assume they have an awareness problem. They invest in promotional campaigns and social posting. But when we diagnose their digital presence, the true issue is structural instability. Prospective patients find them, arrive at their website, and encounter immediate friction:",
      "A clinic website is not a digital brochure to launch and ignore. It is your digital front door. When that door is heavy or locked after hours, high-intent patients simply turn to another clinic down the street. Stabilize your foundation first. When your digital structure is clear and responsive, patient trust and steady appointment requests follow naturally.",
    ],
    bullets: [
      "• A crowded layout that fails to establish calm authority within three seconds.",
      "• Jargon-heavy service lists that confuse a patient in pain.",
      "• A static contact page demanding a phone call during standard clinic hours.",
    ],
    cta: "learn",
    bulletsAfterBody: -1,
    image: "/articles/clinic-foundation.svg",
    imageAlt: "Placeholder rendering of minimalist stone columns",
  },
  {
    slug: "outsourced-marketing-health-wellness",
    title: "Outsourced Marketing Strategy for Health & Wellness Practices",
    metaTitle: "Outsourced Clinic Marketing | Studio Nallan Web Design",
    date: "August 14, 2026",
    dateISO: "2026-08-14",
    paragraphs: [
      "Most health and wellness practices don't need more fragmented marketing tasks—they need a dedicated partner to take complete ownership of their digital presence. At Studio Nallan Web Design, we provide specialized Outsourced Marketing Strategy and digital infrastructure tailored specifically for established health and wellness practices across the Golden Horseshoe (Hamilton, Burlington, Oakville, Mississauga, and Toronto).",
      "What sets our approach apart:",
      "Ready to elevate your practice's digital infrastructure? Connect with us today to discuss availability in your area.",
    ],
    bullets: [
      "• Complete Digital Ownership: Strategic oversight without the agency bloat.",
      "• Local Search Dominance: Ensuring your practice is the undisputed choice when high-intent patients search locally.",
      "• Conversion-Engine Web Systems: Guiding prospective patients seamlessly from search to consultation.",
      "• Custom AI Lead Capture & Automation: Answering missed inquiries instantly so no new patient slips through the cracks.",
      "• Strict Market Exclusivity: We enforce a strict one-practice-per-service-area policy to protect your competitive advantage.",
    ],
    cta: "call",
    bulletsAfterBody: 0,
    image: "/articles/outsourced-marketing.svg",
    imageAlt: "Placeholder graphic of a marketing strategy analytics dashboard",
  },
  {
    slug: "ai-lead-capture-clinics",
    title: "Never Lose a Patient to an Unanswered Call",
    metaTitle: "AI Lead Capture for Clinics | Studio Nallan Web Design",
    date: "August 6, 2026",
    dateISO: "2026-08-06",
    paragraphs: [
      "Never Lose a Patient to an Unanswered Call : In a busy health or wellness practice, phone lines get backed up and missed calls happen. However, unanswered inquiries often turn into lost clients who book with competitors instead. Studio Nallan Web Design builds custom AI lead-capture automation designed to ensure every missed call is automatically answered and every website visitor is properly guided. Build an automated system that captures leads 24/7 and keeps your practice front and center.",
    ],
    cta: "learn",
    image: "/articles/ai-lead-capture.svg",
    imageAlt: "Placeholder graphic of AI lead-capture automation",
  },
];

export function articleHref(slug: string) {
  return `/articles/${slug}/`;
}
