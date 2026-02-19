

let numbers:number[] = [1,2,3,4,5,6,7,8,9,10]


function sum(arr:number[]):number{
    let counter:number = 0;
    for (let arrElement of arr) {
        counter = counter + arrElement;


    }
    return counter;
}

sum(numbers)

console.log(sum(numbers))