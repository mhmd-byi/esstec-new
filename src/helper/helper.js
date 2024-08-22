import moment from "moment-timezone";

export const convertTimezoneOffsetToGMT = (timezoneOffset) => {
    // Determine the sign, hours, and minutes from the timezoneOffset
    const sign = timezoneOffset > 0 ? '-' : '+';
    const absoluteOffset = Math.abs(timezoneOffset);
    const hours = Math.floor(absoluteOffset / 60);
    const minutes = absoluteOffset % 60;

    // Pad the hours and minutes with leading zeros if necessary
    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');

    // Construct the GMT string
    return `GMT${sign}${paddedHours}:${paddedMinutes}`;
}

export const getCurrentTimeInGMTPlus4 = () => {
    const time = moment.tz("Asia/Dubai");
    const formattedTime = time.format("HH:mm:ss");
    return `${formattedTime} GMT+04:00`;
}


export const calculateCurrentTime = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('en-US', { hour12: false });
    const timezone = convertTimezoneOffsetToGMT(now.getTimezoneOffset());

    return `${formattedTime} ${timezone}`;
};