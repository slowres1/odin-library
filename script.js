let library = [];
const container = document.querySelector('.container');
const button = document.querySelector('button');

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.display = function() {
    //console.log(this.title, this.author, this.pages, this.read);
    const newTitle = document.createElement('h1');
    const newAuthor = document.createElement('h2');
    const newPages = document.createElement('p');
    const newRead = document.createElement('p');

    newTitle.textContent = this.title;
    newAuthor.textContent = this.author;
    newPages.textContent = this.pages;
    newRead.textContent = this.read;

    const newCard = document.createElement('div');
    newCard.classList.add('card');

    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(newRead);

    container.appendChild(newCard);
}

function addBook (userInput) {
    library.unshift( newBook = new Book (userInput[0], userInput[1], userInput[2], userInput[3]) ); 
}

function displayLibrary(library) {
    
    for (let i=0; i<library.length; i++) {
        library[i].display();
    };
};

let book1 = addBook(["mark", "ridge", 600, true]);
let book2 = addBook(["ben", "holder", 600, false]);

displayLibrary(library);

button.addEventListener('click', () => {
    
    for (let i=0; i<library.length; i++) {
        let lastchild = container.lastChild;
        container.removeChild(lastchild);
    }
    const newTitle = document.querySelector('#title');
    const newAuthor = document.querySelector('#author');
    const newPages = document.querySelector('#pages');
    const readStatus = document.querySelector('#read');
    let userInput = [newTitle.value, newAuthor.value, newPages.value, readStatus.checked];
    addBook(userInput);
    displayLibrary(library);
    console.log(library);
})

