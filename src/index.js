import { inputsAreValid } from "./app/utils/inputsAreValid";
import "./main.css";
import homePage from "./app/homePage";
import menuPage from "./app/menuPage";

// const menuPage = new MenuPage();

const input = "Czalizard";
const result = inputsAreValid(input);
const myDiv = document.querySelector(".container");
const niceText = document.createElement("h1");
homePage(myDiv);
