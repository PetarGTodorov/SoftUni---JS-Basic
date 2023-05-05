function moving(input){
let length = Number(input[0]);
let width = Number(input[1]);
let heigth = Number(input[2]);
let space = length * width * heigth;
let i = 3;
while (input[i] !== "Done"){
    space -= Number(input[i])
    if(space <= 0){
        break;
    }
    i++;
}
if(space <= 0){
    console.log(`No more free space! You need ${space * -1} Cubic meters more.`)
} else {
    console.log(`${space} Cubic meters left.`)
}

}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
