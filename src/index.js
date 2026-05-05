import "./styles.css";
import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Home") {
      homeContent();
    } else if (button.textContent === "Menu") {
      menuContent();
    } else if (button.textContent === "About") {
      aboutContent();
    }
  });
});
