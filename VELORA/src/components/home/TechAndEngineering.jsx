import React from 'react';
import { Code2, Server, Database, Cloud, Cpu, Network, FileText, Sparkles, Bot,} from 'lucide-react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiThreedotjs, SiFramer, SiNodedotjs, SiGo, SiFastapi, SiGraphql,
 SiSocketdotio,
  SiRedis,
  SiPostgresql,
  SiQdrant,
  SiPrisma,
  SiKubernetes,
  SiCloudflareworkers,
  SiTerraform,
  SiDocker,
  SiGithubactions,
  SiLangchain,
  SiMistralai,
  SiMeta,
  SiClaude,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading';

// Install once:  npm i react-icons
// `color` = official brand colour. Items without a brand logo in react-icons
// use a lucide icon in the site's orange instead (fallback: true).
const domains = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    summary: 'Deterministic state, 60fps animations, and zero-compromise accessibility.',
    highlight: 'Core Web Vitals > 95+',
    stack: [
      { name: 'React 19', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js App Router', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Three.js / WebGL', icon: SiThreedotjs, color: '#000000' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    ],
  },
  {
    icon: Server,
    title: 'Backend & High-Throughput APIs',
    summary: 'Resilient event-driven architectures, WebSocket streams, and microservices.',
    highlight: 'Sub-millisecond Edge Gateways',
    stack: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'FastAPI (Python)', icon: SiFastapi, color: '#009688' },
      { name: 'gRPC', icon: Network, fallback: true },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'WebSockets', icon: SiSocketdotio, color: '#010101' },
      { name: 'Redis Pub/Sub', icon: SiRedis, color: '#DC382D' },
    ],
  },
  {
    icon: Database,
    title: 'Data & Vector Intelligence',
    summary: 'Structured relational models paired with high-dimensional vector embeddings.',
    highlight: 'Hybrid Lexical + Vector Search',
    stack: [
      { name: 'PostgreSQL & Timescale', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Qdrant', icon: SiQdrant, color: '#DC244C' },
      { name: 'Pinecone', icon: Database, fallback: true },
      { name: 'Redis Cache', icon: SiRedis, color: '#DC382D' },
      { name: 'Prisma ORM', icon: SiPrisma, color: '#2D3748' },
      { name: 'DynamoDB', icon: FaAws, color: '#FF9900' },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure as Code',
    summary: 'Immutable container clusters, zero-downtime blue/green deployments, and edge CDNs.',
    highlight: 'SOC2 & HIPAA Compliant Patterns',
    stack: [
      { name: 'AWS ECS / EKS', icon: FaAws, color: '#FF9900' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Cloudflare Workers', icon: SiCloudflareworkers, color: '#F38020' },
      { name: 'Terraform', icon: SiTerraform, color: '#844FBA' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'GitHub Actions CI/CD', icon: SiGithubactions, color: '#2088FF' },
    ],
  },
  {
    icon: Cpu,
    title: 'Agentic AI & Automation',
    summary: 'Domain-specific RAG knowledge graphs, multi-agent chains, and private LLM inference.',
    highlight: '100% Zero-Data Retention VPC',
    stack: [
      { name: 'LangGraph', icon: SiLangchain, color: '#1C3C3C' },
      { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
      { name: 'Llama 3', icon: SiMeta, color: '#0081FB' },
      { name: 'Mistral', icon: SiMistralai, color: '#FA520F' },
      { name: 'OpenAI API', icon: Bot, fallback: true },
      { name: 'Claude API', icon: SiClaude, color: '#D97757' },
      { name: 'Unstructured.io', icon: FileText, fallback: true },
    ],
  },
];

function StackChip({ item }) {
  const Icon = item.icon;
  return (
    <span className="inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full text-xs bg-cream-light text-nearblack font-medium border border-sand-border/70 hover:border-orange/60 transition-colors">
      <span className="w-5 h-5 rounded-full bg-white border border-sand-border/50 flex items-center justify-center shrink-0">
        {item.fallback ? (
          <Icon className="w-3 h-3 text-orange" aria-hidden="true" />
        ) : (
          <Icon className="w-3 h-3" style={{ color: item.color }} aria-hidden="true" />
        )}
      </span>
      {item.name}
    </span>
  );
}

export default function TechAndEngineering() {
  return (
    <section className="py-20 sm:py-28 bg-sand/30 border-t border-sand-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionHeading
            eyebrow="Architectural Integrity"
            title="Modern engineering built for durability."
            highlightWord="durability"
            align="left"
            description="We build systems intended to survive technology fads. Our software architecture balances speed of iteration with long-term type safety and cloud scalability."
          />
        </div>

        {/* Editorial Architecture Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            // The 5th item spans two columns on desktop for visual balance
            const spanClass = index === 4 ? 'lg:col-span-2' : '';

            return (
              <div
                key={domain.title}
                className={`group relative overflow-hidden rounded-2xl bg-cream border border-sand-border p-6 sm:p-8 flex flex-col justify-between hover:border-orange hover:shadow-md transition-all duration-200 ${spanClass}`}
              >
                {/* Soft corner glow on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-orange/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center group-hover:bg-orange transition-colors duration-200">
                      <Icon className="w-6 h-6 text-orange group-hover:text-cream-light transition-colors duration-200" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-nearblack mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {domain.summary}
                  </p>
                </div>

                <div className="relative pt-4 border-t border-sand-border">
                  <p className="text-[10px] uppercase font-bold text-muted tracking-wider mb-3">
                    Core Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {domain.stack.map((item) => (
                      <StackChip key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}