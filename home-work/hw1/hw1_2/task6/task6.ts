

let startValue:string | null = prompt('Enter number 1 0 -3')


if (startValue !== null ){

    let numberValue:number = +startValue

    if (numberValue !== 0){
        console.log("Вірно")

    }

    else {
        console.log("Невірно")
    }
}

