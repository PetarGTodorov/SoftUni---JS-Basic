function oldBooks(input){
let bookName = input[0];
let i = 1;
let checkedBooks = 0;
while (bookName !== input[i] && input[i] !== "No More Books" ){
i++;
checkedBooks++;
}
if ( input[i] === bookName){
    console.log(`You checked ${checkedBooks} books and found it.`)
} else if (input[i] === "No More Books") {
    console.log(`The book you search is not here!`)
    console.log(`You checked ${checkedBooks} books.`)
}
}
oldBooks (["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])



