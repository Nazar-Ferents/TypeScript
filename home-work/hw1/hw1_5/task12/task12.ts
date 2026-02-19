

let numbers:number[] = [22,33,44,55]

type SwapperType =
    (arr:any[],i1:number,i2:number)=>any[]
let swapper:SwapperType = (arr:any[],i1:number,i2:number):any[] => {
    let bin:any = arr[i1];
    arr[i1]=arr[i2];
    arr[i2]=bin;

    return arr;

}

console.log(swapper(numbers,1,2));