

let numbers:number[] = [4,6,7,8,2,-5,-77,16770]

type MinType =
    (arr:number[]) => number | undefined

let min:MinType = (arr:number[]):number | undefined =>{


    let minNumber:number | undefined = arr[0]
    for (let item of arr){
        if (minNumber !== undefined){
            if (minNumber > item){
                minNumber = item
            }
        }

        }
        return minNumber

}

min(numbers)

console.log(min(numbers))