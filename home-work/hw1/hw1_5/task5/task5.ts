

type WriterType =
    (text:string)=>void;

let writer:WriterType = (text:string):void => {

    document.write
    (`<p>${text}</p>`);
}

writer('Paragraph');