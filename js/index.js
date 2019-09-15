function buttonClasses() {
    const buttons = document.querySelectorAll("li");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
}

function hideDivs() {
    const maindivs = document.querySelectorAll(".mainDiv");
    for (let i = 0; i < maindivs.length; i++) {
        maindivs[i].style.display = "none";
    }
}

function meButton() {
    hideDivs();
    buttonClasses();
    document.getElementById("mediv").style.display = "block";
    document.getElementById("mebutton").classList.add("active");
}

function homeButton() {
    hideDivs();
    buttonClasses();
    document.getElementById("homediv").style.display = "block";
    document.getElementById("homebutton").classList.add("active");
}

function linksButton() {
    hideDivs();
    buttonClasses();
    document.getElementById("linksdiv").style.display = "block";
    document.getElementById("linksbutton").classList.add("active");
}
