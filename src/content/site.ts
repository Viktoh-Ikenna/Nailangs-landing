/**
 * Everything the site says, in one place. Edit here, not in the components.
 *
 * Store links: only Android's is known. Set the others when the listings are live; until
 * then the platform shows "Coming soon" instead of a broken link.
 */

export const site = {
  name: "Nailangs",
  legalName: "Nailangs Nigeria Limited",
  url: "https://nailangs.com",
  tagline: "Type Nigerian languages the right way",
  description:
    "Nailangs keyboards let you type Yorùbá, Igbo, Hausa and at least 12 Nigerian languages with the right letters and tone marks — on Android, iPhone and iPad, Mac and Windows.",
  slogan: "Type it right. Type it correctly. Type it with Nailangs.",
  motto: "One nation, many languages, one keyboard.",
  email: {
    enquiries: "enquiries@nailangs.com",
    support: "support@nailangs.com",
  },
  designRegistration:
    "International Design Classification LOC (07) Cl. 99-00 · Design Registration no. 4040655",
  socials: [
    { name: "X (Twitter)", handle: "@Nailangs", href: "https://twitter.com/Nailangs" },
    { name: "Instagram", handle: "@nailangs", href: "https://www.instagram.com/nailangs" },
    { name: "Facebook", handle: "nailangskeyboard", href: "https://www.facebook.com/nailangskeyboard" },
    { name: "YouTube", handle: "Nailangs", href: "https://www.youtube.com/channel/UCrd10IhuU_2EAr_cyl0t_Hw" },
  ],
} as const;

/** The twelve languages the old site lists (its "4d12langs" graphic). */
export const languages = [
  { name: "Yorùbá", greeting: "Ẹ kú àárọ̀", meaning: "Good morning" },
  { name: "Igbo", greeting: "Ụtụtụ ọma", meaning: "Good morning" },
  { name: "Hausa", greeting: "Ina kwana", meaning: "Good morning" },
  { name: "English", greeting: "Good morning", meaning: "Good morning" },
  { name: "Fulani", greeting: null, meaning: null },
  { name: "Edo", greeting: null, meaning: null },
  { name: "Kanuri", greeting: null, meaning: null },
  { name: "Urhobo", greeting: null, meaning: null },
  { name: "Efik", greeting: null, meaning: null },
  { name: "Ijaw", greeting: null, meaning: null },
  { name: "Idoma", greeting: null, meaning: null },
  { name: "Tiv", greeting: null, meaning: null },
] as const;

/** Letters English keyboards don't have, shown around the site. */
export const specialLetters = ["ẹ", "ọ", "ṣ", "ị", "ụ", "ṅ", "ɓ", "ɗ", "ƙ", "ƴ", "ń", "à", "á", "è", "é", "ò", "ó"];

export type Platform = {
  id: "android" | "ios" | "mac" | "windows";
  name: string;
  device: string;
  blurb: string;
  points: string[];
  store: { label: string; href: string | null };
};

export const platforms: Platform[] = [
  {
    id: "android",
    name: "Android",
    device: "Phones and tablets",
    blurb: "A full keyboard with every Nigerian letter a long-press away, and suggestions that learn how you write.",
    points: [
      "Hold a letter to see all its accents at once",
      "About 96,000-word English dictionary with Nigerian names and words",
      "Predicts your next word — on the phone, never online",
      "Themes, key sounds and haptics",
    ],
    store: {
      label: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=ng.nailangs.keyboard01",
    },
  },
  {
    id: "ios",
    name: "iPhone & iPad",
    device: "iOS and iPadOS",
    blurb: "The same keyboard on iPhone and iPad, with a practice box in the app to learn the letters.",
    points: [
      "Works in every app once added in Settings",
      "Tone marks and subdots in a single long-press",
      "Smart suggestions, learned on your device",
      "No Full Access needed — nothing leaves your phone",
    ],
    store: { label: "Download on the App Store", href: null },
  },
  {
    id: "mac",
    name: "Mac",
    device: "macOS keyboard layout",
    blurb: "A real macOS keyboard layout: special letters on the keys you already know, tones with nine dead keys.",
    points: [
      "One-click install from the companion app",
      "On-screen preview of every layer",
      "Right Option gives digits, symbols and tones",
      "Works in every Mac app",
    ],
    store: { label: "Download for Mac", href: null },
  },
  {
    id: "windows",
    name: "Windows",
    device: "Windows 10 and 11",
    blurb: "The same layout on Windows, plus a pop-out on-screen keyboard that types into any app.",
    points: [
      "Installs as a Windows keyboard layout",
      "Pop-out keyboard that stays on top",
      "Type the letter, then the tone",
      "Works fully offline",
    ],
    store: { label: "Get it from Microsoft", href: null },
  },
];

