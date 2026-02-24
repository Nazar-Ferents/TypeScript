
// interface IPerson {
//     name: string;
//     age: number;
//     status:boolean
// }
//
// interface IPerson {
//     id: number;
// }
//
//
// let users2:IPerson[] = [
//
//     {name: "John", age: 12,status:false,id:1},
//     {name: "John", age: 12,status:false,id:1},
//     {name: "John", age: 12,status:false,id:1},
//     {name: "John", age: 12,status:false,id:1},
//     {name: "John", age: 12,status:false,id:1},
//     {name: "John", age: 12,status:false,id:1},
//     {name: "John", age: 12,status:false,id:1},
//     {name: "John", age: 12,status:false,id:1}
// ]


class User2 {

    // private name: string;
    // private age: number;
    // private status: boolean;


    constructor(private _name: string, private _age: number, private status: boolean) {
        this._name = _name;
        this._age = _age;
        this.status = status;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}

let user22 = new User2('John',23,true)

console.log(user22.name);
user22.name = 'Carl';

class User22 extends User2 {
    // id: number;

    constructor(name: string, age: number, status: boolean, private _id: number) {
        super(name, age, status);
        this._id = _id;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}

let user33 = new User22('Tony',56,true,1)

