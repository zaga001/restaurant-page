export function pageLoad() {
    const content = document.querySelector("#content")
    const heading = document.createElement("h1")
    heading.textContent = "Restaurant"
    content.appendChild(heading)
    const headline = document.createElement("h2")
    headline.textContent = "very good restaurant"
    content.appendChild(headline)
}