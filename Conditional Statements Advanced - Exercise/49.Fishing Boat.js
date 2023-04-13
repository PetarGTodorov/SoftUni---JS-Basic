function fishingBoat(input){
let budget = Number(input[0]);
let season = input[1];
let num = Number(input[2]);
let rent = 0 ;
switch ( season ){
    case 'Spring': rent = 3000; 
    if ( num <=6 ){ if ( num % 2 === 0){
        rent = (rent * 0.9)*0.95;
    } else {
        rent = rent *0.9 ;
    }
} else if ( num > 6 && num <= 11){ if ( num % 2 === 0){
    rent = (rent * 0.85)*0.95;
} else {
    rent = rent *0.85 ;
}
} else {if ( num % 2 === 0){
    rent = (rent * 0.75)*0.95;
} else {
    rent = rent *0.75 ;
}
}break;
case 'Summer': rent = 4200; 
if ( num <=6 ){ if ( num % 2 === 0){
    rent = (rent * 0.9)*0.95;
} else {
    rent = rent *0.9 ;
}
} else if ( num > 6 && num <= 11){ if ( num % 2 === 0){
rent = (rent * 0.85)*0.95;
} else {
rent = rent *0.85 ;
}
} else {if ( num % 2 === 0){
rent = (rent * 0.75)*0.95;
} else {
rent = rent *0.75 ;
}
}break;
case 'Winter': rent = 2600; 
if ( num <=6 ){ if ( num % 2 === 0){
    rent = (rent * 0.9)*0.95;
} else {
    rent = rent *0.9 ;
}
} else if ( num > 6 && num <= 11){ if ( num % 2 === 0){
rent = (rent * 0.85)*0.95;
} else {
rent = rent *0.85 ;
}
} else {if ( num % 2 === 0){
rent = (rent * 0.75)*0.95;
} else {
rent = rent *0.75 ;
}
}break;
case 'Autumn': rent = 4200;
if ( num <= 6){
    rent = rent *0.9;
} else if ( num > 6 && num <= 11){
    rent = rent * 0.85;
} else {
    rent = rent *0.75
}
}
if ( budget >= rent){
    console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`)
} else {
    console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`)
}
}
fishingBoat (["3000",
"Summer",
"11"])


