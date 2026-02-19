

type CircleType =
    (h:number,r:number)=>number;

let sCircle:CircleType = (h:number,r:number):number => 2 * Math.PI * r * (h+r);

console.log(sCircle(5,5));