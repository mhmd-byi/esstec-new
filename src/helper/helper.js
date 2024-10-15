import { widthClassNames } from "@/lang";
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
  const hasWindow = typeof window !== "undefined";
  const widthOfScreen = hasWindow ? window.innerWidth : null;
  const heightOfScreen = hasWindow ? window.innerHeight : null;
  if (widthOfScreen !== null) {
    switch (widthOfScreen) {
      case 1280:
        return {
          screenSize: 1280,
          rectangleWidth: widthOfScreen - (40 / 100) * widthOfScreen,
          rectangleHeight: heightOfScreen - (39 / 100) * heightOfScreen,
          strokeWidth: 10,
          xAxis: (13 / 100) * widthOfScreen,
          yAxis: -(43 / 100) * heightOfScreen,
          viewBox: `0 0 ${widthOfScreen} ${heightOfScreen + 200}`,
          componentClass: widthClassNames.screenSize1280.componentClass,
          sliderDivClasses: widthClassNames.screenSize1280.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1280.sliderSlideClasses,
          carouselImageClasses:
            widthClassNames.screenSize1280.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1280.maxWidth,
          marginTop: widthClassNames.screenSize1280.marginTop,
        };
      case 1360:
        return {
          screenSize: 1360,
          rectangleWidth: widthOfScreen - (38.5 / 100) * widthOfScreen,
          rectangleHeight: heightOfScreen - (29.5 / 100) * heightOfScreen,
          strokeWidth: 10,
          xAxis: (12.25 / 100) * widthOfScreen,
          yAxis: -(48 / 100) * heightOfScreen,
          viewBox: `0 0 ${widthOfScreen} ${heightOfScreen + 250}`,
          componentClass: widthClassNames.screenSize1536.componentClass,
          sliderDivClasses: widthClassNames.screenSize1536.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1536.sliderSlideClasses,
          carouselImageClasses:
            widthClassNames.screenSize1536.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1536.maxWidth,
          marginTop: widthClassNames.screenSize1536.marginTop,
        };
      case 1366:
        return {
          screenSize: 1366,
          rectangleWidth: widthOfScreen - (38.5 / 100) * widthOfScreen,
          rectangleHeight: heightOfScreen - (30 / 100) * heightOfScreen,
          strokeWidth: 10,
          xAxis: (12.25 / 100) * widthOfScreen,
          yAxis: -(48 / 100) * heightOfScreen,
          viewBox: `0 0 ${widthOfScreen} ${heightOfScreen + 250}`,
          componentClass: widthClassNames.screenSize1536.componentClass,
          sliderDivClasses: widthClassNames.screenSize1536.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1536.sliderSlideClasses,
          carouselImageClasses:
            widthClassNames.screenSize1536.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1536.maxWidth,
          marginTop: widthClassNames.screenSize1536.marginTop,
        };
      case 1400:
        return {
          screenSize: 1400,
          rectangleWidth: widthOfScreen - (37.5 / 100) * widthOfScreen,
          rectangleHeight: heightOfScreen - (49.5 / 100) * heightOfScreen,
          strokeWidth: 10,
          xAxis: (11.5 / 100) * widthOfScreen,
          yAxis: -(20 / 100) * heightOfScreen,
          viewBox: `0 0 ${widthOfScreen} ${heightOfScreen}`,
          componentClass: widthClassNames.screenSize1536.componentClass,
          sliderDivClasses: widthClassNames.screenSize1536.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1536.sliderSlideClasses,
          carouselImageClasses:
            widthClassNames.screenSize1536.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1536.maxWidth,
          marginTop: widthClassNames.screenSize1536.marginTop,
        };
      case 1440:
        return {
          screenSize: 1440,
          rectangleWidth: widthOfScreen - (37.5 / 100) * widthOfScreen,
          rectangleHeight: heightOfScreen - (37.5 / 100) * heightOfScreen,
          strokeWidth: 10,
          xAxis: (11.5 / 100) * widthOfScreen,
          yAxis: -(25 / 100) * heightOfScreen,
          viewBox: `0 0 ${widthOfScreen} ${heightOfScreen}`,
          componentClass: widthClassNames.screenSize1536.componentClass,
          sliderDivClasses: widthClassNames.screenSize1536.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1536.sliderSlideClasses,
          carouselImageClasses:
            widthClassNames.screenSize1536.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1536.maxWidth,
          marginTop: widthClassNames.screenSize1536.marginTop,
        };
      case 1536:
        return {
          screenSize: 1536,
          rectangleWidth: widthOfScreen - (33 / 100) * widthOfScreen,
          rectangleHeight: heightOfScreen - (32 / 100) * heightOfScreen,
          strokeWidth: 10,
          xAxis: (8.75 / 100) * widthOfScreen,
          yAxis: -(29 / 100) * heightOfScreen,
          viewBox: `0 0 ${widthOfScreen} ${heightOfScreen}`,
          componentClass: widthClassNames.screenSize1536.componentClass,
          sliderDivClasses: widthClassNames.screenSize1536.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1536.sliderSlideClasses,
          carouselImageClasses:
            widthClassNames.screenSize1536.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1536.maxWidth,
          marginTop: widthClassNames.screenSize1536.marginTop,
        };
      case 1600:
        return {
          screenSize: 1600,
          rectangleWidth: widthOfScreen - (36 / 100) * widthOfScreen,
          rectangleHeight: heightOfScreen - (29.25 / 100) * heightOfScreen,
          strokeWidth: 15,
          xAxis: (10.5 / 100) * widthOfScreen,
          yAxis: -(29.25 / 100) * heightOfScreen,
          viewBox: `0 0 ${widthOfScreen} ${heightOfScreen + 10}`,
          componentClass: widthClassNames.screenSize1536.componentClass,
          sliderDivClasses: widthClassNames.screenSize1536.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1536.sliderSlideClasses,
          carouselImageClasses:
            widthClassNames.screenSize1536.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1536.maxWidth,
          marginTop: widthClassNames.screenSize1536.marginTop,
        };
      case 1680:
        return {
          screenSize: 1680,
          rectangleWidth: widthOfScreen - (35 / 100) * widthOfScreen,
          rectangleHeight: heightOfScreen - (36 / 100) * heightOfScreen,
          strokeWidth: 15,
          xAxis: (10 / 100) * widthOfScreen,
          yAxis: -(25.5 / 100) * heightOfScreen,
          viewBox: `0 0 ${widthOfScreen} ${heightOfScreen}`,
          componentClass: widthClassNames.screenSize1536.componentClass,
          sliderDivClasses: widthClassNames.screenSize1536.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1536.sliderSlideClasses,
          carouselImageClasses:
            widthClassNames.screenSize1536.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1536.maxWidth,
          marginTop: widthClassNames.screenSize1536.marginTop,
        };
      case 1920:
        return {
          screenSize: 1920,
          rectangleWidth: widthOfScreen - (33 / 100) * widthOfScreen,
          rectangleHeight: heightOfScreen - (32 / 100) * heightOfScreen,
          strokeWidth: 20,
          xAxis: (8.75 / 100) * widthOfScreen,
          yAxis: -(29 / 100) * heightOfScreen,
          viewBox: `0 0 ${widthOfScreen} ${heightOfScreen}`,
          componentClass: widthClassNames.screenSize1920.componentClass,
          sliderDivClasses: widthClassNames.screenSize1920.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1920.sliderSlideClasses,
          carouselImageClasses:
            widthClassNames.screenSize1920.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1920.maxWidth,
          marginTop: widthClassNames.screenSize1920.marginTop,
        };
      default:
        return {
          screenSize: 1,
          rectangleWidth: 719,
          rectangleHeight: 384,
          strokeWidth: 10,
          xAxis: 108,
          yAxis: 85,
          viewBox: "0 0 1100 490",
          componentClass: widthClassNames.defaultClasses.componentClass,
          sliderDivClasses: widthClassNames.defaultClasses.sliderDivClasses,
          sliderSlideClasses: widthClassNames.defaultClasses.sliderSlideClasses,
          carouselImageClasses:
            widthClassNames.defaultClasses.carouselImageClasses,
          maxWidth: widthClassNames.defaultClasses.maxWidth,
          marginTop: widthClassNames.defaultClasses.marginTop,
        };
    }
  }
};

export const getOperatingSystem = () => {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];

  if (macosPlatforms.indexOf(platform) !== -1) {
    return "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    return "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    return "Windows";
  } else if (/Android/.test(userAgent)) {
    return "Android";
  } else if (!os && /Linux/.test(platform)) {
    return "Linux";
  }

  return "unknown";
};
