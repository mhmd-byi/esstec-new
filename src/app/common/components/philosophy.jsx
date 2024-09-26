import { checkForScreenSizeInDraw } from "@/helper/helper";

export const PhilosophyComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  return (
    <div className={checkForScreenSize.componentClass}>
      <h2 className="text-2xl md:text-6xl font-bold text-text-primary uppercase duration-1000 ease-in-out text-center md:max-w-[970px]">
        philosophy
      </h2>
      <div className="mt-10 md:mt-52 text-center md:max-w-[970px]">
        <p className="text-text-primary uppercase text-sm mb-6">
          we are the creatives who...
        </p>
        <p className="text-text-primary uppercase text-sm mb-6">
          believe in meaningful work and authentic connections over bagging
          contracts.
        </p>
        <p className="text-text-primary uppercase text-sm">*</p>
      </div>
    </div>
  );
};
