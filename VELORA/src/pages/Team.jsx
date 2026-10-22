import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail, Users, Sparkles,} from 'lucide-react';
import { teamMembers } from '../data/Teamdata';

const filters = [
  'All',
  'Leadership',
  'Product',
  'Engineering',
  'Design',
  'People & Culture',
];

export default function Team() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredMembers =
    activeFilter === 'All'
      ? teamMembers
      : teamMembers.filter(
          (member) => member.department === activeFilter
        );

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-nearblack">

     <section className=" px-4 pb-16 pt-2 sm:px-6 sm:pb-24 sm:pt-10 lg:px-22">
    
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-4xl text-center" >
        
          <h1 className="mt-7 font-heading text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Great people.
            <br />
            <span className="text-orange">
              Extraordinary ideas.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-nearblack/65 sm:text-lg">
            Meet the thinkers, designers, and builders working together
            to transform ambitious ideas into meaningful digital
            experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#our-team"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-hover"
            >
              Meet the team
              <ArrowRight size={17} />
            </a>

            <Link
              to="/careers"
              className="inline-flex items-center gap-2 rounded-full border border-nearblack/15 bg-white/50 px-6 py-3.5 text-sm font-bold text-nearblack transition-all duration-300 hover:border-orange/40 hover:bg-white"
            >
              Join our team
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>

      </section>

      {/* Team Grid */}
      <section
        id="our-team"
        className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8" >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange">
                Meet our people
              </p>

              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                The team behind the work
              </h2>

              <p className="mt-3 max-w-xl text-sm font-medium leading-7 text-nearblack/60 sm:text-base">
                Different perspectives. Shared ambition. One collaborative team.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-orange/10 px-4 py-2 text-sm font-bold text-nearblack">
              <Users size={17} className="text-orange" />
              {filteredMembers.length} members
            </div>
          </div>

          {/* Department Filters */}
          <div className="mb-10 flex gap-2 overflow-x-auto pb-3">
            {filters.map((filter) => {
              const selected = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={selected}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                    selected
                      ? 'border-orange bg-orange text-white shadow-md shadow-orange/20'
                      : 'border-nearblack/10 bg-white/60 text-nearblack/65 hover:border-orange/40 hover:text-orange'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            {filteredMembers.map((member, index) => (
              <motion.article
                layout
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-3xl border border-nearblack/10 bg-white/70 transition-all duration-500 hover:-translate-y-2 hover:border-orange/40 hover:bg-white hover:shadow-2xl hover:shadow-orange/10"
              >
                {/* Portrait */}
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-nearblack/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Department */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-cream/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-nearblack backdrop-blur-md sm:left-5 sm:top-5">
                    {member.department}
                  </span>

                  {/* Hover Icon */}
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-orange text-white opacity-0 shadow-lg transition-all duration-300 hover:bg-nearblack group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-5 sm:right-5"
                  >
                    <Mail size={18} />
                  </a>
                </div>

                {/* Member Details */}
                <div className="relative p-5 sm:p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-xl font-extrabold tracking-tight text-nearblack transition-colors duration-300 group-hover:text-orange sm:text-2xl">
                        {member.name}
                      </h3>

                      <p className="mt-1.5 text-sm font-bold text-orange">
                        {member.role}
                      </p>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-nearblack/10 bg-cream text-nearblack/50 transition-all duration-300 group-hover:border-orange/30 group-hover:bg-orange/10 group-hover:text-orange">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <p className="text-sm font-medium leading-7 text-nearblack/65">
                    {member.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-nearblack/10 pt-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-nearblack/45">
                      VELORA TEAM
                    </span>

                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs font-bold text-nearblack/65 transition-colors hover:text-orange"
                    >
                      Get in touch
                    </a>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </motion.div>

          {/* Careers CTA */}
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-orange/20 bg-sand/50 p-8 sm:mt-20 sm:p-12 lg:p-14">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange">
                  Your next chapter
                </span>

                <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Great work starts with great people.
                </h2>

                <p className="mt-4 text-sm font-medium leading-7 text-nearblack/65 sm:text-base">
                  Interested in creating meaningful digital experiences?
                  Explore opportunities to grow with our team.
                </p>
              </div>

              <Link
                to="/careers"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-hover hover:shadow-lg hover:shadow-orange/20"
              >
                Explore careers
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
