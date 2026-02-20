

let nums:number[] = [11,21,3];

function sortNums(nums:number[],direction:string):number[] | string {

    if (direction === 'ascending') {
        return nums.sort((a:number, b:number):number => a - b);
    }
    else if (direction === 'descending') {
        return nums.sort((a:number, b:number):number => b - a);
    }
    else {
        return 'direction is wrong';}


}

console.log(sortNums(nums,'descending'));