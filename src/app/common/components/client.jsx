import { checkForScreenSizeInDraw } from "@/helper/helper";
import { clientData } from "./clientsData";

export const ClientComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  return (
    <div className={checkForScreenSize.componentClass}>
      <h2 className="text-6xl font-bold text-text-primary uppercase duration-1000 ease-in-out text-center max-w-[970px]">
        clients
      </h2>
      <div className="flex flex-row flex-wrap mt-10 overflow-y-auto">
        {clientData.map((data, index) => (
          <div className="basis-1/4 justify-between py-5" key={index}>
            <div className="text-text-primary text-sm uppercase">
              {data.name}
            </div>
            <div className="text-text-primary font-medium text-sm lowercase">
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
