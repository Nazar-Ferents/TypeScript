

let time: string | null =  prompt("what time is it");


if (time !== null){

    let timeNum: number = +time;
    if (timeNum >=0 && timeNum <= 15 ) {
        console.log('the first quarter of hour')
    }
    else if (timeNum >=16 && timeNum <= 30 ) {
        console.log('the second quarter of hour')
    }
    else if (timeNum >=31 && timeNum <= 45 ) {
        console.log('the third quarter of hour')
    }
    else if (timeNum >=46 && timeNum <= 60 ) {
        console.log('the fourth quarter of hour')
    }

}

