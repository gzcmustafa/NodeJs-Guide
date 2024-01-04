// Example-1

/* const function1 = () => {
    console.log('Function 1 is done')
    function3();
}

const function2 = ()=> {
    console.log('Function 2 is done');
}

const function3 = ()=>{
    console.log('Function 3 is done')
    function2();
}

function1(); */

// Example-2

/* let x = 5;
console.log("first veriable: ", x)

setTimeout(()=> {
    x = x + 5;
    console.log('second veriable',x)
},5000)


x = x+5;
console.log("third veriable: ", x) */


const books = [
    {name:"Kitap 1", author:"Yazar 1"},
    {name:"Kitap 2 ", author:"Yazar 2"},
    {name:"Kitap 3", author:"Yazar 3"},
];

const listBooks = () => {
    books.map((book)=>{
        console.log(book.name);
    });
};



const addBook = (newBook, callback)=>{
    books.push(newBook);
    callback();
}

addBook({name:"Kitap 4", author:"Yazar 4"},listBooks)

