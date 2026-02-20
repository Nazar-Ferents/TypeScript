

class Car {

    constructor(public model:string, public maker:string, public year_of_production:number, public MaxSpeed:number, public engine_capacity:string,
                   public driver?:{name:string,age:number,experience:number} ) {

        this.model = model;
        this.maker = maker;
        this.year_of_production = year_of_production;
        this.MaxSpeed = MaxSpeed;
        this.engine_capacity = engine_capacity;
    }
    drive(){
        console.log(`we drive at speed ${this.MaxSpeed} per hour`)
    }
    info(){
        for (const key in this){
            if (typeof this[key] !== "function"){
                console.log(key, this[key]);
            }
        }
    }
    increaseMaxSpeed (newSpeed:number){
        if (newSpeed > 0){
            this.MaxSpeed = this.MaxSpeed + newSpeed;
        }
        console.log(`increaseMaxSpeed(${this.MaxSpeed})`)
    }
    changeYear (newValue:number){
        if(newValue > this.year_of_production){
            this.year_of_production = newValue;
        }
        console.log(`changeYear(${this.year_of_production})`)
    }

    addDriver (driver:{name:string,age:number,experience:number}):void{
        this.driver = driver;
        console.log(driver)
    }



}

let car1:Car = new Car('A6','Audi',2018,250,'2.0')

console.log(car1);
car1.drive()
car1.info()
car1.increaseMaxSpeed(50)
car1.changeYear(2020)
car1.addDriver({name:'Carl',age:25,experience:5})