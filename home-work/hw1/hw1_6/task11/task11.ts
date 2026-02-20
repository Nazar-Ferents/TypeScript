
// type ValueType = '6'| '7'| '8'| '9'| '10'| 'jack'| 'queen'| 'king'| 'ace';

type CardType = {
    cardSuit:string,
    value: string,
    color:string
}
let cards:CardType[] = []

let suits:string[] = ['spade', 'diamond', 'heart', 'clubs'];
let values:string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

for (const suit of suits) {
    for (const value of values) {
        let color;
        if (suit === 'diamond' || suit === 'heart'){
            color = 'red';

        }else{
            color = 'black';
        }
        let card:CardType = {
            cardSuit: suit,
            value: value,
            color: color
        }

        cards.push(card);
    }
}

console.log(cards);

type ReduceType =
    {spades:CardType[],diamonds:CardType[],hearts:CardType[],clubs:CardType[]}

let reduce:ReduceType = cards.reduce((previousValue:ReduceType, currentValue:CardType) => {

    if (currentValue.cardSuit === 'spade') {
        previousValue.spades.push(currentValue);
    }else if (currentValue.cardSuit === 'diamond') {
        previousValue.diamonds.push(currentValue);
    }else if (currentValue.cardSuit === 'heart') {
        previousValue.hearts.push(currentValue);
    }else if (currentValue.cardSuit === 'clubs') {
        previousValue.clubs.push(currentValue);
    }
    return previousValue;


},{spades:[],

    diamonds:[],

    hearts:[],

    clubs:[]})

console.log(reduce)