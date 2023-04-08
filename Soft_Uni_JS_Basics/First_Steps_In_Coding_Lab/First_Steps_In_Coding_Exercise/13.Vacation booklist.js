function vacationBookList(input){
let numberOfPages = Number(input[0]);
let pages = Number(input[1]);
let days = Number(input[2]);
let hoursNeeded = ( numberOfPages / days ) / pages
console.log(hoursNeeded);

}