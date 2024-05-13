/*
Landing theme VvvebJs editor integration
*/ 

//Revert theme default styles for non changeable elements on editor page save

window.addEventListener("vvveb.getHtml.before", function(event) {
	let doc = event.detail;
	//remove sticky class from navbar
	if (event.detail.defaultView.navbarSticky){
		event.detail.defaultView.navbarSticky(false);
	}
	//event.detail.defaultView.scrollTo(0,0);
	//set theme color scheme to auto 
	doc.querySelectorAll("html[data-bs-theme]").forEach(e => e.setAttribute("data-bs-theme", "auto"));
	doc.querySelectorAll(".navbar").forEach(e => e.classList.remove("sticky"));

	//make sure not dropdown is saved as open
	doc.querySelectorAll(".dropdown-toggle.show,.nav-toggle.show, .dropdown-menu.show").forEach(e => e.classList.remove("show"));

	//remove animate on scroll classes
	doc.querySelectorAll("[data-aos]").forEach(e => e.classList.remove("aos-animate", "aos-init"));
});


window.addEventListener("vvveb.getHtml.after", function(event) {
	let doc = event.detail;
	//add animate on scroll classes back
	doc.querySelectorAll("[data-aos]").forEach(e => e.classList.add("aos-animate", "aos-init"));
});

