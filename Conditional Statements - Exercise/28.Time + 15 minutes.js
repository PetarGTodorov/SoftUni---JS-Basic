function timePlus15minutes(input) {
  let hour = Number(input[0]);
  let minute = Number(input[1]);

  if (minute <= 44) {
    if (hour <= 23) {
      console.log(`${hour}:${minute + 15}`);
    } else {
      console.log(`${hour + 1}:${(minute - 45) * -1}`);
    }
  } else if (54 >= minute) {
    if (hour <= 22) {
      console.log(`${hour + 1}:0${minute - 45}`);
    } else {
      console.log(`0:0${minute - 45}`);
    }
  } else {
    if (hour <= 22) {
      console.log(`${hour + 1}:${minute - 45}`);
    } else {
      console.log(`0:${minute - 45}`);
    }
  }
}
timePlus15minutes(["21", "55"]);
