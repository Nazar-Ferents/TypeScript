

let input = document.getElementById("kgInput") as HTMLInputElement;
let output = document.getElementById("convert") as HTMLParagraphElement;

input.oninput = function (ev:Event):void {
    const kg:number = parseFloat(input.value)
    if (!isNaN(kg) && kg > 0) {
        const lbs:number = kg * 2.20462;
        output.innerText = `Вага у фунтах = ${lbs}`
    }
    else{

        output.innerText = `Вага у фунтах = 0`


    }
}