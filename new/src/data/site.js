export const navigation = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Process", to: "/process" },
  { label: "Insights", to: "/insights" },
];

export const services = [
  {
    number: "01",
    slug: "web-development",
    title: "Web Development",
    description: "Responsive, accessible websites and web applications shaped around your users and business workflows.",
    deliverables: ["Product discovery and requirements mapping", "Responsive UI architecture and reusable components", "API integration and data handling", "Accessibility, performance, and cross-browser checks", "Deployment planning and handover documentation"],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "REST APIs"],
  },
  {
    number: "02",
    slug: "product-engineering",
    title: "Product Engineering",
    description: "Turn an early product idea into a maintainable application with clear user journeys and practical architecture.",
    deliverables: ["Feature definition and user journeys", "Interactive prototypes and UI implementation", "Authentication and authorization planning", "Data modelling and API contracts", "Testing strategy and release checklist"],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    number: "03",
    slug: "business-automation",
    title: "Business Automation",
    description: "Reduce repetitive manual work by connecting tools, APIs, notifications, and operational workflows.",
    deliverables: ["Workflow mapping and automation opportunities", "API and webhook integrations", "Validation and failure handling", "Notifications and status visibility", "Operational documentation"],
    technologies: ["Node.js", "REST APIs", "Webhooks", "n8n", "PostgreSQL"],
  },
  {
    number: "04",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Clear, consistent interfaces that help people understand a product and complete important tasks with less friction.",
    deliverables: ["Information architecture and page flows", "Wireframes and interaction states", "Responsive design system", "Accessibility considerations", "Design-to-development handoff"],
    technologies: ["Figma", "Design systems", "Prototyping", "Accessibility", "Responsive UI"],
  },
  {
    number: "05",
    slug: "cloud-and-integrations",
    title: "Cloud & Integrations",
    description: "Connect product experiences to dependable services, deployment workflows, and third-party platforms.",
    deliverables: ["Integration requirements and API review", "Environment and configuration planning", "Authentication and secret-handling guidance", "Deployment pipeline recommendations", "Monitoring and maintenance considerations"],
    technologies: ["Vercel", "Render", "Docker", "REST APIs", "GitHub Actions"],
  },
  {
    number: "06",
    slug: "data-dashboards",
    title: "Data Dashboards",
    description: "Useful operational dashboards that turn complex records into clear, actionable views for teams.",
    deliverables: ["Role-based dashboard requirements", "Data tables, filters, and status views", "Charts and key operational indicators", "Permission and validation planning", "Responsive layouts and export considerations"],
    technologies: ["React", "Chart libraries", "Node.js", "MongoDB", "PostgreSQL"],
  },
];

export const projects = [
  {
    slug: "fieldnote-operations",
    title: "Fieldnote",
    type: "Concept project",
    category: "Operations dashboard",
    description: "A concept dashboard for teams coordinating field tasks, status updates, and day-to-day operational activity.",
    problem: "Teams working across multiple locations can struggle to keep task status, ownership, and operational updates in one clear place.",
    solution: "A dashboard concept that brings task ownership, status summaries, and activity into a consistent interface with clear navigation.",
    features: ["Role-aware overview concept", "Task status and assignment views", "Responsive dashboard layout", "Activity and notification patterns"],
    technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    color: "#E8F3ED",
  },
  {
    slug: "morrow-commerce",
    title: "Morrow",
    type: "Concept project",
    category: "Digital commerce",
    description: "A considered commerce concept focused on product discovery, clear product information, and a simpler checkout journey.",
    problem: "Dense product pages and unclear purchase steps can create unnecessary friction for shoppers browsing a catalogue.",
    solution: "A calm shopping interface with readable product information, purposeful filters, and a clear path from discovery to cart.",
    features: ["Product collection and filtering concept", "Product detail layouts", "Cart and checkout journey", "Mobile-first shopping patterns"],
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    color: "#F0E9D9",
  },
  {
    slug: "wellnest-care",
    title: "Wellnest",
    type: "Concept project",
    category: "Healthcare experience",
    description: "A healthcare booking concept that helps visitors understand services and move through an appointment request.",
    problem: "Visitors may find it difficult to compare service information and understand the steps required to request an appointment.",
    solution: "A structured experience with service summaries, an accessible booking form concept, and clear confirmation states.",
    features: ["Service information architecture", "Appointment request form concept", "Accessible form states", "Responsive patient-facing layouts"],
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    color: "#E7EEF7",
  },
];

export const processSteps = [
  { number: "01", title: "Discover", description: "Understand the users, business goals, current workflow, constraints, and what success should mean." },
  { number: "02", title: "Define", description: "Turn the findings into a clear scope, prioritised requirements, and an agreed delivery plan." },
  { number: "03", title: "Design", description: "Shape user journeys, information architecture, visual direction, and reusable interface patterns." },
  { number: "04", title: "Build", description: "Develop in understandable increments, review decisions, and integrate the necessary services." },
  { number: "05", title: "Validate", description: "Test key journeys, accessibility, responsive layouts, and release readiness before handover." },
];

export const technologies = [
  { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "Authentication", "Webhooks"] },
  { category: "Data", items: ["PostgreSQL", "MongoDB", "Supabase", "Mongoose"] },
  { category: "Workflow & delivery", items: ["Git", "GitHub", "Vite", "Vercel", "Render", "CI/CD concepts"] },
];

export const faqs = [
  { question: "How does a project usually begin?", answer: "Start with a short discovery conversation about the users, goals, constraints, and the most important workflow. A detailed scope can follow once the problem is understood." },
  { question: "Can the technology stack be adapted?", answer: "Yes. Technology choices should follow the product requirements, existing systems, security needs, team capabilities, and long-term maintenance considerations." },
  { question: "Do you work with existing products?", answer: "The proposed service model includes both new product work and improvements to existing interfaces, workflows, and integrations." },
  { question: "How do we discuss a project?", answer: "Use the contact page to draft an enquiry. This demo currently validates the form locally and does not transmit submissions." },
];
