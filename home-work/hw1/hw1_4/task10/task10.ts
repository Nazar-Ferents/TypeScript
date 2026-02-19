

let numbers:number[] = [1,2,3,4,5,6,7,8,9,10]

function minNumber(item:number[]):number | undefined{
    let min:number | undefined = item[0]
    for (let number of item){
        if (min !== undefined){
            if (min > number){
                min = number
            }
        }


    }
    return min;
}

minNumber(numbers)
console.log(minNumber(numbers))