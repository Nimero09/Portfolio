const navScroll = document.querySelector("header");
const imgHero = document.getElementById('logo');

window.addEventListener ("scroll", () => {
	navScroll.classList.toggle("sticky", window.scrollY > 0);
	imgHero.classList.toggle("sticky", window.scrollY > 0);
})


// Menu btn toogle
const menuBtn = document.querySelector(".nav-menu-btn");
const navigation = document.querySelector(".navigation")
const menuClose = document.querySelector(".nav-close-btn");

const openMenu = () => {
	navigation.classList.toggle("active");
}

const closeMenu = () => {
	navigation.classList.remove("active");
}

menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);