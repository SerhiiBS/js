const jsButton5 = document.querySelector(".js__button5");
const imgOut = document.querySelector(".js__img_out");

function imgRandom() {
    const random = Math.ceil(Math.random() * 10);
    const img = document.createElement("img");
    img.src = "img/" + random + ".jpg";
    imgOut.append(img);

    const imageWidth = (screen.width / 100) * 80;
    document.querySelector("img").width = imageWidth;
}

jsButton5.addEventListener("click", imgRandom);