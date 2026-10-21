import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  GitBranch 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export default function TechAndEngineering() {
  const domains = [
    {
      icon: Code2,
      title: 'Frontend Engineering',
      summary: 'Deterministic state, 60fps animations, and zero-compromise accessibility.',
      stack: ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL', 'Framer Motion'],
      highlight: 'Core Web Vitals > 95+'
    },
    {
      icon: Server,
      title: 'Backend & High-Throughput APIs',
      summary: 'Resilient event-driven architectures, WebSocket streams, and microservices.',
      stack: ['Node.js', 'Go', 'FastAPI (Python)', 'gRPC & GraphQL', 'WebSockets', 'Redis Pub/Sub'],
      highlight: 'Sub-millisecond Edge Gateways'
    },
    {
      icon: Database,
      title: 'Data & Vector Intelligence',
      summary: 'Structured relational models paired with high-dimensional vector embeddings.',
      stack: ['PostgreSQL & Timescale', 'Qdrant & Pinecone', 'Redis Cache', 'Prisma ORM', 'DynamoDB'],
      highlight: 'Hybrid Lexical + Vector Search'
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure as Code',
      summary: 'Immutable container clusters, zero-downtime blue/green deployments, and edge CDNs.',
      stack: ['AWS ECS / EKS', 'Cloudflare Workers', 'Terraform', 'Docker', 'GitHub Actions CI/CD'],
      highlight: 'SOC2 & HIPAA Compliant Patterns'
    },
    {
      icon: Cpu,
      title: 'Agentic AI & Automation',
      summary: 'Domain-specific RAG knowledge graphs, multi-agent chains, and private LLM inference.',
      stack: ['LangGraph', 'LangChain', 'Llama 3 / Mistral', 'OpenAI & Claude APIs', 'Unstructured.io'],
      highlight: '100% Zero-Data Retention VPC'
    },
  ];

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
            // The 5th item spans across 2 columns on desktop for visual balance
            const spanClass = index === 4 ? 'lg:col-span-2' : '';

            return (
              <div
                key={domain.title}
                className={`rounded-2xl bg-cream border border-sand-border p-6 sm:p-8 flex flex-col justify-between hover:border-orange hover:shadow-md transition-all duration-200 ${spanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sand/60 flex items-center justify-center text-nearblack">
                      <Icon className="w-5 h-5 text-orange" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-orange/10 text-orange border border-orange/20">
                      {domain.highlight}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-nearblack mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {domain.summary}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-sand-border">
                    <p className="text-[10px] uppercase font-bold text-muted tracking-wider mb-2">
                      Core Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.stack.map((item, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-xs bg-sand/40 text-nearblack font-medium border border-sand-border/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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
