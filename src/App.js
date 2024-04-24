import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  // State management function for our list of recipes
  const [recipes, setRecipes] = useState(RecipeData);

  // Function that add a new recipe to our list
  const createRecipe = (recipe) => {
    // Adds the new recipe to the beginning of our list
    setRecipes([...recipes, recipe]);
  };
  // Function that removes a specific recipe from our list
  const deleteRecipe = (targetIndex) => {
    // Sets the recipe list to exclude the targeted index
    setRecipes(recipes.filter((recipe, index) => index !== parseInt(targetIndex)));
  };
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
