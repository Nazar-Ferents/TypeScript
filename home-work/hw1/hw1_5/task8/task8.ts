

let array:any[] = [1,2,3,'a','b','c',true,false];

type CreatorType =
    (arr:any[]) => void

let creator:CreatorType = (arr:any):void => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {

        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)

}

creator(array);