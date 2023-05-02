function oscars(input){

let actorName = input[0];
let academyPoints = Number(input[1]);
let numJury = Number(input[2]);
let juryName ='';
    for ( let i = 3; i < numJury * 2 + 3; i += 2){
        juryName = input[i]
        juryPoints = Number(input[i+1])
      juryPoints = juryName.length * juryPoints / 2;
       academyPoints = academyPoints + juryPoints;
      if (academyPoints > 1250.5){
        break;
      }
    }
    if ( academyPoints > 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(academyPoints.toFixed(1))}!`)
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`)
    }
    
 }
     oscars (["Sandra Bullock",
     "340",
     "5",
     "Robert De Niro",
     "50",
     "Julia Roberts",
     "40.5",
     "Daniel Day-Lewis",
     "39.4",
     "Nicolas Cage",
     "29.9",
     "Stoyanka Mutafova",
     "33"])
     
