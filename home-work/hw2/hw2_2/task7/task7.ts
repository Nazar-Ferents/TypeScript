

type ArrayOfObjectsType<T> = {
    arrayName:string,
    array:T[]
}

function addToLocalStorage<T>(arrayName:string,objToAdd:T):void{
    let arrString = localStorage.getItem('arrays');
    let arr:ArrayOfObjectsType<T>[] = arrString? JSON.parse(arrString) : []

    let arrItem:ArrayOfObjectsType<T> | undefined = arr.find(item => item.arrayName === arrayName);

    if (arrItem){
        const currentArray = arrItem.array;
        currentArray.push(objToAdd);
    }
    else {
        arr.push({arrayName:arrayName,array:[objToAdd]})
    }



    localStorage.setItem('arrays' , JSON.stringify(arr));
}
