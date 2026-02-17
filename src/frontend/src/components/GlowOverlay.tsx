export default function GlowOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 animate-glow-pulse">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 via-rose-300/20 to-amber-300/30 blur-3xl" />
    </div>
  );
}
