

let plan: string | null = prompt('what do you do today?')

if (plan !== null){

    let planNum:number = +plan;

    switch (planNum) {
        case 1:
            console.log('running');
            break;

        case 2:
            console.log('swimming');
            break;


        case 3:
            console.log('reading');
            break;

        case 4:
            console.log('codding');
            break;

        case 5:
            console.log('playing games');
            break;

        case 6:
            console.log('learning');
            break;

        case 7:
            console.log('relaxing');
            break;
    }
}