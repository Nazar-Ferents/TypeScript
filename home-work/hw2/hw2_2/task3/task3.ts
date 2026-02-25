

let form1 = document.getElementById('users') as HTMLFormElement;
let nameInput = document.getElementById('name') as HTMLInputElement;
let surnameInput = document.getElementById('surname') as HTMLInputElement;
let ageInput1 = document.getElementById('age') as HTMLInputElement;

form1.onsubmit= function (ev:SubmitEvent):void {
    ev.preventDefault();
    let user:{name:string,surname:string,age:number} = {name: nameInput.value, surname: surnameInput.value, age: +ageInput1.value};
    console.log(user);
    let div:HTMLDivElement  = document.querySelector('div') || document.createElement('div');
    div.classList.add('user');
    div.innerHTML = `<p>name: ${nameInput.value}</p> <p>surname: ${surnameInput.value}</p> <p>age: ${ageInput1.value}</p>`;
    div.style.border = '1px solid black';
    div.style.width = '200px';
    document.body.appendChild(div);
}