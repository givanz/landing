/*
 * Sticky navbar
 * 
 */
  	
// When the user scrolls the page, execute navbarSticky
window.onscroll = function() {navbarSticky()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop ? navbar.offsetTop : navbar.offsetHeight;

function toggleNavbarTheme () {
    if (navbar.classList.contains("navbar-dark")) {
		navbar.classList.add("navbar-light");
		navbar.classList.remove("navbar-dark");
	} else if (navbar.classList.contains("navbar-light")) {
		navbar.classList.add("navbar-dark");
		navbar.classList.remove("navbar-light");
	}
}


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarSticky(isSticky) {
  if (isSticky == undefined) {
	  isSticky = (window.pageYOffset >= sticky);		
  }
		
  if (isSticky) {
	  if (!navbar.classList.contains("sticky")) {
		navbar.classList.add("sticky");
		toggleNavbarTheme();
	  } 
  } else {
	  if (navbar.classList.contains("sticky")) {
		navbar.classList.remove("sticky");
		toggleNavbarTheme();
	  }
  }
}

function setCookie(name, value) {
	document.cookie = name + "=" + value + ";";
	//try to set cookie to all subdomains
	document.cookie = name + "=" + value + ";path=/;domain=." + window.location.host.replace(/^.*?\./, '') + ";";
}

let themeSwitch = document.querySelector("#color-theme-switch i");
let theme = document.documentElement.dataset.bsTheme;
let themeCookie = document.cookie.match(/theme=(.*?);/);
if (themeCookie && themeCookie[1]) {
	theme = themeCookie[1];
}

if (theme) {
	if (theme == "dark") {
		let themeSwitch = document.querySelector("#color-theme-switch i");
		themeSwitch.classList.remove("la-sun")
		themeSwitch.classList.add("la-moon");
		document.documentElement.dataset.bsTheme = theme;
	}
}
	

document.addEventListener("click", function (e) { 
	let link = e.target.closest("#color-theme-switch");	
	if (link) {
		let themeSwitch = link.querySelector("i");
		let theme = document.documentElement.dataset.bsTheme;
	
		if (theme == "dark") {
			theme = "light";
			themeSwitch.classList.remove("la-moon");
			themeSwitch.classList.add("la-sun");
		} else if (theme == "light" || theme == "auto" || !theme) {
			theme = "dark";
			themeSwitch.classList.remove("la-sun");
			themeSwitch.classList.add("la-moon");
		} else {
			theme = "auto";
		}

		document.documentElement.dataset.bsTheme = theme;
		//localStorage.setItem("theme", theme);
		setCookie("theme", theme);
		//serverStorage.setItem();
	}
});


// product page
document.querySelectorAll('.quantity').forEach(e => e.addEventListener('click', function (e) {
	let btn = e.target.closest(".btn-plus");
	if (btn) {
		let nrInput = btn.parentNode.querySelector("input[type=number]");
		nrInput.value = parseInt(nrInput.value) + 1;
		nrInput.dispatchEvent(new KeyboardEvent("change", {
			bubbles: true,
			cancelable: true,
		}));		
	}
	return false;
}));

document.querySelectorAll('.quantity').forEach(e => e.addEventListener('click', function (e) {
	let btn = e.target.closest(".btn-minus");
	if (btn) {
		let nrInput = btn.parentNode.querySelector("input[type=number]");
		nrInput.value = Math.max(1, parseInt(nrInput.value) - 1);
		nrInput.dispatchEvent(new KeyboardEvent("change", {
			bubbles: true,
			cancelable: true,
		}));		
	}
	return false;
}));

function zoom(e) {
    let img = e.currentTarget;
    offsetX = e.offsetX || (e.touches ? e.touches[0].pageX : 0);
    offsetY = e.offsetY || (e.touches ? e.touches[0].pageY : 0);
	
	x = offsetX / img.offsetWidth * 100; 
	y = offsetY / img.offsetHeight * 100; 
	img.style.backgroundPosition = x + "% " + y + "%";
}

document.querySelectorAll('div.zoom').forEach(e => e.addEventListener('mousemove', zoom));


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
        .then(function (registration){console.log('Service worker registered successfully');})
        .catch(function (e){console.error('Error during service worker registration:', e);});
}

function togglePasswordInput(element, input) {
	let password = document.getElementById(input);
	if (password.type == "password") {
		password.type = "text"; 
		let i = element.querySelector("i")
		i.classList.add("la-eye")
		i.classList.remove("la-eye-slash");
	} else {
		password.type = "password";
		let i = element.querySelector("i")
		i.classList.remove("la-eye")
		i.classList.add("la-eye-slash");
	}
}

document.addEventListener("click", function (e) { 
	let link = e.target.closest(".dropdown-toggle");
	if (link) {
		let parent = link.closest(".nav-toggle");
		if (link.classList.contains("show")) {
			parent.classList.add("show"); 
		} else {
			parent.classList.remove("show"); 
		}
	}
});

//theme ajax configuration

//include elements that will be updated on ajax calls, include body > section to trigger whole page update if sections mismatch between different page structures
VvvebTheme.ajax.siteContainer  = ["#site-content", ".inner-page-hero", "body > section"];
//include posts, product and menu items for ajax
//VvvebTheme.ajax.selector = "a[data-url], a[data-page-url], a[data-v-menu-item-url], a[data-v-post-url], a[data-v-product-url], a[data-v-cat-url], a[data-v-archive-url], a[data-v-admin-url], a[data-v-post-author-url], a[data-v-breadcrumb-item-url]"; 
//skip home for dark hero and contact form for google js code
//VvvebTheme.ajax.skipUrl = ["/", "/page/contact"];
