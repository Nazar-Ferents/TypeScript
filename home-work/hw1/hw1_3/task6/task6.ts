
interface IProduct {
    title: string,
    price: number,
    image: string
}

let products:IProduct[] = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://admin.newtea.ua/files/styles/promobanner_mobile_webp/public/promobanner/m-7.png.webp?itok=6uc-KXXn'
    }
];

console.log(products.length);


document.write(`<div style="display: flex;
justify-content: center;
align-items: center;
flex-direction: column;">`);

for (let product of products) {
    document.write(`
        <div class="product">
            <h3 class="product-title">${product.title} - ${product.price}₴</h3>
            <img src="${product.image}" alt="product" style="width: 100px;">
        </div>
    `);
}

document.write(`</div>`);