


class User{

    constructor(public name:string, public id:number,public surname:string , public email:string, public phone:string)

    {
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.id = id
    }

}


let users:User[] = [

    new User('Jhon',1,'Malklin','malklin@gmail.com','+386388966547'),
    new User('Carl',2,"Kalklin","kalklin@gmail.com","+386388969847'"),
    new User('Anna',3,'Ralklin','ralklin@gmail.com','+386365966547'),
    new User('Jake',4,'Falklin','falkling@gmail.com','+386388966507'),
    new User('Milye',5,'Balklin','balklin@gmail.com','+386388966549'),
    new User('Mike',6,'Malklin','malklin@gmail.com','+386388966549'),
    new User('Charlie',7,'Calklin','calklin@gmail.com','+386388966549'),
    new User('Frenk',8,'Jalklin','jalklin@gmail.com','+386388966549'),
    new User('Tony',9,'Talklin','talklin@gmail.com','+386388966549'),
    new User('Steve',10,'Salklin','salklin@gmail.com','+386388966549'),

]

console.log(users);