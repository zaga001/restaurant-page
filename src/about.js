export function loadAbout() {
    const content = document.querySelector("#content")
    content.className = "about"
    content.innerHTML = `
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum mollitia similique, laudantium eligendi, nobis beatae, vero autem ipsam voluptatum ut accusamus deserunt animi necessitatibus nihil placeat impedit eum eius ducimus?</p>`
}