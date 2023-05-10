function sumOfTwoNumbers(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationCount = 0;
    let resultArray = [];
    for(let i = startNum; i <= endNum; i++){
        for(let j = startNum; j <= endNum; j++){
            combinationCount++
           if(i+j === magicNum){
              resultArray.push(`Combination N:${combinationCount} (${i} + ${j} = ${magicNum})`)
           } 
       }
    } 
    
    if(resultArray[0] !== undefined){
    console.log(resultArray[0])
    } else {
        console.log(`${combinationCount} combinations - neither equals ${magicNum}`)
    }
}
sumOfTwoNumbers(['88','888','2000'])