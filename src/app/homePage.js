import wrapInHexagon from "./utils/wrapInHexagon";

const homePage = (parent) => {
  // Opinion div
  const opinionDiv = document.createElement("div");
  const opinionP = document.createElement("p");
  const signatureP = document.createElement("p");

  opinionP.textContent =
    "Dominion's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  signatureP.textContent = "Son Goku";

  opinionDiv.appendChild(opinionP);
  opinionDiv.appendChild(signatureP);
  const opinionDivWrapped = wrapInHexagon(opinionDiv);
  parent.appendChild(opinionDivWrapped);

  // Opening hours div
  const hoursDiv = document.createElement("div");
  const hoursHeader = document.createElement("p");
  const hoursP = document.createElement("p");

  hoursHeader.textContent = "Hours";
  hoursP.innerHTML =
    "Sunday: 8am - 8pm<br> Monday: 6am - 6pm<br> Tuesday: 6am - 6pm<br> Wednesday: 6am - 6pm<br> Thursday: 6am - 10pm<br> Friday: 6am - 10pm<br> Saturday: 8am - 10pm";

  hoursDiv.appendChild(hoursHeader);
  hoursDiv.appendChild(hoursP);
  const hoursDivWrapped = wrapInHexagon(hoursDiv);
  parent.appendChild(hoursDivWrapped);

  // Location
  const locationDiv = document.createElement("div");
  const locationHeader = document.createElement("p");

  const locationP = document.createElement("p");
  locationHeader.textContent = "Location";
  locationP.textContent = "Bruchkobel 63485, Hanauerstrasse 8 Germany";
  locationDiv.appendChild(locationHeader);
  locationDiv.appendChild(locationP);
  parent.appendChild(wrapInHexagon(locationDiv));
};
export default homePage;
