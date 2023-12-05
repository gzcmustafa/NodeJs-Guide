const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
]

const listBooks = () => {
    books.map((book) =>{
        console.log(book.name,book.author)
        
    })
}


const addBook = (newBook) => {
    const promise1 = new Promise((resolve,reject)=>{
        books.push(newBook);
        resolve(books)
    })
    return promise1;
}

async function showBooks(){
    try{
         await addBook({name:"kitap 155",author:"yazar 155"})
         listBooks();
    }
    
    catch{
        console.log(error);
    }
}
