import "./styles.css"
import { contentPage, homeContent, menuContent, aboutContent } from "./pages.js"

contentPage(homeContent);

document.getElementById("home-button").addEventListener("click", () => { contentPage(homeContent) });
document.getElementById("menu-button").addEventListener("click", () => { contentPage(menuContent) });
document.getElementById("about-button").addEventListener("click", () => { contentPage(aboutContent) });
