import React, { useState, useEffect } from "react";
import CreatedDrinks from "./CreatedDrinks";
import { ingredientList, alcoholList, nameList, vodkaList, whiskeyList, ginList, rumList, tequilaList, mocktailList } from "../ingredients.cjs";


const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    ingredientOne: "",
    measurementOne: "",
    ingredientTwo: "",
    measurementTwo: "",
    ingredientThree: "",
    measurementThree: "",
    ingredientFour: "",
    measurementFour: "",
    ingredientFive: "",
    measurementFive: "",
    directions: "",
    imageUrl: "",
  });
  const [getCocktails, setGetCocktails] = useState(true) //state to trigger refetching of cocktails after submitting the form
  const [addDrink, setAddDrink] = useState([]); //state to manage adding a drink when the db.json file is empty
  const [cocktails, setCocktails] = useState([])    //state to manage the new cocktails being created
  const [isFormVisible, setIsFormVisible] = useState(true);



 
  useEffect(() => {             
  if (getCocktails) {
      fetch('http://localhost:3000/createdDrinks')
      .then(resp => resp.json())
      .then(setCocktails)
      setGetCocktails(false)}   //setting getCocktails to false will prevent continous fetching, avoiding an infinite loop
  }, [getCocktails])



function addNewDrink (newDrink) {
  setAddDrink([...addDrink, newDrink])
}

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newDrink = {
      name: formData.name,
      ingredientOne: formData.ingredientOne, 
      measurementOne: formData.measurementOne,
      ingredientTwo: formData.ingredientTwo, 
      measurementTwo: formData.measurementTwo, 
      ingredientThree: formData.ingredientThree, 
      measurementThree: formData.measurementThree, 
      ingredientFour: formData.ingredientFour,
      measurementFour: formData.measurementFour,
      ingredientFive: formData.ingredientFive,
      measurementFive: formData.measurementFive,
      directions: formData.directions,
      imageUrl: formData.imageUrl,
    };


    fetch("http://localhost:3000/createdDrinks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDrink),
    })
      .then((response) => response.json())
      .then((data) => {
      addNewDrink(data);
      setGetCocktails(true) //setting getCocktails to true will trigger re-fetch to immediately render updated cocktail data
  })
      .catch((error) => {
        console.error(`Error adding drinks: ${error}`);
        
      });
      setFormData({ //resetting form after submission
        name: "",
        ingredientOne: "",
        measurementOne: "",
        ingredientTwo: "",
        measurementTwo: "",
        ingredientThree: "",
        measurementThree: "",
        ingredientFour: "",
        measurementFour: "",
        ingredientFive: "",
        measurementFive: "",
        directions: "",
        imageUrl: "",
      })
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const getRandomIngredient = () => {
    return ingredientList[Math.floor(Math.random() * ingredientList.length)]
  }

  const getRandomAlcohol = () => {
    return alcoholList[Math.floor(Math.random() * alcoholList.length)]
  }

  const getRandomMeasurement = () => {
    return `${Math.floor(Math.random() * 3) + 1}oz`
  }

  const getRandomName = () => {
    return nameList[Math.floor(Math.random() * nameList.length)]
  }
const populateData = () => {
  const randomData = {
    name: getRandomName(),
    ingredientOne: getRandomAlcohol(),
    measurementOne: getRandomMeasurement(),
    ingredientTwo: getRandomIngredient(),
    measurementTwo: getRandomMeasurement(),
    ingredientThree: getRandomIngredient(),
    measurementThree: getRandomMeasurement(),
    ingredientFour: getRandomIngredient(),
    measurementFour: getRandomMeasurement(),
    ingredientFive: getRandomIngredient(),
    measurementFive: getRandomMeasurement(),
    directions: "Shake well and enjoy...?",
    imageUrl: "https://pbs.twimg.com/media/B8XK3E_IIAAjpWN.png",

  }
  setFormData(randomData)
}

const getRandomVodka = () => {
    return vodkaList[Math.floor(Math.random() * vodkaList.length)]
}

