

let button:HTMLButtonElement = document.getElementsByTagName('button')[0];
let rows = document.getElementById('rows') as HTMLInputElement ;
let columns = document.getElementById('columns') as HTMLInputElement ;
let text33 = document.getElementById('text') as HTMLInputElement ;
let table = document.getElementById('table') as HTMLDivElement;

button.onclick = function(ev:MouseEvent):void{

    let countRows:number = +rows.value;
    let countColumns:number = +columns.value;
    let cellsText:string = text33.value

    table.style.gridTemplateColumns = `repeat(${countColumns},1fr)`;

    for (let i = 0; i < countRows * countColumns; i++){
        let cell:HTMLDivElement = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = cellsText
        table.appendChild(cell);
    }
}