//while exer 1 
function oldBook(input){
    let favBook = input[0];

    let index = 1;
    let bookIsFound = false;

    let nexBookName = input[index];

    while(nexBookName !== "No More Books"){
        if(nexBookName === favBook){
            bookIsFound = true;
            break;
        }
        index++;
        nexBookName = input[index];

    }
    if(bookIsFound === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`)
    }else{
        console.log(`You checked ${index - 1} books and found it.`)
    }
}
oldBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])



