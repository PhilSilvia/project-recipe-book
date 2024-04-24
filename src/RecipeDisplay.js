// Sub component that constructs the display for an individual recipe
function RecipeDisplay({ name, cuisine, photo, ingredients, preparation, id, deleteRecipe }) {
    return (
        <tr className="recipe" id={id}>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td><img src={photo} alt=""/></td>
            <td className="content_td"><p>{ingredients}</p></td>
            <td className="content_td"><p>{preparation}</p></td>
            <td><button name="delete" onClick={(event) => deleteRecipe(event.target.parentElement.parentElement.id)}>Delete</button></td>
        </tr>
    );
}

export default RecipeDisplay;