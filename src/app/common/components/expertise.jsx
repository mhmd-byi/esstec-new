import { checkForScreenSizeInDraw } from "@/helper/helper";

export const ExpertiseComponent = () => {
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
      <div>
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
          Digital & Physical
        </h2>
      </div>
      <div
        className={`text-text-primary uppercase ${
          checkForScreenSize.screenSize === 1536 ||
          checkForScreenSize.screenSize === 1280 ||
          checkForScreenSize.screenSize === 1360 ||
          checkForScreenSize.screenSize === 1366 ||
          checkForScreenSize.screenSize === 1440 ||
          checkForScreenSize.screenSize === 1400
            ? "text-xs"
            : "text-sm"
        }`}
      >
        <p
          className={`text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth} mt-2 md:mt-10`}
        >
          branding & communication
          <br />-<br />
          visual identity / brand guidelines / brand strategy / marketing
          collaterals / graphics & illustrations content / social engagement /
          podcasts / market research / lead gen / press & media / av production
        </p>
        <p
          className={`text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth} mt-2 md:mt-10`}
        >
          VIRTUAL COMPUTING
          <br />-<br />
          UX design / UI frameworks / web development / app development / nft &
          tokens / web3 / quality audits
        </p>
        <p
          className={`text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth} mt-2 md:mt-10`}
        >
          spatial experience
          <br />-<br />
          industrial design / visual merchandizing / 3d printing / environmental
          graphics architecture / interior design / project mgmt. / fabrication
          <p className="text-text-primary uppercase text-center mt-6">*</p>
        </p>
      </div>
    </div>
  );
};
