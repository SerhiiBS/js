const jsButton5 = document.querySelector(".js__button5");
const imagesArray = ["1.jpg", "2.jpg", "3.jpg" ,"4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
const imgOut = document.querySelector("js__img_out")
function imgRandom() {
    
    for (let i = 0; i < imagesArray.length; i++); {
        let img = document.createElement('img');
        img.src = "img/"+imagesArray[i]+".jpg";
        
    }
}

jsButton5.addEventListener("click", imgRandom);