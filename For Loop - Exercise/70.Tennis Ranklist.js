function tennisRanklist(input){

let numTournaments = Number(input[0]);
let startingPoints = Number(input[1]);
let tournamentPoints = 0;
let winTournaments = 0;
for ( i = 2; i <= numTournaments + 2; i++){
    let result = input[i];
    switch (result){
        case 'W': winTournaments +=1;tournamentPoints += 2000 ;break;
        case 'F': tournamentPoints += 1200;break;
        case 'SF': tournamentPoints += 720;break;
    }
}
let finalPoints = startingPoints + tournamentPoints;
let percentWinTournament = (winTournaments / numTournaments) * 100;
let averagePointsPerTournament = (tournamentPoints / numTournaments);
console.log(`Final points: ${finalPoints}`);
console.log(`Average points: ${Math.floor(averagePointsPerTournament)}`);
console.log(`${percentWinTournament.toFixed(2)}%`)
}
tennisRanklist (["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
