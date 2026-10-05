import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charCounter = 0;

  return (
    <p ref={elementRef} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const characters = word.split('');
        const wordStartIdx = charCounter;

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em]">
            {characters.map((char, charIdx) => {
              const currentIdx = wordStartIdx + charIdx;
              charCounter++;
              const start = currentIdx / totalChars;
              const end = Math.min(1, start + 1 / totalChars);
              return (
                <Character
                  key={charIdx}
                  char={char}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              );
            })}
            {/* Account for the space in counter */}
            {(() => {
              if (wordIndex < words.length - 1) {
                charCounter++;
              }
              return null;
            })()}
          </span>
        );
      })}
    </p>
  );
};
