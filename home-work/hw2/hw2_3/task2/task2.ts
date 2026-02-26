
type RecipesType = {
    "recipes":
        {
            "id": number,
            "name": string,
            "ingredients": string[],
            "instructions": string[],
            "prepTimeMinutes": number,
            "cookTimeMinutes": number,
            "servings": number,
            "difficulty": string,
            "cuisine": string,
            "caloriesPerServing": number,
            "tags": string[],
            "userId": number,
            "image": string,
            "rating": number,
            "reviewCount": number,
            "mealType": string[]
        }[],

    "total": number,
    "skip": number,
    "limit": number
}

type RecipeType = {
    "recipes":
        {
            "id": number,
            "name": string,
            "ingredients": string[],
            "instructions": string[],
            "prepTimeMinutes": number,
            "cookTimeMinutes": number,
            "servings": number,
            "difficulty": string,
            "cuisine": string,
            "caloriesPerServing": number,
            "tags": string[],
            "userId": number,
            "image": string,
            "rating": number,
            "reviewCount": number,
            "mealType": string[]
        }[]

}


async function recipeFunc(): Promise<void> {
    const response:Response = await  fetch('https://dummyjson.com/recipes')
    const recipesObj:RecipesType = await response.json()

    const {recipes}:RecipeType = recipesObj;
    let mainDiv:HTMLDivElement = document.createElement('div');
    mainDiv.classList.add('main_div');
    document.body.appendChild(mainDiv);
    for (let recipe of recipes) {

        let div:HTMLDivElement = document.createElement('div');

        const recipe_div:HTMLDivElement = document.createElement('div');
        recipe_div.classList.add('recipe_div');
        let img:HTMLImageElement = document.createElement('img');
        img.src = recipe.image;
        recipe_div.innerText = `
               id:${recipe.id}
               name: ${recipe.name}
               instructions: ${recipe.instructions}
               prepTimeMinutes: ${recipe.prepTimeMinutes}
               cookTimeMinutes: ${recipe.cookTimeMinutes}
               servings: ${recipe.servings}
               difficulty: ${recipe.difficulty}
               cuisine: ${recipe.cuisine}
               caloriesPerServing: ${recipe.caloriesPerServing}
               tags: ${recipe.tags}
               userId: ${recipe.userId}
               rating: ${recipe.rating}
               reviewCount: ${recipe.reviewCount}
               mealType: ${recipe.mealType}
               
                         
                         `;

        let ul:HTMLMenuElement = document.createElement('ul');
        let p:HTMLParagraphElement = document.createElement('p');
        p.innerText = `Ingredients:`

        for (let ingredient of recipe.ingredients){
            let li:HTMLLIElement = document.createElement('li');
            li.classList.add('ingredient');
            li.innerText = ingredient;
            ul.appendChild(li);

        }
        div.append(img,p,ul,recipe_div);

        mainDiv.appendChild(div);









    }





    console.log(recipesObj)}
recipeFunc()