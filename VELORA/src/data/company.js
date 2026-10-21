export const processSteps = [
  {
    step: '01',
    name: 'Discover',
    tagline: 'Deconstruct assumptions & clarify objectives',
    description: 'We immerse ourselves in your domain, interview stakeholders, audit existing systems, and analyze user friction points to establish empirical ground truth before writing a single line of code.',
    activities: [
      'Technical architecture audit & legacy code review',
      'Stakeholder alignment sessions & scope boundaries',
      'User journey mapping & friction point identification',
      'Benchmark analysis and competitive landscape review',
      'Success metrics definition (Core Web Vitals, conversion, throughput)'
    ],
    deliverables: [
      'Technical Discovery Document',
      'Information Architecture Matrix',
      'Project Risk & Dependency Register',
      'Engagement Roadmap & Milestone Timelines'
    ],
    tools: ['Figma Jam', 'Notion', 'Miro', 'Lighthouse', 'Postman']
  },
  {
    step: '02',
    name: 'Define',
    tagline: 'System specification & architectural blueprints',
    description: 'We translate raw insights into explicit technical specifications, database entity schemas, API contracts, and user interaction requirements.',
    activities: [
      'Data model and database schema modeling',
      'API contract specification (REST / GraphQL / gRPC)',
      'Security perimeter & compliance mapping (SOC2, HIPAA, GDPR)',
      'Design token definition (typography clamp, spacing, color contrast)',
      'Sprint cadence & backlog prioritization'
    ],
    deliverables: [
      'Comprehensive Technical Specification (PRD)',
      'Database Schema & Entity Relationship Diagram',
      'System Architecture Topology Diagram',
      'Sprint 1-N Backlog with Acceptance Criteria'
    ],
    tools: ['Mermaid.js', 'dbdiagram.io', 'Swagger / OpenAPI', 'Linear']
  },
  {
    step: '03',
    name: 'Design',
    tagline: 'Tactile craft, rapid prototyping & visual authority',
    description: 'We construct living design systems, high-fidelity responsive wireframes, interactive motion studies, and micro-interactions that embody the VELORA brand aesthetic.',
    activities: [
      'Living component design system creation in Figma',
      'Responsive editorial layouts across mobile, tablet, and desktop',
      'Motion choreography, easing curve curves, and tactile feedback',
      'Interactive 3D geometry exploration & shader prototyping',
      'Usability testing and accessibility contrast validation'
    ],
    deliverables: [
      'Figma Master Component Library & Design Tokens',
      'High-Fidelity Interactive Prototypes',
      'Motion Spec Sheets (durations, spring physics, bezier curves)',
      'WCAG AA/AAA Accessibility Audit Matrix'
    ],
    tools: ['Figma', 'Spline', 'Blender', 'Principle', 'Color Contrast Analyzer']
  },
  {
    step: '04',
    name: 'Develop',
    tagline: 'High-velocity engineering, clean code & automated tests',
    description: 'Our senior engineers build modular, maintainable, and type-safe frontends and backends. We work in two-week agile sprints backed by automated CI/CD pipelines.',
    activities: [
      'Component-driven frontend engineering with React / Next.js',
      'Backend microservices & real-time WebSocket pipelines',
      'Automated unit, integration, and end-to-end regression testing',
      'Performance profiling (bundle splitting, tree shaking, asset caching)',
      'Daily staging preview deployments for stakeholder review'
    ],
    deliverables: [
      'Clean, documented Git repository with semantic commits',
      'Staging environment with live continuous preview builds',
      'Comprehensive automated test suite (>85% coverage)',
      'Storybook component catalog for engineering reusability'
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vitest', 'Playwright', 'GitHub Actions']
  },
  {
    step: '05',
    name: 'Deliver',
    tagline: 'Rigorous validation, seamless launch & knowledge transfer',
    description: 'We execute comprehensive load testing, security audits, and production switchover. We document everything and train your team for autonomous long-term operation.',
    activities: [
      'End-to-end load testing and stress simulations',
      'Production zero-downtime blue/green DNS cutover',
      'Search engine indexing, structured JSON-LD schema verification',
      'Stakeholder walkthroughs and interactive video documentation',
      '30-day post-launch warranty and monitoring activation'
    ],
    deliverables: [
      'Live Production Release across Global Edge CDN',
      'Complete Developer Handover Manual & Runbooks',
      'DNS & SSL Certificate Management transfer',
      'Automated Uptime, Error & Sentry Monitoring Dashboards'
    ],
    tools: ['Cloudflare', 'AWS / Vercel', 'Datadog / Sentry', 'Google Search Console']
  }
];

export const openPositions = [
  {
    id: 'senior-frontend-architect',
    title: 'Senior Frontend Architect',
    department: 'Engineering',
    location: 'Remote / Global',
    type: 'Full-time',
    experience: '6+ years',
    salary: '$140k – $180k + Equity',
    description: 'We are seeking an exceptional frontend architect to lead the technical direction of high-profile client applications, shape our internal design token systems, and push the boundaries of WebGL and modern React performance.',
    responsibilities: [
      'Architect resilient, accessible, and high-performance React applications.',
      'Mentor intermediate engineers on clean code practices, testing, and modern patterns.',
      'Collaborate with design directors to bring intricate motion choreography to life.',
      'Conduct rigorous code reviews and participate in architectural sprint planning.'
    ],
    requirements: [
      'Deep mastery of React, modern JavaScript (ESNext), TypeScript, and CSS/Tailwind.',
      'Demonstrated experience with Three.js / WebGL / Canvas interactive rendering.',
      'Obsession with 60fps animations, smooth scrolling, and Core Web Vitals optimization.',
      'Strong eye for typography, spatial grids, and micro-interactions.'
    ],
    niceToHaves: [
      'Experience with Rust / WebAssembly for client-side compute.',
      'Active open-source contributions or design system maintenance.',
      'Familiarity with React Server Components and edge runtimes.'
    ]
  },
  {
    id: 'creative-technologist-3d',
    title: 'Creative Technologist (3D & Motion)',
    department: 'Design & Motion',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$120k – $160k + Equity',
    description: 'Join our creative laboratory to invent memorable digital moments. You will bridge the gap between creative visual art and production WebGL, authoring real-time shaders and interactive 3D sculptures.',
    responsibilities: [
      'Prototype and execute real-time 3D experiences using Three.js and custom GLSL shaders.',
      'Collaborate with brand designers to craft sculptural 3D assets optimized for web.',
      'Ensure 3D scenes degrade gracefully across mobile screens and reduced-motion states.',
      'Push the technical envelope with audio-reactive and physics-driven web interactions.'
    ],
    requirements: [
      'Proficiency with Three.js, React Three Fiber, GLSL fragment/vertex shaders, and Blender.',
      'Understanding of 3D asset optimization (Draco compression, texture packing, draw calls).',
      'Strong aesthetic sensitivity for lighting, materials, and camera choreography.',
      'Solid foundation in modern web technologies (HTML5, JavaScript, CSS).'
    ],
    niceToHaves: [
      'Experience with Houdini or TouchDesigner for procedural asset generation.',
      'Knowledge of WebGPU APIs and modern compute pipelines.',
      'Background in interactive sound design or Web Audio API.'
    ]
  },
  {
    id: 'fullstack-engineer-ai',
    title: 'Fullstack AI Systems Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$135k – $175k + Equity',
    description: 'Lead the development of custom enterprise AI workflows, RAG knowledge retrieval systems, and agentic orchestration pipelines with rigorous reliability and data privacy.',
    responsibilities: [
      'Build end-to-end generative AI features connecting LLMs with private customer data stores.',
      'Implement multi-agent consensus workflows using LangGraph and Python FastAPI.',
      'Design clean, responsive React interfaces for visual workflow inspection and citation verification.',
      'Establish automated evaluation benchmarks to eliminate hallucinations in production.'
    ],
    requirements: [
      'Solid production experience with Python (FastAPI/AsyncIO) and TypeScript (React/Node).',
      'Demonstrated experience implementing RAG, vector embeddings, and hybrid search.',
      'Understanding of containerization, cloud networking, and private VPC deployment.',
      'Commitment to data governance, privacy guardrails, and model telemetry.'
    ],
    niceToHaves: [
      'Hands-on experience fine-tuning open-weights models (Llama, Mistral).',
      'Experience with streaming WebSockets and server-sent events for real-time inference.',
      'Familiarity with Langfuse, TruLens, or similar LLM evaluation toolkits.'
    ]
  },
  {
    id: 'senior-product-designer',
    title: 'Senior Product Designer (UI/UX)',
    department: 'Product Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$120k – $155k + Equity',
    description: 'Shape the visual soul of complex digital products. You will turn intricate operational data into elegant, tactile, and effortless user experiences with meticulous typographic discipline.',
    responsibilities: [
      'Lead design engagements from initial stakeholder discovery to high-fidelity handoff.',
      'Architect design token libraries and reusable Figma components with auto-layout precision.',
      'Produce clickable micro-interaction prototypes that guide engineering implementation.',
      'Conduct user testing and synthesize quantitative analytics into product improvements.'
    ],
    requirements: [
      'Stunning portfolio demonstrating editorial layout, typography mastery, and systematic UX.',
      'Expert-level mastery of Figma, variants, component properties, and token variables.',
      'Deep understanding of frontend implementation constraints and developer handoff.',
      'Excellent written and verbal presentation skills to articulate design rationale.'
    ],
    niceToHaves: [
      'Ability to write HTML/CSS or prototype directly in code.',
      'Experience designing B2B SaaS platforms or high-density dashboards.',
      'Knowledge of design tokens sync via Style Dictionary.'
    ]
  }
];

export const companyValues = [
  {
    number: '01',
    title: 'Clarity Over Complexity',
    desc: 'The best engineering and design simplifies the complex. We reject gratuitous abstraction, corporate jargon, and decorative clutter in favor of crisp visual hierarchy and lucid code.'
  },
  {
    number: '02',
    title: 'Design-Led Engineering',
    desc: 'We do not treat engineering as an afterthought to design, nor design as a decorative skin over code. We treat both as equal halves of the same holistic craft.'
  },
  {
    number: '03',
    title: 'Craft in the Details',
    desc: 'From sub-millisecond keyboard focus rings to subtle spring physics on button hover, we believe thoughtful micro-interactions are where genuine digital quality is felt.'
  },
  {
    number: '04',
    title: 'Radical Transparency',
    desc: 'We operate with complete honesty. No inflated vanity metrics, no hidden markups, and no black-box development. Our clients see code commits and staging links as they happen.'
  },
  {
    number: '05',
    title: 'Continuous Evolution',
    desc: 'Technology shifts rapidly. We allocate 15% of our studio time to open experimentation with emerging paradigms—from WebGL shaders to autonomous agent workflows.'
  }
];

export const companyPerks = [
  { title: 'Remote-First Autonomy', desc: 'Work from wherever you do your best thinking. We measure output and craft, not desk hours.' },
  { title: 'Top-Tier Equipment', desc: 'High-spec MacBook Pro or workstation, dual monitors, and an annual ergonomic home office stipend.' },
  { title: '$4,000 Annual Learning Grant', desc: 'Generous funding for books, international conferences, design workshops, and courses.' },
  { title: 'Comprehensive Health & Wellness', desc: 'Complete health, dental, and vision coverage plus monthly wellness and mental health stipends.' },
  { title: 'Quarterly Studio Retreats', desc: 'Collaborative retreats in inspiring global locations to build camaraderie and experiment together.' },
  { title: 'Autonomous Focus Days', desc: 'Meeting-free Wednesdays and dedicated Friday experimentation time to explore personal creative projects.' }
];
