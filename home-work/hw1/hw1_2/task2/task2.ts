

interface IBook {
    title:string,
    pageCount: number ,
    genre: string
}
let book1:IBook = {
    title:'Witcher',
    pageCount: 350 ,
    genre: 'fantasy'
};
let book2:IBook = {
    title:'Fourth Wing',
    pageCount: 600 ,
    genre: 'fantasy'
};
let book3:IBook = {
    title:'Harry Potter',
    pageCount: 500 ,
    genre: 'fantasy'
};

console.log(book1,book2,book3);
