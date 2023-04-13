function cinema(input){
let typeProjection = input[0];
let rows = Number(input[1]);
let colums = Number(input[2]);
switch ( typeProjection){
    case 'Premiere': console.log(`${( rows * colums * 12).toFixed(2)} leva`);break;
    case 'Normal':console.log(`${( rows * colums * 7.5).toFixed(2)} leva`);break;
    case 'Discount':console.log(`${( rows * colums * 5).toFixed(2)} leva`);break;
}
}