// Copy for the About / Services / Contact pages.
// It is written from what the site already says (homepage FAQ, tools, engagement models, services.js);
// edit freely — nothing here is wired to logic.

export const studioTimezone = 'Asia/Kolkata'; // Ahmedabad; used for the live local time on the Contact page

// ---------- ABOUT ----------
export const aboutStatement =
  "We're a deliberately independent digital studio. *Strategy, design and engineering* sit at one table — so the idea you approve is the thing that actually ships.";

export const aboutPillars = [
  {
    label: 'What we do',
    text: 'Brand worlds, high-performance websites, e-commerce, custom web apps and AI-powered workflows, across four disciplines.',
  },
  {
    label: 'How we work',
    text: 'Directly with founders and senior specialists. Weekly iterations on live staging links, not static screenshots.',
  },
  {
    label: 'What we believe',
    text: 'Clear thinking meets brave making. Every choice earns its place, from the big idea to the tiny interaction.',
  },
];

export const expertise = [
  {
    n: '01',
    title: 'Creative development',
    text: 'Interfaces with a point of view, engineered properly: lightweight code, fluid typography and motion that supports the story.',
    tags: ['React 18', 'GSAP 3 & ScrollTrigger', 'Lenis scroll', 'Design tokens', 'Motion prototyping', 'Accessibility'],
  },
  {
    n: '02',
    title: 'Digital experiences',
    text: 'Brand worlds, websites and platforms that people remember, and that give them a clear reason to act.',
    tags: ['Branding & identity', 'UI/UX design', 'E-commerce', 'Art direction', 'Motion design', 'Content & campaigns'],
  },
  {
    n: '03',
    title: 'Technology & innovation',
    text: 'Practical AI and automation that works around the clock, wired into the tools you already use.',
    tags: ['AI chatbots', 'Voice AI agents', 'CRM automation', 'Webhook pipelines', 'OpenAI / Claude APIs', 'Headless CMS'],
  },
];

export const philosophy = [
  {
    n: '01',
    title: 'Listen before we draw.',
    text: 'We start with the problem and the business reality, not a template. Most of the best decisions happen before a single pixel is placed.',
  },
  {
    n: '02',
    title: 'Distinct, then fast.',
    text: 'A bold idea that loads slowly is not bold. We never separate visual storytelling from performance and engineering.',
  },
  {
    n: '03',
    title: 'Keep it human.',
    text: 'A small team, direct access and honest conversations. You talk to the people who are doing the work.',
  },
  {
    n: '04',
    title: 'Build it to last.',
    text: 'Clean code, content your team can edit and systems you can actually run after launch.',
  },
];

// vertical timeline on the About page
export const aboutProcess = [
  {
    n: '01',
    title: 'Discovery',
    text: 'We listen first: your goals, your audience, your constraints and what is already working.',
    outputs: ['Discovery conversation', 'Goals & constraints', 'Audit of what exists'],
  },
  {
    n: '02',
    title: 'Strategy',
    text: 'Positioning, scope and priorities put into plain language, with clear milestones.',
    outputs: ['Scope & milestones', 'Content structure', 'Success measures'],
  },
  {
    n: '03',
    title: 'Design',
    text: 'Brand world and interface architecture, reviewed as live, interactive prototypes.',
    outputs: ['Visual direction', 'Interactive prototype', 'Design tokens'],
  },
  {
    n: '04',
    title: 'Development',
    text: 'Clean, lightweight code with motion built in from the start, shared on staging links every week.',
    outputs: ['React + Vite build', 'CMS integration', 'Weekly staging links'],
  },
  {
    n: '05',
    title: 'Launch',
    text: 'Cross-browser QA, SEO checks and a smooth deployment. Then we stay close and review how it performs.',
    outputs: ['QA & SEO checks', 'Deployment', 'Post-launch review'],
  },
];

export const whyUs = [
  { n: '01', title: 'No account managers.', text: 'You work directly with founders and senior specialists, so every question gets an informed answer.' },
  { n: '02', title: 'Strategy and code, together.', text: 'We never decouple visual storytelling from performance. What is designed is what gets built.' },
  { n: '03', title: 'Live, not static.', text: 'Weekly iterations on staging links. You review the real product as it evolves, not screenshots.' },
  { n: '04', title: 'Four disciplines, one team.', text: 'Marketing, development, design and AI automation at the same table, so nothing gets lost in a handoff.' },
  { n: '05', title: 'Built to endure.', text: 'Editable content, clean code and systems designed to stay relevant long after launch.' },
];

