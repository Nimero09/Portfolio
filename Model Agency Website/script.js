const navScroll = document.querySelector("header");
const imgHero = document.getElementById('logo');

window.addEventListener ("scroll", () => {
	navScroll.classList.toggle("sticky", window.scrollY > 0);
	imgHero.classList.toggle("sticky", window.scrollY > 0);
})

