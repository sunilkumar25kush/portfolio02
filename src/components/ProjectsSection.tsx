import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ContactButton } from './ContactButton';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface ProjectData {
  id: string;
  name: string;
  category: string;
  techStack: string[];
  description: string;
  demoUrl: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const projects: ProjectData[] = [
  {
    id: '01',
    name: 'AI Interviewer',
    category: 'MERN & Voice AI',
    techStack: ['MERN Stack', 'Google Gemini API', 'Speech Recognition', 'Text-to-Speech'],
    description:
      'Full-stack AI interview simulation platform generating role-specific questions and contextual follow-ups in real time. Voice-based interviews with under 2-second latency and automated scoring across communication, technical knowledge, and confidence.',
    demoUrl: 'https://hiretrack-interview.vercel.app/',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    id: '02',
    name: 'AI Resume Builder',
    category: 'Full Stack & AI',
    techStack: ['MERN Stack', 'Google Gemini API', 'JWT', 'MongoDB', 'Tailwind CSS'],
    description:
      'AI-powered resume platform converting raw user input into ATS-optimized resumes across 5+ professional templates. Features dynamic PDF generation with live preview, secure JWT auth, and structured validation cutting failed generation requests by 30%.',
    demoUrl: 'https://ai-resume-builder-client-ro1vsofsq.vercel.app/login',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    id: '03',
    name: 'Real-Time Chat App',
    category: 'WebSocket System',
    techStack: ['MERN Stack', 'Socket.IO', 'JWT', 'MongoDB', 'Cloudinary'],
    description:
      'Real-time messaging platform using Socket.IO for instant bidirectional communication with sub-second message delivery. Features JWT authentication, MongoDB message persistence, and Cloudinary media uploads with automatic compression.',
    demoUrl: 'https://chat-app-mocha-beta-h0ib3k7kv2.vercel.app',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
  {
    id: '04',
    name: 'AI Chatbot Application',
    category: 'Backend & Gemini API',
    techStack: ['Node.js', 'Express.js', 'Google Gemini API', 'REST API'],
    description:
      'Integrated Google Gemini API into a Node.js/Express.js backend for multi-turn conversations with average response time under 3 seconds. Built 5+ reusable API handler functions with structured error handling catching 100% of common API error codes.',
    demoUrl: 'https://phase-5-self.vercel.app',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[640px] flex items-start justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(${index * 28}px + clamp(4.5rem, 8vh, 7rem))`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between"
      >
        {/* Top Row: Number, category label, project name, tech badges, and Live Demo Vercel button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/10">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              {project.id}
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
                  {project.category}
                </span>
                <span className="hidden sm:inline text-[#D7E2EA]/40">•</span>
                <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-tight text-lg sm:text-2xl md:text-3xl">
                  {project.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/5 text-[#D7E2EA]/80 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Vercel Live Demo Button exclusively in project card */}
          <LiveProjectButton href={project.demoUrl} showIcon />
        </div>

        {/* Bottom Row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 pt-4 sm:pt-6">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between">
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-white/5 bg-[#141414]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-white/5 bg-[#141414]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="md:col-span-6 overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-white/5 bg-[#141414] min-h-[280px] sm:min-h-[360px] md:min-h-full">
            <img
              src={project.col2Image}
              alt={`${project.name} main presentation`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/sunil-kumar-9042aa373/?isSelfProfile=true';

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-24 text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Sticky Stacking Project Cards in Exact Resume Order */}
        <div className="relative pb-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projects.length}
            />
          ))}
        </div>

        {/* Contact CTA Section with Sunil's Real Details */}
        <div
          id="contact"
          className="mt-32 pt-20 border-t border-white/10 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <FadeIn delay={0.1} y={30}>
            <span className="text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
              Open to Opportunities · Remote & Relocation
            </span>
          </FadeIn>
          <FadeIn delay={0.2} y={30}>
            <h3
              className="hero-heading font-black uppercase mt-4 mb-6 tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 90px)' }}
            >
              Let&apos;s Build Together
            </h3>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <p className="text-[#D7E2EA]/80 max-w-xl mb-8 text-base sm:text-lg font-light leading-relaxed">
              Have an opening or project in mind? Reach out for full stack web development, MERN applications,
              and AI-driven integrations.
            </p>
          </FadeIn>

          {/* Quick Contact Info Cards */}
          <FadeIn
            delay={0.35}
            y={20}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl mb-10 text-left"
          >
            <a
              href="mailto:sunilkumar25@navgurukul.org"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all group"
            >
              <div className="p-2.5 rounded-xl bg-[#B600A8]/20 text-[#B600A8] group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 font-medium">Email</div>
                <div className="text-xs sm:text-sm text-[#D7E2EA] font-medium truncate">
                  sunilkumar25@navgurukul.org
                </div>
              </div>
            </a>

            <a
              href="tel:+917827598401"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition-all group"
            >
              <div className="p-2.5 rounded-xl bg-[#7621B0]/20 text-[#7621B0] group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 font-medium">Phone</div>
                <div className="text-xs sm:text-sm text-[#D7E2EA] font-medium">+91 7827598401</div>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 sm:col-span-2 md:col-span-1">
              <div className="p-2.5 rounded-xl bg-[#BE4C00]/20 text-[#BE4C00]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 font-medium">Location</div>
                <div className="text-xs sm:text-sm text-[#D7E2EA] font-medium">Sarita Vihar, Delhi, India</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={20} className="flex flex-wrap items-center justify-center gap-4">
            <ContactButton href="mailto:sunilkumar25@navgurukul.org" />
            <a
              href="https://github.com/sunilkumar25kush"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm px-6 py-3 hover:bg-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm px-6 py-3 hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </FadeIn>

          {/* Footer Details */}
          <div className="w-full mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/50 uppercase tracking-widest gap-4">
            <div>© {new Date().getFullYear()} Sunil Kumar. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
