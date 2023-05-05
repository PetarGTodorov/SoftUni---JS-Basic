function walking(input){
let goal = 10000;
let sum = 0;
let i = 0;
while(sum <= goal && i < input.length){
    if(input[i] !== 'Going home'){
    sum += Number(input[i])
    } 
    i++;
}
if(sum >= goal){
    console.log("Goal reached! Good job!" )
    console.log(`${sum - goal} steps over the goal!`)
} else {
    console.log(`${goal - sum} more steps to reach goal.`)
}
}
walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])


