import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import PetalsLayer from '@/components/PetalsLayer';
import ConfettiOverlay from '@/components/ConfettiOverlay';

interface Page3WishProps {
  onPrevious: () => void;
}

export default function Page3Wish({ onPrevious }: Page3WishProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-birthday-golden py-12 px-4">
      <PetalsLayer />
      {showConfetti && <ConfettiOverlay mode="gentle" />}

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60">
          <div className="space-y-8 font-body text-lg md:text-xl text-deep-black leading-relaxed">
            <p className="text-center italic">
              "Birthdays are strange.
            </p>

            <p>
              They don't count just years.
              <br />
              They remind us how lucky the world was
              <br />
              the day you arrived.
            </p>

            <div>
              <p className="mb-4">May this year bring:</p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  <span>Peace in your heart</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  <span>Confidence in your steps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  <span>Success in your goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  <span>And small moments that make you quietly happy</span>
                </li>
              </ul>
            </div>

            <p>
              Keep being kind.
              <br />
              Keep being steady.
              <br />
              Keep being you.
            </p>

            <p className="text-center italic">
              That's more than enough."
            </p>

            <div className="border-t-2 border-pink-300/50 pt-8 mt-8">
              <p className="text-center text-2xl md:text-3xl font-display font-bold">
                Happy Birthday.
                <br />
                You're appreciated more than you realize.
              </p>
            </div>

            <div className="text-center pt-8">
              <p className="text-3xl md:text-4xl font-display font-bold text-deep-black glow-text">
                The End
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={onPrevious}
            variant="outline"
            size="lg"
            className="rounded-full px-6 py-3 bg-white/80 hover:bg-white text-deep-black border-2 border-deep-black/20"
          >
            ← Previous Page
          </Button>
        </div>

        <footer className="text-center mt-12 text-sm text-deep-black/70">
          <p>
            Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                window.location.hostname || 'birthday-glow'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-600 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="mt-1">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
