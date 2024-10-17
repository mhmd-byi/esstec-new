export const PhilosophyComponent = () => {
  return (
    <div className="scrollbar max-h-full w-full space-y-4 p-2 md:space-y-6 md:h-full grid grid-cols-1 md:px-32">
      <div>
        <h2 className="text-center text-3xl font-bold uppercase text-text-primary duration-1000 ease-in-out sm:text-4xl md:text-5xl lg:text-6xl md:mt-20 md:-md-20">
          philosophy
        </h2>
      </div>
      <div className="space-y-3 text-center text-xs uppercase text-text-primary sm:space-y-4 md:text-sm">
        <p>we are the creatives who...</p>
        <p>
          believe in meaningful work and authentic connections over bagging
          contracts.
        </p>
        <p>*</p>
      </div>
    </div>
  );
};
