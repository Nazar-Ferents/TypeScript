

function swap(arr:any[],i1:number,i2:number):string[] | number[] {

    let cell:any = arr[i1];

    arr[i1] = arr[i2];
    arr[i2] = cell;

    return arr;

}


console.log(swap([11,22,33,44],2,3));