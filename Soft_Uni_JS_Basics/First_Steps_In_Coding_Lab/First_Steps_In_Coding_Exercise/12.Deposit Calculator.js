function depositCalculator(input){
    let sum = Number(input[0])
    let term = Number(input[1]);
    let rate = Number(input[2]) / 100;
    let totalSum = sum + term * ((sum * rate)/12)
    console.log(totalSum)
}