"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

type PillProps = {
  children: ReactNode;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => (
  <motion.div
    className="max-w-2xl mb-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
    custom={0.05}
  >
    <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">
      {eyebrow}
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      {title}
    </h2>
    {description ? (
      <p className="text-slate-300 leading-7">{description}</p>
    ) : null}
  </motion.div>
);

const Pill = ({ children }: PillProps) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
    {children}
  </span>
);

export default function HomePage() {
  const profile = {
    name: "Susetya Pambudi",
    role: "Senior Fullstack Engineer",
    tagline:
      "7+ years building scalable web applications across logistics, enterprise, and consumer platforms.",
    location: "Jakarta, Indonesia",
    phone: "+62 878 555 77230",
    email: "psusetyamulia@gmail.com",
    cvUrl: "/Susetya-Pambudi-Software-Engineer-CV.pdf",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/susetyo" },
      { label: "GitHub", href: "https://github.com/susetyo" },
      {
        label: "Codecademy",
        href: "https://www.codecademy.com/profiles/susetyo",
      },
      { label: "HackerRank", href: "https://www.hackerrank.com/susetyo" },
    ],
    summary:
      "Senior Fullstack Engineer with deep experience in React, Next.js, Node.js, TypeScript, and Ruby on Rails. Focused on frontend architecture, performance optimization, reusable systems, and real-time product experiences used by millions of users.",
  };

  const stats = [
    { value: "7+", label: "Years of experience" },
    { value: "30+", label: "Reusable UI components built" },
    { value: "40%", label: "Frontend bugs reduced" },
    { value: "+40", label: "Lighthouse points improved" },
  ];

  const featuredProjects = [
    {
      title: "MyPertamina",
      subtitle: "Consumer platform · Deloitte Southeast Asia",
      description:
        "Built major UI features for fuel vouchers, merchandise storefronts, secure payment flows, multi-voucher checkout, map-based station discovery, EV charging, and animated campaign experiences.",
      highlights: [
        "PIN, biometric, and LinkAja payment integrations",
        "Map-based fuel station discovery",
        "EV charging monitoring interface",
        "Framer Motion campaign experiences",
      ],
    },
    {
      title: "Singapore Oceanarium",
      subtitle: "Digital platform · Deloitte Southeast Asia",
      description:
        "Built and deployed production-ready UI components with strong cross-browser compatibility, contributing 30+ reusable UI components for the digital platform.",
      highlights: [
        "30+ reusable components",
        "Cross-browser compatibility",
        "Production-ready delivery",
        "React, jQuery, Vanilla JS",
      ],
    },
    {
      title: "Waresix Operating System",
      subtitle: "Logistics operations · PT Tibeka Logistik Indonesia",
      description:
        "Improved operational visibility and reduced manual work through real-time dashboards, performance optimization, reusable component systems, and micro-frontend architecture.",
      highlights: [
        "WebSocket-based real-time tracking",
        "Micro-frontend architecture",
        "Lighthouse score improved from ~30 to 70",
        "Mentored 5 engineers",
      ],
    },
    {
      title: "KiosTix Platform",
      subtitle: "Ticketing system · PT Kios Cipta Kreasi",
      description:
        "Migrated frontend architecture from jQuery to Vue.js in a microservices ecosystem and contributed to scalable ticketing systems for high-traffic event releases.",
      highlights: [
        "Migration from jQuery to Vue.js",
        "Microservices architecture",
        "Embeddable payment widgets",
        "High-traffic event support",
      ],
    },
  ];

  const experiences = [
    {
      company: "Deloitte Southeast Asia",
      period: "Mar 2024 – Present",
      title: "Fullstack Engineer",
      stack: "React, Next.js, Node.js, TypeScript, CI/CD, REST API, AEM",
      bullets: [
        "Built 30+ reusable UI components for the Singapore Oceanarium platform.",
        "Reduced frontend bugs by 40% on the Pertamina application revamp.",
        "Designed frontend architecture aligned with backend business workflows for enterprise systems.",
        "Developed scalable healthcare dashboards and delivered production-ready cross-browser frontend features.",
        "Integrated Xendit, Midtrans, LinkAja, loyalty systems, and secure payment verification flows.",
      ],
    },
    {
      company: "PT Tibeka Logistik Indonesia (Waresix)",
      period: "Mar 2021 – Mar 2024",
      title: "Senior Frontend Engineer",
      stack:
        "React, TypeScript, WebSockets, Node.js, React Query, Micro-frontend",
      bullets: [
        "Improved Lighthouse performance from ~30 to 70 through route-based splitting and optimization.",
        "Built real-time logistics tracking dashboards with optimistic updates.",
        "Introduced micro-frontend architecture for safer, independent releases.",
        "Mentored 5 engineers and improved development consistency across the team.",
      ],
    },
    {
      company: "Noggin Pte Ltd",
      period: "Apr 2020 – Mar 2021",
      title: "Fullstack Engineer",
      stack: "React, Node.js, DynamoDB",
      bullets: [
        "Improved application response time by ~70% by refactoring critical paths.",
        "Built payout management features for enterprise clients.",
        "Developed backend scripts and internal tooling to improve reliability.",
      ],
    },
    {
      company: "Earlier Roles",
      period: "2015 – 2020",
      title: "Frontend / Fullstack Engineer",
      stack: "Vue.js, JavaScript, jQuery, Ruby on Rails, Postgres SQL",
      bullets: [
        "Migrated legacy frontend systems to more scalable modern architectures.",
        "Built websites, CMS platforms, internal systems, and customer-facing products across multiple industries.",
        "Contributed to enterprise, ISP, retail, hospital, and event-ticketing platforms.",
      ],
    },
  ];

  const skills = {
    frontend: [
      "React.js",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "TanStack Query",
      "JavaScript",
      "SCSS",
      "HTML",
      "shadcn/ui",
    ],
    backend: [
      "Node.js",
      "Ruby on Rails",
      "REST APIs",
      "DynamoDB",
      "Postgres SQL",
    ],
    architecture: [
      "Micro-frontend",
      "Real-time systems",
      "Scalable UI systems",
      "Performance optimization",
    ],
    tools: [
      "Git",
      "CI/CD",
      "Webpack",
      "Vite",
      "Chrome DevTools",
      "Jest",
      "Code Review",
    ],
  };

  const education = [
    {
      school: "Binus University",
      degree: "Bachelor of Computer Science in Information Systems",
      meta: "2021 – 2023 · GPA 3.62/4.00",
    },
    {
      school: "Airlangga University",
      degree: "Associate of Computer Science in Information Systems",
      meta: "2012 – 2016 · GPA 3.27/4.00",
    },
  ];

  const certifications = [
    "Master React & Redux — Udemy",
    "Responsive Web Design — freeCodeCamp",
  ];

  const externalPortfolio = [
    { label: "KiosTix", href: "https://kiostix.com/" },
    { label: "Acer Indonesia", href: "https://www.acer.com/id-id" },
    { label: "Rentique", href: "https://rentiqueid.com" },
    { label: "Siloam Hospitals", href: "https://www.siloamhospitals.com" },
    { label: "DNET", href: "https://dnetprovider.id/en/" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.12),transparent_25%)]" />

      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-20 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-lg font-semibold">{profile.name}</p>
            <p className="text-sm text-slate-400">{profile.role}</p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-10 items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 mb-6"
                variants={fadeUp}
                custom={0.1}
              >
                Available for senior frontend / fullstack opportunities
              </motion.div>
              <motion.h1
                className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6"
                variants={fadeUp}
                custom={0.15}
              >
                Building fast, scalable products with modern web architecture.
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-slate-300 max-w-3xl leading-8 mb-8"
                variants={fadeUp}
                custom={0.2}
              >
                {profile.summary}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4 mb-10"
                variants={fadeUp}
                custom={0.25}
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-2xl bg-white text-slate-950 px-6 py-3 font-medium hover:opacity-90 transition-opacity"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition-colors"
                >
                  View Projects
                </a>
                <a
                  href={profile.cvUrl}
                  download
                  className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-100 hover:bg-cyan-400/20 transition-colors"
                >
                  Download CV
                </a>
              </motion.div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeUp}
                    custom={index * 0.08}
                  >
                    <p className="text-3xl font-bold text-white">
                      {item.value}
                    </p>
                    <p className="text-sm text-slate-400 mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 lg:p-8 shadow-2xl shadow-black/20"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.2}
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400/80 to-blue-600/80 flex items-center justify-center text-3xl font-bold mb-6">
                SP
              </div>
              <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
              <p className="text-slate-300 mb-1">{profile.role}</p>
              <p className="text-slate-400 mb-6">{profile.location}</p>

              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  <span className="text-slate-500">Email:</span> {profile.email}
                </p>
                <p>
                  <span className="text-slate-500">Phone:</span> {profile.phone}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {profile.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="about" className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            eyebrow="About"
            title="Engineering products that scale with teams and users."
            description="I specialize in frontend systems that are fast, maintainable, and aligned with real business workflows. My work spans enterprise dashboards, logistics operations, ticketing platforms, and consumer applications with millions of users."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend Architecture",
                text: "Designing scalable UI systems, reusable component patterns, and maintainable frontend foundations.",
              },
              {
                title: "Performance Optimization",
                text: "Improving Lighthouse scores, reducing bugs, optimizing bundles, and delivering smoother user experiences.",
              },
              {
                title: "Fullstack Delivery",
                text: "Collaborating across backend systems, APIs, integrations, and release pipelines to ship production-ready features.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={index * 0.08}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-7">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            eyebrow="Featured Work"
            title="Selected projects and platform contributions."
            description="A mix of consumer, enterprise, and operational products where I contributed to architecture, frontend systems, performance, and business-critical user flows."
          />

          <div className="grid lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 hover:bg-white/[0.07] transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={index * 0.08}
              >
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-300 leading-7 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0.1}
          >
            <h3 className="text-2xl font-bold mb-5">
              External Portfolio Links
            </h3>
            <div className="flex flex-wrap gap-3">
              {externalPortfolio.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            eyebrow="Experience"
            title="Career journey across enterprise, logistics, and product teams."
            description="A progression from fullstack implementation to senior frontend and architecture-focused delivery, including mentoring and platform-scale improvements."
          />

          <div className="space-y-6">
            {experiences.map((job, index) => (
              <motion.div
                key={job.company}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={index * 0.08}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold">{job.company}</h3>
                    <p className="text-slate-300 mt-1">{job.title}</p>
                  </div>
                  <div className="text-sm text-slate-400 lg:text-right">
                    <p>{job.period}</p>
                    <p className="mt-1">{job.stack}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-300 leading-7">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            eyebrow="Skills"
            title="Tools, technologies, and strengths."
            description="A balanced toolkit across frontend systems, backend integrations, performance work, and cross-team collaboration."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                custom={index * 0.08}
              >
                <h3 className="text-xl font-semibold capitalize mb-5">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-6">
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0}
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-5">
              {education.map((item) => (
                <div key={item.school}>
                  <p className="font-semibold text-white">{item.school}</p>
                  <p className="text-slate-300">{item.degree}</p>
                  <p className="text-sm text-slate-400 mt-1">{item.meta}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0.08}
          >
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="space-y-3 text-slate-300">
              {certifications.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-violet-300 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-6 pt-8 pb-24">
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0.1}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let’s build something impactful.
            </h2>
            <p className="text-slate-300 max-w-2xl leading-7 mb-8">
              I’m open to roles and collaborations focused on frontend
              architecture, platform engineering, product development, and
              high-performance web experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-2xl bg-white text-slate-950 px-6 py-3 font-medium hover:opacity-90 transition-opacity"
              >
                {profile.email}
              </a>
              <a
                href={profile.cvUrl}
                download
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-100 hover:bg-cyan-400/20 transition-colors"
              >
                Download CV
              </a>
              <a
                href="https://github.com/susetyo"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition-colors"
              >
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/susetyo"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

/*
Next.js setup notes:
1. Save this file as app/page.tsx
2. Put the CV PDF inside /public/Susetya-Pambudi-Software-Engineer-CV.pdf
3. Install Framer Motion: npm install framer-motion
4. Tailwind should already be configured in your Next.js project
*/
