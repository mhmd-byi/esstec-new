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

  if (widthOfScreen !== null) {
    switch (widthOfScreen) {
      case 1280:
        console.log("1280");
        return {
          rectangleWidth: 662,
          rectangleHeight: 350,
          strokeWidth: 10,
          xAxis: 143,
          yAxis: -187,
          viewBox: "0 0 1100 790",
          componentClass: widthClassNames.screenSize1280.componentClass,
          sliderDivClasses: widthClassNames.screenSize1280.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1280.sliderSlideClasses,
          carouselImageClasses: widthClassNames.screenSize1280.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1280.maxWidth,
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
          componentClass: widthClassNames.screenSize1536.componentClass,
          sliderDivClasses: widthClassNames.screenSize1536.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1536.sliderSlideClasses,
          carouselImageClasses: widthClassNames.screenSize1536.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1536.maxWidth,
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
          componentClass: widthClassNames.screenSize1920.componentClass,
          sliderDivClasses: widthClassNames.screenSize1920.sliderDivClasses,
          sliderSlideClasses: widthClassNames.screenSize1920.sliderSlideClasses,
          carouselImageClasses: widthClassNames.screenSize1920.carouselImageClasses,
          maxWidth: widthClassNames.screenSize1920.maxWidth,
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
          componentClass: widthClassNames.defaultClasses.componentClass,
          sliderDivClasses: widthClassNames.defaultClasses.sliderDivClasses,
          sliderSlideClasses: widthClassNames.defaultClasses.sliderSlideClasses,
          carouselImageClasses: widthClassNames.defaultClasses.carouselImageClasses,
          maxWidth: widthClassNames.defaultClasses.maxWidth,
        };
    }
  }
};
