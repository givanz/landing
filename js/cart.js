$('body').on('change', '[name="quantity"]', function (e) {
	let product = $(this).parents("[data-v-cart-product]");
	let key = product[0].dataset.key;
	let quantity = this.value;
	let updateElements = ['#cart-container [data-key="' + key + '"] .price', '#cart-container [data-key="' + key + '"] .total', ".cart-right-column", ".mini-cart"];
	
	delay(() => VvvebTheme.Cart.update(key, {quantity}, this, updateElements), 1000);
});
/*
$('.cart-table .quantity').on('click', '.btn-plus', function (e) {
	$("input[type=number]", this.parentNode).val(function( index, value ) {
	  return ++value;
	}).change();
});

$('.cart-table .quantity').on('click', '.btn-minus', function (e) {
	$("input[type=number]", this.parentNode).val(function( index, value ) {
	  return Math.max(--value, 1);
	}).change();
});
*/
$('body').on('click', '.btn-coupon', function (e) {
	let coupon = $("[name='coupon']").val();
	let updateElements = [".cart-right-column", ".mini-cart"];
	VvvebTheme.Cart.coupon({coupon}, this, updateElements)
	e.preventDefault();
});

$('body').on('click', '.btn-remove-coupon', function (e) {
	let coupon = $(".code", this.parentNode).html();
	let updateElements = [".cart-right-column", ".mini-cart"];
	VvvebTheme.Cart.removeCoupon({coupon}, this, updateElements)
	e.preventDefault();
});

$('body').on('click', '.btn-remove', function (e) {
	let product = $(this).parents("[data-v-cart-product]");
	let key = product[0].dataset.key;
	let quantity = this.value;
	let updateElements = [".cart-right-column", ".mini-cart"];

	product.addClass("bg-light");
	delay(() => VvvebTheme.Cart.remove(key, this, updateElements, () => product.remove()), 500);
	//if cart empty refresh page, if not empty prevent refresh and update with ajax
	if ($("#cart-container [data-v-cart-product]").length > 1) {
		e.preventDefault();
	} else {
		//return;
	}
});