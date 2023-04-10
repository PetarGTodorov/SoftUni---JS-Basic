function sumOfSeconds(input) {
  let firstTime = Number(input[0]);
  let secondTime = Number(input[1]);
  let thirdTime = Number(input[2]);
  let totalTime = firstTime + secondTime + thirdTime;
  if (totalTime >= 60) {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds >= 10) {
      console.log(`${minutes}:${seconds}`);
    } else {
      console.log(`${minutes}:0${seconds}`);
    }
  } else {
    let seconds = totalTime % 60;
    if (seconds >= 10) {
      console.log(`0:${seconds}`);
    } else {
      console.log(`0:0${seconds}`);
    }
  }
}
sumOfSeconds(["38", "49", "43"]);
