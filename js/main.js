const { get } = require("jquery");

function getEle(id) {
    return document.getElementById(id);
}

function batDen() { 
    var den = getEle("theDen");
        den.src = "./img/mechiLien.jpg";
        den.style.margin = '20px 0';
        var phaoHoa = getEle("phaohoa");
        phaoHoa.className = 'pyro';
        batNhac();
}

function batNhac () {
    var button = getEle("sound");
    button.play();
}
