import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export function ScrollProgress() {
  const scrollProgress = useMotionValue(0);
  const scaleX = useSpring(scrollProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      scrollProgress.set(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-emerald-400 origin-left z-50"
      style={{ scaleX }}
    />
  );
}
