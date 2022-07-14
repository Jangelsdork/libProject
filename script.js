console.log("hello")

function Bookshelf(title, author, pageCount, readStatus) {
    this.title = title
    this.author = author
    this.pageCount = pageCount 
    this.readStatus = readStatus 
   }

Bookshelf.prototype.readOut = function() {
    return `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.readStatus}.`
}

var bookNextToMe = new Bookshelf("Love in the time of Cholera", "Gabriel Garcia Marquez", "423", "has been read") 



console.log(bookNextToMe)
console.log(bookNextToMe.readOut())