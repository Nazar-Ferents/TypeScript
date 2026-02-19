interface IUser{id:number,name:string,age:number}

let users:IUser[] = [
    {
        id:1,
        name:"Johan",
        age:25
    }, {
        id:2,
        name:"Carl",
        age:20
    }, {
        id:3,
        name:"Kite",
        age:27
    }
]

type FoobarType =

    (item:IUser[])=>void;


let foobar:FoobarType = (item:IUser[]):void => {

    for (let user of item) {
        document.write(`<div>
                 ${user.name}
                 ${user.id}
                 ${user.age}


             </div>`)

    }

}

foobar(users)