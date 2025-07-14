'use client';

import { motion } from 'framer-motion';

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function MotionCard({ children, className = '', delay = 0 }: MotionCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
} 