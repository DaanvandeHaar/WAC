
function sayHi(event) {
    var greeting = "Hi, this is a " + event.type + "event!";
    document.querySelector("#greeting").innerHTML = greeting;
    console.log("bericht")
}

var hiButton = document.querySelector("#hi");
hiButton.addEventListener("click", sayHi);