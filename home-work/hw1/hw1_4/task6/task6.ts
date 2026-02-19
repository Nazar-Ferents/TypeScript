

function list(text:string):void {
    document.write(`
    <ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>  `)
}

list('Hello');