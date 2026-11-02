// Extra copy for the Services page, keyed by the `n` of each entry in services.js.
// The capability lists themselves come from services.js (single source of truth), so adding or
// renaming a service there is reflected on the page automatically.
export const serviceDetails = {
  '01': {
    kicker: 'Growth',
    lead: 'Campaigns that bring the right people through the door. We plan, run and tune search, paid and social, and report on what actually moves your pipeline.',
    bestFor: 'Teams with a good product that need a steady flow of qualified enquiries.',
    outcomes: ['A channel strategy tied to your pipeline', 'Campaigns launched, tracked and tuned', 'Clear reporting without vanity metrics'],
    toolsLabel: 'Channels',
    tools: ['Google Ads', 'Meta Ads', 'YouTube Ads', 'SEO', 'Analytics & reporting'],
  },
  '02': {
    kicker: 'Build',
    lead: 'Fast, conversion-ready websites, stores and web apps, engineered with modern, lightweight frameworks and motion that supports the story instead of getting in its way.',
    bestFor: 'Brands that need a bespoke digital home, a storefront or a custom web app.',
    outcomes: ['Responsive, high-performance builds', 'Content your team can edit', 'A codebase you can own'],
    toolsLabel: 'Stack',
    tools: ['React 18', 'Vite', 'GSAP 3', 'Lenis', 'TypeScript', 'Node.js', 'Headless CMS', 'Webflow', 'REST APIs', 'Supabase', 'Cloudflare Edge'],
  },
  '03': {
    kicker: 'Craft',
    lead: 'Brand systems, interfaces and creative that earn attention: from the first logo sketch to the last social creative, with a point of view throughout.',
    bestFor: 'Founders and teams launching, rebranding or tired of looking like everyone else.',
    outcomes: ['A distinct, consistent identity', 'Interfaces reviewed as live prototypes', 'Content and creative ready to publish'],
    toolsLabel: 'Tools',
    tools: ['Figma', 'Design tokens', 'Motion prototyping', 'Art direction'],
  },
  '04': {
    kicker: 'Automate',
    lead: 'Chatbots, voice agents and workflows that run around the clock. Practical automation, connected to the tools you already use.',
    bestFor: 'Teams losing hours to repetitive work, slow follow-ups or missed leads.',
    outcomes: ['Repetitive work handled automatically', 'Leads captured and routed 24/7', 'AI that is integrated, not bolted on'],
    toolsLabel: 'Tooling',
    tools: ['OpenAI / Claude APIs', 'CRM sync', 'Voice AI agents', 'Webhook pipelines'],
  },
};
