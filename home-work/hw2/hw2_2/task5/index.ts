
type DateType = {
    date:string,
    time:string
}

let date:Date = new Date();

let stored = localStorage.getItem('sessionsList')

let sessionsList:DateType[] = stored? JSON.parse(stored) : [];

sessionsList.push({
    date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
})

localStorage.setItem('sessionsList', JSON.stringify(sessionsList))