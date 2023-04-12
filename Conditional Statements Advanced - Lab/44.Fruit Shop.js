function fruitShop(input){

let fruit = input[0];
let day = input[1];
let numbers = input[2];
switch (fruit){
    case 'banana': switch (day){
        case 'Monday': console.log((numbers * 2.5).toFixed(2));break;
        case 'Tuesday': console.log((numbers * 2.5).toFixed(2));break;
        case 'Wednesday': console.log((numbers * 2.5).toFixed(2));break;
        case 'Thursday': console.log((numbers * 2.5).toFixed(2));break;
        case 'Friday': console.log((numbers * 2.5).toFixed(2));break;
        case 'Saturday':console.log((numbers * 2.7).toFixed(2));break;
        case 'Sunday':console.log((numbers * 2.7).toFixed(2));break;
        default: console.log('error');break;
    }break;
    case 'apple': switch (day){
        case 'Monday': console.log((numbers * 1.2).toFixed(2));break;
        case 'Tuesday': console.log((numbers * 1.2).toFixed(2));break;
        case 'Wednesday': console.log((numbers * 1.2).toFixed(2));break;
        case 'Thursday': console.log((numbers * 1.2).toFixed(2));break;
        case 'Friday': console.log((numbers * 1.2).toFixed(2));break;
        case 'Saturday':console.log((numbers * 1.25).toFixed(2));break;
        case 'Sunday':console.log((numbers * 1.25).toFixed(2));break;
        default: console.log('error');break;
    }break;
    case 'orange': switch (day){
        case 'Monday': console.log((numbers * 0.85).toFixed(2));break;
        case 'Tuesday': console.log((numbers * 0.85).toFixed(2));break;
        case 'Wednesday': console.log((numbers * 0.85).toFixed(2));break;
        case 'Thursday': console.log((numbers * 0.85).toFixed(2));break;
        case 'Friday': console.log((numbers * 0.85).toFixed(2));break;
        case 'Saturday':console.log((numbers * 0.9).toFixed(2));break;
        case 'Sunday':console.log((numbers * 0.9).toFixed(2));break;
        default: console.log('error');break;
    
}break;
case 'grapefruit': switch (day){
    case 'Monday': console.log((numbers * 1.45).toFixed(2));break;
    case 'Tuesday': console.log((numbers * 1.45).toFixed(2));break;
    case 'Wednesday': console.log((numbers * 1.45).toFixed(2));break;
    case 'Thursday': console.log((numbers * 1.45).toFixed(2));break;
    case 'Friday': console.log((numbers * 1.45).toFixed(2));break;
    case 'Saturday':console.log((numbers * 1.6).toFixed(2));break;
    case 'Sunday':console.log((numbers * 1.6).toFixed(2));break;
    default: console.log('error');break;
}break;
case 'kiwi': switch (day){
    case 'Monday': console.log((numbers * 2.7).toFixed(2));break;
    case 'Tuesday': console.log((numbers * 2.7).toFixed(2));break;
    case 'Wednesday': console.log((numbers * 2.7).toFixed(2));break;
    case 'Thursday': console.log((numbers * 2.7).toFixed(2));break;
    case 'Friday': console.log((numbers * 2.7).toFixed(2));break;
    case 'Saturday':console.log((numbers * 3).toFixed(2));break;
    case 'Sunday':console.log((numbers * 3).toFixed(2));break;
    default: console.log('error');break;
}break;
case 'pineapple': switch (day){
    case 'Monday': console.log((numbers * 5.5).toFixed(2));break;
    case 'Tuesday': console.log((numbers * 5.5).toFixed(2));break;
    case 'Wednesday': console.log((numbers * 5.5).toFixed(2));break;
    case 'Thursday': console.log((numbers * 5.5).toFixed(2));break;
    case 'Friday': console.log((numbers * 5.5).toFixed(2));break;
    case 'Saturday':console.log((numbers * 5.6).toFixed(2));break;
    case 'Sunday':console.log((numbers * 5.6).toFixed(2));break;
    default: console.log('error');break;
}break;
case 'grapes': switch (day){
    case 'Monday': console.log((numbers * 3.85).toFixed(2));break;
    case 'Tuesday': console.log((numbers * 3.85).toFixed(2));break;
    case 'Wednesday': console.log((numbers * 3.85).toFixed(2));break;
    case 'Thursday': console.log((numbers * 3.85).toFixed(2));break;
    case 'Friday': console.log((numbers * 3.85).toFixed(2));break;
    case 'Saturday':console.log((numbers * 4.2).toFixed(2));break;
    case 'Sunday':console.log((numbers * 4.2).toFixed(2));break;
    default: console.log('error');break;
}break;
default: console.log('error');break;
}
}

