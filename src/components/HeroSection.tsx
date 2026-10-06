import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { TypographyVortexCanvas } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <TypographyVortexCanvas
        mode="dark"
        speed={1.00}
        ringGrowth={1.21}
        opacity={1.00}
        dissolveRadius={1.00}
        particleAmount={1.00}
        suctionDuration={920}
      />
    </div>
  );
}

export const HeroSection: React.FC = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section className="relative h-screen min-h-[640px] flex flex-col justify-between overflow-x-clip select-none">
      {/* ThreeUI Interactive Typography Vortex Background */}
      <div className="hero-vortex-container absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Scene />
      </div>

      {/* Navbar with Live Status Beacon */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-10 pt-6 md:pt-8 w-full">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] sm:text-xs text-[#D7E2EA]/85 uppercase tracking-widest font-medium">
              Available for Roles
            </span>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-lg hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden text-center z-10 px-2 sm:px-4 pointer-events-none">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            Hi, i&apos;m sunil
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[300px] sm:w-[400px] md:w-[480px] lg:w-[580px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <img
              src="/hero-luffy.png"
              alt="Sunil Kumar - Luffy Avatar"
              className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] filter contrast-105"
              loading="eager"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto z-20 pointer-events-auto">
        {/* Left tagline */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a full stack developer driven by crafting scalable web apps and ai-powered solutions
          </p>
        </FadeIn>

        {/* Right CTA */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
