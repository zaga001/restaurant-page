export function loadAbout() {
    const content = document.querySelector("#content")
    const heading = document.createElement("h1")
    heading.textContent = "About Us"
    content.appendChild(heading)
    const headline = document.createElement("h2")
    headline.textContent = "Cool backstory"
    content.appendChild(headline)
}