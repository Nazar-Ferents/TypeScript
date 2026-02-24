
let target:HTMLCollectionOf<Element> = document.getElementsByClassName('target')

console.log(target)

let elementsByTagNameDiv:HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');


let forms:HTMLCollectionOf<HTMLFormElement> = document.forms;
let f1:HTMLFormElement = forms[0];


let f1Input: HTMLInputElement = f1['username']

console.log(f1Input)

let p:HTMLParagraphElement = document.createElement('p')


function appender(tag:keyof HTMLElementTagNameMap){
    document.createElement(tag)
}


const formByID = document.getElementById('formID') as HTMLFormElement | null;

if (formByID) {
    console.log(formByID)
}