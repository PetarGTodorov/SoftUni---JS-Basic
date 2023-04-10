function shopping(input){

let budget = Number(input[0]);
let videocard = Number(input[1]);
let processor = Number(input[2]);
let ram = Number(input[3]);
let priceVideocard = 250 * videocard;
let priceProcessor = (0.35 * priceVideocard) * processor;
let priceRam = (0.1 * priceVideocard) * ram ;
let totalSum = priceVideocard + priceProcessor + priceRam;
if (videocard > processor){
    totalSum = totalSum * 0.85;
    if ( budget < totalSum ){
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`)
    } else {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`)
    }

} else {
    totalSum = totalSum;
    if ( budget < totalSum ){
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`)
    } else {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`)
    }
}

}