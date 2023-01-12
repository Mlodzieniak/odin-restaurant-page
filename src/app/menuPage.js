const menuPage = () => {
  const page = document.createElement("div");
  page.innerHTML = "siema";
  page.classList.add("purple");
  document.querySelector(".container").appendChild(page);
};
export default menuPage;
