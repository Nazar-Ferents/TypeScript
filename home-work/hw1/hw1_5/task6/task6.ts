
type WriterType =
    (text:string) => void

let writer:WriterType = (text:string):void => {
    document.write(`

             <ul>
             <li>${text}</li>
             <li>${text}</li>
             <li>${text}</li>
             </ul>
`);
}

writer('Paragraph');