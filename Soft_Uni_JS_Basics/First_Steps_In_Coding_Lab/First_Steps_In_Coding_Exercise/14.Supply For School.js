function suppliesForSchool(input){

let packPens = Number(input[0]);
let packMarkers = Number(input[1]);
let litres = Number(input[2]);
let discount = Number(input[3]) / 100;
let sum = (packPens * 5.8 + packMarkers * 7.2 + litres * 1.2) * (1-discount)
console.log(sum)
}