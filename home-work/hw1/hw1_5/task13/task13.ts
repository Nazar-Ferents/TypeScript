

let exchange = (sumUAH:number,currencyValues:{currency:string,value:number}[],exchangeCurrency:string):string =>{

    for (let item of currencyValues){
        if(item.currency === exchangeCurrency ){

            let result:number = sumUAH / item.value;
            return result + ' ' + exchangeCurrency;

        }
    }    return 'Currency not found';


}



console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))