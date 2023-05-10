function building(input){
    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);
    let name;
    let floorArr = [];
    for(let i = 1; i <= floors; i++){
        let roomArr = [];
        for(let j = 0; j < roomsPerFloor; j++){
            if(i % 2 === 0 && i !== floors){
                name = `O${i}${j}`;
            } else if (i === floors){
                name = `L${i}${j}`;
            } else {
                name = `A${i}${j}`;
            }
            roomArr.push(name);
        }
        floorArr.push(roomArr);
    }
    floorArr.reverse();
    for(let i = 0; i < floorArr.length; i++){
        console.log(floorArr[i].join(' '));
    }
}

building(["6","4"])