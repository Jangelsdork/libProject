console.log("hello")

let myLibrary = []; //store objects as variables, and store only the variables in this array 

function Bookshelf(title, author, pageCount, readStatus) {
    this.title = title
    this.author = author
    this.pageCount = pageCount 
    this.readStatus = readStatus 
   }

Bookshelf.prototype.readOut = function() {
    return `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.readStatus}.`
}

function addBook() {

    
 }

document.getElementById("submitButton").addEventListener("click", function() {
        readForm(), writeForm();
}) 

function readForm() {
    let bookTitle = document.getElementsByName("title")[0].value;
    let authorName = document.getElementsByName("author")[0].value;
    let numOfPages = document.getElementsByName("pages")[0].value;
    let hasRead = document.getElementsByName("read")[0].value;
    newBook = new Bookshelf(bookTitle, authorName, numOfPages, hasRead);
    myLibrary.push(newBook);
    
}

function writeForm() {
    let newBookDiv = document.createElement("div");
    let newBookContent = document.createTextNode("test");
    newBookDiv.appendChild(newBookContent);
    const parentDiv = document.getElementById("tableContainer")
    const currentDiv = document.getElementById("table")
    parentDiv.insertBefore(newBookDiv, currentDiv);
    console.log(myLibrary);
}


// let bookTitle = document.getElementsByName("title")[0].value;









// var bookNextToMe = new Bookshelf("Love in the time of Cholera", "Gabriel Garcia Marquez", "423", "has been read") 



// console.log(bookNextToMe)
// console.log(bookNextToMe.readOut())