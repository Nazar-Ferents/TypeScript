

let counter = document.querySelector('#counter p') as HTMLParagraphElement;

let currentValue:string|null = localStorage.getItem('counter');
let numericValue:number ;

if (currentValue === null) {
    numericValue = 0;
}else{
    numericValue = +currentValue;
}

numericValue++

counter.innerText = numericValue.toString();

localStorage.setItem('counter', numericValue.toString());


