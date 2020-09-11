const body = document.querySelector("body");
const IMG_NUMBER = 6;

/*function handleImgLoad() {
    console.log("loaded!!");
}*/

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./img/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    //image.addEventListener("load", handleImgLoad);
}   

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function changeBg() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

function init() {
    changeBg();
    setInterval(changeBg, 600000);
}

init();