import moment from "moment-timezone";

export const convertTimezoneOffsetToGMT = (timezoneOffset) => {
  const sign = timezoneOffset > 0 ? "-" : "+";
  const absoluteOffset = Math.abs(timezoneOffset);
  const hours = Math.floor(absoluteOffset / 60);
  const minutes = absoluteOffset % 60;

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");

  return `GMT${sign}${paddedHours}:${paddedMinutes}`;
};

export const getCurrentTimeInGMTPlus4 = () => {
  const time = moment.tz("Asia/Dubai");
  const formattedTime = time.format("HH:mm:ss");
  return `${formattedTime} GMT+04:00`;
};

export const calculateCurrentTime = () => {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString("en-US", { hour12: false });
  const timezone = convertTimezoneOffsetToGMT(now.getTimezoneOffset());

  return `${formattedTime} ${timezone}`;
};

export const checkForScreenSizeInDraw = () => {
  const hasWindow = typeof window !== "undefined"
  const widthOfScreen = hasWindow ? window.innerWidth : null;

  switch (widthOfScreen) {
    case 1280:
      console.log("1280");
      return {
        rectangleWidth: 662,
        rectangleHeight: 350,
        strokeWidth: 10,
        xAxis: 143,
        yAxis: -192,
        viewBox: "0 0 1100 790",
      };
    case 1536:
      console.log("1536");
      return {
        rectangleWidth: 698,
        rectangleHeight: 400,
        strokeWidth: 10,
        xAxis: 120,
        yAxis: -21,
        viewBox: "0 0 1100 600",
      };
    case 1920:
      console.log("1920");
      return {
        rectangleWidth: 736,
        rectangleHeight: 370,
        strokeWidth: 10,
        xAxis: 97,
        yAxis: 105,
        viewBox: "0 0 1100 490",
        componentClass:
          "absolute px-10 md:px-0 right-0 left-0 md:right-auto md:left-auto top-1/2 md:top-56 mt-14 md:mt-10 md:w-[1100px] items-center justify-center z-[60]",
        sliderDivClasses: "absolute top-96 left-10 md:top-[190px] md:left-44 mt-[6.9rem] md:mt-0 w-[80.5vw] h-[80vw] md:w-[66vw] md:h-fit items-center justify-center",
        sliderSlideClasses: "rounded-[27.5px] z-50",
        carouselImageClasses: "w-full h-full md:max-h-[628px] md:w-full rounded-2xl md:rounded-[27.5px]",
      };
    default:
      console.log("default");
      return {
        rectangleWidth: 719,
        rectangleHeight: 384,
        strokeWidth: 10,
        xAxis: 108,
        yAxis: 85,
        viewBox: "0 0 1100 490",
        componentClass:
          "absolute px-10 md:px-0 right-0 left-0 md:right-auto md:left-auto top-1/2 md:top-56 mt-14 md:mt-10 md:w-[1100px] items-center justify-center z-[60]",
        sliderDivClasses:
          "absolute top-96 left-10 md:top-[190px] md:left-44 mt-[6.9rem] md:mt-2 w-[80.5vw] h-[80vw] md:w-[63.9vw] md:h-[68.5vh] items-center justify-center",
        sliderSlideClasses: "rounded-[27.5px] z-50",
        carouselImageClasses: "h-full w-full rounded-2xl md:rounded-[27.5px]",
      };
  }
};
