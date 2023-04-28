function sumOfNumbers(input){

    let n = input[0];
    let sum = 0;
for ( i = 0; i <= n.length - 1 ; i++){
    let number = Number(n[i]);
    sum = sum+number
}
console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(['1234'])