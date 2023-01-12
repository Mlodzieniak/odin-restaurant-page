import { inputsAreValid } from "./app/utils/inputsAreValid";
import "./main.css";
import menuPage from "./app/menuPage";

// const menuPage = new MenuPage();

const input = "Czalizard";
const result = inputsAreValid(input);
const myDiv = document.querySelector(".container");
const niceText = document.createElement("h1");
niceText.innerText = `Is ${input} a valid input? ${result}! XsD`;
niceText.classList.add("purple");
myDiv.appendChild(niceText);
menuPage();
