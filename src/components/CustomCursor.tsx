import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-8);
      });

      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-[60] w-1 h-1 rounded-full bg-yellow-500"
          style={{
            left: point.x,
            top: point.y,
            boxShadow: '0 0 8px rgba(212, 175, 55, 0.6)',
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}

      <motion.div
        className="fixed pointer-events-none z-[60] rounded-full bg-yellow-500"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          width: isHovering ? 20 : 12,
          height: isHovering ? 20 : 12,
          x: isHovering ? -10 : -6,
          y: isHovering ? -10 : -6,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  );
}
