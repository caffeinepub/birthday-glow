import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  rotation: number;
}

interface ConfettiOverlayProps {
  mode: 'burst' | 'gentle';
}

export default function ConfettiOverlay({ mode }: ConfettiOverlayProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#ec4899', '#f472b6', '#fbbf24', '#fb923c', '#f97316', '#fde047'];
    const count = mode === 'burst' ? 50 : 30;
    
    const newConfetti: ConfettiPiece[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * (mode === 'burst' ? 0.5 : 2),
      duration: mode === 'burst' ? 2 + Math.random() * 1 : 4 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
    }));
    setConfetti(newConfetti);
  }, [mode]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 md:w-3 md:h-3 animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            top: '-5%',
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}
