function toyShop(input){

let vacationPrice = Number(input[0]);
let puzzles = Number(input[1]);
let speakingDoll = Number(input[2]);
let teddyBear = Number(input[3]);
let minion = Number (input[4]);
let truck = Number(input[5]);
let totalSum = puzzles * 2.6 + speakingDoll * 3 + teddyBear * 4.1 + minion * 8.2 + truck * 2 ;
let numberOfToys = puzzles + speakingDoll + teddyBear + minion + truck ;

if ( numberOfToys >= 50) {
    totalSum = (totalSum * 0.75) * 0.9 ;
    if ( totalSum >= vacationPrice){
        console.log(`Yes! ${(totalSum - vacationPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(vacationPrice - totalSum).toFixed(2)} lv needed.`)
    }
    
} else {
    totalSum = totalSum * 0.9 ; 
    if ( totalSum >= vacationPrice){
        console.log(`Yes! ${(totalSum - vacationPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(vacationPrice - totalSum).toFixed(2)} lv needed.`)
    }
}

}