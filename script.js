const myLibrary = [];

function Book(title, author, numOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, numOfPages, isRead) {
    const newBook = new Book(title, author, numOfPages, isRead);
    myLibrary.push(newBook);
}

addBookToLibrary("Harry Potter", "J.K Rowling", 500, true);
addBookToLibrary("Babel, or the Necessity of Violence", "R. F. Kuang", 560, false);
addBookToLibrary("Sherlock Holmes", "William Steig", 603, false);
console.log(myLibrary);


function displayLibrary() {
    const libraryContainer = document.querySelector(".library-container");

    libraryContainer.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
        <div class="title">Title: ${book.title}</div>
        <div class="author">Author ${book.author}</div>
        <div class="numOfPages">Number of Pages: ${book.numOfPages}</div>
        <div class="isRead">Is Read? ${book.isRead}</div>
        <br>
        `;

        libraryContainer.appendChild(bookDiv);
    });
}

displayLibrary();