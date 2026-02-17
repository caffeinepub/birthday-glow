import { useState } from 'react';
import { Button } from '@/components/ui/button';
import NewspaperCard from '@/components/NewspaperCard';
import FlowerReveal from '@/components/FlowerReveal';
import BackgroundLayers from '@/components/BackgroundLayers';

interface Page2ReportProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function Page2Report({ onPrevious, onNext }: Page2ReportProps) {
  const [showFlowers, setShowFlowers] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-birthday-peach py-12 px-4">
      <BackgroundLayers variant="subtle" />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <NewspaperCard>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-deep-black mb-2">
              🎂 OFFICIAL BIRTHDAY REPORT 🎂
            </h1>
          </div>

          <div className="space-y-6 text-left">
            <div className="space-y-2 font-body text-lg md:text-xl text-deep-black">
              <p><strong>Name:</strong> batak</p>
              <p><strong>Status:</strong> Another year cooler.</p>
              <p><strong>Energy Level:</strong> Dangerous Cute.</p>
              <p><strong>Achievement Unlocked:</strong> Level Up.</p>
            </div>

            <div className="border-t-2 border-dashed border-deep-black/20 pt-6">
              <p className="font-body text-lg md:text-xl text-deep-black italic mb-4">
                <strong>Witness Statement:</strong>
              </p>
              <p className="font-body text-lg md:text-xl text-deep-black pl-4 border-l-4 border-pink-400">
                "She didn't even try.
                <br />
                She just kept being effortlessly nice."
              </p>
            </div>

            <div className="border-t-2 border-dashed border-deep-black/20 pt-6">
              <p className="font-body text-lg md:text-xl text-deep-black mb-3">
                <strong>Charges:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 font-body text-lg md:text-xl text-deep-black pl-4">
                <li>Stealing smiles</li>
                <li>Being calm but powerful</li>
                <li>Existing with too much grace</li>
              </ul>
            </div>

            <div className="border-t-2 border-dashed border-deep-black/20 pt-6">
              <p className="font-body text-lg md:text-xl text-deep-black">
                <strong>Verdict:</strong> Guilty.
              </p>
              <p className="font-body text-lg md:text-xl text-deep-black mt-2">
                <strong>Punishment:</strong> Must smile extra today.
              </p>
            </div>

            <div className="text-center pt-6">
              <Button
                onClick={() => setShowFlowers(true)}
                disabled={showFlowers}
                size="lg"
                className="text-lg px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Accept Birthday Flowers 🌷
              </Button>
            </div>

            {showFlowers && <FlowerReveal />}
          </div>
        </NewspaperCard>

        <div className="flex justify-between items-center mt-8 gap-4">
          <Button
            onClick={onPrevious}
            variant="outline"
            size="lg"
            className="rounded-full px-6 py-3 bg-white/80 hover:bg-white text-deep-black border-2 border-deep-black/20"
          >
            ← Previous Page
          </Button>
          <Button
            onClick={onNext}
            size="lg"
            className="rounded-full px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-deep-black shadow-lg hover:shadow-xl"
          >
            Next Page →
          </Button>
        </div>
      </div>
    </div>
  );
}
