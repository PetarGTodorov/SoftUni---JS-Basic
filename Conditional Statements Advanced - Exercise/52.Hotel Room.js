function hotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);
    let totalSumApart = 0;
    let totalSumStudio = 0;
  if ( month === 'May' || month === 'October'){
    if ( nights > 7 && nights <= 14){
        totalSumApart = nights * 65;
        totalSumStudio = (nights * 50)*0.95;
    } else if ( nights > 14){
        totalSumApart = (nights * 65)*0.9;
        totalSumStudio = (nights * 50)*0.7;
    } else {
        totalSumApart = nights * 65;
        totalSumStudio = nights * 50;
    }
  } else if ( month === 'June' || month === 'September'){
    if ( nights > 14){
        totalSumApart = (nights * 68.7) * 0.9;
        totalSumStudio = (nights * 75.2) * 0.8;
    } else {
        totalSumApart = nights * 68.7;
        totalSumStudio = nights * 75.2;
    }
  } else  {
    if ( nights > 14){
        totalSumApart = (nights * 77) * 0.9;
        totalSumStudio = nights * 76 ;

  } else {totalSumApart = nights * 77;
    totalSumStudio = nights * 76 ;

  }
}
console.log(`Apartment: ${(totalSumApart).toFixed(2)} lv.`);
console.log(`Studio: ${(totalSumStudio).toFixed(2)} lv.`);

}

