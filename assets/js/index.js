document.addEventListener("DOMContentLoaded", function () {
	let nav = document.querySelector("nav");
	let navHeight = nav ? nav.offsetHeight : 0;

	// Navbar Toggle
	document.querySelector(".navbar-toggler")?.addEventListener("click", function () {
		document.getElementById("mainNav")?.classList.add("navbar-reduce");
	});

	// Preloader
	window.addEventListener("load", function () {
		let preloader = document.getElementById("preloader");
		if (preloader) {
			preloader.style.display = "none";
		}
	});

	// Back to Top Button
	let backToTop = document.querySelector(".back-to-top");
	window.addEventListener("scroll", function () {
		if (backToTop) {
			backToTop.style.display = window.scrollY > 100 ? "block" : "none";
		}
	});

	backToTop?.addEventListener("click", function (e) {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	// Smooth Scrolling for Links
	var links = document.querySelectorAll("a.js-scroll[href^='#']");
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener("click", function (event) {
			var target = document.querySelector(this.getAttribute("href"));
			if (target) {
				event.preventDefault();
				window.scrollTo({ top: target.offsetTop - navHeight + 5, behavior: "smooth" });
			}
		});
	}

	// Collapse Navbar on Link Click
	document.querySelectorAll(".js-scroll").forEach(link => {
		link.addEventListener("click", function () {
			let navbarCollapse = document.querySelector(".navbar-collapse");
			if (navbarCollapse) {
				navbarCollapse.classList.remove("show");
			}
		});
	});

	// Navbar Styling on Scroll
	window.addEventListener("scroll", function () {
		let scrollTop = window.scrollY;
		let navbar = document.querySelector(".navbar-expand-md");

		if (navbar) {
			if (scrollTop > 50) {
				navbar.classList.add("navbar-reduce");
				navbar.classList.remove("navbar-trans");
			} else {
				navbar.classList.add("navbar-trans");
				navbar.classList.remove("navbar-reduce");
			}
		}

		let scrollTopMf = document.querySelector(".scrolltop-mf");
		if (scrollTopMf) {
			scrollTopMf.style.display = scrollTop > 1200 ? "block" : "none";
		}
	});

	// Typed.js Text Animation
	let textSlider = document.querySelector(".text-slider");
	if (textSlider) {
		let typedStrings = document.querySelector(".text-slider-items")?.textContent;
		if (typedStrings) {
			new Typed(".text-slider", {
				strings: typedStrings.split(","),
				typeSpeed: 80,
				loop: true,
				backDelay: 1100,
				backSpeed: 30,
			});
		}
	}
});

