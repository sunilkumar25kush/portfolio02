import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  className = '',
  onClick,
  href = '#contact',
}) => {
  const content = (
    <motion.div
      whileHover={{ scale: 1.05, filter: 'brightness(1.15)' }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative group inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 cursor-pointer select-none overflow-hidden transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 10px 30px rgba(182, 0, 168, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
      }}
    >
      {/* Subtle rotating glow / shimmer highlight */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.35), transparent 70%)',
        }}
      />

      {/* Animated light sweep */}
      <span
        className="absolute -inset-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"
      />

      <span className="relative z-10 font-semibold tracking-wider flex items-center gap-2">
        <span>Contact Me</span>
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:translate-x-1 transition-transform duration-300"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </motion.div>
  );

  if (href && !onClick) {
    return (
      <a href={href} className="inline-block no-underline">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-0 cursor-pointer">
      {content}
    </button>
  );
};
