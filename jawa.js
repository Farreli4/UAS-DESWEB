const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function () {
    menuNav.classList.toggle("menu-active")
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
