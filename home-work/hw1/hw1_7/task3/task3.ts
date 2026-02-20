

class User {

    constructor(public name:string,public id:number,public surname:string , public email:string, public phone:string) {

        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.id = id
    }


}

let users:User[] = [

    new User('Jhon',10,'Malklin','malklin@gmail.com','+386388966547'),
    new User('Carl',4,"Kalklin","kalklin@gmail.com",'+386388969847'),
    new User('Anna',3,'Ralklin','ralklin@gmail.com','+386365966547'),
    new User('Jake',7,'Falklin','falkling@gmail.com','+386388966507'),
    new User('Milye',5,'Balklin','balklin@gmail.com','+386388966549'),
    new User('Mike',6,'Malklin','malklin@gmail.com','+386388966549'),
    new User('Charlie',1,'Calklin','calklin@gmail.com','+386388966549'),
    new User('Frenk',9,'Jalklin','jalklin@gmail.com','+386388966549'),
    new User('Tony',2,'Talklin','talklin@gmail.com','+386388966549'),
    new User('Steve',8,'Salklin','salklin@gmail.com','+386388966549'),

]

let sorted:User[] = users.sort((u1:User,u2:User)=> {
    return u1.id -u2.id;
})

console.log(sorted)