

interface IUsers {
    users:{
    "id": number,
    "firstName": string,
    "lastName": string,
    "maidenName": string,
    "age": number,
    "gender": string,
    "email": string,
    "phone": string,
    "username": string,
    "password": string,
    "birthDate": string,
    "image": string,
    "bloodGroup": string,
    "height": number,
    "weight": number,
    "eyeColor": string}[]
}



async  function getUsers<T>(url:string) : Promise<T> {

    const response:Response = await fetch(url)


    if(!response.ok){

        throw new Error(`Could not find user with id "${url}"`)
    }

    return await response.json() as T

}

(async () =>{
    const users1 = await getUsers<IUsers>('https://dummyjson.com/users')
    console.log(users1)
})()
