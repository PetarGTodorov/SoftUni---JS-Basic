function onTimeForTheExam(input){
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);
   let totalExamMin = examHour * 60 + examMin;
   let totalArriveMin = arriveHour * 60 + arriveMin;
   let differenceInTime = Math.abs(totalExamMin - totalArriveMin);
   let hourDiff = Math.floor(differenceInTime / 60);
   let minDiff = differenceInTime % 60;
   if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)){
       minDiff = `0${minDiff}`;
   }
   if (totalArriveMin === totalExamMin){
       console.log(`On time`);
   } else if ( totalArriveMin > totalExamMin && differenceInTime < 60){
       console.log(`Late`);
       console.log(`${minDiff} minutes after the start`);
   } else if (totalArriveMin > totalExamMin && differenceInTime >= 60){
       console.log('Late');
       console.log(`${hourDiff}:${minDiff} hours after the start`);
   } else if (differenceInTime <= 30){
       console.log(`On time`);
       console.log(`${minDiff} minutes before the start`);
   } else if (differenceInTime > 30 && differenceInTime < 60){
       console.log('Early');
       console.log(`${minDiff} minutes before the start`)
   } else {
       console.log('Early');
       console.log(`${hourDiff}:${minDiff} hours before the start`)
   }
   
   }