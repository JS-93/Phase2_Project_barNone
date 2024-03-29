


const MenuItem = ({cocktail}) => {
    const {name} = cocktail
    let ingredientSet = new Set() //set object lets you store unique values so there is no repeat ingredient

    for (let key in cocktail) {
        if (key.startsWith('ingredient')) {
            ingredientSet.add(cocktail[key])
        }
    }
    let ingredients = [...ingredientSet]

   return (<div className="menuItems">

    <p>{name}----------{ingredients.join(", ")}</p> 
    
    </div>)
}

export default MenuItem

