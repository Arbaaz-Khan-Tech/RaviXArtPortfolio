import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { signaturePaths } from './SignaturePaths';

interface AnimatedSignatureProps {
  className?: string;
}

const totalDuration = signaturePaths.reduce((acc, p) => acc + p.duration, 0);

export const AnimatedSignature = ({ className = "" }: AnimatedSignatureProps) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, (totalDuration + 2) * 1000); // replay after drawing + 2s pause

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="220"
        height="45"
        viewBox="50 25 380 140"
        className="w-auto h-[40px] md:h-[45px]"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {signaturePaths.map((pathData, index) => {
          const delay = signaturePaths
            .slice(0, index)
            .reduce((acc, p) => acc + p.duration, 0);

          return (
            <g key={`${key}-${index}`}>
              <motion.path
                d={pathData.d}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-primary"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: { delay, duration: pathData.duration, ease: "linear" },
                  opacity: { delay, duration: 0.01 },
                }}
              />

              <motion.circle
                r="3"
                className="text-accent"
                fill="currentColor"
                filter="url(#glow)"
                initial={{ opacity: 0, offsetDistance: "0%" }}
                animate={{ opacity: [0, 1, 1, 0], offsetDistance: "100%" }}
                style={{
                  offsetPath: `path('${pathData.d}')`,
                }}
                transition={{
                  duration: pathData.duration,
                  delay,
                  ease: "linear",
                  times: [0, 0.05, 0.95, 1],
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
