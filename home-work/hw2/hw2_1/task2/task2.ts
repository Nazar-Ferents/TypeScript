

let info:string[] = ['Main', 'Products', 'About us', 'Contacts']

let ulInfo:HTMLMenuElement = document.createElement('ul');

for (let item of info) {
    let li:HTMLLIElement = document.createElement('li');
    li.innerText = item;
    ulInfo.appendChild(li);
}

document.body.appendChild(ulInfo);