document.addEventListener('change', function (e) {
	let element = e.target.closest('[name="quantity"]');
	if (element) {
		let product = element.closest("[data-v-cart-product]");
		let key = product.dataset.key;
		let quantity = element.value;
		let updateElements = ['#cart-container [data-key="' + key + '"] .price', '#cart-container [data-key="' + key + '"] .total', ".cart-right-column", ".mini-cart"];
		
		delay(() => VvvebTheme.Cart.update(key, {quantity}, element, updateElements), 1000);
	}
});
/*
document.querySelectorAll('.cart-table .quantity').on('click', '.btn-plus', function (e) {
	("input[type =number]", this.parentNode).val(function( index, value ) {
	  return ++value;
	}).change();
});

document.querySelectorAll('.cart-table .quantity').on('click', '.btn-minus', function (e) {
	("input[type =number]", this.parentNode).val(function( index, value ) {
	  return Math.max(--value, 1);
	}).change();
});
*/

document.addEventListener('click', function (e) {
	let element = e.target.closest('.btn-coupon, .btn-remove-coupon');
	if (element) {
		let updateElements = [".cart-right-column", ".mini-cart"];
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

document.addEventListener('click', function (e) {
	let element = e.target.closest('.btn-remove');
	if (element) {
		let product = element.closest("[data-v-cart-product]");
		if (product) {
			let key = product.dataset.key;
			let quantity = element.value;
			let updateElements = [".cart-right-column", ".mini-cart"];

			product.classList.add("opacity-50");
			VvvebTheme.Cart.remove(key, element, updateElements, () => {
				product.remove();
				//if cart empty refresh page
				if (document.querySelectorAll("#cart-container [data-v-cart-product]").length == 0 ) {
					location.reload();
				}
			});
			e.preventDefault();
		}
	}
});
