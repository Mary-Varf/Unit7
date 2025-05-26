
const booksNode = document.getElementById("booksContainer");

let books = [];

const getBooks = async () => {
    fetch('https://mary-varf.github.io/Unit7/catalog.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        books = data.books.length ? data.books : [];
        creteBook(booksNode);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}

const creteBook = (parentNode) => {
    const ul = document.createElement("ul");

    books.forEach(book => {
        const li = document.createElement("li");
    
        const title = document.createElement("h2");
        title.textContent = book.title;
        li.appendChild(title);
    
        const author = document.createElement("p");
        author.textContent = `Author: ${book.author.firstName} ${book.author.lastName}`;
        li.appendChild(author);
    
        const year = document.createElement("p");
        year.textContent = `Publication Year: ${book.publicationYear}`;
        li.appendChild(year);
    
        const publisher = document.createElement("p");
        publisher.textContent = `Publisher: ${book.details.publisher}`;
        li.appendChild(publisher);
    
        const pageCount = document.createElement("p");
        pageCount.textContent = `Page Count: ${book.details.pageCount}`;
        li.appendChild(pageCount);
    
        const available = document.createElement("p");
        available.textContent = `Available: ${book.details.available ? "Yes" : "No"}`;
        li.appendChild(available);
    
        ul.appendChild(li);
    })
    parentNode.appendChild(ul);
}

getBooks();

