

// abstract class Animal {
//     isAlive: boolean
//
//     constructor(isAlive: boolean) {
//         this.isAlive = isAlive;
//     }
//
//     abstract bark():void
// }
//
// // let animal = new Animal(true)
//
// class Bird extends Animal {
//
//     wings:boolean
//
//     constructor(isAlive: boolean, wings: boolean) {
//         super(isAlive);
//         this.wings = wings;
//     }
//
//     bark(): void {
//         console.log('chik-chikrik');
//     }
//
// }


// interface IAnimal {
//     isAlive: boolean
//     bark:()=> void
// }
//
// interface X {
//     id:number
// }
//
// class Bird implements IAnimal,X {
//     private _isAlive: boolean
//     private _wings:boolean
//     private _id:number
//
//
//     constructor(isAlive: boolean, wings: boolean, id: number) {
//         this._isAlive = isAlive;
//         this._wings = wings;
//         this._id = id;
//     }
//
//
//     get isAlive(): boolean {
//         return this._isAlive;
//     }
//
//     set isAlive(value: boolean) {
//         this._isAlive = value;
//     }
//
//     get wings(): boolean {
//         return this._wings;
//     }
//
//     set wings(value: boolean) {
//         this._wings = value;
//     }
//
//     get id(): number {
//         return this._id;
//     }
//
//     set id(value: number) {
//         this._id = value;
//     }
//
//     bark():void{}
// }


type AnimalType = {
    isAlive: boolean;
    bark: () => void
}

class Bird implements AnimalType {
    bark(): void {
    }

    isAlive: boolean;


    constructor(isAlive: boolean) {
        this.isAlive = isAlive;
    }
}