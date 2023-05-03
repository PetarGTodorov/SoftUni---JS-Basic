function accountBalance(input){
let i =0;
let sum = 0;
while ( input[i] !== 'NoMoreMoney' || Number(input[i]) >= 0){
    if (Number(input[i]) >= 0){
    console.log(`Increase: ${Number(input[i]).toFixed(2)}`)
    sum = Number(input[i]) + sum;
    i++; 
} else {
     console.log(`Invalid operation!`)
    i++;
    break;
} 
} 
console.log(`Total: ${sum.toFixed(2)}`)
}
accountBalance (["5.51", 
"69.42",
"100",
"NoMoreMoney"])
