

interface IUser {
    name: string,
    age: number,
    status:boolean
}
let users:IUser[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const userTrue of users) {
    if (userTrue.status === true) {

        document.write(`<h3>${userTrue.name} - ${userTrue.age} - ${userTrue.status}</h3>`)
    }

}
for (const userFalse of users) {
    if (userFalse.status === false) {

        document.write(`<h3>${userFalse.name} - ${userFalse.age} - ${userFalse.status}</h3>`)
    }

}

for (const userAge of users) {
    if(userAge.age >= 30){
        document.write(`<h3>${userAge.name} - ${userAge.age} - ${userAge.status}</h3>`)
    }
}