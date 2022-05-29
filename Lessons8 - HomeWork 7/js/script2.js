const jsButton2 = document.querySelector(".js__button2");
const jsButton3 = document.querySelector(".js__button3");

function onClick2() {
  const inputUrl = prompt("Введіть URL сайту", "https://www.google.com.ua/");

  console.log(inputUrl);
  function onClick3() {
    if (confirm("Перейти за посиланням?")) {
      location.href = inputUrl;
    }
    console.log(location.href);
  }
  jsButton3.addEventListener("click", onClick3);
}

jsButton2.addEventListener("click", onClick2);
