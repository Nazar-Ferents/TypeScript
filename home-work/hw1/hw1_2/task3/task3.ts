
type Authors = {name:string, age:number}
type Book = {title:string,
    pageCount: number ,
    genre: string,
    authors : Authors[]
    }

let book1:Book = {
    title:'Witcher',
    pageCount: 350 ,
    genre: 'fantasy',
    authors : [
        {
            name:'Andrzej Sapkowski',
            age:77
        }
    ]
};
let book2:Book = {
    title:'Fourth Wing',
    pageCount: 600 ,
    genre: 'fantasy',
    authors : [
        {
            name:'Rebecca Yarros',
            age:44
        }
    ]
};
let book3:Book = {
    title:'Harry Potter',
    pageCount: 500 ,
    genre: 'fantasy',
    authors : [
        {
            name:'J. K. Rowling',
            age:60
        }
    ]
};