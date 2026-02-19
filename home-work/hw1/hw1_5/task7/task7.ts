
type WriterType =
    (text:string,amount:number) => void

let writer:WriterType = (text:string,amount:number):void => {
    document.write(`<ul>`)
    for (let i = 0; i < amount; i++) {
        document.write(
            `

              <li>${text}</li>

               `
        );
    }
    document.write(`</ul>`)

}

writer('Paragraph',7)