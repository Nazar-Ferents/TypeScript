

type SquareType =
    (a: number, b: number) => number;

let square:SquareType = (a:number, b:number):number => a * b;

console.log(square(10,5));