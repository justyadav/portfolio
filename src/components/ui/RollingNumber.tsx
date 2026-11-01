import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

function parseNumericString(val: string) {
  const hasComma = val.includes(',');
  const match = val.match(/([\d,.]+)/);
  if (!match) {
    return { target: 0, prefix: '', suffix: val, decimals: 0, hasComma: false };
  }

  const numStr = match[1];
  const prefix = val.slice(0, match.index);
  const suffix = val.slice((match.index || 0) + numStr.length);
  const cleanNumStr = numStr.replace(/,/g, '');
  const target = parseFloat(cleanNumStr) || 0;
  const decimals = cleanNumStr.includes('.') ? cleanNumStr.split('.')[1].length : 0;

  return { target, prefix, suffix, decimals, hasComma };
}

export interface RollingNumberProps {
  value: string;
  className?: string;
  suffixClassName?: string;
  separateSuffix?: boolean;
}

export function RollingNumber({
  value,
  className = '',
  suffixClassName = '',
  separateSuffix = false,
}: RollingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const shouldReduceMotion = useReducedMotion();

  const { target, prefix, suffix, decimals, hasComma } = parseNumericString(value);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 35,
    stiffness: 90,
    mass: 1,
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      if (ref.current) {
        ref.current.textContent = hasComma
          ? target.toLocaleString('en-US')
          : target.toFixed(decimals);
      }
      return;
    }

    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue, shouldReduceMotion, hasComma, decimals]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        if (decimals > 0) {
          ref.current.textContent = latest.toFixed(decimals);
        } else {
          const rounded = Math.round(latest);
          ref.current.textContent = hasComma
            ? rounded.toLocaleString('en-US')
            : String(rounded);
        }
      }
    });

    return () => unsubscribe();
  }, [springValue, decimals, hasComma, shouldReduceMotion]);

  if (separateSuffix) {
    return (
      <span className="inline-flex items-baseline">
        {prefix && <span>{prefix}</span>}
        <span ref={ref} className={className}>
          0
        </span>
        {suffix && <span className={suffixClassName}>{suffix}</span>}
      </span>
    );
  }

  return (
    <span className={className}>
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default RollingNumber;
