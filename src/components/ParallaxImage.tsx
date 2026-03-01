import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const ParallaxImage = ({ src, alt, className = "", aspectRatio = "aspect-[4/3]" }: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${aspectRatio} ${className}`}>
      <motion.div 
        style={{ y, scale }}
        className="w-full h-[120%] absolute -top-[10%] left-0"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};
