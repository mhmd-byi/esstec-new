import { checkForScreenSizeInDraw } from "@/helper/helper";

export const TeamComponent = () => {
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
          : checkForScreenSize.screenSize === 1440
          ? "absolute px-0 right-auto left-auto top-64 mt-5 w-[750px] items-center justify-center z-[60]"
          : checkForScreenSize.screenSize === 1400
          ? "absolute px-0 right-auto left-auto top-64 mt-5 w-[750px] items-center justify-center z-[60]"
          : checkForScreenSize.screenSize === 1366 ||
            checkForScreenSize.screenSize === 1360
          ? "absolute px-0 right-auto left-auto top-64 mt-10 w-[700px] items-center justify-center z-[60]"
          : checkForScreenSize.screenSize === 1280
          ? "absolute mx-auto top-60 mt-24 w-[600px] z-[60]"
          : "absolute mx-auto right-auto left-auto px-0 top-56 mt-10 w-[1000px] items-center justify-center z-[60]"
      }
    >
      <h2
        className={`${
          checkForScreenSize.screenSize === 1920
            ? "text-6xl"
            : checkForScreenSize.screenSize === 1536
            ? "text-4xl"
            : checkForScreenSize.screenSize === 1366 ||
              checkForScreenSize.screenSize === 1360 ||
              checkForScreenSize.screenSize === 1440 ||
              checkForScreenSize.screenSize === 1400
            ? "text-3xl"
            : checkForScreenSize.screenSize === 1280
            ? "text-3xl"
            : "text-6xl"
        } font-bold text-text-primary uppercase duration-1000 ease-in-out text-center ${
          checkForScreenSize.maxWidth
        }`}
      >
        Team
      </h2>
      <p
        className={`${
          checkForScreenSize.screenSize === 1536 ||
          checkForScreenSize.screenSize === 1280 ||
          checkForScreenSize.screenSize === 1360 ||
          checkForScreenSize.screenSize === 1366 ||
          checkForScreenSize.screenSize === 1440 ||
          checkForScreenSize.screenSize === 1400
            ? "text-xs"
            : "text-sm"
        } text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${
          checkForScreenSize.maxWidth
        } mt-2 md:mt-10`}
      >
        We are an electric team of multicultural individuals uniunited by a
        shared love for all things design. each of us brings unique expertise to
        every idea and conversation.
      </p>
      <p
        className={`${
          checkForScreenSize.screenSize === 1536 ||
          checkForScreenSize.screenSize === 1280 ||
          checkForScreenSize.screenSize === 1360 ||
          checkForScreenSize.screenSize === 1366 ||
          checkForScreenSize.screenSize === 1440 ||
          checkForScreenSize.screenSize === 1400
            ? "text-xs"
            : "text-sm"
        } text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${
          checkForScreenSize.maxWidth
        } mt-2 md:mt-10`}
      >
        We let our projects dictate the required skills, ensuring progress is
        never hindered and always backed by our can-do attitude.
      </p>
      <p
        className={`hidden md:block ${
          checkForScreenSize.screenSize === 1536 ||
          checkForScreenSize.screenSize === 1280 ||
          checkForScreenSize.screenSize === 1360 ||
          checkForScreenSize.screenSize === 1366 ||
          checkForScreenSize.screenSize === 1440 ||
          checkForScreenSize.screenSize === 1400
            ? "text-xs"
            : "text-sm"
        } text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${
          checkForScreenSize.maxWidth
        } mt-2 md:mt-10`}
      >
        collaborating across the world with humans and pulling in animals (yes,
        essential for R&D), we maintain connections across asia, the middle
        east, africa and europe.
      </p>
      <p
        className={`${
          checkForScreenSize.screenSize === 1536 ||
          checkForScreenSize.screenSize === 1280 ||
          checkForScreenSize.screenSize === 1360 ||
          checkForScreenSize.screenSize === 1366 ||
          checkForScreenSize.screenSize === 1440 ||
          checkForScreenSize.screenSize === 1400
            ? "text-xs"
            : "text-sm"
        } text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${
          checkForScreenSize.maxWidth
        } mt-2 md:mt-10`}
      >
        whether you are interested in collaborating, working on a project
        together, or just stopping by for a chat over coffee, we&apos;re here.
        reach out to us at info@esstec.ae
        <p
          className={`text-text-primary uppercase ${
            checkForScreenSize.screenSize === 1536 ||
            checkForScreenSize.screenSize === 1280 ||
            checkForScreenSize.screenSize === 1360 ||
            checkForScreenSize.screenSize === 1366 ||
            checkForScreenSize.screenSize === 1440 ||
            checkForScreenSize.screenSize === 1400
              ? "text-xs"
              : "text-sm"
          } text-center mt-6`}
        >
          *
        </p>
      </p>
    </div>
  );
};
