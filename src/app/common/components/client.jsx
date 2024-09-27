import { checkForScreenSizeInDraw } from "@/helper/helper";
import { clientData } from "./clientsData";

export const ClientComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  return (
    <div
      className={
        checkForScreenSize.screenSize === 1920
          ? "absolute px-0 right-auto left-auto top-48 mt-10 w-[1100px] items-center justify-center z-[60]"
          : checkForScreenSize.screenSize === 1536
          ? "absolute mx-auto right-auto left-auto top-56 w-[800px] mt-10 z-[60]"
          : checkForScreenSize.screenSize === 1280
          ? "absolute top-56 left-48 mt-10 w-[730px] z-[60]"
          : "absolute mx-auto right-auto left-auto px-0 top-56 mt-10 w-[1000px] items-center justify-center z-[60]"
      }
    >
      <h2 className={`${checkForScreenSize.screenSize === 1920 ? 'text-6xl' : (checkForScreenSize.screenSize === 1536 ? 'text-4xl' : (checkForScreenSize.screenSize === 1280 ? 'text-3xl' : 'text-6xl'))} font-bold text-text-primary uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth}`}>
        clients
      </h2>
      <div className={`flex flex-row flex-wrap mt-10 ${checkForScreenSize.maxWidth}`}>
        {clientData.map((data, index) => (
          <div className="basis-1/4 justify-between py-5" key={index}>
            <div className={`text-text-primary uppercase ${(checkForScreenSize.screenSize === 1536 || checkForScreenSize.screenSize === 1280) ? 'text-xs' : 'text-sm'}`}>
              {data.name}
            </div>
            <div className={`text-text-primary font-medium lowercase ${(checkForScreenSize.screenSize === 1536 || checkForScreenSize.screenSize === 1280) ? 'text-xs' : 'text-sm'}`}>
              <a
                href={`https://${data.website}`}
                target="_blank"
                className="cursor-pointer"
              >
                {data.website}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
