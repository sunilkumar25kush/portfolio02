import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { BestsellersBookShowcase } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <BestsellersBookShowcase
        headingFont="iowan-old-style"
        bodyFont="iowan-old-style"
        headingWeight="500"
        bodyWeight="400"
        primaryColor="#c3a47b"
        headingSize={325}
        bodySize={17}
        headingLetterSpacing={-0.085}
      />
    </div>
  );
}

export const ProjectsSection: React.FC = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/sunil-kumar-9042aa373/?isSelfProfile=true';

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-12 md:mb-14 text-center">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
            Interactive 3D Portfolio Showcase
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none mt-2"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 140px)' }}
          >
            Projects
          </h2>
          <p className="text-xs sm:text-sm text-[#D7E2EA]/50 uppercase tracking-widest mt-3">
            Click on any project book to view full details, architecture & live demo
          </p>
        </FadeIn>

        {/* 3D Book Showcase with Sunil's Real Projects */}
        <div className="relative pb-16">
          <Scene />
        </div>

        {/* Contact CTA Section */}
        <div
          id="contact"
          className="mt-16 pt-16 border-t border-white/10 flex flex-col items-center text-center max-w-4xl mx-auto"
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
