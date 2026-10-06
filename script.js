var breakfastRecipe = `
    <h2>Breakfast Recipe</h2>
    <ol>
        <li>Prepare the eggs.</li>
        <li>Heat a pan over medium heat.</li>
        <li>Cook the eggs.</li>
        <li>Toast the bread.</li>
        <li>Serve the eggs and toast on a plate.</li>
    </ol>
`;

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

var recipes = [breakfastRecipe, lunchRecipe, dinnerRecipe];

var hour = new Date().getHours();

var meal;
var displayHour;

if (hour < 12) {
    meal = "Breakfast";
}
else if (hour < 18) {
    meal = "Lunch";
}
else {
    meal = "Dinner";
}

if (hour == 0) {
    displayHour = 12;
}
else if (hour > 12) {
    displayHour = hour - 12;
}
else {
    displayHour = hour;
}


document.getElementById("recipe").innerHTML =
    "<h1>You should cook " + meal + "! It's " + displayHour + " " +
    (hour >= 12 ? "PM" : "AM") + "</h1>";


for (var i = 0; i < recipes.length; i++) {
    document.getElementById("recipe").innerHTML += recipes[i];
};