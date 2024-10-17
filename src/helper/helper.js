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

export const getOperatingSystem = () => {
  const hasWindow = typeof window !== "undefined";
  const userAgent = hasWindow ? window.navigator.userAgent : null;
  const platform = hasWindow ? window.navigator.platform : null;
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
  } else if (/Linux/.test(platform)) {
    return "Linux";
  }

  return "unknown";
};
