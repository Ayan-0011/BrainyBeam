export const services = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    tagline: 'High-performance web applications, digital flagships, and headless architectures.',
    shortDesc: 'We build ultra-fast, visually captivating, and accessible web experiences engineered to convert and scale.',
    fullDesc: 'From high-conversion brand flagships to complex enterprise web applications, we combine editorial design with battle-tested frontend engineering. We leverage React, modern meta-frameworks, WebGL shaders, and headless content architecture to deliver digital experiences that load in milliseconds and leave lasting impressions.',
    heroAccent: 'Vibrant Orange Canvas',
    capabilities: [
      { name: 'Marketing & Brand Flagships', desc: 'Editorial visual narratives, interactive storytelling, and fluid motion.' },
      { name: 'Complex Web Applications', desc: 'High-throughput SPAs with state management and real-time data sync.' },
      { name: 'Headless CMS & Architecture', desc: 'Decoupled content backends (Sanity, Strapi, Contentful) with edge deployment.' },
      { name: 'Performance & Web Vitals', desc: 'Sub-second load times, 95+ Core Web Vitals, and asset optimization.' },
      { name: 'WebGL & Interactive 3D', desc: 'Art-directed 3D environments and shader physics built with Three.js.' },
      { name: 'WCAG AAA Accessibility', desc: 'Inclusive keyboard navigation, ARIA semantics, and screen reader conformance.' }
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'GraphQL', 'Vite'],
    deliverables: ['Custom Component Architecture', 'Production Edge Deployment', 'Styleguide & Storybook', 'Automated CI/CD Pipeline'],
    idealFor: 'Forward-thinking brands, high-growth startups, and enterprises seeking distinct digital authority.'
  },
  {
    id: 'mobile-applications',
    number: '02',
    title: 'Mobile Applications',
    tagline: 'Cross-platform mobile products with native-grade performance and fluid gestures.',
    shortDesc: 'We craft intuitive mobile applications that live comfortably in your customers’ hands.',
    fullDesc: 'We design and engineer mobile applications that feel fluid, responsive, and tactile. Using modern cross-platform frameworks, we deliver unified iOS and Android codebases that eliminate duplicate engineering costs without sacrificing 60fps animations, native camera/sensor integrations, or offline reliability.',
    heroAccent: 'Haptic & Gesture Precision',
    capabilities: [
      { name: 'Cross-Platform React Native', desc: 'Single high-velocity codebase targeting iOS, iPadOS, and Android.' },
      { name: 'Fluid Micro-Gestures', desc: 'Physics-based sheet interactions, tactile feedback, and seamless transitions.' },
      { name: 'Offline-First Architecture', desc: 'Local SQLite/WatermelonDB caching with resilient background sync.' },
      { name: 'Device Hardware Integration', desc: 'Biometric authentication, BLE peripheral sync, camera vision, and geolocation.' },
      { name: 'App Store Launch Readiness', desc: 'End-to-end management of Apple App Store and Google Play compliance.' },
      { name: 'Push Telemetry & Analytics', desc: 'Segmented messaging, behavioral cohorts, and automated crash reporting.' }
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Reanimated', 'SQLite', 'WebSockets', 'Firebase', 'Fastlane'],
    deliverables: ['TestFlight & Play Console Builds', 'Native Bridge Integrations', 'Offline Storage Architecture', 'Submission Documentation'],
    idealFor: 'Product companies expanding to mobile, connected hardware platforms, and customer-centric service brands.'
  },
  {
    id: 'custom-software',
    number: '03',
    title: 'Custom Software',
    tagline: 'Internal business tools, operational operating systems, and scalable API platforms.',
    shortDesc: 'We engineer bespoke software systems that automate manual overhead and unlock organizational velocity.',
    fullDesc: 'When off-the-shelf software bottlenecks your operations, VELORA builds tailored enterprise systems designed around your exact workflows. We build internal dashboards, ERP orchestration hubs, automated billing engines, and secure role-based portals that unify fragmented databases into coherent digital command centers.',
    heroAccent: 'Modular High-Scale Architecture',
    capabilities: [
      { name: 'Enterprise Dashboards & Portals', desc: 'High-density data visualization, drill-downs, and customizable bento layouts.' },
      { name: 'Workflow & Process Automation', desc: 'Eliminate repetitive manual data entry with event-driven background queues.' },
      { name: 'Granular Role-Based Access Control', desc: 'SOC2-ready authentication, multi-tenant isolation, and audit trails.' },
      { name: 'REST & GraphQL API Gateways', desc: 'Scalable service layer uniting legacy SQL databases with modern frontends.' },
      { name: 'Data Pipeline Engineering', desc: 'ETL ingestion, real-time message streaming, and distributed indexing.' },
      { name: 'Cloud Infrastructure as Code', desc: 'Containerized Kubernetes/ECS deployments with Terraform automation.' }
    ],
    techStack: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'AWS / GCP', 'Kafka'],
    deliverables: ['Custom Backend & API Gateway', 'Admin Management UI', 'Database Schemas & Migrations', 'DevOps Infrastructure'],
    idealFor: 'Logistics operators, fintech innovators, healthcare networks, and scaleups with complex operational data.'
  },
  {
    id: 'ai-automation',
    number: '04',
    title: 'AI & Automation',
    tagline: 'Practical agentic workflows, conversational assistants, and cognitive document systems.',
    shortDesc: 'We integrate intelligent agents and generative models into real-world business pipelines with human-in-the-loop oversight.',
    fullDesc: 'Beyond theoretical AI hype, VELORA delivers pragmatic artificial intelligence features that solve tangible business problems. We construct retrieval-augmented generation (RAG) engines, autonomous document parsing pipelines, intelligent customer assistants, and predictive models that integrate directly into your existing software stack.',
    heroAccent: 'Explainable Agentic Intelligence',
    capabilities: [
      { name: 'Cognitive Document Ingestion', desc: 'Extract unstructured data from PDFs, contracts, and receipts with citation proofs.' },
      { name: 'Retrieval-Augmented Generation (RAG)', desc: 'Domain-specific enterprise knowledge bases with sub-second semantic search.' },
      { name: 'Autonomous Multi-Agent Workflows', desc: 'Chained reasoning systems that orchestrate multi-step research and data reconciliation.' },
      { name: 'Custom AI Assistant Interfaces', desc: 'Conversational frontends equipped with prompt safeguards and streaming responses.' },
      { name: 'Model Fine-Tuning & Evaluation', desc: 'Continuous benchmark testing to minimize hallucinations and optimize cost-per-token.' },
      { name: 'Enterprise Privacy & Guardrails', desc: 'Private VPC deployments ensuring proprietary data is never used to train public models.' }
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Qdrant / Pinecone', 'OpenAI / Claude APIs', 'React Flow', 'Docker'],
    deliverables: ['Vector Retrieval Pipeline', 'Agent Workflow Orchestrator', 'Citation Inspector UI', 'Data Privacy Architecture'],
    idealFor: 'Professional service firms, compliance officers, customer support organizations, and data-heavy enterprises.'
  }
];

