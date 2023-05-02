function cleverLily(input){
let ageLily = Number(input[0]);
let washingMachine = Number(input[1]);
let priceToy = Number(input[2]);
let savedMoney = 0;
let savedToys = 0;
for (let i = 1; i <=ageLily; i++){
    if ((i % 2)===1){
        savedToys += 1;
    } else {
        savedMoney = (savedMoney + (i*5)) - 1;
}
}
let moneyFromToys = priceToy * savedToys;
let totalSum = moneyFromToys + savedMoney;
if ( totalSum >= washingMachine){
    console.log(`Yes! ${(totalSum - washingMachine).toFixed(2)}`);
} else {
    console.log(`No! ${(washingMachine - totalSum).toFixed(2)}`);
}
}
cleverLily (["10",
"170.00",
"6"])
