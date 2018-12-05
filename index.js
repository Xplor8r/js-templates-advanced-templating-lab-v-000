function init() {
  //put any page initialization/handlebars initialization here
 var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
