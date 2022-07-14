let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary (book) {
    let newBook = book;
    myLibrary.push(newBook);
}

function displayBooks(library) {
    for (i=0;i<library.length;i++) {
        let haveRead = library[i].read ? "I have read this book!" : "I haven't read this book yet!";

        console.log(`Book ${i+1}: ${library[i].title} by ${library[i].author}, ${library[i].pages} pages long. ${haveRead}`);
    };
}

const container = document.querySelector('.container');

let book1 = new Book("cat","mark",300,true);
let book2 = new Book("dog","ben",400,false);
addBookToLibrary(book1);
addBookToLibrary(book2);

displayBooks(myLibrary);