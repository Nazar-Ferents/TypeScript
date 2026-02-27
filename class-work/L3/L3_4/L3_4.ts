

// class UserGen<T>{
//     id: T;
//     name: string;
//
//
//     constructor(id: T, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
//
// let UserGen1 = new UserGen<number>(1,'Name')
// let UserGen2 = new UserGen<string>('2','Name')
// let UserGen3 = new UserGen<{ x:number }>({x:3},'Name')

interface IUserLS {
    id:number;
    name:string;
}

interface IDog {
    aka:string;
}

function foobar<T>(key:string):T{

    let objJSON = localStorage.getItem(key);

    if (objJSON) {

        return JSON.parse(objJSON) as T;

    }
    return {} as T;

}

foobar<IDog>('dog')
foobar<IUserLS>('user')
