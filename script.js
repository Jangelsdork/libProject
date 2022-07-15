console.log("hello")

let myLibrary = [];

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
    let myLibrary = []
    return myLibrary
    
}

document.getElementById("submitButton").addEventListener("click", function() {
    let bookTitle = document.getElementsByName("title")[0].value;
    let authorName = document.getElementsByName("author")[0].value;
    let numOfPages = document.getElementsByName("pages")[0].value;
    let hasRead = document.getElementById("read")[0].value;
    console.log(bookTitle, authorName, numOfPages, hasRead)
}) 



// let bookTitle = document.getElementsByName("title")[0].value;









// var bookNextToMe = new Bookshelf("Love in the time of Cholera", "Gabriel Garcia Marquez", "423", "has been read") 



// console.log(bookNextToMe)
// console.log(bookNextToMe.readOut())