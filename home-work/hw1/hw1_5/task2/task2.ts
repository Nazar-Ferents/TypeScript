
type SquareType =
    (r:number)=>number;
let square:SquareType = (r:number):number => 3.14 * (r * r);

console.log(square(5))