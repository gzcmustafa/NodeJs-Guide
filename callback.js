const books = [
    {name:"kitap 1", author:"yazar-1"},
    {name:"kitap 2", author:"yazar-2"},
    {name:"kitap 3", author:"yazar-3"},
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name, book.author)
        
    })
}

const addBook = (newBook, callback) =>{
    books.push(newBook);
    callback();
}

// listBooks()
addBook({name:"kitap-4", author:"yazar 4"},listBooks)
