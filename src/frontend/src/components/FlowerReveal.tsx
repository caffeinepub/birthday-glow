export default function FlowerReveal() {
  return (
    <div className="mt-8 animate-pop-in text-center">
      <div className="inline-block">
        <img
          src="/assets/generated/panda-flowers.dim_768x768.png"
          alt="Panda holding flowers"
          className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-2xl shadow-xl"
        />
      </div>
      <p className="mt-6 text-xl md:text-2xl font-body text-deep-black italic">
        "Today, you don't chase goals.
        <br />
        You receive flowers."
      </p>
    </div>
  );
}