const populateVodka = () => {
    const randomData = {
        name: "Vodka Drink",
    ingredientOne: "Vodka",
    measurementOne: getRandomMeasurement(),
    ingredientTwo: getRandomVodka(),
    measurementTwo: getRandomMeasurement(),
    ingredientThree: getRandomVodka(),
    measurementThree: getRandomMeasurement(),
    ingredientFour: getRandomVodka(),
    measurementFour: getRandomMeasurement(),
    ingredientFive: getRandomVodka(),
    measurementFive: getRandomMeasurement(),
    directions: "Shake well and enjoy...",
    imageUrl: "https://www.cookinginmygenes.com/wp-content/uploads/2020/11/citrus-crush-vodka-cocktail-5057-500x500.jpg",

    }
    setFormData(randomData)
}

const getRandomWhiskey = () => {
    return whiskeyList[Math.floor(Math.random() * whiskeyList.length)]
}

const getRandomWNumber = () => {
    return `${Math.floor(Math.random() * 1.3) + 1}oz`
}

const populateWhiskey = () => {
    const randomData = {
        name: "Whiskey Drink",
    ingredientOne: "Whiskey",
    measurementOne: getRandomMeasurement(),
    ingredientTwo: getRandomWhiskey(),
    measurementTwo: getRandomWNumber(),
    ingredientThree: getRandomWhiskey(),
    measurementThree: getRandomWNumber(),
    ingredientFour: getRandomWhiskey(),
    measurementFour: getRandomWNumber(),
    ingredientFive: getRandomWhiskey(),
    measurementFive: getRandomWNumber(),
    directions: "Stir well and enjoy...",
    imageUrl: "https://assets.epicurious.com/photos/5e41a6d175661800087cc87c/16:9/w_4619,h_2598,c_limit/OldFashioned_HERO_020520_619.jpg",

    }
    setFormData(randomData)
}

const getRandomGin = () => {
    return ginList[Math.floor(Math.random() * ginList.length)]
}

const populateGin = () => {
    const randomData = {
        name: "Gin Drink",
    ingredientOne: "Gin",
    measurementOne: getRandomMeasurement(),
    ingredientTwo: getRandomGin(),
    measurementTwo: getRandomMeasurement(),
    ingredientThree: getRandomGin(),
    measurementThree: getRandomMeasurement(),
    ingredientFour: getRandomGin(),
    measurementFour: getRandomMeasurement(),
    ingredientFive: getRandomGin(),
    measurementFive: getRandomMeasurement(),
    directions: "Shake well and enjoy...",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5402e23ce4b0a7034afad3a2/1640167693206-DW7GEHI20GKD816OZHQD/Low-cal+cocktail.jpg?format=1500w",
    }
    setFormData(randomData)
}

const getRandomRum = () => {
    return rumList[Math.floor(Math.random() * rumList.length)]
}

const populateRum = () => {
    const randomData = {
        name: "Rum Drink",
    ingredientOne: "Rum",
    measurementOne: getRandomMeasurement(),
    ingredientTwo: getRandomRum(),
    measurementTwo: getRandomMeasurement(),
    ingredientThree: getRandomRum(),
    measurementThree: getRandomMeasurement(),
    ingredientFour: getRandomRum(),
    measurementFour: getRandomMeasurement(),
    ingredientFive: getRandomRum(),
    measurementFive: getRandomMeasurement(),
    directions: "Shake well and enjoy...",
    imageUrl: "https://drinkoteket.com/wp-content/uploads/jungle-bird.jpg",
    }
    setFormData(randomData)

}

const getRandomTequila = () => {
    return tequilaList[Math.floor(Math.random() * tequilaList.length)]
}

const populateTequila = () => {
    const randomData = {
        name: "Tequila Drink",
    ingredientOne: "Tequila",
    measurementOne: getRandomMeasurement(),
    ingredientTwo: getRandomTequila(),
    measurementTwo: getRandomMeasurement(),
    ingredientThree: getRandomTequila(),
    measurementThree: getRandomMeasurement(),
    ingredientFour: getRandomTequila(),
    measurementFour: getRandomMeasurement(),
    ingredientFive: getRandomTequila(),
    measurementFive: getRandomMeasurement(),
    directions: "Shake well and enjoy...",
    imageUrl: "https://m.media-amazon.com/images/I/81x+K9XZAZL._AC_UF350,350_QL80_.jpg",
    }
    setFormData(randomData)

}

