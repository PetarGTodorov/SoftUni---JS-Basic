function repainting(input){

let nailon = Number(input[0]);
let paint = Number(input[1]);
let razreditel = Number(input[2]);
let totalNailon = nailon + 2;
let totalPaint = paint * 1.1
const torbichka = 0.4;
let hoursNeeded = Number(input[3]);
let totalMaterials = totalNailon * 1.5  + totalPaint * 14.5 + torbichka + razreditel * 5 ;
let priceForLaborPerHour = 0.3 * totalMaterials ;
let totalSum = priceForLaborPerHour * hoursNeeded + totalMaterials
console.log(totalSum) ;
}
repainting(["10 ",
"11 ",
"4 ",
"8 "]
)
