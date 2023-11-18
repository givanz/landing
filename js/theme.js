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

let theme = $("html").attr("data-bs-theme");
if (theme && theme == "dark" || document.cookie.indexOf("theme=dark") > 0) {
	$("#color-theme-switch i").removeClass("la-sun").addClass("la-moon");
	$("html").attr("data-bs-theme", "dark");
} else {
	$("#color-theme-switch i").removeClass("la-moon").addClass("la-sun");
}
	//$("html").attr("data-bs-theme", theme);

$("#color-theme-switch").click(function () {
	
	let theme = $("html").attr("data-bs-theme");
	
	if (theme == "dark") {
		theme = "light";
		$("i",this).removeClass("la-moon").addClass("la-sun");
	} else if (theme == "light" || theme == "auto" || !theme) {
		theme = "dark";
		$("i", this).removeClass("la-sun").addClass("la-moon");
	} else {
		theme = "auto";
	}

	$("html").attr("data-bs-theme", theme);
	//localStorage.setItem("theme", theme);
	setCookie("theme", theme);
	//serverStorage.setItem();
});


// product page
$('.quantity').on('click', '.btn-plus', function (e) {
	$("input[type=number]", this.parentNode).val(function( index, value ) {
	  return ++value;
	}).change();
	return false;
});

$('.quantity').on('click', '.btn-minus', function (e) {
	$("input[type=number]", this.parentNode).val(function( index, value ) {
	  return Math.max(--value, 1);
	}).change();
	return false;
});

function zoom(e) {
    var img = e.currentTarget;
    offsetX = e.offsetX || (e.touches ? e.touches[0].pageX : 0);
    offsetY = e.offsetY || (e.touches ? e.touches[0].pageY : 0);
	
	x = offsetX / img.offsetWidth * 100; 
	y = offsetY / img.offsetHeight * 100; 
	img.style.backgroundPosition = x + "% " + y + "%";
}

$('div.zoom').on('mousemove', zoom);


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/service-worker.js').then((function(t) {})).catch((function(t) {}));
}

