function salary(input){

let openTabs = Number(input[0]);
let salary = Number(input[1]);
for ( let i = 2; i < openTabs + 2 ; i++){
    let tab = input[i];
    switch ( tab ){
        case 'Facebook': salary -= 150;
        if ( salary <= 0){
            break;
        }
        break;
        case 'Instagram': salary -= 100;
        if ( salary <= 0){
            break;
        }break;
        case 'Reddit': salary -= 50;
        if ( salary <= 0){
            break;
        }
        break;
    }
}
if (salary > 0){
    console.log(`${salary}`)
} else {
    console.log(`You have lost your salary.`)
}
}
salary (["5",
"500",
"Facebook",
"Facebook",
"Facebook",
"Reddit",
"Facebook"])



