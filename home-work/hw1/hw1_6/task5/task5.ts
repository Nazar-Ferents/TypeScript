

let str:string = 'Ревуть воли як ясла повні';

let arr:string[] = str.split(' ');
console.log(arr);


function stringToarray(str:string):string[] {
    return str.split(' ');
}

console.log(stringToarray(str));