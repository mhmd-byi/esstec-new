import { checkForScreenSizeInDraw } from "@/helper/helper";

export const PhilosophyComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  return (
    <div
      className={
        checkForScreenSize.screenSize === 1920
          ? "absolute px-0 right-auto left-auto top-48 mt-10 w-[1100px] items-center justify-center z-[60]"
          : checkForScreenSize.screenSize === 1536
          ? "absolute mx-auto right-auto left-auto top-56 w-[800px] mt-10 z-[60]"
          : checkForScreenSize.screenSize === 1280
          ? "absolute mx-auto top-56 mt-10 w-[600px] z-[60]"
          : "absolute mx-auto right-auto left-auto px-0 top-56 mt-10 w-[1000px] items-center justify-center z-[60]"
      }
    >
      <h2
        className={`${checkForScreenSize.screenSize === 1920 ? 'text-6xl' : (checkForScreenSize.screenSize === 1536 ? 'text-4xl' : (checkForScreenSize.screenSize === 1280 ? 'text-3xl' : 'text-6xl'))} font-bold text-text-primary uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth}`}
      >
        philosophy
      </h2>
      <div
        className={`mt-10 md:${checkForScreenSize.marginTop} text-center ${checkForScreenSize.maxWidth} ${(checkForScreenSize.screenSize === 1536 || checkForScreenSize.screenSize === 1280) ? 'text-xs' : 'text-sm'}`}
      >
        <p className="text-text-primary uppercase mb-6">
          we are the creatives who...
        </p>
        <p className="text-text-primary uppercase mb-6">
          believe in meaningful work and authentic connections over bagging
          contracts.
        </p>
        <p className="text-text-primary uppercase">*</p>
      </div>
    </div>
  );
};
