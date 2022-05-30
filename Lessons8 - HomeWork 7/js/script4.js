const jsButton5 = document.querySelector(".js__button5");
const imgOut = document.querySelector(".js__img_out")
function imgRandom() {
    const random = Math.ceil(Math.random() * 10);
    const img = document.createElement('img');
    img.src = 'img/'+random+'.jpg';
    imgOut.append(img);  
    
}

jsButton5.addEventListener("click", imgRandom);
