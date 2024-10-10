import { checkForScreenSizeInDraw } from "@/helper/helper";

export const PhoneComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  return (
    <div
      className={
        checkForScreenSize.screenSize === 1920
          ? "absolute px-0 right-auto left-auto top-48 mt-10 w-[1100px] items-center justify-center z-[60]"
          : checkForScreenSize.screenSize === 1600
          ? "absolute px-0 right-auto left-auto top-48 mt-10 w-[900px] items-center justify-center z-[60]"
          : checkForScreenSize.screenSize === 1536
          ? "absolute mx-auto right-auto left-auto top-56 w-[800px] mt-10 z-[60]"
          : checkForScreenSize.screenSize === 1366 || checkForScreenSize.screenSize === 1360
          ? "absolute px-0 right-auto left-auto top-44 mt-10 w-[700px] items-center justify-center z-[60]"
          : checkForScreenSize.screenSize === 1280
          ? "absolute mx-auto top-56 mt-10 w-[600px] z-[60]"
          : "absolute mx-auto right-auto left-auto px-0 top-56 mt-10 w-[1000px] items-center justify-center z-[60]"
      }
    >
      <h2 className={`${checkForScreenSize.screenSize === 1920 ? 'text-6xl' : (checkForScreenSize.screenSize === 1536 ? 'text-4xl' : (checkForScreenSize.screenSize === 1366 || checkForScreenSize.screenSize === 1360 ? 'text-3xl' : (checkForScreenSize.screenSize === 1280 ? 'text-3xl' : 'text-6xl')))} font-bold text-text-primary uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth}`}>
        Contact
      </h2>
      <div className={`mt-10 md:mt-52 text-center ${checkForScreenSize.maxWidth}`}>
        <h3 className={`${(checkForScreenSize.screenSize === 1536 || checkForScreenSize.screenSize === 1280 || checkForScreenSize.screenSize === 1360 || checkForScreenSize.screenSize === 1366) ? 'text-xs' : 'text-sm'} text-text-primary uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth} mt-10`}>
          Pick up the phone
        </h3>
        <p className={`${(checkForScreenSize.screenSize === 1536 || checkForScreenSize.screenSize === 1280 || checkForScreenSize.screenSize === 1360 || checkForScreenSize.screenSize === 1366) ? 'text-xs' : 'text-sm'} text-text-primary uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth} mt-10 cursor-pointer`}>
          <a href="tel:+971585428055">+971 5 85 42 8055</a>
        </p>
        <p className={`text-text-primary uppercase ${(checkForScreenSize.screenSize === 1536 || checkForScreenSize.screenSize === 1280 || checkForScreenSize.screenSize === 1360 || checkForScreenSize.screenSize === 1366) ? 'text-xs' : 'text-sm'} mt-6`}>*</p>
      </div>
    </div>
  );
};
