import restaurantImage from "./images/restaurant.jpg"

export function loadHome() {
    const content = document.querySelector("#content")
    content.className = "home"
    content.innerHTML = `
    <h1>Le Restaurant</h1>
    <img src="${restaurantImage}" alt="restaurant">
    <p>"Greatest restaurant in all of Paris"</p>
    <p>-Ratatouille</p>
    <h2>Hours</h2>
    <p>Sunday: 8am - 8pm</p>
    <p>Monday: 6am - 6pm</p>
    <p>Tuesday: 6am - 6pm</p>
    <p>Wednesday: 6am - 6pm</p>
    <p>Thursday: 6am - 10pm</p>
    <p>Friday: 6am - 10pm</p>
    <p>Saturday: 8am - 10pm</p>
    <h2>Location</h2>
    <p>69420 Skibidi Avenue, Paris, France</p>`
}