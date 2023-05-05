function vacation(input){
let moneyNeeded = Number(input[0]);
let avaliableMoney = Number(input[1]);
let days = 0;
let count = 0

for(let i = 2; i < input.length; i += 2){
    if(input[i] === 'save'){
        avaliableMoney += Number(input[i+1]);
        days ++;
        count = 0;
        if(avaliableMoney >= moneyNeeded){
            console.log(`You saved the money for ${days} days.`)
            break;
        } else {
            continue;
        }
    } else {
        avaliableMoney -= Number(input[i+1]);
        if(avaliableMoney < 0){
            avaliableMoney = 0;
        }
        days ++;
        count ++;
     if(count === 5){
        console.log("You can't save the money.");
        console.log(`${days}`)
        break;
     }
    }
}
}
vacation(["1000",
"500",
"spend",
"900",
"save",
"900",
])

