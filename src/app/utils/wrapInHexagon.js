const wrapInHexagon = (child) => {
  const wrapperDivBorder = document.createElement("div");
  wrapperDivBorder.classList.add("wrapper-border");
  wrapperDivBorder.classList.add("clip");
  wrapperDivBorder.classList.add("flex-center");
  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("wrapper");
  wrapperDiv.classList.add("clip");

  wrapperDivBorder.appendChild(wrapperDiv);
  wrapperDiv.appendChild(child);
  return wrapperDivBorder;
};
export default wrapInHexagon;
