
type FullCartsType = {
    "carts":
        { "id": number,
            "products":
                {
                    "id": number,
                    "title": string,
                    "price": number,
                    "quantity": number,
                    "total": number,
                    "discountPercentage": number,
                    "discountedTotal": number,
                    "thumbnail": string
                }[],
            "total": number,
            "discountedTotal": number,
            "userId": number,
            "totalProducts": number,
            "totalQuantity": number}[],
    "total": number,
    "skip": number,
    "limit": number
}

type CartsType = {
    "carts":
        { "id": number,
            "products":
                {
                    "id": number,
                    "title": string,
                    "price": number,
                    "quantity": number,
                    "total": number,
                    "discountPercentage": number,
                    "discountedTotal": number,
                    "thumbnail": string
                }[],
            "total": number,
            "discountedTotal": number,
            "userId": number,
            "totalProducts": number,
            "totalQuantity": number}[]
}




async function cartsFunc():Promise<void> {

    const response:Response = await fetch('https://dummyjson.com/carts')
    const cartsObject:FullCartsType = await response.json();

            let {carts}:CartsType = cartsObject;
            console.log(carts);

            let mainDiv:HTMLDivElement = document.createElement('div');
            mainDiv.classList.add('main_div');
            document.body.appendChild(mainDiv);

            for (let cart of carts) {
                let cart_div:HTMLDivElement = document.createElement('div');
                cart_div.classList.add('cart_div');
                let infoDiv:HTMLDivElement = document.createElement('div');
                infoDiv.classList.add('info_div');
                infoDiv.innerText =
                    `
                discountedTotal: ${cart.discountedTotal}    
                id: ${cart.id}    
                total: ${cart.total}   
                totalProducts: ${cart.totalProducts}    
                totalQuantity: ${cart.totalQuantity}    
                userId: ${cart.userId}
            `;

                let ol:HTMLOListElement = document.createElement('ol');


                for (let product of cart.products) {

                    const li:HTMLLIElement = document.createElement('li');
                    const info:HTMLParagraphElement = document.createElement('p');
                    info.innerText =
                        `
                    "id": ${product.id},
                      "title": ${product.title},
                      "price": ${product.price},
                      "quantity": ${product.quantity},
                      "total": ${product.total},
                      "discountPercentage": ${product.discountPercentage},
                      "discountedTotal": ${product.discountedTotal},
                `
                    let img:HTMLImageElement = document.createElement('img');
                    img.src = product.thumbnail;
                    li.append(img,info);
                    ol.append(li);



                }

                cart_div.append(infoDiv,ol)
                mainDiv.appendChild(cart_div)





            }


        }
cartsFunc()