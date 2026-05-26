import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Add custom cursor body class on mount
    document.body.classList.add('custom-cursor-active');

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    const updateHoverables = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateHoverables();
    
    // Periodically scan for new dynamic elements
    const interval = setInterval(updateHoverables, 1500);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-active');
      clearInterval(interval);
      
      const hoverables = document.querySelectorAll('a, button, [role="button"]');
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Glow Center Point */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-cyan/60 pointer-events-none z-50 mix-blend-screen hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(0, 242, 254, 0.15)' : 'rgba(0, 242, 254, 0.03)',
          borderColor: isHovered ? '#9d4edd' : '#00f2fe',
          boxShadow: isHovered 
            ? '0 0 20px rgba(157, 78, 221, 0.6), inset 0 0 10px rgba(0, 242, 254, 0.4)' 
            : '0 0 10px rgba(0, 242, 254, 0.3)'
        }}
      />
      {/* Outer ambient blur follow-light */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full pointer-events-none z-40 bg-radial from-accent-cyan/15 to-transparent blur-xl hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: -32,
          translateY: -32,
          scale: isHovered ? 1.8 : 1,
        }}
      />
    </>
  );
}
