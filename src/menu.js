import fishImage from "./images/fish.jpg"
import baguetteImage from "./images/baguette.jpg"
import WineImage from "./images/wine.jpg"

export function loadMenu() {
    const content = document.querySelector("#content")
    content.className = "menu"
    content.innerHTML = `
    <h1>Menu</h1>
    <h2>Main Dishes</h2>
    <p>Le Fische Au Chocolat</p>
    <img src="${fishImage}" alt="Le Fische Au Chocolat">
    <h2>Sides</h2>
    <p>Baguette</p>
    <img src="${baguetteImage}" alt="Baguette">
    <h2>Beverages</h2>
    <p>Red Wine</p>
    <img src="${WineImage}" alt="Wine" id="wine">`
}