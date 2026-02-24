
// interface IUser{
//     id:number;
//     name: string;
// }
//
// fetch('https://jsonplaceholder.typicode.com/userss')
// .then(value => value.json())
// .then((users:IUser[]) =>{
//
// })
//
//
// async function foobar(): Promise<IUser[]> {
//
//     let users:IUser[] = await fetch('https://jsonplaceholder.typicode.com/userss')
//     .then((value: Response) => value.json())
//     return users;
// }


// type MyString = string;
//
// let s : MyString = 'hello world';
//
// type PrimitiveTypes = string | number | boolean;
// let x1: PrimitiveTypes = true
//
// type Falsy = 0 | false | '' | undefined | null
//
// let f12: Falsy = 0;


type UserType1 = {
    name: string;
    age: number;
    status:boolean;
}

type UserType2 =
    UserType1 & {id:number}

type Func = (a:number) => void;

// @ts-ignore
let users:UserType2[] = [

    {name: "John", age: 12,status:false,id:1},
    {name: "John", age: 12,status:false,id:1},
    {name: "John", age: 12,status:false,id:1},
    {name: "John", age: 12,status:false,id:1},
    {name: "John", age: 12,status:false,id:1},
    {name: "John", age: 12,status:false,id:1},
    {name: "John", age: 12,status:false,id:1},
    {name: "John", age: 12,status:false,id:1}
]


