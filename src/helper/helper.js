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
        componentClass:
          "absolute sm:px-10 sm:right-0 sm:left-0 sm:top-1/2 top-56 sm:mt-14 w-[1000px] mt-10 z-[60]",
        maxWidth: "max-w-[950px]"
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
        componentClass:
          "absolute sm:px-10 sm:right-0 sm:left-0 sm:top-1/2 top-56 sm:mt-14 w-[1000px] mt-10 z-[60]",
        maxWidth: "max-w-[1000px]"
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
          "absolute sm:px-10 px-0 sm:right-0 sm:left-0 right-auto left-auto sm:top-1/2 top-56 sm:mt-14 mt-10 w-[1100px] items-center justify-center z-[60]",
        sliderDivClasses: 
          "flex absolute sm:top-96 sm:left-10 top-[100px] left-44 sm:mt-[6.9rem] mt-0 sm:w-[80.5vw] sm:h-[80vw] w-[66vw] items-center justify-center",
        // sliderDivClasses: "absolute sm:top-96 sm:left-10 top-[190px] left-44 sm:mt-[6.9rem] mt-0 sm:w-[80.5vw] sm:h-[80vw] w-[66vw] h-fit items-center justify-center",
        sliderSlideClasses: "rounded-[27.5px] z-50",
        carouselImageClasses: "w-full sm:h-full max-h-[628px] sm:rounded-2xl rounded-[27.5px]",
        maxWidth: "max-w-[1150px]"
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
          "absolute sm:right-0 sm:left-0 mx-auto right-auto left-auto px-0 sm:px-10 sm:top-1/2 top-56 sm:mt-14 mt-10 w-[1100px] items-center justify-center z-[60]",
        sliderDivClasses:
          "absolute sm:top-96 sm:left-10 top-[190px] left-44 sm:mt-[6.9rem] mt-2 sm:w-[80.5vw] sm:h-[80vw] w-[63.9vw] h-[68.5vh] items-center justify-center",
        sliderSlideClasses: "rounded-[27.5px] z-50",
        carouselImageClasses: "h-full w-full sm:rounded-2xl rounded-[27.5px]",
        maxWidth: "max-w-[970px]",
      };
  }
};
