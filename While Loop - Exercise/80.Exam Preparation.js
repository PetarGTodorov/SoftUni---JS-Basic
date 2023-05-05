function examPreparation(input){
let weakGrades = Number(input[0]);
let i = 1;
let n = 2;
let countWeakGrades = 0;
let sumGrade = 0;
let stopCommand = 'Enough'
let numOfProblems = 0;
while ( stopCommand !== input[i]){
i +=2;
let num = Number(input[n])
numOfProblems ++;
if ( num <= 4){
    countWeakGrades ++;
    sumGrade = sumGrade + Number(input[n]);
     } else {
    sumGrade = sumGrade + Number(input[n])
     }
n += 2;
if (countWeakGrades >= weakGrades) break;
}
let avgSum = sumGrade / numOfProblems;
if (countWeakGrades >= weakGrades){
    console.log(`You need a break, ${weakGrades} poor grades.`) 
 } else {
    console.log(`Average score: ${(avgSum).toFixed(2)}`)
console.log(`Number of problems: ${numOfProblems}`)
console.log(`Last problem: ${input[i-2]}`)
 }  
} 
examPreparation (["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])



