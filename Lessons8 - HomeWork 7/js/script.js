const jsButton = document.querySelector(".js__button");
const jsText = document.querySelector(".js__text1");
jsText.style.color = "black";
function onClick() {
  if (jsText.style.color === "black") {
    jsText.style.color = "red";
  } else if (jsText.style.color === "red") {
    jsText.style.color = "black";
  }
}
jsButton.addEventListener("click", onClick);