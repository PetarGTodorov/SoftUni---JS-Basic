function journey(input){
let budget = Number(input[0]);
let season = input[1];
let destination = "";
let typeOfStay = "";
let spending = 0;
if (budget <= 100){
    switch ( season ){
        case 'summer': destination = "Bulgaria"; typeOfStay = "Camp" ; spending = budget * 0.3;break;
        case 'winter': destination = "Bulgaria"; typeOfStay = "Hotel"; spending = budget * 0.7;break;
    } 
} else if ( budget > 100 && budget <= 1000 ){
    switch ( season ){
        case 'summer': destination = "Balkans"; typeOfStay = "Camp" ; spending = budget * 0.4;break;
        case 'winter': destination = "Balkans"; typeOfStay = "Hotel"; spending = budget * 0.8;break;
    }
} else {
    switch ( season ){
        case 'summer': destination = "Europe"; typeOfStay = "Hotel" ; spending = budget * 0.9;break;
        case 'winter': destination = "Europe"; typeOfStay = "Hotel"; spending = budget * 0.9;break;
    }
}
console.log(`Somewhere in ${destination}`)
console.log(`${typeOfStay} - ${(spending.toFixed(2))}`)
}
journey (["50", "summer"])