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

        let newCard = document.createElement('div');
        newCard.classList.add('card');
        let title = document.createElement('h1');
        title.textContent = library[i].title;
        let author = document.createElement('h2');
        author.textContent = library[i].author;
        
        newCard.appendChild(title);
        newCard.appendChild(author);
        container.appendChild(newCard);
        
        console.log(`Book ${i+1}: ${library[i].title} by ${library[i].author}, ${library[i].pages} pages long. ${haveRead}`);
    };
}

const container = document.querySelector('.container');

let book1 = new Book("Mordew", "Alex Pheby", 700, false);
let book2 = new Book("dog","ben",400,false);
addBookToLibrary(book1);
addBookToLibrary(book2);

displayBooks(myLibrary);