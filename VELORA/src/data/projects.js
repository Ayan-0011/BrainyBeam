export const projects = [
  {
    slug: 'apexfin-wealth-platform',
    title: 'ApexFin Next-Gen Wealth OS',
    subtitle: 'Institutional-grade asset management platform with real-time portfolio simulations and algorithmic telemetry.',
    client: 'Apex Financial Technologies',
    category: 'Custom Software',
    categorySlug: 'custom-software',
    year: '2025',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WebSockets', 'Chart.js', 'Fintech'],
    demoMetrics: [
      { label: 'Sub-millisecond latency', value: '<4ms', detail: 'Real-time WebSocket market updates' },
      { label: 'Asset simulation throughput', value: '100k+', detail: 'Stress-test vectors per second' },
      { label: 'User engagement jump', value: '98.7%', detail: 'Illustrative client platform rating' }
    ],
    objective: 'Replace fragmented legacy trading and portfolio management software with a unified, high-speed web interface that provides institutional advisors instant scenario modeling, automated rebalancing, and transparent compliance tracking.',
    challenge: 'Handling dense data tables with thousands of streaming quotes simultaneously without thread-locking the browser UI or causing layout thrashing during extreme market volatility.',
    solution: 'Engineered a virtualized canvas-accelerated data grid coupled with Web Workers for real-time risk variance calculations. Designed an ultra-focused dark and sand aesthetic with high-contrast typography, reducing cognitive load for financial analysts during intensive trading windows.',
    approach: [
      {
        title: 'High-Throughput Streaming Engine',
        desc: 'Implemented an off-main-thread Web Worker architecture to ingest and parse binary WebSocket streams, isolating state calculations from the React rendering loop.'
      },
      {
        title: 'Spatial Information Hierarchy',
        desc: 'Constructed an adaptive modular grid allowing advisors to configure dual-pane comparisons, depth charts, and automated order routing with keyboard shortcuts.'
      },
      {
        title: 'Compliance & Audit Integrity',
        desc: 'Embedded immutable event logging with cryptographic audit stamps for all rebalancing recommendations.'
      }
    ],
    keyFeatures: [
      { title: 'Dynamic Monte Carlo Simulator', desc: 'Run 10,000 retirement and market stress simulations in under 2 seconds directly client-side.' },
      { title: 'Customizable Bento Dashboards', desc: 'Draggable, resizable telemetry cards with persistent user workspace profiles.' },
      { title: 'Zero-Latency Order Dispatch', desc: 'Instant execution confirmation with optimistic UI updates and socket failover fallbacks.' },
      { title: 'Regulatory Reporting Generator', desc: 'One-click PDF/CSV export conforming to global FINRA and MiFID II disclosure standards.' }
    ],
    architecture: {
      frontend: 'React 18 / 19, TypeScript, Tailwind CSS, TanStack Virtual, Three.js visualization',
      backend: 'Node.js, Go microservices, Redis Pub/Sub, Kafka event streams',
      database: 'TimescaleDB for time-series data, PostgreSQL for tenant profiles',
      deployment: 'AWS ECS, Cloudflare Edge Workers, Terraform'
    },
    takeaways: 'Delivered an enterprise-scale architecture that proves web technologies can rival native desktop applications in raw performance, visual precision, and data throughput.'
  },
  {
    slug: 'kroma-creative-studio',
    title: 'Kroma Generative Brand Platform',
    subtitle: 'Dynamic web ecosystem and interactive generative design system for a global digital arts collective.',
    client: 'Kroma Collective',
    category: 'Web Development',
    categorySlug: 'web-development',
    year: '2025',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1800&auto=format&fit=crop',
    tags: ['WebGL', 'Three.js', 'Framer Motion', 'React', 'Tailwind CSS', 'Headless CMS'],
    demoMetrics: [
      { label: 'Interactive Canvas FPS', value: '60 FPS', detail: 'Smooth 3D across mobile & desktop' },
      { label: 'Asset Load Optimization', value: '-65%', detail: 'Drastic bundle size reduction via Draco' },
      { label: 'Average Session Time', value: '4m 42s', detail: 'Deep portfolio immersion' }
    ],
    objective: 'Build an avant-garde digital home that showcases experimental 3D artwork, dynamic interactive shaders, and an editorial commerce experience without sacrificing accessibility or mobile performance.',
    challenge: 'Balancing visually intense WebGL shaders with fast load times and clean SEO-friendly HTML content structures across low-end mobile devices.',
    solution: 'Designed an adaptive rendering pipeline: devices with hardware acceleration receive real-time raymarched shaders and fluid simulations, while devices with power constraints seamlessly fall back to lightweight pre-computed WebP sequences and smooth CSS micro-interactions.',
    approach: [
      {
        title: 'Generative Shader Aesthetics',
        desc: 'Authored custom GLSL fragment shaders reacting to cursor physics, ambient audio frequencies, and scroll velocity.'
      },
      {
        title: 'Editorial Typography & Whitespace',
        desc: 'Balanced futuristic generative visuals with disciplined Swiss typography and tactile sand-toned surfaces.'
      },
      {
        title: 'Headless Global Distribution',
        desc: 'Integrated a headless CMS delivering localized exhibition schedules, artist portfolios, and limited merchandise drops.'
      }
    ],
    keyFeatures: [
      { title: 'Interactive Audio-Reactive Shaders', desc: 'Real-time WebGL canvas that sculpts ambient visual landscapes responding to interaction.' },
      { title: 'Editorial Exhibition Archive', desc: 'Curated timeline of past digital exhibitions with high-res zoomable canvas inspect.' },
      { title: 'Micro-Interactions & Cursor Physics', desc: 'Custom magnet cursor and smooth momentum scrolling built with Lenis and Framer Motion.' },
      { title: 'Universal Dark/Warm Sand Themes', desc: 'Dynamic palette switching preserving optical contrast and ambient mood.' }
    ],
    architecture: {
      frontend: 'React, Three.js, React Three Fiber, GLSL Shaders, Framer Motion, Tailwind CSS',
      backend: 'Next.js Serverless Routes, Strapi Headless CMS, AWS S3 / CloudFront',
      database: 'PostgreSQL for exhibition indexing',
      deployment: 'Vercel Edge Network, Fastly Image Optimization'
    },
    takeaways: 'Pioneered an artistic yet functional digital home that earned widespread acclaim in the design community while sustaining 99+ Google Lighthouse performance scores.'
  },
  {
    slug: 'pulse-telehealth-ecosystem',
    title: 'Pulse Intelligent Health Companion',
    subtitle: 'HIPAA-ready cross-platform patient telemetry, encrypted teleconsultation, and proactive wellness monitoring.',
    client: 'Pulse Health Technologies',
    category: 'Mobile Applications',
    categorySlug: 'mobile-applications',
    year: '2024',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1800&auto=format&fit=crop',
    tags: ['React Native', 'WebRTC', 'TypeScript', 'Node.js', 'HIPAA Compliant', 'IoT Telemetry'],
    demoMetrics: [
      { label: 'Video Call Latency', value: '<120ms', detail: 'Adaptive WebRTC mesh streaming' },
      { label: 'Diagnostic Sync Time', value: 'Instant', detail: 'Offline-first SQLite local store' },
      { label: 'Platform Availability', value: '99.99%', detail: 'Zero clinical downtime' }
    ],
    objective: 'Empower patients managing chronic conditions to continuously sync biometric sensors, consult board-certified physicians over crystal-clear encrypted video, and receive personalized lifestyle nudges.',
    challenge: 'Maintaining real-time video call stability across spotty cellular connections while guaranteeing zero-knowledge encryption for electronic health records and biometric data streams.',
    solution: 'Constructed an adaptive WebRTC peer-to-peer mesh with automatic fallback to selective forwarding units (SFU). Engineered an offline-first mobile sync engine that queues encrypted vital logs locally and synchronizes upon reconnect.',
    approach: [
      {
        title: 'Zero-Knowledge Security Perimeter',
        desc: 'Implemented client-side AES-256-GCM encryption for all biometric streams prior to cloud transit.'
      },
      {
        title: 'Human-Centered Clinical UX',
        desc: 'Designed high-legibility typographic cards with warm, calming cream and sand backgrounds to soothe patient anxiety.'
      },
      {
        title: 'Continuous Vitals Ingestion',
        desc: 'Created Bluetooth Low Energy (BLE) background daemons to sync blood pressure monitors, pulse oximeters, and glucometers.'
      }
    ],
    keyFeatures: [
      { title: 'One-Tap Encrypted Teleconsultation', desc: 'Secure WebRTC video rooms with integrated live transcription and clinical note assists.' },
      { title: 'Interactive Biometric Dashboards', desc: 'Trend analysis charts showing weekly glucose, heart rate variability, and sleep correlations.' },
      { title: 'Smart Medication Reminders', desc: 'Context-aware push notifications with snooze safeguards and adherence tracking.' },
      { title: 'Emergency Escalation Dispatch', desc: 'Automated urgent care alert triggering when vitals breach pre-set clinical thresholds.' }
    ],
    architecture: {
      frontend: 'React Native, Expo, TypeScript, NativeWind, Reanimated 3',
      backend: 'Node.js, WebRTC MediaSoup SFU, Redis, RabbitMQ',
      database: 'PostgreSQL with Row-Level Security, DynamoDB for transient telemetries',
      deployment: 'AWS HealthLake, HIPAA-compliant Kubernetes cluster'
    },
    takeaways: 'Modernized the patient-doctor relationship through an intuitive, accessible interface that eliminates friction during critical care moments.'
  },
  {
    slug: 'lumina-cognitive-automation',
    title: 'Lumina Autonomous Workflow AI',
    subtitle: 'Enterprise agentic intelligence engine for automated contract comprehension, regulatory compliance, and ERP orchestration.',
    client: 'Lumina Intelligence Labs',
    category: 'AI & Automation',
    categorySlug: 'ai-automation',
    year: '2025',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1800&auto=format&fit=crop',
    tags: ['AI / LLMs', 'LangChain', 'Python', 'React', 'Vector DB', 'Tailwind CSS', 'FastAPI'],
    demoMetrics: [
      { label: 'Contract Processing Speed', value: '18x faster', detail: 'Semantic legal extraction' },
      { label: 'Hallucination Mitigation', value: '99.4%', detail: 'RAG verification with citation links' },
      { label: 'Manual Review Reduction', value: '-82%', detail: 'Automated discrepancy flagging' }
    ],
    objective: 'Transform thousands of hours of manual procurement and legal compliance workflows into self-governing, transparent AI agent pipelines with human-in-the-loop oversight.',
    challenge: 'Preventing LLM hallucinations in high-stakes regulatory filings and providing explainable citation trails for every extracted data point and recommended action.',
    solution: 'Designed a multi-agent consensus system backed by dense vector retrieval (RAG) and hybrid BM25 lexical search. Built an intuitive visual workflow editor where operations teams can inspect decision graphs, verify source document highlights, and calibrate agent confidence thresholds.',
    approach: [
      {
        title: 'Multi-Agent Consensus Architecture',
        desc: 'Deployed specialized sub-agents (Parser, Verifier, Auditor) that cross-examine extractions before committing updates.'
      },
      {
        title: 'Visual Workflow Builder',
        desc: 'Crafted a node-based interactive canvas allowing non-technical legal teams to customize decision criteria visually.'
      },
      {
        title: 'Cryptographic Citation Tracking',
        desc: 'Linked every AI insight to exact bounding boxes and page indices in the underlying PDF documents.'
      }
    ],
    keyFeatures: [
      { title: 'Interactive Source Bounding Inspector', desc: 'Click any extracted clause to highlight the exact paragraph in the original PDF viewer.' },
      { title: 'Autonomous Multi-Step Agent Chains', desc: 'Executes complex validation sequences across Salesforce, SAP, and internal ERP systems.' },
      { title: 'Confidence Calibration Thresholds', desc: 'Automatically flags low-confidence extractions for immediate human review.' },
      { title: 'Enterprise Audit Trail & Governance', desc: 'Complete provenance log recording model temperature, prompts, and agent consensus logs.' }
    ],
    architecture: {
      frontend: 'React, Tailwind CSS, React Flow for DAG workflows, PDF.js integration',
      backend: 'FastAPI (Python), Celery distributed task queue, LangGraph',
      database: 'Qdrant Vector Database, PostgreSQL for workflow states',
      deployment: 'Private VPC on GCP, Azure OpenAI Private Endpoints, Docker'
    },
    takeaways: 'Proved that generative AI achieves enterprise trust when coupled with transparent citations, intuitive visual workflows, and deterministic guardrails.'
  },
  {
    slug: 'omnisync-supply-chain-cloud',
    title: 'OmniSync Global Logistics Mesh',
    subtitle: 'Decentralized multi-modal freight tracking, predictive disruption detection, and automated customs filing.',
    client: 'OmniSync Freight Systems',
    category: 'Custom Software',
    categorySlug: 'custom-software',
    year: '2024',
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1800&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Mapbox GL', 'Node.js', 'PostgreSQL', 'Docker'],
    demoMetrics: [
      { label: 'Active Vessel Telemetry', value: '45,000+', detail: 'Global maritime & air tracking' },
      { label: 'Disruption Prediction Window', value: '72 hrs', detail: 'Weather and port congestion alerts' },
      { label: 'Customs Clearance Automation', value: '94%', detail: 'Direct EDI and API filings' }
    ],
    objective: 'Provide global freight forwarders an all-in-one control tower that predicts supply chain disruptions days in advance and automates cross-border customs declarations.',
    challenge: 'Aggregating noisy satellite AIS feeds, airline manifests, and maritime telemetry into a single real-time geospatial canvas without performance degradation.',
    solution: 'Built a GPU-accelerated Mapbox vector layer displaying tens of thousands of simultaneous shipping routes with spatial clustering, live weather overlays, and predictive ETA algorithms.',
    approach: [
      {
        title: 'Geospatial Telemetry Processing',
        desc: 'Streaming AIS satellite coordinates through spatial partitioning queues for seamless map rendering.'
      },
      {
        title: 'Predictive Delay Modeling',
        desc: 'Synthesizing historical port turnaround times and severe weather forecasts to calculate dynamic arrival windows.'
      },
      {
        title: 'Automated Regulatory EDI Bridge',
        desc: 'Translating shipment manifests directly into formatted customs filings for global border agencies.'
      }
    ],
    keyFeatures: [
      { title: 'Global Multi-Modal Vessel Tracker', desc: 'Real-time 3D globe and interactive map with vessel heading, speed, and draft statistics.' },
      { title: 'Automated Bill of Lading Verification', desc: 'OCR and semantic cross-referencing between purchase orders and carrier receipts.' },
      { title: 'Port Congestion Radar', desc: 'Predictive queue times for top 100 global sea and air freight terminals.' },
      { title: 'Collaborative Incident Rooms', desc: 'Shared incident workspaces for carriers, shippers, and customs brokers with audit histories.' }
    ],
    architecture: {
      frontend: 'React, Mapbox GL JS, Deck.gl, Tailwind CSS, TypeScript',
      backend: 'Go microservices, Node.js API Gateway, Kafka for AIS streams',
      database: 'PostGIS / PostgreSQL, Redis for spatial indexing',
      deployment: 'AWS EKS, CloudFront, Terraform'
    },
    takeaways: 'Eliminated black-box supply chain blind spots, giving international enterprises continuous visibility into their mission-critical inventory.'
  },
  {
    slug: 'velora-design-system-core',
    title: 'Velora Design System & Tokens',
    subtitle: 'Unified multi-platform component library, motion language, and design token architecture powering modern enterprise software.',
    client: 'Velora Open Systems',
    category: 'Web Development',
    categorySlug: 'web-development',
    year: '2025',
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1800&auto=format&fit=crop',
    tags: ['Design Systems', 'React', 'Tailwind CSS', 'Framer Motion', 'Accessibility', 'Figma Tokens'],
    demoMetrics: [
      { label: 'Component Accessibility', value: '100% WCAG', detail: 'AA/AAA compliant throughout' },
      { label: 'Engineering Velocity Increase', value: '+3.5x', detail: 'Pre-tested composable primitives' },
      { label: 'Design Token Platforms', value: '4 Systems', detail: 'Web, React Native, iOS, Android' }
    ],
    objective: 'Establish an authoritative, cohesive visual and architectural language uniting design tokens, React primitives, accessible interactions, and fluid motion across all digital touchpoints.',
    challenge: 'Ensuring absolute consistency in design tokens (colors, typography, spacing, elevation) while providing sufficient flexibility for diverse industry requirements.',
    solution: 'Constructed an automated Style Dictionary pipeline synchronizing Figma design tokens with CSS Custom Properties, Tailwind configuration, and TypeScript types.',
    approach: [
      {
        title: 'Single Source of Token Truth',
        desc: 'Transformed raw JSON design tokens into platform-specific CSS variables, iOS Swift constants, and Android XML styles.'
      },
      {
        title: 'Keyboard & Screen Reader First',
        desc: 'Engineered every component with full ARIA semantics, roving focus management, and WCAG contrast conformance.'
      },
      {
        title: 'Motion with Purpose',
        desc: 'Defined standard easing curves and spring physics that convey physical weight and responsive delight.'
      }
    ],
    keyFeatures: [
      { title: 'Interactive Component Playground', desc: 'Real-time property inspector for testing states, sizes, variants, and keyboard focus.' },
      { title: 'Theme Engine with Contrast Guard', desc: 'Dynamic palette generation that mathematically enforces WCAG AAA contrast ratios.' },
      { title: 'Production-Ready Micro-Interactions', desc: 'Fine-tuned Framer Motion hooks for drawers, accordions, tooltips, and modals.' },
      { title: 'Automated Accessibility Linters', desc: 'CI checks that guarantee zero regressions in ARIA roles, color contrast, and tap targets.' }
    ],
    architecture: {
      frontend: 'React, TypeScript, Tailwind CSS, Radix UI Primitives, Framer Motion',
      pipeline: 'Style Dictionary, Storybook, GitHub Actions, Chromatic visual testing',
      deployment: 'NPM package registry & hosted interactive documentation site'
    },
    takeaways: 'Empowered engineering and product teams to deliver cohesive, accessible, and delightful digital experiences at scale.'
  }
];

export const projectCategories = [
  { id: 'all', name: 'All Work' },
  { id: 'web-development', name: 'Web Development' },
  { id: 'mobile-applications', name: 'Mobile Applications' },
  { id: 'custom-software', name: 'Custom Software' },
  { id: 'ai-automation', name: 'AI & Automation' }
];
