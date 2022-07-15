let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary (userInput) {
    let newBook = new Book(userInput[0], userInput[1], userInput[2], userInput[3]);
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
        let pages = document.createElement('p');
        pages.textContent = `${library[i].pages} pages long`
        let readStatus = document.createElement('p');
        readStatus.textContent = haveRead;
        
        newCard.appendChild(title);
        newCard.appendChild(author);
        newCard.appendChild(pages);
        newCard.appendChild(readStatus);
        container.appendChild(newCard);
        //console.log(`Book ${i+1}: ${library[i].title} by ${library[i].author}, ${library[i].pages} pages long. ${haveRead}`);
    };
}

function getUserInput () {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
}


const container = document.querySelector('.container');

//let book1 = new Book("Mordew", "Alex Pheby", 700, false);
//let book2 = new Book("Boerke", "Kijkt Kunst", 50, true);
addBookToLibrary(["Mordew", "Alex Pheby", 700, false]);
addBookToLibrary(["Boerke", "Kijkt Kunst", 50, true]);

displayBooks(myLibrary);