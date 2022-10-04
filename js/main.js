// const { get } = require("jquery");

function getEle(id) {
    return document.getElementById(id);
}

function batNhac () {
    var button = getEle("sound");
    button.play();
}

let gift = getEle('gift');
const balloon = getEle("Myballoon");
const listPre = document.getElementsByClassName("showGif");
gift.addEventListener("click", function() {
    var den = getEle("theDen");
        den.src = "./img/mechiLien.jpg";
        den.style.margin = '20px 0';
        listPre[0].style.opacity = '1';
        listPre[1].style.opacity = "1";
        listPre[1].style.transform = "translateX(0)";
        console.log(listPre);
        getEle("nen").style.backgroundColor = "black";
});