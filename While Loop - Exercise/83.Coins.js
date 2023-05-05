function coins(input){
let change = Math.floor(Number(input[0]) * 100)
let count = 0;
const twoLev = 2 * 100;
const oneLev = 1 * 100;
const fiftyCents = 0.5 * 100;
const twentyCents = 0.2 * 100;
const tenCents = 0.1 * 100;
const fiveCents = 0.05 * 100;
const twoCents = 0.02 * 100;
const oneCent = 0.01 * 100;
while (change !== 0){
if(change - twoLev >= 0){
    change = change - twoLev;
    count ++;
} else if (change - oneLev >= 0){
    change = change - oneLev;
    count ++;
} else if (change - fiftyCents >= 0){
    change = change -fiftyCents;
    count ++;
} else if ( change - twentyCents >= 0){
    change = change - twentyCents;
    count ++;
} else if (change - tenCents >= 0){
    change = change - tenCents;
    count++ ;
} else if ( change - fiveCents >= 0){
    change = change - fiveCents;
    count ++;
} else if ( change - twoCents >= 0){
    change = change - twoCents;
    count ++;
} else if ( change - oneCent >= 0){
    change = change - oneCent;
    count ++;
}
}
console.log(count);
}
coins(["0.56"])