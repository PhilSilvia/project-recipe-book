import React, { useState } from "react";

// Form entry so the user can create a new recipe on the webpage
function RecipeCreate({ createRecipe }) {

  // A blank recipe for initialization
  const initialRecipe = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  // State handler functions for our recipe data from the form
  const [recipe, setRecipe] = useState(initialRecipe);
  // Event handler for when the data in the form's fields are changed
  const handleChange = ({target}) => {
    // Sets the state for the recipe with the new data
    setRecipe({...recipe, [target.name]: target.value});
  }
  // Event handler for when a new recipe is created
  const handleSubmission = (event) => {
    // Prevent the page from reloading on submission
    event.preventDefault();
    // Adds the new recipe to our list
    createRecipe(recipe);
    // Resets the form's entry fields
    setRecipe(initialRecipe);
  }
  
  // The display for our form
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                Name
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Name" 
                  onChange={handleChange} 
                  value={recipe.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                Cuisine
                <input 
                  type="text" 
                  name="cuisine" 
                  id="cuisine" 
                  placeholder="Cuisine" 
                  onChange={handleChange} 
                  value={recipe.cuisine} 
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                Photo
                <input 
                  type="url" 
                  name="photo" 
                  id="photo" 
                  placeholder="URL" 
                  onChange={handleChange} 
                  value={recipe.photo} 
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                Ingredients
                <textarea 
                  rows="2" 
                  name="ingredients" 
                  id="ingredients" 
                  placeholder="Ingredients"
                  onChange={handleChange} 
                  value={recipe.ingredients} />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                Preparation
                <textarea 
                  rows="2"
                  name="preparation" 
                  id="preparation" 
                  placeholder="How to prepare"
                  onChange={handleChange} 
                  value={recipe.preparation} />
              </label>
            </td>
            <td>
              <button type="submit" onClick={handleSubmission}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
