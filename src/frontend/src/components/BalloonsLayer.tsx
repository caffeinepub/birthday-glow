import { useEffect, useState } from 'react';

interface Balloon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  scale: number;
}

export default function BalloonsLayer() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const newBalloons: Balloon[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      scale: 0.6 + Math.random() * 0.6,
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-float-up opacity-40"
          style={{
            left: `${balloon.left}%`,
            bottom: '-10%',
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
            transform: `scale(${balloon.scale})`,
          }}
        >
          <img
            src="/assets/generated/balloon-single.dim_512x512.png"
            alt=""
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
      ))}
    </div>
  );
}
