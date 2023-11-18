function refreshCart(name, value, element) {
	VvvebTheme.Cart.module = 'checkout/checkout';
	VvvebTheme.Cart.component_id = 1;
	//action, parameters, element, selector, callback
	let parameters = {};
	parameters[name] = value;
	VvvebTheme.Cart.ajax('', parameters, element, ['.cart-summary', '.container > .notifications']);
	//cart-summary
}

function toggleBillingAddress(e) {

	let address = $(".billing_address");
	if (e.target.value == 0) {
		$("input,select,textarea", address).prop("disabled", false);	
		address.show();
	} else {
		$("input,select,textarea", address).prop("disabled", true);	
		address.hide();
	}
}

function toggleShippingAddress(element) {
	let address = $(".shipping_address");
	if (element.checked == 0) {
		$("input,select,textarea", address).prop("disabled", true);	
		address.hide();
	} else {
		$("input,select,textarea", address).prop("disabled", false);	
		address.show();
	}
}

function toggleRegister(element) {
	let register = $(".register-account");
	
	if (element.value == 'false') {
		$("input,select,textarea", register).prop("disabled", true);	
		register.hide();
	} else {
		$("input,select,textarea", register).prop("disabled", false);	
		register.show();
	}
}

//show billing address form if no address is selected
$(function() {

	$("body").on("change", "[name=billing_address_id]", toggleBillingAddress);

	if (!$("#billing_address_new").prop("checked") && !$("[name=billing_address_id]:checked").val()) {
		//if new address is not checked and no address is selected
		$("[name=billing_address_id]:first").click();//select first address
	}
	
	let billing_address = $("[name=billing_address_id]:checked");
	//if an address is selected hide billing address form
	if (billing_address.length && billing_address.val() != false) {
		$(".billing_address").hide();
	}
	
	//hide shipping address form if same as billing checkbox is checked
	toggleShippingAddress(document.getElementById("shipping-form-check"));
	
	//if login form is filled show form
	if ($("#checkout-login-form [name=password]").val()) {
		$('#checkout-login-container').show();
		$('#login-form-check').prop("checked", true);
	}
	
	//if shipping or payment method is selected collapse the accordion
	$('.accordion-item input[type="radio"]:checked').parents("label").click();

	$('.accordion-item').on("click", "label", function(e) {
		$(".collapse", e.delegateTarget.parentNode).collapse("hide");
		$(".accordion-button", e.delegateTarget.parentNode).addClass("collapsed");

		$(".accordion-button", e.delegateTarget).toggleClass("collapsed");
		$(".collapse", e.delegateTarget).collapse('toggle');
		
		let input = $('[name="shipping_method"], [name="payment_method"]', this);

		refreshCart(input.attr("name"), input.val(), this);
	});
	
	$("[data-v-countries][readonly]:first").change();
	
});

//load regions for region select when country changes
//let regionsUrl = '{ $this->regionsUrl }';
let regions = [];

function addRegionsToSelect(regionSelect, data, region_id = 0, countrySelect) {
	regionSelect.html('');
	for (i in data) {
		let region = data[i];
		regionSelect.append('<option value="' + region.region_id + '">' + region.name + '</option>');
	}
	regionSelect.val(region_id);
	regionSelect.removeAttr("readonly");
	countrySelect.removeAttribute("readonly");
}

$("body").on("change", "[data-v-countries]", function () {
	let regionGroup = $(this).parents(".row");
	let regionSelect = $("[data-v-regions]", regionGroup);
	let country_id = this.value;
	let region_id = this.dataset.vRegionId;
	let self = this;
	this.readonly = false;

	if (country_id) {
		if (regions[country_id]) {
			addRegionsToSelect(regionSelect, regions[country_id], region_id, self);
			$("[data-v-countries][readonly]:first").change();
		} else {
			$.get(regionsUrl + "&country_id=" + country_id).done(function( data ) {
				regions[country_id] = data;
				addRegionsToSelect(regionSelect, data, region_id, self);
				$("[data-v-countries][readonly]:first", self).change();
			});
		}
	}
	
	this.dataset.vRegionId = 0;
});

function togglePasswordInput(element, input) {
	var password = document.getElementById(input);
	if (password.type == "password") {
		password.type = "text"; 
		$("i", element).addClass("la-eye").removeClass("la-eye-slash");
	} else {
		password.type = "password";
		$("i", element).removeClass("la-eye").addClass("la-eye-slash");
	}
}


$('body').on('click', '.btn-coupon', function (e) {
	let coupon = $("[name='coupon']").val();
	let updateElements = [".cart-summary", ".mini-cart"];
	VvvebTheme.Cart.coupon({coupon, "module": "checkout/checkout"}, this, updateElements)
	e.preventDefault();
});

$('body').on('click', '.btn-remove-coupon', function (e) {
	let coupon = $(".code", this.parentNode).html();
	let updateElements = [".cart-summary", ".mini-cart"];
	VvvebTheme.Cart.removeCoupon({coupon, "module": "checkout/checkout"}, this, updateElements)
	e.preventDefault();
});