const getRandomMocktail = () => {
    return mocktailList[Math.floor(Math.random() * mocktailList.length)]
}

const populateMocktail = () => {
    const randomData = {
        name: "Mocktail Drink",
    ingredientOne: getRandomMocktail(),
    measurementOne: getRandomMeasurement(),
    ingredientTwo: getRandomMocktail(),
    measurementTwo: getRandomMeasurement(),
    ingredientThree: getRandomMocktail(),
    measurementThree: getRandomMeasurement(),
    ingredientFour: getRandomMocktail(),
    measurementFour: getRandomMeasurement(),
    ingredientFive: getRandomMocktail(),
    measurementFive: getRandomMeasurement(),
    directions: "Shake well and enjoy...",
    imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/04/mocktail-3b9ab7d.jpg",
    }
    setFormData(randomData)
}

function handleDelete (drinkToDelete) {
  const updatedDrinks = cocktails.filter((c) =>
  c.id !== drinkToDelete.id);
  setCocktails(updatedDrinks)
}

const toggleForm = () => {
  setIsFormVisible(!isFormVisible)
}


  return (
    <div className="formPage">
      <div className="toggle">
      <button className="toggleButton" onClick={toggleForm}>{isFormVisible? "Hide Form" : "Show Form"}</button></div>
      {isFormVisible ? (
        
        <div className="randomButtons">
        <button className="drinkButton" onClick={populateData}>Random</button> 
        <button className="drinkButton" onClick={populateVodka}>Vodka</button> 
        <button className="drinkButton" onClick={populateWhiskey}>Whiskey</button> 
        <button className="drinkButton" onClick={populateGin}>Gin</button> 
        <button className="drinkButton" onClick={populateRum}>Rum</button> 
        <button className="drinkButton" onClick={populateTequila}>Tequila</button> 
        <button className="drinkButton" onClick={populateMocktail}>Mocktail</button> 
        </div>) : null}
        {isFormVisible? (
          <div className="formBackground">
      <form className="newDrinkForm" onSubmit={handleFormSubmit} >
        <h1 className="formHeader">Create Your Own Drink!</h1>
            <label>
             Drink Name:
            </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        
            <label>
          Ingredient One:  </label>
          <input
            name="ingredientOne"
            value={formData.ingredientOne}
            onChange={handleInputChange}
          />
          
       
            <label>
          Measurement One:</label>
          <input
            name="measurementOne"
            value={formData.measurementOne}
            onChange={handleInputChange}
          />
           
          
            <label>
          Ingredient Two:  </label>
          <input
            name="ingredientTwo"
            value={formData.ingredientTwo}
            onChange={handleInputChange}
          />
       
        
            <label>
          Measurement Two: </label>
          <input
            name="measurementTwo"
            value={formData.measurementTwo}
            onChange={handleInputChange}
          />
           
         
            <label>
          Ingredient Three:</label>
          <input
            name="ingredientThree"
            value={formData.ingredientThree}
            onChange={handleInputChange}
          />
           
         
            <label>
          Measurement Three:</label>
          <input
            name="measurementThree"
            value={formData.measurementThree}
            onChange={handleInputChange}
          />
           
         
            <label>
          Ingredient Four: </label>
          <input
            name="ingredientFour"
            value={formData.ingredientFour}
            onChange={handleInputChange}
          />
            
        
            <label>
          Measurement Four:</label>
          <input
            name="measurementFour"
            value={formData.measurementFour}
            onChange={handleInputChange}
          />
            
         
            <label>
          Ingredient Five:</label>
          <input
            name="ingredientFive"
            value={formData.ingredientFive}
            onChange={handleInputChange}
          />
            
       
            <label>
          Measurement Five:</label>
          <input
            name="measurementFive"
            value={formData.measurementFive}
            onChange={handleInputChange}
          />
             
         
            <label>
          Directions: </label>
          <textarea
            name="directions"
            value={formData.directions}
            onChange={handleInputChange}
          />
         
            <label>
          ImageUrl:</label>
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
        <button className="addButton" type="submit">Add Drink</button>
      </form></div>) : null} 
      
      <CreatedDrinks cocktails={cocktails} setCocktails={setCocktails} onDelete={handleDelete}/>
    </div>
  );
};

export default Form;
