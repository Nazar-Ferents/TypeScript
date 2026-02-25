
type DateType1 = {
    date:string,
    time:string
}
let box = document.getElementById('History') as HTMLHeadingElement;

let sessionsStored = localStorage.getItem('sessionsList');
let sessions:DateType1[] = sessionsStored?  JSON.parse(sessionsStored) : [];

for (let session of sessions) {
    let p:HTMLParagraphElement = document.querySelector('p') || document.createElement('p');
    p.innerText = `Date:${session.date} | Time:${session.time}`;
    box.appendChild(p);
}