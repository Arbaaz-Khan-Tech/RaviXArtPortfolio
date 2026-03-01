import { useRef } from 'react';
import { motion } from 'motion/react';

interface LiquidImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const LiquidImage = ({ src, alt, className = "" }: LiquidImageProps) => {
  const id = `liquid-filter-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`relative overflow-hidden ${className} group`}>
      {/* The SVG Filter definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id={id}>
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01 0.003" 
              numOctaves="1" 
              result="warp" 
            >
              <animate 
                attributeName="baseFrequency" 
                from="0.01 0.003" 
                to="0.02 0.02" 
                dur="0.4s" 
                begin="indefinite" 
                fill="freeze" 
                className="group-hover-animation"
              />
              <animate 
                attributeName="baseFrequency" 
                from="0.02 0.02" 
                to="0.01 0.003" 
                dur="0.4s" 
                begin="indefinite" 
                fill="freeze" 
                className="group-leave-animation"
              />
            </feTurbulence>
            <feDisplacementMap 
              xChannelSelector="R" 
              yChannelSelector="G" 
              scale="0" 
              in="SourceGraphic" 
              in2="warp"
            >
               <animate 
                attributeName="scale" 
                from="0" 
                to="20" 
                dur="0.4s" 
                begin="mouseenter" 
                fill="freeze" 
              />
              <animate 
                attributeName="scale" 
                from="20" 
                to="0" 
                dur="0.4s" 
                begin="mouseleave" 
                fill="freeze" 
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>

      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
        style={{ filter: `url(#${id})` }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};
