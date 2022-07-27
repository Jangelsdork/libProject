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
       readForm() ,writeFormTitle();
}) 

function readForm() {
    let bookTitle = document.getElementsByName("title")[0].value;
    let authorName = document.getElementsByName("author")[0].value;
    let numOfPages = document.getElementsByName("pages")[0].value;
    let hasRead = document.getElementsByName("read")[0].value;
    newBook = new Bookshelf(bookTitle, authorName, numOfPages, hasRead);
    myLibrary.push(newBook);
    // console.log(myLibrary.length-1)
    
}

function writeFormTitle() {
    const parentDiv = document.getElementById("table")
    let newRow = document.createElement("tr")
    newRow.classList.add("newRow")
    parentDiv.appendChild(newRow);
    let newBookTitle = document.createElement("td");
    let newBookAuthor = document.createElement("td");
    let newBookPages = document.createElement("td");
    let newBookRead = document.createElement("td");
    let newBookContentTitle= document.createTextNode(`${myLibrary[myLibrary.length-1].title}`);
    let newBookContentAuthor= document.createTextNode(`${myLibrary[myLibrary.length-1].author}`);
    let newBookContentPages= document.createTextNode(`${myLibrary[myLibrary.length-1].pageCount}`);
    let newBookContentRead= document.createTextNode(`${myLibrary[myLibrary.length-1].readStatus}`);
    newBookTitle.appendChild(newBookContentTitle);
    newBookAuthor.appendChild(newBookContentAuthor);
    newBookPages.appendChild(newBookContentPages);
    newBookRead.appendChild(newBookContentRead);
    newRow.appendChild(newBookTitle);
    newRow.appendChild(newBookAuthor);
    newRow.appendChild(newBookPages);
    newRow.appendChild(newBookRead);
}


// let bookTitle = document.getElementsByName("title")[0].value;









// var bookNextToMe = new Bookshelf("Love in the time of Cholera", "Gabriel Garcia Marquez", "423", "has been read") 



// console.log(bookNextToMe)
// console.log(bookNextToMe.readOut())