export const engagementModels = [
  {
    title: 'Dedicated Product Squad',
    subtitle: 'Integrated multi-disciplinary team',
    desc: 'An end-to-end team of senior product designers, frontend architects, and backend engineers embedded directly with your stakeholders for sustained velocity.',
    bestFor: 'High-growth startups and enterprises building multi-quarter product initiatives.',
    features: ['Full-time dedicated team', 'Sprint-based agile delivery', 'Direct Slack/Teams communication', 'Continuous code commits']
  },
  {
    title: 'Fixed-Scope Product Sprint',
    subtitle: 'Milestone-driven project delivery',
    desc: 'Clearly defined discovery, design, and development phases tailored to specific product launches, platform overhauls, or MVP builds.',
    bestFor: 'Defined products with clear deliverables, deadlines, and strict launch dates.',
    features: ['Clear milestone deadlines', 'Guaranteed scope & budget', 'Weekly stage-gate demos', 'Complete handoff & training']
  },
  {
    title: 'Architecture Advisory & Co-Build',
    subtitle: 'Strategic engineering leadership',
    desc: 'Senior technical direction and hands-on architecture to guide your internal teams, unblock complex technical hurdles, and establish design systems.',
    bestFor: 'Companies with existing engineers who need specialized 3D, AI, or design system guidance.',
    features: ['Technical architecture blueprints', 'Pair programming & code reviews', 'Design token foundations', 'Security & performance audits']
  }
];

export const servicesFAQs = [
  {
    q: 'How does VELORA ensure projects stay on schedule and within budget?',
    a: 'Every engagement begins with our rigorous Discovery and Architecture phase. We break projects into two-week observable sprints, each concluding with an interactive staging build. You have real-time visibility into burndown, blockers, and deliverables without unexpected surprises.'
  },
  {
    q: 'Do you hand over full IP ownership and source code after completion?',
    a: 'Yes, 100%. All custom code, design tokens, Figma libraries, 3D assets, and cloud deployment scripts are entirely your intellectual property upon final project settlement.'
  },
  {
    q: 'Can VELORA integrate with our existing backend or internal engineering team?',
    a: 'Absolutely. We frequently operate as a specialized force multiplier. Whether consuming legacy SOAP/REST APIs, building modern React frontends against microservices, or co-authoring shared design token libraries, our engineers adapt seamlessly to your technical ecosystem.'
  },
  {
    q: 'What level of post-launch support and warranty do you provide?',
    a: 'Every completed build comes with our standard 30-day post-launch warranty covering defect remediation and performance tuning. Following the warranty window, we offer flexible SLA-backed maintenance and continuous optimization retainers.'
  },
  {
    q: 'How do you handle data privacy and security when building AI features?',
    a: 'We strictly configure private, zero-retention API endpoints or self-hosted open-weights models inside your secure cloud VPC. Your proprietary business data, customer inputs, and internal documents are never leaked or used for external model training.'
  }
];
