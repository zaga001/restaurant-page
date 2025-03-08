export function loadMenu() {
    const content = document.querySelector("#content")
    const heading = document.createElement("h1")
    heading.textContent = "Menu"
    content.appendChild(heading)
    const headline = document.createElement("h2")
    headline.textContent = "food"
    content.appendChild(headline)
}