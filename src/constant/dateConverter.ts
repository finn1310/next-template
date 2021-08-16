/* eslint-disable @typescript-eslint/no-explicit-any */
const DateConverter = class {
  /**
   * Show time from parseData to current.
   * @param parseData : string: format 0001-01-01T00:00:00+00:00
   */
  timeFromCurrentDate = (parseData: string) => {
    const minuteMs = 1000 * 60; // ms
    const hourMs = minuteMs * 60;
    const dayMs = hourMs * 24;

    const parseDate = new Date(parseData);
    const currentDate = new Date();
    const distance = Math.abs(currentDate.getTime() - parseDate.getTime());

    const days = Math.floor(distance / dayMs);
    const hours = Math.floor((distance % dayMs) / hourMs);
    const minute = Math.floor((distance % hourMs) / minuteMs);

    if (days === 0 && hours === 0 && minute === 0) return "just now";
    else
      return days === 0
        ? hours === 0
          ? (minute ?? 0) + "m"
          : (hours ?? 0) + "h"
        : (days ?? 0) + "d";
  };

  // Format date to string format: "yyyy-MM-ddThh:mm:ssZ"
  formatDate = (date: any, format?: string, setTimeZone?: boolean) => {
    if (!format) format = "yyyy-MM-ddThh:mm:ssZ";
    const dateObj = new Date(date);
    if (setTimeZone) {
      const timeZone = new Date().getTimezoneOffset() / 60;
      dateObj.setHours(dateObj.getHours() + timeZone);
    }
    const year = dateObj.getFullYear();
    if (year === 1 || year === 1970) return "";
    const day = `0${dateObj.getDate()}`.substr(-2);
    const month = `0${dateObj.getMonth() + 1}`.substr(-2);
    const hours = `0${dateObj.getHours()}`.substr(-2);
    const minutes = `0${dateObj.getMinutes()}`.substr(-2);
    const seconds = `0${dateObj.getSeconds()}`.substr(-2);
    let dateFormat = format.replace("yyyy", year.toString());
    dateFormat = dateFormat.replace("MM", month);
    dateFormat = dateFormat.replace("dd", day);
    dateFormat = dateFormat.replace("hh", hours);
    dateFormat = dateFormat.replace("mm", minutes);
    dateFormat = dateFormat.replace("ss", seconds);

    return dateFormat;
  };

  /**
   * Get number of months between 2 dates
   * @param startDate format yyyy/MM/dd
   * @param endDate
   */
  dateRange = (startDate: any, endDate: any) => {
    const start = startDate.split("/");
    const end = endDate.split("/");
    const startYear = parseInt(start[0]);
    const endYear = parseInt(end[0]);
    const dates = new Array<any>();

    for (let i = startYear; i <= endYear; i++) {
      const endMonth = i !== endYear ? 11 : parseInt(end[1]) - 1;
      const startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
      for (let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
        const month = j + 1;
        const displayMonth = month < 10 ? "0" + month : month;
        dates.push([i, displayMonth, "01"].join("/"));
      }
    }

    return dates;
  };
};
const dateConverter = new DateConverter();

export { dateConverter };
