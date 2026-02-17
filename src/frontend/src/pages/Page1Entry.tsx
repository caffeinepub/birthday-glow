import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import BalloonsLayer from '@/components/BalloonsLayer';
import ConfettiOverlay from '@/components/ConfettiOverlay';
import GlowOverlay from '@/components/GlowOverlay';
import AudioToggle from '@/components/AudioToggle';

interface Page1EntryProps {
  onNext: () => void;
  onUnlock: () => void;
  isUnlocked: boolean;
}

export default function Page1Entry({ onNext, onUnlock, isUnlocked }: Page1EntryProps) {
  const [textPhase, setTextPhase] = useState<'first' | 'second'>('first');
  const [showRevealButton, setShowRevealButton] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextPhase('second');
      setTimeout(() => {
        setShowRevealButton(true);
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleReveal = () => {
    setShowConfetti(true);
    setShowGlow(true);
    
    setTimeout(() => {
      setRevealed(true);
      onUnlock();
      setShowGlow(false);
    }, 1500);

    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-birthday-pink">
      <BalloonsLayer />
      
      <AudioToggle />

      {showConfetti && <ConfettiOverlay mode="burst" />}
      {showGlow && <GlowOverlay />}

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {!revealed ? (
          <>
            <div className="space-y-8">
              <div
                className={`transition-opacity duration-700 ${
                  textPhase === 'first' ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <h1 className="text-5xl md:text-7xl font-display font-bold text-deep-black mb-4">
                  Hey You 🌸
                </h1>
                <p className="text-2xl md:text-3xl font-body text-deep-black">
                  Guess what day it is?
                </p>
              </div>

              <div
                className={`transition-opacity duration-700 ${
                  textPhase === 'second' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-2xl md:text-4xl font-body text-deep-black leading-relaxed">
                  It's not just a date.
                  <br />
                  It's a national-level event.
                </p>
              </div>
            </div>

            {showRevealButton && (
              <div className="mt-12 animate-fade-in">
                <Button
                  onClick={handleReveal}
                  size="lg"
                  className="text-xl px-8 py-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Reveal the Birthday Girl 👀
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="animate-fade-in space-y-8">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-deep-black mb-6">
              Happy Birthday ✨
            </h1>
            <p className="text-2xl md:text-3xl font-body text-deep-black leading-relaxed">
              To someone who makes ordinary days better
              <br />
              just by existing.
            </p>

            {isUnlocked && (
              <div className="mt-12 animate-fade-in-delay">
                <Button
                  onClick={onNext}
                  size="lg"
                  className="text-lg px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-deep-black shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Next Page →
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
