/*function signature/sample */
function calculateSleepTime(times) {
  let totalSec = 0;
  let totalHour = 0;
  let totalMinutes = 0;
  let totalSecond = 0;
  for (const time of times) {
    if (typeof time !== "number") {
      return "invalid";
    }
    totalSec += time;
  }
  totalHour = parseInt(totalSec / 3600);
  totalMinutes = parseInt((totalSec % 3600) / 60);
  totalSecond = totalSec - (3600 * totalHour + 60 * totalMinutes);

  return { hour: totalHour, minutes: totalMinutes, sec: totalSecond };
}

const vat = calculateSleepTime([5600]);
console.log(vat);
