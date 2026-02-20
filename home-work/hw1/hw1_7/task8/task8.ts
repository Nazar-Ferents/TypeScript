

class Cinderella {

    constructor(public  name:string, public  age:number, public  footSize:number) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

class Prince {
    constructor(public name:string, public age:number, public shoeSize:number) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderellas:Cinderella[] = [
    new Cinderella('Carla',22,37),
    new Cinderella('Jane',40,35),
    new Cinderella('Monica',25,40),
    new Cinderella('Philipa',31,37),
    new Cinderella('Kate',21,36),
    new Cinderella('Rane',22,39),
    new Cinderella('Nana',27,34),
    new Cinderella('Iris',29,42),
    new Cinderella('Zara',18,37),
    new Cinderella('Carla',22,37),
]

let prince:Prince = new Prince('Jaime',23,36);

for (let item1 of cinderellas) {
    if (item1.footSize === prince.shoeSize ) {
        let couple = prince.name + ' found his ' + item1.name
        console.log(couple)
    }
}

let findCinderella:Cinderella | undefined = cinderellas.find (value => value.footSize === prince.shoeSize)
console.log(findCinderella)