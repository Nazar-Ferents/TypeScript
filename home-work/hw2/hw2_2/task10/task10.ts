

let usersDiv = document.getElementById('users') as HTMLDivElement;
let prev = document.getElementById('prev') as HTMLButtonElement;
let next = document.getElementById('next') as HTMLButtonElement;

let array1:{index:number}[] = [];

for (let i =1; i <=100; i++){
    array1.push({index:i})
}

let page:number = 0;
const limit:number = 10;

function render(){
    usersDiv.innerHTML = '';
    let start:number = page * limit;
    let end:number = start + limit;

    let slice:{index:number}[] = array1.slice(start, end);
    for (let user of slice){
        let div:HTMLDivElement = document.createElement('div');
        div.innerText = `${user.index}`
        usersDiv.appendChild(div);
    }
}

next.onclick = function(ev){
    if((page+1)*limit < array1.length){
        page++;
        render();
    }
}

prev.onclick = function(ev){
    if(page > 0){
        page--;
        render();
    }
}
render();