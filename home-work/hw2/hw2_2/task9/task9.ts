

let price = document.querySelector('#price p') as HTMLParagraphElement;
let number1:number = 100

let currentValueString = localStorage.getItem('current');

let currentValue1:number = currentValueString? parseInt(currentValueString) : number1

let reLoadString = localStorage.getItem('reLoad');
let sec:number = Date.now()

if (reLoadString !== null){
    let reLoad:number = parseInt(reLoadString)


    if (reLoad > 0){
        if (sec - reLoad > 10000){
            currentValue1 += 10;
            localStorage.setItem('current', currentValue1.toString())
            localStorage.setItem('reLoad',sec.toString())
        }
    }
}else{
    localStorage.setItem('current', currentValue1.toString())
    localStorage.setItem('reLoad',sec.toString())
}

price.innerText = `${currentValue1}uah`;