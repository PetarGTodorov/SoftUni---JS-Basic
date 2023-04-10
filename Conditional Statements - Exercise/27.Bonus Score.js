function bonusScore(input){
let number = Number(input[0]);
let bonus = 0 ;
if (number <= 100){
    bonus = bonus + 5;
    if ( number % 2 === 0){
        bonus = bonus + 1
    } else if ( number % 10 === 5){
        bonus = bonus +2 
    } else {
        bonus = bonus ;
    }
    } else if ( number > 100 && number <= 1000){
        bonus = 0.2 * number;
        if ( number % 2 === 0){
            bonus = bonus + 1
        } else if ( number % 10 === 5){
            bonus = bonus +2 
        } else {
            bonus = bonus ;
        }
    } else {
        bonus = 0.1 * number ;
        if ( number % 2 === 0){
            bonus = bonus + 1
        } else if ( number % 10 === 5){
            bonus = bonus +2 
        } else {
            bonus = bonus ;
        }
    }
console.log(bonus);
console.log(number + bonus)

}
bonusScore([2703])