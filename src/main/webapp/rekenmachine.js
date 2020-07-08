var scherm = "";

function AC(){
    console.log("hallo");
    var bericht = "";
    scherm = "";
    document.querySelector("#test").innerHTML = bericht;
}

function voegEenToe(item) {
    scherm = scherm + "1";
    document.querySelector("#test").innerHTML = scherm;

}
function voegTweeToe(item) {
    scherm = scherm + "2";
    document.querySelector("#test").innerHTML = scherm;

}
function voegDrieToe(item) {
    scherm = scherm + "3";
    document.querySelector("#test").innerHTML = scherm;

}
function voegVierToe(item) {
    scherm = scherm + "4";
    document.querySelector("#test").innerHTML = scherm;

}
function voegVijfToe(item) {
    scherm = scherm + "5";
    document.querySelector("#test").innerHTML = scherm;

}
function voegZesToe(item) {
    scherm = scherm + "6";
    document.querySelector("#test").innerHTML = scherm;

}
function voegZevenToe(item) {
    scherm = scherm + "7";
    document.querySelector("#test").innerHTML = scherm;

}
function voegAachtToe(item) {
    scherm = scherm + "8";
    document.querySelector("#test").innerHTML = scherm;

}
function voegNegenToe(item) {
    scherm = scherm + "9";
    document.querySelector("#test").innerHTML = scherm;
}
function voegNulToe(item) {
    scherm = scherm + "0";
    document.querySelector("#test").innerHTML = scherm;
}
function voegMinToe(item) {
    scherm = scherm + "-";
    document.querySelector("#test").innerHTML = scherm;
}

function voegDeelToe(item) {
    scherm = scherm + "/";
    document.querySelector("#test").innerHTML = scherm;
}

function voegKeerToe(item) {
    scherm = scherm + "*";
    document.querySelector("#test").innerHTML = scherm;
}

function voegPlusToe(item) {
    scherm = scherm + "+";
    document.querySelector("#test").innerHTML = scherm;
}

function bereken() {
    try { var uitkomst = eval(scherm);
        document.querySelector("#test").innerHTML = uitkomst;
        scherm = "";}
    catch (err) {
        document.querySelector("#test").innerHTML = "SYN ERR";
        scherm = "";

    }
}

var acKnop = document.querySelector("#acKnop")
acKnop.addEventListener("click", AC)

// var testKnop = document.querySelector("#testKnop");
// testKnop.addEventListener("click",);

var eenKnop = document.querySelector("#eenKnop");
eenKnop.addEventListener("click", voegEenToe);

var tweeKnop = document.querySelector("#tweeKnop");
tweeKnop.addEventListener("click", voegTweeToe);

var drieKnop = document.querySelector("#drieKnop");
drieKnop.addEventListener("click", voegDrieToe);

var vierKnop = document.querySelector("#vierKnop");
vierKnop.addEventListener("click", voegVierToe);

var vijfKnop = document.querySelector("#vijfKnop");
vijfKnop.addEventListener("click", voegVijfToe);

var zesKnop = document.querySelector("#zesKnop");
zesKnop.addEventListener("click", voegZesToe);

var zevenKnop = document.querySelector("#zevenKnop");
zevenKnop.addEventListener("click", voegZevenToe);

var achtKnop = document.querySelector("#achtKnop");
achtKnop.addEventListener("click", voegAachtToe);

var negenKnop = document.querySelector("#negenKnop");
negenKnop.addEventListener("click", voegNegenToe);

var nulKnop = document.querySelector("#nulKnop");
nulKnop.addEventListener("click", voegNulToe)

var plusKnop = document.querySelector("#plusKnop");
plusKnop.addEventListener("click", voegPlusToe);

var minKnop = document.querySelector("#minKnop");
minKnop.addEventListener("click", voegMinToe);

var keerKnop = document.querySelector("#keerKnop");
keerKnop.addEventListener("click", voegKeerToe);

var deelKnop = document.querySelector("#deelKnop");
deelKnop.addEventListener("click", voegDeelToe);

var isKnop = document.querySelector("#isKnop");
isKnop.addEventListener("click", bereken);