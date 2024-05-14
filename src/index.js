function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  //build the API URL
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "33obd0t0e73070dfb50ab4b3fb3c9fe1";
  let prompt = `User instructions: Generate a dinner recipe using ${instructionsInput.value}`;
  let context =
    "You are a well traveled chef and specialize in quick meals that can be cooked easily on a weekday evening. The meal should be portioned for two adults. Use ingredients commonly found in an American home. The recipe must include the protein provided by the prompt. Include 'Recipe created by SheCodes AI' inside a <small> element at the end of the recipe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class = "blink">Generating a recipe using ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

//display the generated poem

let recipeFormElement = document.querySelector("#protein");
recipeFormElement.addEventListener("submit", generateRecipe);
