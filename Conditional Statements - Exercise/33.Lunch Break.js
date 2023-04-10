function lunchBreak(input){

let seriesName = input[0];
let time = Number(input[1]);
let breakTime = Number(input[2]);
let lunchTime = breakTime / 8;
let relaxTime = breakTime / 4;
let leftTime = breakTime - lunchTime - relaxTime ;
if ( leftTime >= time ){
    console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(leftTime - time)} minutes free time.`)
} else {
    console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(time - leftTime)} more minutes.`)
}
}