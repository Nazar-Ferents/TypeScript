
type ValueType = '6'| '7'| '8'| '9'| '10'| 'jack'| 'queen'| 'king'| 'ace';

type CardType = {
    cardSuit:string,
    value: ValueType,
    color:string
}

let cards:CardType[] = []

let suits:string[] = ['spade', 'diamond', 'heart', 'clubs'];
let values:ValueType[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

for (const suit of suits ) {
    for (const value of values) {
        let color:string;
        if (suit === 'diamond' || suit === 'heart'){
            color = 'red';
        }
        else{
            color = 'black';
        }

        let card:CardType = {
            cardSuit: suit,
            value: value,
            color: color
        };


        cards.push(card);
    }



}
console.log(cards);


console.log(cards.filter(card => card.cardSuit === 'spade' && card.value === 'ace'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));

type ValueRank = {
    '6':number
    '7':number
    '8':number
    '9':number
    '10':number
    'jack':number
    'queen':number
    'king':number
    'ace':number
}
let valueRank:ValueRank = {
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':10,
    'jack':11,
    'queen':12,
    'king':13,
    'ace':14
}

let clubsFromNine:CardType[] = cards.filter(card => card.cardSuit === 'clubs' && valueRank[card.value] >= valueRank['9']);

console.log(clubsFromNine);