function OpenWithJustTheRecipe() {
    document.location = "https://justtherecipe.app/recipe?url=" + encodeURI(window.location.href);
}