import "./styles.css"
import { loadHome } from "./home.js"
import { loadMenu } from "./menu.js"
import { loadAbout } from "./about.js"

loadHome()

const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const about = document.querySelector("#about")

home.addEventListener("click", loadHome)
menu.addEventListener("click", loadMenu)
about.addEventListener("click", loadAbout)