

let form = document.getElementById('form') as HTMLFormElement;
let ageInput = document.getElementById('age') as HTMLInputElement;


form.addEventListener('submit', (ev:SubmitEvent):void => {
    ev.preventDefault();

    const age:number = +(ageInput.value);
    let p:HTMLParagraphElement = document.querySelector('p') || document.createElement('p');
    if (age > 18){

        p.innerText = `access granted `;
    }
    else{

        p.innerText = `access denied `;
    }
    document.body.appendChild(p)
})