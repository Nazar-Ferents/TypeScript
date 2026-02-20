

function deepCloner <T>(obj:T):T | string{
    if(obj){

        let functions:{functionClone:Function,key:string}[] = []
        for (let key in obj ){
            if (typeof obj[key] === 'function'){
                let functionClone = obj[key].bind ({})
                functions.push ({functionClone, key});
            }
        }
        let objClone:string = JSON.stringify(obj)
        let mainClone:T = JSON.parse(objClone)
        for (let func of functions){
            (mainClone as any)[func.key] = func.functionClone;
        }
        return mainClone

    }
    else {
        return 'It is wrong type of obj'
    }

}

console.log(deepCloner({name:"Jhon",age:34,greeting(){},foo(){}}))