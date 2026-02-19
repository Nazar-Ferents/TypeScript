

let numbers:number[] = [1,2,3,4,5,6,7,8,9,10]


type NumberType = (arr:any[])=>void;

let number:NumberType = (arr:any[]):void => {
    for (let item of arr) {
        console.log(item)
    }
}

number(numbers)