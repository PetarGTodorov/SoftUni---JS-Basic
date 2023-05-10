function traveling(input){
let i = 0;
let resultArray = [];
while(input[i] !== "End"){
    if(input[i].includes('1') || input[i].includes('2') || input[i].includes('3') || input[i].includes('4') || input[i].includes('5') || input[i].includes('6') || input[i].includes('7') || input[i].includes('8') || input[i].includes('9') || input[i].includes('0')){
    } else {
        resultArray.push(input[i])
    }
i++;
}
for(let el of resultArray){
    console.log(`Going to ${el}!`)
}
}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
