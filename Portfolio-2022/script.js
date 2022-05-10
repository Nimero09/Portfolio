// Navigation bar effect on scroll
window.addEventListener("scroll", function(){
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

// Services section - modal

const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick) {
	serviceModals[modalClick].classList.add("active");
}

learnMoreBtn.forEach((learnMoreBtn, i) => {
	learnMoreBtn.addEventListener("click", () => {
		modal(i); 
	})
});

modalCloseBtn.forEach((modalCloseBtn) => {
	modalCloseBtn.addEventListener("click", () => {
		serviceModals.forEach((modalView) => {
			modalView.classList.remove("active");
		})
	})
})

// Portfolio section modal 

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portModal = function(modalClick) {
	portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCards, i) => {
	imgCards.addEventListener("click", () => {
		portModal(i); 
	})
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
	portfolioCloseBtn.addEventListener("click", () => {
		portfolioModals.forEach((portfolioModalView) => {
			portfolioModalView.classList.remove("active");
		})
	})
})

// Scroll to top button

const scrollTopBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll", function(){
	scrollTopBtn.classList.toggle("active", window.scrollY > 500);
})

scrollTopBtn.addEventListener("click", () => {
	window.scroll(0, 0);
})

// Navigation menu items active on page scroll

// window.addEventListener("scroll", () => {
// 	const sections = document.querySelectorAll("section");
// 	const scrollY = window.pageYOffSet;

// 	sections.forEach(current => {
// 		let sectionHeight = current.offsetHeight;
// 		let sectionTop = current.offsetTop - 50;
// 		let id = current.getAttribute("id");

// 		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
// 			document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
// 		}
// 		else {
// 			document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active")
// 		}
// 	})
// })

// Navigation menu items active on page scroll **** My method ****
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-items a")

window.addEventListener("scroll", () => {
	let current = ""
	sections.forEach( section => {
		const sectionTop = section.offsetTop - 50;
		const sectionHeight = section.offsetHeight;

		if(scrollY > sectionTop) {
			current = section.getAttribute("id");
		}
	})

	navLi.forEach( li => {
		li.classList.remove("active");
		if(li.classList.contains(current)) {
			li.classList.add("active")
		}
	})
})