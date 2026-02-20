

class Client {

    constructor(public name:string, public id:number, public surname:string , public email:string,
                public phone:string, public order:string[]) {

    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order= order
    }

}

let customer:Client[] = [
    new Client('Jhon',1,'Malklin','malklin@gmail.com','+386388966547',['bread','milk','butter','sausage']),
    new Client('Carl',2,"Kalklin","kalklin@gmail.com",'+386388969847',['bread','tea','sausage','eggs']),
    new Client('Anna',3,'Ralklin','ralklin@gmail.com','+386365966547',['bread','tea','butter','meat']),
    new Client('Jake',4,'Falklin','falkling@gmail.com','+386388966507',['bread','milk','butter','sausage']),
    new Client('Milye',5,'Balklin','balklin@gmail.com','+386388966549',['bread','milk','butter','sausage']),
    new Client('Mike',6,'Malklin','malklin@gmail.com','+386388966549',['bread','tea','sausage','eggs']),
    new Client('Charlie',7,'Calklin','calklin@gmail.com','+386388966549',['bread','tea','butter','meat']),
    new Client('Frenk',8,'Jalklin','jalklin@gmail.com','+386388966549',['bread','milk','butter','sausage']),
    new Client('Tony',9,'Talklin','talklin@gmail.com','+386388966549',['bread','tea','sausage','eggs']),
    new Client('Steve',10,'Salklin','salklin@gmail.com','+386388966549',['bread','tea','butter','meat'])
]

console.log(customer);