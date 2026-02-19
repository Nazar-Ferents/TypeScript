

let numbers:number[]  = [1,2,3,4,5,6,7,8,9,10];

type NumberType =
    (arr:number[])=>number;

let sum:NumberType = (arr:number[]):number =>{
    let counter:number = 0;
    for (const number of arr){
        counter= counter + number;
    }
    return counter;
}
sum(numbers)
console.log(sum(numbers)
)