// ---------- SERVICES ----------
export const serviceProcess = [
  {
    n: '01',
    title: 'Understand',
    text: 'We learn the business, the audience and the problem behind the brief.',
    outputs: ['Discovery call', 'Audit', 'Goals'],
  },
  {
    n: '02',
    title: 'Strategize',
    text: 'We turn that into a plan: scope, priorities, milestones and how we will measure it.',
    outputs: ['Scope', 'Roadmap', 'Metrics'],
  },
  {
    n: '03',
    title: 'Design',
    text: 'Direction, systems and interfaces, reviewed as interactive prototypes before anything is built.',
    outputs: ['Visual direction', 'Prototype', 'Design system'],
  },
  {
    n: '04',
    title: 'Develop',
    text: 'We build it properly, with weekly staging links so you see real progress.',
    outputs: ['Build', 'Integrations', 'Staging links'],
  },
  {
    n: '05',
    title: 'Deliver',
    text: 'QA, launch and a post-launch review, with a retainer option if you want us to stay.',
    outputs: ['QA & launch', 'Handover', 'Review'],
  },
];

export const serviceBenefits = [
  { n: '01', title: 'One team, no handoffs.', text: 'Strategy, design, engineering and automation in the same room means decisions stick and nothing is lost in translation.' },
  { n: '02', title: 'Built to be edited.', text: 'Where it makes sense we connect a headless CMS, so your team can publish and update without calling us.' },
  { n: '03', title: 'Measured, not guessed.', text: 'Analytics and reporting are part of the plan from the start, so we improve what the numbers show.' },
  { n: '04', title: 'Fast by default.', text: 'Lightweight frameworks and careful motion keep sites responsive and accessible on every device.' },
];

export const serviceFaqs = [
  {
    q: 'Which service should we start with?',
    a: 'Start with the problem rather than the service. Tell us the goal and we will recommend the smallest mix of disciplines that gets you there. Many projects combine two or three.',
  },
  {
    q: 'Can we hire you for just one thing?',
    a: 'Yes. A single landing page, a campaign, a brand refresh or one chatbot is a perfectly good place to begin. The scope is shaped around the problem, not a package.',
  },
  {
    q: 'How long does a project take?',
    a: 'Focused design or build sprints typically take 2 to 4 weeks. Full end-to-end builds generally range from 6 to 10 weeks, depending on scope, integrations and how ready the content is.',
  },
  {
    q: 'What do you need from us to get started?',
    a: 'Your goals, your audience, a few examples you like (and dislike), any existing brand assets and one person who can make decisions. A budget range and a target date help us propose the right scope.',
  },
  {
    q: 'How do we work together day to day?',
    a: 'In weekly iterations. You get live staging links and direct access to the founders and senior specialists doing the work, so feedback turns into progress quickly.',
  },
  {
    q: 'Do you support projects after launch?',
    a: 'Yes. We run a post-launch review and tune performance and analytics. If you want ongoing design and development capacity, a month-to-month retainer is available.',
  },
];

// ---------- CONTACT ----------
export const contactSteps = [
  { n: '01', title: 'Send the first note', text: "Big brief, small question or just a hunch that something could be better. A perfect brief isn't needed." },
  { n: '02', title: 'Discovery call', text: 'If it looks like a fit, we schedule a focused 30-minute conversation about goals, constraints and timing.' },
  { n: '03', title: 'Scope & timeline', text: 'You receive a clear outline of scope, timeline and how we would work together.' },
  { n: '04', title: 'Kick-off', text: 'Weekly sprints, live staging links and direct access to the people doing the work.' },
];

export const contactFaqs = [
  {
    q: 'What should I include in my first message?',
    a: 'A little about what you have in mind: the goal, who it is for, a rough timeline and any links that help. A polished brief is not required.',
  },
  {
    q: 'What happens after I send it?',
    a: 'We read it, and if it looks like a good fit we schedule a focused 30-minute discovery call to outline scope and a clear timeline.',
  },
  {
    q: 'Do I need to have a budget in mind?',
    a: 'No, the budget field is optional. If you do have a range, it helps us propose the right scope; if not, we will talk it through on the call.',
  },
  {
    q: 'Can you work with teams outside Ahmedabad?',
    a: 'Yes. We are based in Ahmedabad and work remotely with teams everywhere, using live staging links and weekly check-ins.',
  },
  {
    q: 'Is a small project worth asking about?',
    a: 'Absolutely. A single landing page, a campaign or a quick design sprint is a good place to start a working relationship.',
  },
];
