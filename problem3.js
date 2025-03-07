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

const success = willSuccess([48, 48, 50, 50, 100]);
console.log(success);
