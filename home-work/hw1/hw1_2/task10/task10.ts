

let first: string | null = prompt('Enter your first number');
let second: string | null = prompt('Enter your second number');

if (first !== null && second !== null) {

    let firstNum:number = +first
    let secondNum:number = +second

    if (firstNum > secondNum) {
        console.log(firstNum)
    }
    else if (firstNum < secondNum) {
        console.log(secondNum)
    }
    else if (firstNum === secondNum) {
        console.log(firstNum + ' ' + secondNum)
    }

    else{
        console.log('wtf???')
    }
}