function init() {
  //put any page initialization/handlebars initialization here
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
 })
 Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {

}

function displayEditForm() {

}
