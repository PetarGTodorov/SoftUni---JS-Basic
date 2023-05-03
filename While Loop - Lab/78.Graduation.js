function graduation(input){

let name = input[0];
let grades = 1;
let index = 0;
let sum = 0;
let excluded = 0;
while ( grades <= 12){

index++;
let grade = Number(input[index]);
if (grade >= 4){
    sum += grade;
    grades++;
} else {
    excluded++;
    break;
}
}
let avgSum = sum/12;
if ( excluded >= 1){
    console.log(`${name} has been excluded at ${grades} grade`)
} else {
    console.log(`${name} graduated. Average grade: ${(avgSum).toFixed(2)}`)
}
}