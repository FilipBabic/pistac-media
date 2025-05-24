'use client';

import { motion } from 'framer-motion';

interface AnimatedWordsProps {
  text: string;
  className?: string;
}

const fixedDirections = [
  { x: '-100vw', y: 0 },
  { x: '100vw', y: 0 },
  { y: '-100vh', x: 0 },
  { y: '100vh', x: 0 },
];

export const AnimatedWords = ({ text, className }: AnimatedWordsProps) => {
  return (
    <h1
      className={`flex flex-wrap justify-center text-center ${className ?? ''}`}
    >
      {text.split(' ').map((word, i) => {
        const from = fixedDirections[i % fixedDirections.length]; // Deterministic

        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, ...from }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              delay: i * 0.15,
              type: 'spring',
              stiffness: 60,
              damping: 12,
            }}
            className="mx-1 inline-block"
          >
            {word}
          </motion.span>
        );
      })}
    </h1>
  );
};
