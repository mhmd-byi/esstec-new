import { checkForScreenSizeInDraw } from "@/helper/helper";

export const ExpertiseComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  return (
    <div className={checkForScreenSize.componentClass}>
      <div>
        <h2 className="text-2xl md:text-6xl font-bold text-text-primary uppercase duration-1000 ease-in-out text-center md:max-w-[970px]">
          Digital & Physical
        </h2>
      </div>
      <div>
        <p className="text-xs md:text-sm text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center max-w-[970px] mt-2 md:mt-10">
          branding & communication
          <br />-<br />
          visual identity / brand guidelines / brand strategy / marketing
          collaterals / graphics & illustrations content / social engagement /
          podcasts / market research / lead gen / press & media / av production
        </p>
        <p className="text-xs md:text-sm text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center max-w-[970px] mt-2 md:mt-10">
          VIRTUAL COMPUTING
          <br />-<br />
          UX design / UI frameworks / web development / app development / nft &
          tokens / web3 / quality audits
        </p>
        <p className="text-xs md:text-sm text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center max-w-[970px] mt-2 md:mt-10">
          spatial experience
          <br />-<br />
          industrial design / visual merchandizing / 3d printing / environmental
          graphics architecture / interior design / project mgmt. / fabrication
        </p>
      </div>
    </div>
  );
};
