var lunchRecipe = `
    <h2>Lunch Recipe</h2>
    <ol>
        <li>Prepare the burger patty.</li>
        <li>Grill the patty on medium heat.</li>
        <li>Toast the burger bun.</li>
        <li>Prepare the toppings.</li>
        <li>Assemble the burger and serve.</li>
    </ol>
`;

var dinnerRecipe = `
    <h2>Dinner Recipe</h2>
    <ol>
        <li>Prepare the chicken and vegetables.</li>
        <li>Heat a pan over medium heat.</li>
        <li>Cook the chicken until fully cooked.</li>
        <li>Add the vegetables and seasoning.</li>
        <li>Serve the chicken and vegetables on a plate.</li>
    </ol>
`;

function displayRecipe(time) {

    if (time == "noon") {
        document.getElementById("recipe").innerHTML = lunchRecipe;
    }
    else if (time == "sunset") {
        document.getElementById("recipe").innerHTML = dinnerRecipe;
    }
}

var timeOfDay = "sunset";

displayRecipe(timeOfDay);