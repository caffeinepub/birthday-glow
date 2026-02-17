import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/birthday-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleAudio}
        variant="outline"
        size="icon"
        className="rounded-full bg-white/80 hover:bg-white shadow-lg"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-deep-black" />
        ) : (
          <VolumeX className="h-5 w-5 text-deep-black" />
        )}
      </Button>
    </div>
  );
}
