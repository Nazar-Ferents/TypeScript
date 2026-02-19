

function squareCylinder (h:number,r:number):number {
    return 2 * Math.PI * r * (h+r);
}

let result:number = squareCylinder(5,5)
console.log(result);