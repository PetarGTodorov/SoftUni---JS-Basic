function trekkingMania(input){

let numberGroups = Number(input[0]);
let musala = 0;
let monblan = 0;
let kilimandjaro = 0;
let k2 = 0;
let everest = 0;
for ( i = 1; i <= numberGroups; i++){
    let numEachGroup = Number(input[i])
    if ( numEachGroup <= 5){
        musala += numEachGroup
    } else if ( numEachGroup >= 6 && numEachGroup <= 12){
        monblan += numEachGroup
    } else if ( numEachGroup >= 13 && numEachGroup <= 25){
        kilimandjaro += numEachGroup
    }  else if ( numEachGroup >= 26 && numEachGroup <= 40){
        k2 += numEachGroup
    } else {
        everest += numEachGroup
    }
}
let totalSum = musala + monblan + kilimandjaro + k2 + everest;
console.log(`${((musala/totalSum)*100).toFixed(2)}%`);
console.log(`${((monblan/totalSum)*100).toFixed(2)}%`);
console.log(`${((kilimandjaro/totalSum)*100).toFixed(2)}%`);
console.log(`${((k2/totalSum)*100).toFixed(2)}%`);
console.log(`${((everest/totalSum)*100).toFixed(2)}%`);
}
trekkingMania (["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
