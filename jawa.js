const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");
const menuBar2 = document.getElementById("menu-bars");
const menuNav2 = document.querySelector(".navbar-right");
var on = "0";

menuBar.addEventListener("click", function () {
    menuNav.classList.toggle("menu-active")
});
menuBar2.addEventListener("click", function () {
    menuNav2.classList.toggle("active")
});

function changebg(){
    var navbars = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    if (scrollValue < 80) {
        navbars.style.transform = "translateY(-100px)";
        document.getElementById("logo-navbarfloat").style.opacity = "0";
    }else{
        console.log(scrollValue)
        navbars.style.transform = "translateY(0px)";
        document.getElementById("logo-navbarfloat").style.opacity = "1";
    }
}

window.addEventListener('scroll', changebg);
