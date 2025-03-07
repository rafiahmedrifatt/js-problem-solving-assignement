function calculateVAT(price) {
  const invalid = "invalid";
  if (typeof price !== "number") {
    return invalid;
  } else if (price < 0) {
    return invalid;
  }
  const VAT = (price * 7.5) / 100;
  return VAT;
}

function validContact(contact) {
  if (typeof contact !== "string") {
    return "invalid";
  }
  if (contact.includes(" ")) {
    return false;
  } else if (contact.length === 11 && contact.startsWith("01")) {
    return true;
  } else {
    return false;
  }
}

function willSuccess(marks) {
  let isPassed = 0;
  let isFailed = 0;
  console.log(typeof marks);
  if (Array.isArray(marks)) {
    for (const mark of marks) {
      if (mark >= 50) {
        isPassed++;
      } else {
        isFailed++;
      }
    }
    if (isPassed > isFailed) {
      return true;
    }
    return false;
  }
  return "invalid";
}

function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "invalid";
  }
  if (
    person1.gender !== person2.gender &&
    Math.abs(person1.age - person2.age) <= 7
  ) {
    return true;
  }
  return false;
}

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
