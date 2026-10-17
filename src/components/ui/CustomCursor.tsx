import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouch =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    setIsVisible(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX - 10, y: e.clientY - 10 });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    if (!isVisible) return;

    document.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isVisible, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.2 }}
    />
  );
}
