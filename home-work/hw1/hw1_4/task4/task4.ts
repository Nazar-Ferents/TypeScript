

function array (numbers:any[]):void {
    for (let num of numbers) {
        console.log(num);
    }
}

let numbers:number[] = [1,2,3,4,5,6,7,8,9,10];
array(numbers);