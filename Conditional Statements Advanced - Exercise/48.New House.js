function newHouse(input){

let flowerName = input[0];
let flowerNumber = Number(input[1]);
let budget = Number(input[2]);
switch (flowerName){
    case 'Roses': if (flowerNumber > 80){
        if ((flowerNumber * 5)*0.9 > budget){
            console.log(`Not enough money, you need ${(((flowerNumber * 5)*0.9) - budget).toFixed(2)} leva more.`)
        } else {
            console.log (`Hey, you have a great garden with ${flowerNumber} ${flowerName} and ${(budget - ((flowerNumber * 5)*0.9)).toFixed(2)} leva left.`)
        }
    } else {
        if ((flowerNumber * 5) > budget){
            console.log(`Not enough money, you need ${(((flowerNumber * 5)) - budget).toFixed(2)} leva more.`)
        } else {
            console.log (`Hey, you have a great garden with ${flowerNumber} ${flowerName} and ${(budget - ((flowerNumber * 5))).toFixed(2)} leva left.`)
        }
    };break;
    case 'Dahlias': if (flowerNumber > 90){
        if ((flowerNumber * 3.8)*0.85 > budget){
            console.log(`Not enough money, you need ${(((flowerNumber * 3.8)*0.85) - budget).toFixed(2)} leva more.`)
        } else {
            console.log (`Hey, you have a great garden with ${flowerNumber} ${flowerName} and ${(budget - ((flowerNumber * 3.8)*0.85)).toFixed(2)} leva left.`)
        }
    } else {
        if ((flowerNumber * 3.8) > budget){
            console.log(`Not enough money, you need ${(((flowerNumber * 3.8)) - budget).toFixed(2)} leva more.`)
        } else {
            console.log (`Hey, you have a great garden with ${flowerNumber} ${flowerName} and ${(budget - ((flowerNumber * 3.8))).toFixed(2)} leva left.`)
        }
    };break;
    case 'Tulips': if (flowerNumber > 80){
        if ((flowerNumber * 2.8)*0.85 > budget){
            console.log(`Not enough money, you need ${(((flowerNumber * 2.8)*0.85) - budget).toFixed(2)} leva more.`)
        } else {
            console.log (`Hey, you have a great garden with ${flowerNumber} ${flowerName} and ${(budget - ((flowerNumber * 2.8)*0.85)).toFixed(2)} leva left.`)
        }
    } else {
        if ((flowerNumber * 2.8) > budget){
            console.log(`Not enough money, you need ${(((flowerNumber * 2.8)) - budget).toFixed(2)} leva more.`)
        } else {
            console.log (`Hey, you have a great garden with ${flowerNumber} ${flowerName} and ${(budget - ((flowerNumber * 2.8))).toFixed(2)} leva left.`)
        }
    };break;
    case 'Narcissus': if (flowerNumber < 120){
        if ((flowerNumber * 3)*1.15 > budget){
            console.log(`Not enough money, you need ${(((flowerNumber * 3)*1.15) - budget).toFixed(2)} leva more.`)
        } else {
            console.log (`Hey, you have a great garden with ${flowerNumber} ${flowerName} and ${(budget - ((flowerNumber * 3)*1.15)).toFixed(2)} leva left.`)
        }
    } else {
        if ((flowerNumber * 3) > budget){
            console.log(`Not enough money, you need ${(((flowerNumber * 3)) - budget).toFixed(2)} leva more.`)
        } else {
            console.log (`Hey, you have a great garden with ${flowerNumber} ${flowerName} and ${(budget - ((flowerNumber * 3))).toFixed(2)} leva left.`)
        }
    };break;
    case 'Gladiolus': if (flowerNumber < 80){
        if ((flowerNumber * 2.5)*1.2 > budget){
            console.log(`Not enough money, you need ${(((flowerNumber * 2.5)*1.2) - budget).toFixed(2)} leva more.`)
        } else {
            console.log (`Hey, you have a great garden with ${flowerNumber} ${flowerName} and ${(budget - ((flowerNumber * 2.5)*1.2)).toFixed(2)} leva left.`)
        }
    } else {
        if ((flowerNumber * 2.5) > budget){
            console.log(`Not enough money, you need ${(((flowerNumber * 2.5)) - budget).toFixed(2)} leva more.`)
        } else {
            console.log (`Hey, you have a great garden with ${flowerNumber} ${flowerName} and ${(budget - ((flowerNumber * 2.5))).toFixed(2)} leva left.`)
        }
    };break;
} 

}