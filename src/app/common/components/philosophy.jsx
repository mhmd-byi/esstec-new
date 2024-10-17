export const PhilosophyComponent = () => {
  return (
    <div className="space-y-4 p-2 md:space-y-6 md:h-96 content-between grid grid-cols-1">
      <div>
        <h2 className="text-center text-3xl font-bold uppercase text-text-primary duration-1000 ease-in-out sm:text-4xl md:text-5xl lg:text-6xl">
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
