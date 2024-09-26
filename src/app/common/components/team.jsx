import { checkForScreenSizeInDraw } from "@/helper/helper";

export const TeamComponent = () => {
  const checkForScreenSize = checkForScreenSizeInDraw();
  return (
    <div className={checkForScreenSize.componentClass}>
      <h2 className={`text-2xl md:text-6xl font-bold text-text-primary uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth}`}>
        Team
      </h2>
      <p className={`text-xs md:text-sm text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth} mt-2 md:mt-10`}>
        We are an electric team of multicultural individuals uniunited by a
        shared love for all things design. each of us brings unique expertise to
        every idea and conversation.
      </p>
      <p className={`text-xs md:text-sm text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth} mt-2 md:mt-10`}>
        We let our projects dictate the required skills, ensuring progress is
        never hindered and always backed by our can-do attitude.
      </p>
      <p className={`hidden md:block text-xs md:text-sm text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth} mt-2 md:mt-10`}>
        collaborating across the world with humans and pulling in animals (yes,
        essential for R&D), we maintain connections across asia, the middle
        east, africa and europe.
      </p>
      <p className={`text-xs md:text-sm text-text-primary capitalize md:uppercase duration-1000 ease-in-out text-center ${checkForScreenSize.maxWidth} mt-2 md:mt-10`}>
        whether you are interested in collaborating, working on a project
        together, or just stopping by for a chat over coffee, we&apos;re here.
        reach out to us at info@esstec.ae
        <p className="text-text-primary uppercase text-sm text-center mt-6">*</p>
      </p>
    </div>
  );
};
