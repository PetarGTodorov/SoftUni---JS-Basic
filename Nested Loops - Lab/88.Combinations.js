function combinations(input){
    let num = Number(input[0]);
    let count = 0;
    for(let i = 0; i <= num; i++){
        for(let j = 0; j<= num; j++){
            for(let y = 0; y <= num; y++){
                if(i+j+y === num){
                    count++
                }
            }
        }
    }
    console.log(count)
}
combinations(['25'])