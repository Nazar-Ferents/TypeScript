

    interface Array<T>{
        myForEach(callback: (value: T, index:number,array:T[]) => void): void;
        myFilter(callback: (value: T, index:number,array:T[]) => boolean): T[];

    }



Array.prototype.myForEach = function <T>( callback:(value:T, index:number,array:T[])=>void):void{
    for (let i = 0; i < this.length; i++) {
        callback(this[i],i,this);
    }
}

Array.prototype.myFilter = function<T> (callback:(value: T, index:number,array:T[]) => boolean):T[]{
    let result:T[] = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i],i,this)){
            result.push(this[i]);
        }
    }
    return result;
}