/** Words whose meaning changes with the tone mark — why the marks matter. */
export const toneExamples = [
  {
    language: "Yorùbá",
    bare: "oko",
    forms: [
      { word: "ọkọ", meaning: "husband" },
      { word: "ọkọ̀", meaning: "vehicle" },
      { word: "ọkọ́", meaning: "hoe" },
      { word: "oko", meaning: "farm" },
    ],
  },
  {
    language: "Igbo",
    bare: "akwa",
    forms: [
      { word: "àkwà", meaning: "bed" },
      { word: "ákwá", meaning: "crying" },
      { word: "àkwá", meaning: "egg" },
      { word: "ákwà", meaning: "cloth" },
    ],
  },
];

export const features = [
  {
    title: "Real letters, not workarounds",
    body: "ẹ, ọ, ṣ, ị, ụ, ɓ, ɗ, ƙ and more sit on real keys — no copying from the web, no apostrophes standing in for subdots.",
  },
  {
    title: "Tone marks that carry meaning",
    body: "Nigerian languages are tonal. With the marks in place, readers understand at once — no more guesswork, or “guess-word”.",
  },
  {
    title: "Many languages, one keyboard",
    body: "Switch between English and your mother tongue mid-sentence. Nailangs is built for a bilingual nation.",
  },
  {
    title: "Looks like a normal keyboard",
    body: "Versatile, familiar and simple to use. If you can type, you can type with Nailangs.",
  },
  {
    title: "Private by design",
    body: "Suggestions are worked out on your device. What you type is never sent to us or anyone else.",
  },
  {
    title: "On every screen you own",
    body: "Android, iPhone, iPad, Mac and Windows — the same letters wherever you write.",
  },
];

export const faqs = [
  {
    q: "Which languages can I type with Nailangs?",
    a: "At least 12 Nigerian languages, including Yorùbá, Igbo, Hausa, Fulani, Edo, Kanuri, Urhobo, Efik, Ijaw, Idoma and Tiv, alongside English — with the letters and tone marks they need.",
  },
  {
    q: "How do I type a letter with a dot or a tone mark?",
    a: "On phones and tablets, press and hold a letter that shows a small dot: every version of it appears at once, so you slide to the one you want. On Mac and Windows, the special letters are on the keys, and tones are added with the right Option or Alt Gr key.",
  },
  {
    q: "Does Nailangs read or send what I type?",
    a: "No. Word suggestions are worked out on your own device. There is no account, no analytics and no server that receives your keystrokes.",
  },
  {
    q: "Can I still type English?",
    a: "Yes. Nailangs is a full keyboard with an English dictionary of about 96,000 words, so you can switch between English and your language in the same message.",
  },
  {
    q: "Which devices are supported?",
    a: "Android phones and tablets, iPhone and iPad, Mac computers and Windows PCs.",
  },
  {
    q: "What is the Nailangs silicone keyboard cover?",
    a: "A soft, washable cover that sits on a laptop keyboard and shows where the Nailangs letters and keys are, so you can find them at a glance while typing in Nailangs mode.",
  },
];

export const nav = [
  { href: "/#languages", label: "Languages" },
  { href: "/#features", label: "Features" },
  { href: "/download", label: "Download" },
  { href: "/about", label: "Our story" },
  { href: "/keyboard-cover", label: "Keyboard cover" },
  { href: "/contact", label: "Contact" },
];
