function refreshCart(name, value, element) {
	VvvebTheme.Cart.module = 'checkout/checkout';
	VvvebTheme.Cart.component_id = 1;
	//action, parameters, element, selector, callback
	let parameters = {};
	parameters[name] = value;
	VvvebTheme.Cart.ajax('', parameters, element, ['.cart-summary', '.container > .notifications']);
	//cart-summary
}

function toggleBillingAddress(element) {

	let address = document.querySelector(".billing_address");
	if (element.value == 0) {
		address.querySelectorAll("input,select,textarea").forEach(e => e.removeAttribute("disabled"));	
		address.style.display = "";
	} else {
		address.querySelectorAll("input,select,textarea").forEach(e => e.setAttribute("disabled", "true"));	
		address.style.display = "none";
	}
}

function toggleShippingAddress(element) {
	let address = document.querySelector(".shipping_address");
	if (element) {
		if (element.checked == 0) {
			address.querySelectorAll("input,select,textarea").forEach(e => e.setAttribute("disabled", "true"));	
			address.style.display = "none";
		} else {
			address.querySelectorAll("input,select,textarea").forEach(e => e.removeAttribute("disabled"));	
			address.style.display = "";
		}
	}
}

function toggleRegister(element) {
	let register = document.querySelector(".register-account");
	
	if (element.value == 'false') {
		register.querySelectorAll("input,select,textarea").forEach(e => e.setAttribute("disabled", "true"));	
		register.style.display = "none";
	} else {
		register.querySelectorAll("input,select,textarea").forEach(e => e.removeAttribute("disabled"));	
		register.style.display = "";
	}
}

//show billing address form if no address is selected
window.addEventListener('DOMContentLoaded', (e) => {

	document.addEventListener("change", e => {
		let element = e.target.closest("[name=billing_address_id]");
		if (element) {
			toggleBillingAddress(element);
		}
	});

	if (!document.getElementById("billing_address_new")?.checked && !document.querySelector("[name=billing_address_id]:checked")?.value) {
		//if new address is not checked and no address is selected
		document.querySelector("[name=billing_address_id]")?.dispatchEvent(new MouseEvent('click'));//select first address
	}
	
	let billing_address = document.querySelector("[name=billing_address_id]:checked");
	//if an address is selected hide billing address form
	if (billing_address && billing_address.value != false) {
		document.querySelector(".billing_address").style.display = "none";
	}
	
	//hide shipping address form if same as billing checkbox is checked
	toggleShippingAddress(document.getElementById("shipping-form-check"));
	
	//if login form is filled show form
	if (document.querySelector("#checkout-login-form [name=password]")?.value) {
		document.getElementById('checkout-login-container').style.display = "";
		document.getElementById('login-form-check').checked = true;
	}
	
	//if shipping or payment method is selected collapse the accordion
	document.querySelector('.accordion-item input[type="radio"]:checked')?.closest("label").dispatchEvent(new MouseEvent('click'));

	document.addEventListener("click", function(e) {
		let element = e.target.closest(".accordion-header label input");
		if (element) {
			e.stopPropagation();
			
			let item = element.closest(".accordion-item");
			let collapse = item.querySelector(":scope > .collapse");

			item.parentNode.querySelectorAll(".collapse.show").forEach(e => bootstrap.Collapse.getOrCreateInstance(e)?.hide());
			item.parentNode.querySelectorAll(".accordion-button").forEach(e => e.classList.add("collapsed"));

			item.querySelector(".accordion-button").classList.remove("collapsed");
			bootstrap.Collapse.getOrCreateInstance(collapse)?.show();

			let input = item.querySelector('[name="shipping_method"], [name="payment_method"]');
			refreshCart(input.getAttribute("name"), input.value, element);
		}
	});
	
	document.querySelector("[data-v-countries][readonly]")?.dispatchEvent(new Event('change', {bubbles:true}));
	document.querySelector('input[name="register"]:checked')?.dispatchEvent(new MouseEvent('click', {bubbles:true}));
});

//load regions for region select when country changes
let regions = [];

function addRegionsToSelect(regionSelect, data, region_id = 0, countrySelect) {
	regionSelect.replaceChildren();
	for (const region of data) {
		regionSelect.append(new Option(region.name, region.region_id));
	}
	regionSelect.value = region_id;
	regionSelect.removeAttribute("readonly");
	countrySelect.removeAttribute("readonly");
}

document.addEventListener("change", function (e) {
	let element = e.target.closest("[data-v-countries]");
	if (element) {
		let regionGroup = element.closest(".address");
		let regionSelect = regionGroup.querySelector("[data-v-regions]");
		let country_id = element.value;
		let region_id = element.dataset.vRegionId;
		let self = element;
		element.readonly = false;

		if (country_id) {
			if (regions[country_id]) {
				addRegionsToSelect(regionSelect, regions[country_id], region_id, self);
				document.querySelector("[data-v-countries][readonly]")?.dispatchEvent(new Event('change'));
			} else {
				fetch(regionsUrl + "&country_id=" + country_id)
				 .then(response => {
					if (!response.ok) { throw new Error(response) }
					return response.json()
				 })
				.then(data => {
					regions[country_id] = data;
					addRegionsToSelect(regionSelect, data, region_id, self);
					document.querySelector("[data-v-countries][readonly]")?.dispatchEvent(new Event('change', {bubbles:true}));
				})
				.catch(error => {
					console.log(error.statusText);
					//displayToast("bg-danger", "Revision", "Error!");
				});				
			}
		}
		
		element.dataset.vRegionId = 0;
	}
});

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


document.addEventListener('click', function (e) {
	let element = e.target.closest('.btn-coupon, .btn-remove-coupon');
	if (element) {
		let updateElements = [".cart-right-column", ".mini-cart", ".cart-summary"];
		VvvebTheme.Cart.module= 'checkout/checkout';
		if (element.classList.contains("btn-remove-coupon")) {
			let coupon = element.parentNode.querySelector(".code").innerHTML;
			let container = e.target.closest("[data-v-cart-coupon]");
			VvvebTheme.Cart.removeCoupon({coupon}, element, updateElements);
			container.remove();
		} else {
			let coupon = document.querySelector("[name='coupon']").value;
			VvvebTheme.Cart.coupon({coupon}, element, updateElements);
		}
		e.preventDefault();
	}
});

function toggleLoginForm() {
	let container = document.getElementById('checkout-login-container');
	container.style.display = container.style.display ? "" : "none";
}
