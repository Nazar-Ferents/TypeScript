

let hider:HTMLButtonElement = document.getElementsByTagName('button')[0];

let text:HTMLElement | null = document.getElementById('text');

hider.onclick = function (ev:MouseEvent):void {

    if(text){
        text.style.display = 'none';

    }
}