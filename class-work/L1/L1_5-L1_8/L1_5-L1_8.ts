

class User {

    name: string;
    age: number;
    status: boolean

    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting(){
        console.log('asdfs')
    };
}

let user = new User('asd',123,false)

let users: User[] = [
    new User('adasdf',1234,true)
]

console.log(users);