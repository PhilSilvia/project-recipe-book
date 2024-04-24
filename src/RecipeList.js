import React from "react";
import RecipeDisplay from "./RecipeDisplay";

// The component that displays our list of recipes
function RecipeList({ recipes, deleteRecipe }) {
  
  // Creates the JSX for the recipe list we currently have using the RecipeDisplay component
  const recipeDisplays = recipes.map((recipe, index) => {
    return <RecipeDisplay 
          name={recipe.name} 
          cuisine={recipe.cuisine} 
          photo={recipe.photo} 
          ingredients={recipe.ingredients} 
          preparation={recipe.preparation}
          id={index}
          deleteRecipe={deleteRecipe}
        />
    ;
  });

  // Returns the display for our list of recipes in an HTML table
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Name</th>
            <th style={{ width: "10%" }}>Cuisine</th>
            <th style={{ width: "10%" }}>Photo</th>
            <th style={{ width: "30%" }}>Ingredients</th>
            <th style={{ width: "30%" }}>Preparation</th>
            <th style={{ width: "10%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeDisplays}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
