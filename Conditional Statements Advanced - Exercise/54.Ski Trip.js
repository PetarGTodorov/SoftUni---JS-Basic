function skiTrip(input){
let days  = Number(input[0]);
let stay = days - 1 ;
let typeOfRoom = input[1];
let grade = input[2];
let discount = 0;
let price = 0;
let totalSum = stay * price * (1 - discount/100)

switch (typeOfRoom){
    case 'room for one person': price = 18; discount = 0;
    switch (grade){
        case 'positive':totalSum = (stay * price * (1 - discount/100)) * 1.25;break;
        case 'negative': totalSum = (stay * price * (1 - discount/100)) * 0.9;break;
    } break;
    case 'apartment': price = 25; 
    if (days < 10){
        discount = 30;
    } else if( days >=10 && days <= 15){
        discount = 35;
    } else {
        discount = 50;
    }
    switch (grade){
        case 'positive':totalSum = (stay * price * (1 - discount/100)) * 1.25;break;
        case 'negative': totalSum = (stay * price * (1 - discount/100)) * 0.9;break;
    } break;
    case 'president apartment': price = 35;
    if (days < 10){
        discount = 10;
    } else if( days >=10 && days <= 15){
        discount = 15;
    } else {
        discount = 20;
    }
    switch (grade){
        case 'positive':totalSum = (stay * price * (1 - discount/100)) * 1.25;break;
        case 'negative': totalSum = (stay * price * (1 - discount/100)) * 0.9;break;
    } break;
}
console.log(totalSum.toFixed(2))
}
skiTrip(["14",
"apartment",
"positive"])
