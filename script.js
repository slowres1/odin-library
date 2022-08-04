let library = [];
const container = document.querySelector('.library');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBooktoLibrary() {

    const popup = document.createElement('div');
    popup.classList.add('modal', 'flex');
    
    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';
    exitButton.addEventListener('click', () => {
        container.removeChild(popup);
    })

    const form = document.createElement('div');
    form.classList.add('flex','column');
    
    const title = document.createElement('input');
    

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
        const newBook = new Book(title.value,author='test',pages='test',read='test');
        library.push(newBook);
        console.log(library);

        renderBook(newBook);
        container.removeChild(popup);
    })

    form.appendChild(exitButton);
    form.appendChild(title);
    form.appendChild(submitButton);

    popup.appendChild(form);
    container.appendChild(popup);

    //lets make this a modal - first - CSS
    /*let title = prompt('Title');
    let author = prompt('Author');
    let pages = prompt('No. of pages');
    let read = prompt('Read? True/false');

    const newBook = new Book(title,author,pages,read);
    library.push(newBook);
    console.log(library);

    renderBook(newBook); */
}

function renderBook(book) {
    //create a card for each book in the library with the corresponding info.
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h1');
    title.textContent = book.title;

    const author = document.createElement('h2');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;

    const read = document.createElement('p');
    read.textContent = book.read;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    container.appendChild(card);
}

function refreshLibrary() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    library.forEach(book => {
        renderBook(book);
    })
}

const addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', () => {
    addBooktoLibrary();
})

const refreshButton = document.querySelector('.refresh');
refreshButton.addEventListener('click', () => {
    refreshLibrary();
})


const moby = new Book('Moby Dick','Herman Melville',600,false);
const pride = new Book('Pride and Prejudice','Jane Austen',750,false);

library.push(moby);
library.push(pride);
