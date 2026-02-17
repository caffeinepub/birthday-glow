import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
}

export default function PetalsLayer() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 6,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall opacity-60"
          style={{
            left: `${petal.left}%`,
            top: '-5%',
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          <img
            src="/assets/generated/petals-sprites.dim_512x512.png"
            alt=""
            className="w-8 h-8 md:w-12 md:h-12"
          />
        </div>
      ))}
    </div>
  );
}
