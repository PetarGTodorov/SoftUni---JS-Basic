function yardGreening(input){
let area = Number(input[0]);
let sumWithoutDiscount = area * 7.61;
let discount = sumWithoutDiscount * 0.18;
let finalSum = sumWithoutDiscount - discount;
console.log(`The final price is: ${finalSum} lv.`);
console.log(`The discount is: ${discount} lv.`);
}
yardGreening([150])