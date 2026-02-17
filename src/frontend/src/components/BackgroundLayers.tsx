interface BackgroundLayersProps {
  variant?: 'subtle' | 'sparkle';
}

export default function BackgroundLayers({ variant = 'subtle' }: BackgroundLayersProps) {
  if (variant === 'subtle') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 animate-sparkle-drift">
          <img
            src="/assets/generated/sparkles-sprites.dim_512x512.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-1/3 right-20 w-24 h-24 animate-sparkle-drift-delayed">
          <img
            src="/assets/generated/sparkles-sprites.dim_512x512.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 animate-sparkle-drift">
          <img
            src="/assets/generated/sparkles-sprites.dim_512x512.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  }

  return null;
}
