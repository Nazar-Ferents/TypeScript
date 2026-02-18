

let day: string | null =  prompt('what day is it today')

if (day !== null){

    let dayNum: number = +day

    if (dayNum >= 1 && dayNum <= 10) {
        console.log('the first decade of month')
    }
    else if (dayNum >= 11 && dayNum <= 20) {
        console.log('the second decade of month')
    }
    else if (dayNum >= 21 && dayNum <= 31) {
        console.log('the third decade of month')
    }
    else{
        console.log('srsly?')
    }
}