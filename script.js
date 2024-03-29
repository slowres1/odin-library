let library = [];
const container = document.querySelector('.library');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function getUserInput() {

    const popup = document.createElement('div');
    popup.classList.add('modal', 'flex', 'column');
    
    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';
    exitButton.addEventListener('click', () => {
        container.removeChild(popup);
    })

    const form = document.createElement('div');
    form.classList.add('flex','column');
    
    //const title = document.createElement('input');
    const title = createLabelInputPair('title','text');
    const author = createLabelInputPair('author','text');
    const pages = createLabelInputPair('pages','number');
    const checkRead = createLabelInputPair('checkRead','checkbox');
    //checkRead.setAttribute('type','checkbox');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
        addBookToLibrary(title.lastChild, author.lastChild, pages.lastChild, checkRead.lastChild);
        container.removeChild(popup);
    })

    popup.appendChild(exitButton);
    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(checkRead);
    form.appendChild(submitButton);

    popup.appendChild(form);
    container.appendChild(popup);
}

function createLabelInputPair(name, type) {
    const pair = document.createElement('div');
    const newInput = document.createElement('input');
    newInput.setAttribute('name',name);
    newInput.setAttribute('id',name)
    newInput.setAttribute('type',type);
    const newLabel = document.createElement('label');
    newLabel.classList.add('label');
    newLabel.setAttribute('for',name);
    let labelName;
    //let placeholder;
    switch (name) {
        case 'title':
            labelName = 'Title: ';
            //placeholder = 'Title';
            break;
        case 'author':
            labelName = 'Author: ';
            //placeholder = 'Author';
            break;
        case 'pages':
            labelName = 'Number of pages: ';
            newInput.setAttribute('min','1');
            break;
        case 'checkRead':
            labelName = 'Have you read this book?';
            break;
    }
    newLabel.textContent = labelName;
    //newInput.setAttribute('required',true);
    pair.appendChild(newLabel);
    pair.appendChild(newInput);
    return pair;
}

function addBookToLibrary(title, author, pages, checkRead) {
    const newBook = new Book(title.value,author.value,pages.value,checkRead.checked);
    library.push(newBook);
    console.log(library);
    renderBook(newBook);
    
}

function renderBook(book) {
    //create a card for each book in the library with the corresponding info.
    const card = document.createElement('div');
    card.classList.add('card','flex','column');
    card.setAttribute('id',library.indexOf(book));

    const title = document.createElement('h1');
    title.textContent = book.title;

    const author = document.createElement('h2');
    author.textContent = `by ${book.author}`;

    const pages = document.createElement('p');
    if (book.pages === '1') {
        pages.textContent = `${book.pages} page`;
    } else {
        pages.textContent = `${book.pages} pages`;
    }
    

    const read = document.createElement('p');
    let readText = book.read ? "I have read this book." : "I have not read this book.";
    read.textContent = readText;


    const removeBookButton = document.createElement('button');
    removeBookButton.textContent = 'Remove';
    removeBookButton.addEventListener('click', () => {
        removeBookFromLibrary(removeBookButton.parentNode.id);
        console.log(library);
        refreshLibrary();
    });

    const toggleReadButton = document.createElement('button');
    toggleReadButton.textContent = 'Change Read status';
    toggleReadButton.addEventListener('click', () => {
        toggleReadStatus(toggleReadButton.parentNode.id);
        refreshLibrary();
    })

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(removeBookButton);
    card.append(toggleReadButton);
    container.appendChild(card);
}

function removeBookFromLibrary(id) {
    return library.splice(id, 1);
}

function toggleReadStatus(id) {
    let status = library[id].read;
    if (status === true) {
        status = false;
    } else if (status === false) {
        status = true;
    }
    return library[id].read = status;
}

function refreshLibrary() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    if (library.length === 0) return;
    library.forEach(book => {
        renderBook(book);
    })
}



const addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', () => {
    getUserInput();
})

const refreshButton = document.querySelector('.refresh');
refreshButton.addEventListener('click', () => {
    refreshLibrary();
})


const moby = new Book('Moby Dick','Herman Melville',600,false);
const pride = new Book('Pride and Prejudice','Jane Austen',750,false);

library.push(moby);
library.push(pride);

//removeBookFromLibrary('Pride and Prejudice');