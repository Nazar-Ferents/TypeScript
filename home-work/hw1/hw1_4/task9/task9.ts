
type UserType = {
    name : string,
    id  : number,
    age : number
}
let users:UserType[] = [
    {
        name: 'John',
        id: 1,
        age: 18,
    },
    {
        name: 'Mike',
        id: 2,
        age: 23,
    },
    {
        name: 'Lara',
        id: 3,
        age: 15,
    }
]

function foobar (item:UserType[]):void{
    for (let user of item){
        document.write(`<div>${user.name},${user.id}, ${user.age}</div>`)

    }
}

foobar(users)