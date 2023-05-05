function cake(input){
   let length = Number(input[0]);
   let width = Number(input[1]);
   let pieces = length * width;
   let i = 2;
   while(input[i] !== "STOP"){
    pieces = pieces - Number(input[i])
    if(pieces <= 0){
        break;
    }
    i++
   }
if(pieces >= 0){
    console.log(`${pieces} pieces are left.`)
} else {
    console.log(`No more cake left! You need ${ -1 * pieces} pieces more.`)
}
}
cake (["10",
"2",
"2",
"4",
"6",
"12",
"STOP"])
