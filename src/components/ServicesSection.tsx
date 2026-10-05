import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: '01',
    name: 'Full Stack Development',
    description:
      'Engineering scalable, responsive web applications using React.js, Node.js, Express.js, and MongoDB with modern JavaScript, Tailwind CSS, and clean modular architecture.',
  },
  {
    id: '02',
    name: 'AI & LLM Solutions',
    description:
      'Integrating Google Gemini API and OpenAI for intelligent features — including multi-turn conversational agents, prompt orchestration, dynamic content generation, and voice speech pipelines.',
  },
  {
    id: '03',
    name: 'REST APIs & Backend',
    description:
      'Designing robust RESTful APIs, JWT-based authentication, structured error handling, and MongoDB/Mongoose data schemas optimized for high reliability and sub-second response times.',
  },
  {
    id: '04',
    name: 'Real-Time Applications',
    description:
      'Building instant bidirectional communication platforms using Socket.IO, live status sync, and Cloudinary media upload pipelines with automated compression.',
  },
  {
    id: '05',
    name: 'IT Infrastructure & DevOps',
    description:
      'Linux (Ubuntu) and Windows server administration, CI/CD with Git and GitHub, cloud hosting on Vercel and Netlify, and high-availability network troubleshooting.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="border-t border-[#0C0C0C]/15">
          {services.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={30}
              className="group border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 transition-colors duration-300 hover:bg-black/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-12">
                {/* Left Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none flex-shrink-0 min-w-[120px] sm:min-w-[160px] md:min-w-[200px]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide mb-2 sm:mb-3"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
