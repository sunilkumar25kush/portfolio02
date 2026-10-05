import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  showIcon?: boolean;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  className = '',
  href = '#',
  onClick,
  showIcon = false,
}) => {
  const content = (
    <motion.div
      whileHover={{ scale: 1.04, backgroundColor: 'rgba(215, 226, 234, 0.12)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base px-8 py-3 sm:px-10 sm:py-3.5 cursor-pointer select-none transition-colors duration-200 ${className}`}
    >
      <span>Live Project</span>
      {showIcon && <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]" />}
    </motion.div>
  );

  if (href && !onClick) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block no-underline">
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
