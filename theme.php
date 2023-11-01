<?php

/**
 * Vvveb
 *
 * Copyright (C) 2022  Ziadin Givan
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

/*
Name: Landing
Slug: landing
URI: https://vvveb.com
Author: Vvveb
Author URI: https://vvveb.com
Description: Default theme
Version: 2.0
License:  Apache 2.0
License URI: https://vvveb.com/licence/
Tags: blog, ecommerce
Text Domain: landing
*/
use function Vvveb\__;

return
	[
		'pages' => [/*
			'index' => [
				'name'        => 'index',
				'file'        => 'index.html',
				'url'         => '/themes/landing/index.html',
				'title' =>  __('Home page'),
				'folder'      => '',
				'description' => 'Website homepage',
			],
			'contact' => [
				'name'        => 'contact',
				'file'        => 'contact.html',
				'url'         => '/themes/landing/contact.html',
				'title' =>  __('Contact us page'),
				'folder'      => '',
				'description' => 'Contact us page',
			],
			'blank' => [
				'name'        => 'blank',
				'file'        => 'blank.html',
				'url'         => '/themes/landing/blank.html',
				'title' =>  __('Blank page'),
				'folder'      => '',
				'description' => 'Template page used for new pages',
			],
			'error404' => [
				'name'        => 'error404',
				'file'        => 'error404.html',
				'url'         => '/themes/landing/error404.html',
				'title' =>  __('Page not found'),
				'folder'      => '',
				'description' => 'Shows when a page is not available',
			],
			'error500' => [
				'name'        => 'error500',
				'file'        => 'error500.html',
				'url'         => '/themes/landing/error500.html',
				'title' =>  __('Server error'),
				'folder'      => '',
				'description' => 'Site error display page',
			],
			'index.coming-soon' => [
				'name'        => 'index.coming-soon',
				'file'        => 'index.coming-soon.html',
				'url'         => '/themes/landing/index.coming-soon.html',
				'title' =>  __('Comming soon notice page'),
				'folder'      => '',
				'description' => '',
			],
			'index.maintenance' => [
				'name'        => 'index.maintenance',
				'file'        => 'index.maintenance.html',
				'url'         => '/themes/landing/index.maintenance.html',
				'title' =>  __('Maintenance notice page'),
				'folder'      => '',
				'description' => '',
			],
			'cart-cart' => [
				'name'        => 'cart-cart',
				'file'        => 'cart/cart.html',
				'url'         => '/themes/landing/cart/cart.html',
				'title' =>  __('Cart'),
				'folder'      => 'cart',
				'description' => '',
			],
			'checkout-checkout' => [
				'name'        => 'checkout-checkout',
				'file'        => 'checkout/checkout.html',
				'url'         => '/themes/landing/checkout/checkout.html',
				'title' =>  __('Checkout'),
				'folder'      => 'checkout',
				'description' => '',
			],
			'checkout-confirm' => [
				'name'        => 'checkout-confirm',
				'file'        => 'checkout/confirm.html',
				'url'         => '/themes/landing/checkout/confirm.html',
				'title' =>  __('Confirm'),
				'folder'      => 'checkout',
				'description' => '',
			],
			'checkout-order' => [
				'name'        => 'checkout-order',
				'file'        => 'checkout/order.html',
				'url'         => '/themes/landing/checkout/order.html',
				'title' =>  __('Order'),
				'folder'      => 'checkout',
				'description' => '',
			],
			'content-category' => [
				'name'        => 'content-category',
				'file'        => 'content/category.html',
				'url'         => '/themes/landing/content/category.html',
				'title' =>  __('Category'),
				'folder'      => 'content',
				'description' => '',
			],
			'content-index' => [
				'name'        => 'content-index',
				'file'        => 'content/index.html',
				'url'         => '/themes/landing/content/index.html',
				'title' =>  __('Blog homepage'),
				'folder'      => 'content',
				'description' => '',
			],
			'content-page' => [
				'name'        => 'content-page',
				'file'        => 'content/page.html',
				'url'         => '/themes/landing/content/page.html',
				'title' =>  __('Page'),
				'folder'      => 'content',
				'description' => '',
			],
			'content-post' => [
				'name'        => 'content-post',
				'file'        => 'content/post.html',
				'url'         => '/themes/landing/content/post.html',
				'title' =>  __('Post'),
				'folder'      => 'content',
				'description' => '',
			],
			'content-related-posts' => [
				'name'        => 'content-related-posts',
				'file'        => 'content/related-posts.html',
				'url'         => '/themes/landing/content/related-posts.html',
				'title' =>  __('Related posts'),
				'folder'      => 'content',
				'description' => '',
			],
			'content-tag' => [
				'name'        => 'content-tag',
				'file'        => 'content/tag.html',
				'url'         => '/themes/landing/content/tag.html',
				'title' =>  __('Tag'),
				'folder'      => 'content',
				'description' => '',
			],
			'product-category' => [
				'name'        => 'product-category',
				'file'        => 'product/category.html',
				'url'         => '/themes/landing/product/category.html',
				'title' =>  __('Category'),
				'folder'      => 'product',
				'description' => '',
			],
			'product-index' => [
				'name'        => 'product-index',
				'file'        => 'product/index.html',
				'url'         => '/themes/landing/product/index.html',
				'title' =>  __('Shop page'),
				'folder'      => 'product',
				'description' => '',
			],
			'product-product' => [
				'name'        => 'product-product',
				'file'        => 'product/product.html',
				'url'         => '/themes/landing/product/product.html',
				'title' =>  __('Product'),
				'folder'      => 'product',
				'description' => '',
			],
			'search-index' => [
				'name'        => 'search-index',
				'file'        => 'search/index.html',
				'url'         => '/themes/landing/search/index.html',
				'title' =>  __('Search'),
				'folder'      => 'search',
				'description' => '',
			],
			'user-addresses' => [
				'name'        => 'user-addresses',
				'file'        => 'user/address.html',
				'url'         => '/themes/landing/user/address.html',
				'title' =>  __('Addresses'),
				'folder'      => 'user',
				'description' => '',
			],
			'user-comments' => [
				'name'        => 'user-comments',
				'file'        => 'user/comments.html',
				'url'         => '/themes/landing/user/comments.html',
				'title' =>  __('Comments'),
				'folder'      => 'user',
				'description' => '',
			],
			'user-downloads' => [
				'name'        => 'user-downloads',
				'file'        => 'user/downloads.html',
				'url'         => '/themes/landing/user/downloads.html',
				'title' =>  __('Downloads'),
				'folder'      => 'user',
				'description' => '',
			],
			'user-edit' => [
				'name'        => 'user-edit',
				'file'        => 'user/edit.html',
				'url'         => '/themes/landing/user/edit.html',
				'title' =>  __('Edit'),
				'folder'      => 'user',
				'description' => '',
			],
			'user-index' => [
				'name'        => 'user-index',
				'file'        => 'user/index.html',
				'url'         => '/themes/landing/user/index.html',
				'title' =>  __('User Dashboard'),
				'folder'      => 'user',
				'description' => '',
			],
			'user-login' => [
				'name'        => 'user-login',
				'file'        => 'user/login.html',
				'url'         => '/themes/landing/user/login.html',
				'title' =>  __('Login'),
				'folder'      => 'user',
				'description' => '',
			],
			'user-orders' => [
				'name'        => 'user-orders',
				'file'        => 'user/orders.html',
				'url'         => '/themes/landing/user/orders.html',
				'title' =>  __('Orders'),
				'folder'      => 'user',
				'description' => '',
			],
			'user-profile' => [
				'name'        => 'user-profile',
				'file'        => 'user/profile.html',
				'url'         => '/themes/landing/user/profile.html',
				'title' =>  __('Profile'),
				'folder'      => 'user',
				'description' => '',
			],
			'user-recover' => [
				'name'        => 'user-recover',
				'file'        => 'user/reset.html',
				'url'         => '/themes/landing/user/reset.html',
				'title' =>  __('Recover'),
				'folder'      => 'user',
				'description' => '',
			],
			'user-signup' => [
				'name'        => 'user-signup',
				'file'        => 'user/signup.html',
				'url'         => '/themes/landing/user/signup.html',
				'title' =>  __('Signup'),
				'folder'      => 'user',
				'description' => '',
			],
		 */
		],
		'components' => [
			['title' =>  __('Content'), 'name' =>  'content'],
			['title' => __('Ecommerce'), 'name' =>  'ecommerce'],
			['title' => __('Bootstrap 5'), 'name' =>  'bootstrap5'],
			['title' => __('Landing theme components'), 'name' =>  'landing', 'file'=> 'landing-components.js'],
		],
		'inputs' => [
			['title' =>  __('Slider inputs'), 'name' =>  'slider', 'file'=> 'slider-inputs.js'],
		],
		'ignoreFolders' => ['backup'],
	];
