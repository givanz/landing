Vvveb.Blocks.add("account/account-1", {
    name: "Account 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/account/account-1-thumb.webp",
    html: `<div>
  <!-- User Login Info -->
  <div class="nav-item dropdown">
    <a class="dropdown-toggle nav-link " href role="button" id="user-dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-v-url="user/index">
      <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>

      <span class="visually-hidden">User</span>
    </a>

    <div class="dropdown-menu dropdown-menu-end login-box user-box" aria-labelledby="user-dropdown">

      <div data-v-component-user>

        <div class="notifications" data-v-notifications>

          <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error data-v-type="login">

            <div class="icon align-middle me-2">
              <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
                <path d="M12 9v4" />
                <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
                <path d="M12 16h.01" />
              </svg>
            </div>

            <div class="flex-grow-1 align-self-center small">
              <div>
                <div data-v-notification-text>
                  This is a placeholder for a notification message.
                </div>
              </div>
            </div>


            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
              </span>
            </button>
          </div>

          <div class="alert alert-success d-flex alert-dismissable" role="alert" data-v-notification-success data-v-type="login">

            <div class="icon align-middle me-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>

            <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
              This is a placeholder for a success message.
            </div>

            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
              </span>
            </button>
          </div>

          <div class="alert alert-primary d-flex alert-dismissable" role="alert" data-v-notification-info data-v-type="login">

            <div class="icon align-middle me-2">
              <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
              </svg>
            </div>

            <div class="flex-grow-1 align-self-center" data-v-notification-text>
              This is a placeholder for a info message.
            </div>

            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
              </span>
            </button>
          </div>

        </div>

        <form action method="post" enctype="multipart/form-data" data-v-url="user/login/index" data-v-vvveb-action="login" data-v-vvveb-on="submit" class="login-form">

          <input type="hidden" name="csrf" data-v-csrf>

          <div class="login-form" data-v-if-not="component.user_id">

            <div class="mb-3">
              <input type="email" name="email" value placeholder=" " id="user-email" class="form-control label-over" data-v-user-email required>
              <label class="form-label" for="user-email">E-Mail Address</label>
            </div>

            <div class="mb-3">

              <div class="input-group">
                <input type="password" minlength="4" autocorrect="off" autocomplete="current-password" class="form-control label-over" placeholder=" " id="user-password" name="password" value="" aria-label="Password" required>
                <label class="form-label" for="user-password">Password</label>
                <button class="btn btn-sm px-3 border border-start-0" type="button" onclick="togglePasswordInput(this, 'user-password')">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                    <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                    <path d="M3 3l18 18" />
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" value="Login" class="btn btn-primary py-2 btn-login w-100">

              <span class="loading d-none">
                <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                </span>
                <span>Authenticating</span>...
              </span>

              <span class="button-text">
                Login <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ms-2" aria-hidden="true">
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                </svg>
              </span>

            </button>
            <div class="my-2"></div>
            <a href="/user/reset" data-v-url="user/reset/index" class="my-2">Forgot your password?</a>

            <div class="my-2"></div>
            <!--
		<a>
			<span class="btn btn-secondary btn-sm">
				  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945" /></svg>
			</span>
		</a>
		<a>
			<span class="btn btn-secondary btn-sm">
			  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
			</span>
		</a> -->
            <hr class="text-secondary my-3">
            <span>Don’t have an account?</span>
            <br>
            <a href="/user/signup" data-v-url="user/signup/index">Register Account</a>
            <span class="text-body-tertiary">|</span>
            <a href="/user/login" data-v-url="user/login/index">Login</a>

          </div>


          <div class="user-form" data-v-if="component.user_id">
            <div class="text-center" data-v-if="user.first_name">Welcome <b data-v-user-first_name data-filter-capitalize>John</b>
              <b data-v-user-last_name data-filter-capitalize>Doe</b>
            </div>
            <div class="text-center" data-v-if-not="user.first_name">Welcome <b data-v-user-username>johndoe</b>
            </div>

            <div class="dropdown-divider opacity-50 my-3"></div>

            <ul class="m-3 list-unstyled">
              <li>
                <a href="user" data-v-url="user/index">
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <span>My account</span>
                </a>
              </li>
              <li>
                <a href="user/comments" data-v-url="user/comments/index">
                  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                    <path d="M8 9h8" />
                    <path d="M8 13h6" />
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
                  </svg>
                  <span>Comments</span>
                </a>
              </li>
              <li>
                <a href="user/orders" data-v-url="user/orders/index">
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                  </svg>
                  <span>Orders</span>
                </a>
              </li>
              <li>
                <a href="user/downloads" data-v-url="user/downloads/index">
                  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
                    <path d="M12.5 15.5l2 2" />
                    <path d="M15 13l2 2" />
                  </svg>
                  <span>Downloads</span>
                </a>
              </li>
              <li>
                <a href="user/wishlist" data-v-url="user/wishlist/index">
                  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 11l5 5l5 -5" />
                    <path d="M12 4l0 12" />
                  </svg>
                  <span>Wishlist</span>
                </a>
              </li>
              <li>
                <a href="user/profile" data-v-url="user/profile/index">
                  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  </svg>
                  <span>Profile</span>
                </a>
              </li>
            </ul>


            <input type="hidden" name="logout">

            <button type="submit" value="logout" class="btn btn-sm btn-primary w-100">

              <span class="loading d-none">
                <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                </span>
                <span>Loading ...</span>...
              </span>

              <span class="button-text">
                <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="m-1" aria-hidden="true">
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M9 12h12l-3 -3" />
                  <path d="M18 15l3 -3" />
                </svg>
                <span>Log out</span>
                </a>
              </span>

            </button>
          </div>
        </form>


      </div>
    </div>
  </div>

</div>`
});
	Vvveb.BlocksGroup['Account'] = ["account/account-1"];
Vvveb.Blocks.add("author/author-1", {
    name: "Author 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/author/author-1-thumb.webp",
    html: `<div>
  <div class="container py-4 my-4 border-top border-bottom" data-v-component-admin data-v-admin_id="url">
    <div class="row">
      <div class="col-md-3 align-self-center">
        <img class="img-fluid d-block rounded-circle border p-1 mx-auto avatar" src="/media/placeholder.svg" width="128" height="128" data-v-admin-avatar_url>
      </div>
      <div class="col-md-9 align-self-center">
        <span class="text-muted">Meet the author</span>
        <h4 data-v-admin-display_name>John Doe</h4>
        <div class="mb-2" data-v-admin-bio>My bio</div>

        <a href="#" data-v-admin-url>
          <span>All author posts</span>
        </a>
      </div>
    </div>
  </div>

</div>`
});
	Vvveb.BlocksGroup['Author'] = ["author/author-1"];
Vvveb.Blocks.add("breadcrumb/breadcrumb-1", {
    name: "Breadcrumb 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/breadcrumb/breadcrumb-1-thumb.webp",
    html: `<div>
  <nav aria-label="breadcrumb" class="text-muted small" data-v-component-breadcrumb>
    <ol class="breadcrumb">
      <li class="breadcrumb-item" data-v-breadcrumb-item>
        <a data-v-breadcrumb-item-url data-v-if="item.url">
          <span data-v-breadcrumb-item-text>Home</span>
        </a>
        <span data-v-breadcrumb-item-text data-v-if-not="item.url">Home</span>
      </li>
      <li class="breadcrumb-item" data-v-breadcrumb-item>
        <a data-v-breadcrumb-item-url data-v-if="item.url">
          <span data-v-breadcrumb-item-text>Library</span>
        </a>
        <span data-v-breadcrumb-item-text data-v-if-not="item.url">Library</span>
      </li>
      <li class="breadcrumb-item active" aria-current="page" data-v-breadcrumb-item>
        <span>Data</span>
      </li>
    </ol>
  </nav>
</div>`
});
	Vvveb.BlocksGroup['Breadcrumb'] = ["breadcrumb/breadcrumb-1"];
Vvveb.Blocks.add("checkout/cart-summary-1", {
    name: "Cart Summary 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/checkout/cart-summary-1-thumb.webp",
    html: `<div>
  <div class="cart-summary" data-v-component-cart>
    <div class="table-responsive mb-3">
      <table class="table cart-table align-middle border-bottom mb-0">
        <tbody>

          <tr data-v-cart-product>
            <td class="text-center">
              <a href="#40" data-v-cart-product-url>
                <img src="demo/img/product.webp" alt="Product name" loading="lazy" class="img-rounded" data-v-cart-product-image width=50>
              </a>
            </td>
            <td class="">
              <a href="#40" class="d-block" data-v-cart-product-url>
                <span data-v-cart-product-name>Product name</span>
              </a>

              <div class="option" data-v-if="product.option">
                <div class="" data-v-product-option>
                  <span data-v-product-option-option>Color</span>: <span data-v-product-option-name>Red</span>
                </div>
                <div class="" data-v-product-option>
                  <span data-v-product-option-option>Size</span>: <span data-v-product-option-name>XL</span>
                </div>
                <div class="" data-v-product-option>
                  <span data-v-product-option-option>Material</span>: <span data-v-product-option-name>Wool</span>
                </div>
              </div>

              <div class="subscription" data-v-if="product.subscription">
                <span>Subscription plan</span>:
                <span data-v-cart-product-subscription_name>Subscription plan</span>
              </div>
            </td>
            <td class="text-end">
              <span class="text-muted small">
                <span data-v-cart-product-quantity>1</span>
                <span class="text-muted">x</span>
                <span data-v-cart-product-price_tax_formatted>$123.20</span>
              </span>
            </td>

          </tr>
          <tr data-v-cart-product>
            <td class="text-center">
              <a href="#40" data-v-cart-product-url>
                <img src="demo/img/product.webp" alt="Product name" loading="lazy" class="img-rounded" data-v-cart-product-image width=50>
              </a>
            </td>
            <td class="">
              <a href="#40" class="d-block" data-v-cart-product-url data-v-cart-product-name>
                Product name
              </a>
            </td>
            <td class="text-end">
              <span class="small">
                <span data-v-cart-product-quantity>1</span>
                <span class="text-muted">x</span>
                <span data-v-cart-product-price_tax_formatted>$123.20</span>
              </span>
            </td>

          </tr>
        </tbody>

      </table>
    </div>

    <div class="p-3 pt-0" data-v-if="cart.total_items">

      <details>
        <summary class="text-end">
          <span>Total:</span>
          <span class="fw-semibold" data-v-cart-total_formatted>$0</span>
        </summary>

        <div class="table-responsive mb-2" data-v-cart-totals>
          <table class="table mb-0 cart-table cart-total" cellspacing="0">
            <tfoot>
              <tr data-v-cart-total>
                <td colspan="5" class="text-end">
                  <small data-v-cart-total-title>Sub-Total</small>:
                </td>
                <td class="text-end">
                  <span data-v-cart-total-text data-v-if="total.text"> - </span>
                  <span data-v-cart-total-value_formatted data-v-if="total.value != 0">$101.00</span>
                </td>
              </tr>
              <tr data-v-cart-total>
                <td colspan="5" class="text-end">
                  <small>Eco Tax (2.00):</small>
                </td>
                <td class="text-end">$2.00</td>
              </tr>
              <tr data-v-cart-total>
                <td colspan="5" class="text-end">
                  <small>VAT (19%):</small>
                </td>
                <td class="text-end">$20.20</td>
              </tr>
              <tr data-v-cart-total>
                <td colspan="5" class="text-end">
                  <small>Total:</small>
                </td>
                <td class="text-end">$123.20</td>
              </tr>
              <tr>
                <td colspan="5" class="text-end">Total:</td>
                <td class="text-end" data-v-cart-total_formatted>$0</td>
              </tr>
            </tfoot>

          </table>
        </div>
      </details>


    </div>

    <div class="list-group mb-3" data-v-cart-coupons>
      <div class="list-group-item" data-v-cart-coupon>
        <div class="small" data-v-cart-coupon-name>-10% Discount</div>
        <span class="badge bg-success-subtle text-body me-2 code" data-v-cart-coupon-code>discount10</span>
        <button class="btn btn-remove btn-sm btn-remove-coupon float-end" name="removeCoupon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M10 10l4 4m0 -4l-4 4" />
          </svg>
        </button>
      </div>
      <div class="list-group-item" data-v-cart-coupon>
        <div class="small" data-v-cart-coupon-name>Free shipping</div>
        <span class="badge bg-success-subtle text-body me-2 code" data-v-cart-coupon-code>freeship</span>
        <button class="btn btn-remove btn-sm btn-remove-coupon float-end" name="removeCoupon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M10 10l4 4m0 -4l-4 4" />
          </svg>
        </button>
      </div>
    </div>

    <div class="notifications" data-v-notifications>

      <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error data-v-type="coupon">

        <div class="icon align-middle me-2">
          <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
            <path d="M12 9v4" />
            <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
            <path d="M12 16h.01" />
          </svg>
        </div>

        <div class="flex-grow-1 align-self-center small">
          <div>
            <div data-v-notification-text>
              This is a placeholder for a notification message.
            </div>
          </div>
        </div>


        <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">
            <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
          </span>
        </button>
      </div>

      <div class="alert alert-success d-flex alert-dismissable" role="alert" data-v-notification-success data-v-type="coupon">

        <div class="icon align-middle me-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M9 12l2 2l4 -4" />
          </svg>
        </div>

        <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
          This is a placeholder for a success message.
        </div>

        <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">
            <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
          </span>
        </button>
      </div>

      <div class="alert alert-primary d-flex alert-dismissable" role="alert" data-v-notification-info data-v-type="coupon">

        <div class="icon align-middle me-2">
          <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 9h.01" />
            <path d="M11 12h1v4h1" />
          </svg>
        </div>

        <div class="flex-grow-1 align-self-center" data-v-notification-text>
          This is a placeholder for a info message.
        </div>

        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">
            <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
          </span>
        </button>
      </div>

    </div>

    <div class="input-group mb-3">
      <input type="text" name="coupon" class="form-control" id="coupon_code" placeholder="Coupon Code" aria-label="Coupon Code">
      <button class="btn btn-outline-primary btn-sm btn-coupon px-4 shadow-none border" type="button">

        <span class="loading d-none">
          <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
          </span>
          <span>Applying </span>...
        </span>

        <span class="button-text">
          Apply <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </span>

      </button>
    </div>

  </div>

</div>`
});Vvveb.Blocks.add("checkout/payment-1", {
    name: "Payment 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/checkout/payment-1-thumb.webp",
    html: `<div>
  <div data-v-checkout="true" data-v-component-checkout-payment>
    <div data-v-if="this.hasPayment">
      <h6>Payment</h6>
      <div role="tablist" class="accordion mb-3">

        <div class="accordion-item" data-v-payment>
          <div class="accordion-header" role="tab">
            <label class="form-check-label accordion-button collapsed" aria-expanded="false" role="button">
              <input class="form-check-input me-2" type="radio" name="payment_method" value="default" data-v-payment-key required>
              <span data-v-payment-title>Default payment</span>
            </label>
          </div>

          <div class="collapse" role="tabpanel">
            <div class="accordion-body">
              <div data-v-payment-description>Credit card description</div>
              <div data-v-payment-render></div>
            </div>
          </div>
        </div>
        <div class="accordion-item" data-v-payment>
          <div class="accordion-header" role="tab">
            <label class="form-check-label accordion-button collapsed" aria-expanded="false" role="button">
              <input class="form-check-input me-2" type="radio" name="payment_method" value="default" data-v-payment-key required>
              <span data-v-payment-title>Credit card payment</span>
            </label>
          </div>

          <div class="collapse" role="tabpanel">
            <div class="accordion-body">
              <div data-v-payment-description>Credit card description</div>
              <div data-v-payment-render></div>
            </div>
          </div>
        </div>


        <div class="alert alert-warning d-flex alert-dismissable" role="alert" data-v-if="count < 1">
          <div class="icon align-middle me-2">
            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
              <path d="M12 9v4" />
              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
              <path d="M12 16h.01" />
            </svg>
          </div>
          <div class="flex-grow-1 align-self-center small">
            No payment methods enabled!
          </div>

          <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">
              <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
            </span>
          </button>

        </div>
      </div>
    </div>
  </div>

</div>`
});Vvveb.Blocks.add("checkout/shipping-1", {
    name: "Shipping 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/checkout/shipping-1-thumb.webp",
    html: `<div>
  <div data-v-checkout="true" data-v-component-checkout-shipping>
    <div data-v-if="this.hasShipping">
      <h6>Shipping</h6>
      <div role="tablist" class="accordion mb-3">

        <div class="accordion-item" data-v-shipping>
          <div class="accordion-header" role="tab">
            <label class="form-check-label accordion-button collapsed" aria-expanded="false" role="button">
              <input class="form-check-input me-2" type="radio" name="shipping_method" value="default" data-v-shipping-key required>
              <span data-v-shipping-title>Default shipping</span>
            </label>
          </div>

          <div class="collapse" role="tabpanel">
            <div class="accordion-body">
              <span data-v-shipping-description>Shipping description</span>
              <div data-v-shipping-render></div>
            </div>
          </div>
        </div>

        <div class="accordion-item" data-v-shipping>
          <div class="accordion-header" role="tab">
            <label class="form-check-label accordion-button collapsed" aria-expanded="false" role="button">
              <input class="form-check-input me-2" type="radio" name="shipping_method" value="default" data-v-shipping-key required>
              <span data-v-shipping-title>Fast shipping</span>
            </label>
          </div>

          <div class="collapse" role="tabpanel">
            <div class="accordion-body">
              <p>
                <span data-v-shipping-description>Fast shipping description</span>
              </p>
              <div data-v-shipping-render></div>
            </div>
          </div>
        </div>

        <div class="alert alert-warning d-flex alert-dismissable" role="alert" data-v-if="count < 1">
          <div class="icon align-middle me-2">
            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
              <path d="M12 9v4" />
              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
              <path d="M12 16h.01" />
            </svg>
          </div>
          <div class="flex-grow-1 align-self-center small">
            No shipping methods enabled!
          </div>

          <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">
              <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
            </span>
          </button>

        </div>

      </div>
    </div>
  </div>

</div>`
});
	Vvveb.BlocksGroup['Checkout'] = ["checkout/cart-summary-1","checkout/payment-1","checkout/shipping-1"];
Vvveb.Blocks.add("comments/comments-1", {
    name: "Comments 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/comments/comments-1-thumb.webp",
    html: `<div>
  <div id="comments" class="post-comments mt-5" data-v-component-comments>
    <h4 class="comments-title">Comments</h4>

    <ol class="comment-list list-unstyled mb-3" data-v-if="count > 0">
      <li class="comment mb-4" data-v-comment>

        <div class="comment-wrap d-flex ">

          <figure class="author-avatar me-2">
            <img src="demo/img/sections/team/1.webp" alt="user" width="70" class="img-fluid d-block rounded-circle border p-1 avatar" data-v-comment-avatar_url loading="lazy" data-v-if="comment.avatar_url">
            <div class="empty rounded-circle border" data-v-if-not="comment.avatar_url"></div>
          </figure>

          <div class="comment-author">

            <div class="comment-author">
              <a rel="external nofollow ugc" data-v-if="comment.url">
                <span data-v-comment-author>Maria Williams</span>
              </a>
              <span data-v-comment-author data-v-if-not="comment.url">Maria Williams</span>
            </div>

            <div class="comment-meta small text-muted">
              <span data-v-comment-created_at data-filter-friendly_date>Jan 29, 2018</span>
            </div>

          </div>

        </div>


        <div class="my-2" data-v-comment-content>
          <p>Consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Su spendisse sit amet laoreet neque. Fusce sagittis suscipit sem a consequat. Proin nec interdum sem. Quisque in porttitor magna, a imperdiet est. Donec accumsan justo nulla, sit amet varius urna laoreet vitae. Maecenas feugiat fringilla metus. </p>
        </div>

        <div class="alert alert-light my-2 small" data-v-if="comment.status = 0">
          <div>Your comment is awaiting moderation.</div>
          <div>This is a preview, your comment will be visible after it has been approved.</div>
        </div>

        <div class="reply">
          <a href="#comment-form" class="reply-btn" data-comment_id="{$comment.comment_id}" data-comment_author="{$comment.author}" data-v-vvveb-action="replyTo">Reply <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 14l-4 -4l4 -4" />
              <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
          </a>
        </div>

      </li>
      <li class="comment mb-4 level-2" data-v-comment>

        <div class="comment-wrap d-flex ">

          <figure class="author-avatar me-2">
            <img src="demo/img/sections/team/1.webp" alt="user" width="70" class="img-fluid d-block rounded-circle border p-1 avatar" data-v-comment-avatar_url loading="lazy" data-v-if="comment.avatar_url">
            <div class="empty rounded-circle border" data-v-if-not="comment.avatar_url"></div>
          </figure>

          <div class="comment-author">

            <div class="comment-author">
              <span data-v-comment-author data-v-if-not="comment.url">John doe</span>
            </div>

            <div class="comment-meta small text-muted">
              <span data-v-comment-created_at data-filter-friendly_date>Jan 29, 2018</span>
            </div>

          </div>

        </div>


        <div data-v-comment-content>
          <p>This is a reply comment.</p>
        </div>

        <div class="alert alert-light my-2 small" data-v-if="comment.status = 0">
          <div>Your comment is awaiting moderation.</div>
          <div>This is a preview, your comment will be visible after it has been approved.</div>
        </div>

        <div class="reply">
          <a href="#comment-form" class="reply-btn" data-comment_id="{$comment.comment_id}" data-comment_author="{$comment.author}" data-v-vvveb-action="replyTo">Reply <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 14l-4 -4l4 -4" />
              <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
          </a>
        </div>

      </li>
      <li class="comment mb-4" data-v-comment>

        <div class="comment-wrap d-flex ">

          <figure class="author-avatar me-2">
            <img src="demo/img/sections/team/1.webp" alt="user" width="70" class="img-fluid d-block rounded-circle border p-1 avatar" data-v-comment-avatar_url loading="lazy" data-v-if="comment.avatar_url">
            <div class="empty rounded-circle border" data-v-if-not="comment.avatar_url"></div>
          </figure>

          <div class="comment-author">

            <div class="comment-author">
              <a rel="external nofollow ugc" data-v-if="comment.url">
                <span data-v-comment-author>Maria Williams</span>
              </a>
              <span data-v-comment-author data-v-if-not="comment.url">Maria Williams</span>
            </div>

            <div class="comment-meta small text-muted">
              <span data-v-comment-created_at data-filter-friendly_date>Jan 29, 2018</span>
            </div>

          </div>

        </div>

        <div data-v-comment-content>
          <p>Consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Su spendisse sit amet laoreet neque. Fusce sagittis suscipit sem a consequat. Proin nec interdum sem. Quisque in porttitor magna, a imperdiet est. Donec accumsan justo nulla, sit amet varius urna laoreet vitae. Maecenas feugiat fringilla metus. </p>
        </div>

        <div class="alert alert-light my-2 small" data-v-if="comment.status = 0">
          <div>Your comment is awaiting moderation.</div>
          <div>This is a preview, your comment will be visible after it has been approved.</div>
        </div>

        <div class="reply">
          <a href="#comment-form" class="reply-btn" data-comment_id="{$comment.comment_id}" data-comment_author="{$comment.author}" data-v-vvveb-action="replyTo">Reply <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 14l-4 -4l4 -4" />
              <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
          </a>
        </div>

      </li>
    </ol>

    <div class="comments-form" data-v-if="this.default_comment_status">

      <div class="notifications" data-v-notifications>

        <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

          <div class="icon align-middle me-2">
            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
              <path d="M12 9v4" />
              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
              <path d="M12 16h.01" />
            </svg>
          </div>

          <div class="flex-grow-1 align-self-center small">
            <div>
              <div data-v-notification-text>
                This is a placeholder for a notification message.
              </div>
            </div>
          </div>


          <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">
              <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
            </span>
          </button>
        </div>

        <div class="alert alert-success d-flex alert-dismissable" role="alert" data-v-notification-success>

          <div class="icon align-middle me-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M9 12l2 2l4 -4" />
            </svg>
          </div>

          <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
            This is a placeholder for a success message.
          </div>

          <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">
              <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
            </span>
          </button>
        </div>

        <div class="alert alert-primary d-flex alert-dismissable" role="alert" data-v-notification-info>

          <div class="icon align-middle me-2">
            <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M12 9h.01" />
              <path d="M11 12h1v4h1" />
            </svg>
          </div>

          <div class="flex-grow-1 align-self-center" data-v-notification-text>
            This is a placeholder for a info message.
          </div>

          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">
              <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
            </span>
          </button>
        </div>

      </div>

      <h5>Leave a reply</h5>

      <div class="replyto" style="display:none">
        <h3>Reply to <b data-comment-author>author</b>
        </h3>
        <a href="#comment-form" class="reply-btn d-inline-block" data-comment_id="0" data-v-vvveb-action="replyTo">
          Cancel reply
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
            <path d="M9 9l6 6m0 -6l-6 6" />
          </svg>
        </a>
      </div>


      <div class="loggedin mb-3" data-v-if="this.global.user_id">
        <!--
			<a href="#comment-form" class="reply-btn d-inline-block" data-comment_id="0" data-v-vvveb-action="replyTo">
			Log out
			<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" /> <path d="M9 9l6 6m0 -6l-6 6" /></svg></a>
			-->

        <form action method="post" enctype="multipart/form-data" data-v-url="user/login/index" data-selector=".post-comments">

          <span>Logged in as <b data-v-global-user.display_name>author</b>
          </span>

          <input type="hidden" name="logout">

          <button type="submit" value="logout" class="btn link-primary">

            <span class="loading d-none">
              <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
              </span>
              <span>Loading ...</span>...
            </span>

            <span class="button-text">
              Logout <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M9 12h12l-3 -3" />
                <path d="M18 15l3 -3" />
              </svg>
            </span>

          </button>
        </form>

      </div>


      <div class="alert alert-warning d-flex alert-dismissable my-3" role="alert" data-v-if-not="this.anonymous_comments">

        <div class="icon align-middle me-2">
          <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </div>

        <div class="flex-grow-1 align-self-center small">
          <div>
            <div data-v-notification-text>
              <span>
                <a href="" data-v-url="user/login/index">Login</a> first to post comments
              </span>
            </div>
          </div>
        </div>

      </div>


      <form id="comment-form" method="post" action="" data-v-vvveb-action="addComment" data-v-vvveb-on="submit" data-v-if="this.global.user_id || this.anonymous_comments">

        <input type="hidden" name="post_id" data-v-post-post_id>
        <input type="hidden" name="slug" data-v-post-slug>
        <input type="hidden" name="parent_id" value="0">
        <input type="hidden" name="csrf" data-v-csrf>

        <!-- antibot do not fill -->
        <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">


        <div data-v-if-not="this.global.user_id">
          <div class="mb-3">
            <label for="author" class="form-label">Name</label>
            <input type="text" placeholder="Name" name="author" id="author" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" placeholder="Email" name="email" id="email" class="form-control" required>
          </div>
        </div>

        <div class="mb-3">
          <textarea name="content" rows="5" cols="4" placeholder="Comment" class="form-control" required></textarea>
        </div>

        <!-- if these hidden inputs are filled then ignore robots -->

        <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

        <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">

        <button type="submit" value="comment" class="btn btn-primary btn-submit">
          <span class="loading d-none">
            <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
            <span>Posting</span>...
          </span>

          <span class="button-text">
            <span>Post comment</span>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ms-1" aria-hidden="true">
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </span>
        </button>

      </form>
    </div>

    <div class="alert alert-light d-flex alert-dismissable my-3" role="alert" data-v-if-not="this.default_comment_status">

      <div class="icon align-middle me-2">
        <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
          <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center small">
        <div>
          <div data-v-notification-text>
            <span>Comments are closed</span>
          </div>
        </div>
      </div>

    </div>

  </div>

</div>`
});
	Vvveb.BlocksGroup['Comments'] = ["comments/comments-1"];
Vvveb.Blocks.add("contact-form/contact-form-1", {
    name: "Contact Form 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/contact-form/contact-form-1-thumb.webp",
    html: `<div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-form-1">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

      <div class="icon align-middle me-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M12 9v4" />
          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
          <path d="M12 16h.01" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex alert-dismissable" role="alert" data-v-notification-success>

      <div class="icon align-middle me-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable" role="alert" data-v-notification-info>

      <div class="icon align-middle me-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 9h.01" />
          <path d="M11 12h1v4h1" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" name="first_name" required>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" name="last_name" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="email" class="form-control" placeholder="Email" name="email" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="text" class="form-control" placeholder="Subject" name="subject" required>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <textarea class="form-control" name="message" rows="3" placeholder="How can we help?" required></textarea>
      </div>
    </div>


    <!-- if these hidden inputs are filled then ignore, robots -->

    <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

    <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

    <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


    <div class="row mt-4">
      <div class="col">
        <button type="submit" class="btn btn-primary">Submit <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ms-1" aria-hidden="true">
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </button>
      </div>
    </div>
  </form>
</div>`
});Vvveb.Blocks.add("contact-form/contact-form-appointment", {
    name: "Contact Form Appointment",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/contact-form/contact-form-appointment-thumb.webp",
    html: `<div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-confirm-email="true" data-v-name="contact-form-appointment">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

      <div class="icon align-middle me-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M12 9v4" />
          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
          <path d="M12 16h.01" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex alert-dismissable" role="alert" data-v-notification-success>

      <div class="icon align-middle me-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable" role="alert" data-v-notification-info>

      <div class="icon align-middle me-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 9h.01" />
          <path d="M11 12h1v4h1" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" name="first_name" required>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" name="last_name" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="email" class="form-control" placeholder="Email" name="email" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="datetime-local" class="form-control" placeholder="Date" name="datetime" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <textarea class="form-control" name="message" rows="3" placeholder="Message"></textarea>
      </div>
    </div>


    <!-- if these hidden inputs are filled then ignore, robots -->

    <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

    <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

    <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


    <div class="row mt-4">
      <div class="col">
        <button type="submit" class="btn btn-primary">Make appointment <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ms-1" aria-hidden="true">
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </button>
      </div>
    </div>
  </form>
</div>`
});Vvveb.Blocks.add("contact-form/contact-form-reservation", {
    name: "Contact Form Reservation",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/contact-form/contact-form-reservation-thumb.webp",
    html: `<div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-confirm-email="true" data-v-name="contact-form-appointment">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

      <div class="icon align-middle me-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M12 9v4" />
          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
          <path d="M12 16h.01" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex alert-dismissable" role="alert" data-v-notification-success>

      <div class="icon align-middle me-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable" role="alert" data-v-notification-info>

      <div class="icon align-middle me-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 9h.01" />
          <path d="M11 12h1v4h1" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" name="first_name" required>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" name="last_name" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="email" class="form-control" placeholder="Email" name="email" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input name="start-date" class="form-control" placeholder="Start Date" type="datetime-local" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input name="end-date" class="form-control" placeholder="End Date" type="datetime-local" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <textarea class="form-control" name="message" rows="3" placeholder="Message"></textarea>
      </div>
    </div>


    <!-- if these hidden inputs are filled then ignore, robots -->

    <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

    <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

    <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


    <div class="row mt-4">
      <div class="col">
        <button type="submit" class="btn btn-primary">Make reservation <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ms-1" aria-hidden="true">
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </button>
      </div>
    </div>
  </form>
</div>`
});
	Vvveb.BlocksGroup['Contact Form'] = ["contact-form/contact-form-1","contact-form/contact-form-appointment","contact-form/contact-form-reservation"];
Vvveb.Blocks.add("login/login-1", {
    name: "Login 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/login/login-1-thumb.webp",
    html: `<div>
  <form action method="post" enctype="multipart/form-data" data-v-url="user/login/index" data-v-vvveb-action="login" data-v-vvveb-on="submit" class="login-form">

    <input type="hidden" name="csrf" data-v-csrf>

    <div class="login-form" data-v-if-not="component.user_id">

      <div class="mb-3">
        <input type="email" name="email" value placeholder=" " id="user-email" class="form-control label-over" data-v-user-email required>
        <label class="form-label" for="user-email">E-Mail Address</label>
      </div>

      <div class="mb-3">

        <div class="input-group">
          <input type="password" minlength="4" autocorrect="off" autocomplete="current-password" class="form-control label-over" placeholder=" " id="user-password" name="password" value="" aria-label="Password" required>
          <label class="form-label" for="user-password">Password</label>
          <button class="btn btn-sm px-3 border border-start-0" type="button" onclick="togglePasswordInput(this, 'user-password')">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
              <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
              <path d="M3 3l18 18" />
            </svg>
          </button>
        </div>
      </div>

      <button type="submit" value="Login" class="btn btn-primary py-2 btn-login">

        <span class="loading d-none">
          <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
          </span>
          <span>Authenticating</span>...
        </span>

        <span class="button-text">
          Login <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ms-2" aria-hidden="true">
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </span>

      </button>
      <div class="my-2"></div>
      <a href="/user/reset" data-v-url="user/reset/index" class="my-2">Forgot your password?</a>

      <div class="my-2"></div>
      <!--
		<a>
			<span class="btn btn-secondary btn-sm">
				  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945" /></svg>
			</span>
		</a>
		<a>
			<span class="btn btn-secondary btn-sm">
			  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
			</span>
		</a> -->
      <hr class="text-secondary my-3">
      <span>Don’t have an account?</span>
      <br>
      <a href="/user/signup" data-v-url="user/signup/index">Register Account</a>
      <span class="text-body-tertiary">|</span>
      <a href="/user/login" data-v-url="user/login/index">Login</a>

    </div>


    <div class="user-form" data-v-if="component.user_id">
      <div class="text-center" data-v-if="user.first_name">Welcome <b data-v-user-first_name data-filter-capitalize>John</b>
        <b data-v-user-last_name data-filter-capitalize>Doe</b>
      </div>
      <div class="text-center" data-v-if-not="user.first_name">Welcome <b data-v-user-username>johndoe</b>
      </div>

      <div class="dropdown-divider opacity-50 my-3"></div>

      <ul class="m-3 list-unstyled">
        <li>
          <a href="user" data-v-url="user/index">
            <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <span>My account</span>
          </a>
        </li>
        <li>
          <a href="user/comments" data-v-url="user/comments/index">
            <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
              <path d="M8 9h8" />
              <path d="M8 13h6" />
              <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
            </svg>
            <span>Comments</span>
          </a>
        </li>
        <li>
          <a href="user/orders" data-v-url="user/orders/index">
            <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
              <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
              <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
            </svg>
            <span>Orders</span>
          </a>
        </li>
        <li>
          <a href="user/downloads" data-v-url="user/downloads/index">
            <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
              <path d="M12.5 15.5l2 2" />
              <path d="M15 13l2 2" />
            </svg>
            <span>Downloads</span>
          </a>
        </li>
        <li>
          <a href="user/wishlist" data-v-url="user/wishlist/index">
            <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
            <span>Wishlist</span>
          </a>
        </li>
        <li>
          <a href="user/profile" data-v-url="user/profile/index">
            <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            </svg>
            <span>Profile</span>
          </a>
        </li>
      </ul>


      <input type="hidden" name="logout">

      <button type="submit" value="logout" class="btn btn-sm btn-primary">

        <span class="loading d-none">
          <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
          </span>
          <span>Loading ...</span>...
        </span>

        <span class="button-text">
          <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="m-1" aria-hidden="true">
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M9 12h12l-3 -3" />
            <path d="M18 15l3 -3" />
          </svg>
          <span>Log out</span>
          </a>
        </span>

      </button>
    </div>
  </form>

</div>`
});
	Vvveb.BlocksGroup['Login'] = ["login/login-1"];
Vvveb.Blocks.add("menu/menu-1", {
    name: "Menu 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/menu/menu-1-thumb.webp",
    html: `<div>
  <div data-v-component-menu="header" data-v-slug="main-menu">
    <ul class="navbar-nav" data-v-menu-items>
      <li class="nav-item dropdown position-static" data-v-menu-item data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text">

        <a class="nav-link dropdown-toggle" data-v-class-if-dropdown-toggle="category.children > 0" data-v-class-if-active="category.active" aria-expanded="false" data-v-menu-item-url>
          <span data-v-menu-item-name data-v-if-not="category.type = 'text'"></span>
          <span data-v-menu-item-content>
            <img src="/media/vvveb.svg" height="24" alt="" class="me-2">Mega menu
          </span>
        </a>

        <div class="dropdown-menu" data-v-menu-item-recursive>
          <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children > 0">
            <a class="dropdown-item" data-v-class-if-active="category.active && category.type != 'text'" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
              <span data-v-menu-item-name data-v-if-not="category.type = 'text'"></span>
              <span data-v-if="category.content" data-v-menu-item-content>
                <div class="row">
                  <div class="col-6 align-self-center">
                    <img src="demo/img/video-1.webp" alt="Post" width="250" loading="lazy" class="rounded img-fluid">
                  </div>
                  <div class="col-6">
                    <h4>Features</h4>
                    <p class="text-muted">Just a few mentions, but there is more</p>
                    <ul class="list-unstyled">
                      <li class="text-primary">Page builder</li>
                      <li class="text-primary">Mega menu</li>
                      <li class="text-primary">Multi language</li>
                      <li class="text-primary">Advanced SEO</li>
                      <li class="text-primary">Ecommerce</li>
                    </ul>
                  </div>
                </div>
              </span>
            </a>
          </div>
          <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children > 0">
            <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-class-if-active="category.active" data-v-menu-item-url>
              <span data-v-menu-item-name data-v-if-not="category.type = 'text'">Developer Documentation</span>
              <span data-v-menu-item-content></span>
            </a>
          </div>
        </div>
      </li>
      <li class="nav-item dropdown" data-v-menu-item>
        <a class="nav-link dropdown-toggle" href="https://blog.vvveb.com" data-v-menu-item-url>
          <span data-v-menu-item-name>Blog</span>
        </a>

        <div class="dropdown-menu" data-v-menu-item-recursive>
          <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children > 0">
            <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
              <span data-v-menu-item-name data-v-if-not="category.type = 'text'">User Documentation</span>
              <span data-v-menu-item-content></span>
            </a>
          </div>
          <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children > 0">
            <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
              <span data-v-menu-item-name data-v-if-not="category.type = 'text'">Developer Documentation</span>
              <span data-v-menu-item-content></span>
            </a>
          </div>
        </div>
      </li>
      <li class="nav-item" data-v-menu-item>
        <a class="nav-link" href="https://www.vvveb.com/page/contact" data-v-menu-item-url>
          <span data-v-menu-item-name>Contact</span>
        </a>
      </li>
      <li class="nav-item" data-v-menu-item>
        <a class="nav-link" href="https://www.vvveb.com" data-v-menu-item-url>
          <span data-v-menu-item-name>About us</span>
        </a>
      </li>

      <li class="nav-toggle">
        <!-- User Login Info -->
        <div class="nav-item dropdown">
          <a class="dropdown-toggle nav-link " href role="button" id="user-dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-v-url="user/index">
            <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>

            <span class="visually-hidden">User</span>
          </a>

          <div class="dropdown-menu dropdown-menu-end login-box user-box" aria-labelledby="user-dropdown">

            <div data-v-component-user>

              <div class="notifications" data-v-notifications>

                <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error data-v-type="login">

                  <div class="icon align-middle me-2">
                    <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
                      <path d="M12 9v4" />
                      <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
                      <path d="M12 16h.01" />
                    </svg>
                  </div>

                  <div class="flex-grow-1 align-self-center small">
                    <div>
                      <div data-v-notification-text>
                        This is a placeholder for a notification message.
                      </div>
                    </div>
                  </div>


                  <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">
                      <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
                    </span>
                  </button>
                </div>

                <div class="alert alert-success d-flex alert-dismissable" role="alert" data-v-notification-success data-v-type="login">

                  <div class="icon align-middle me-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                  </div>

                  <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
                    This is a placeholder for a success message.
                  </div>

                  <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">
                      <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
                    </span>
                  </button>
                </div>

                <div class="alert alert-primary d-flex alert-dismissable" role="alert" data-v-notification-info data-v-type="login">

                  <div class="icon align-middle me-2">
                    <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M12 9h.01" />
                      <path d="M11 12h1v4h1" />
                    </svg>
                  </div>

                  <div class="flex-grow-1 align-self-center" data-v-notification-text>
                    This is a placeholder for a info message.
                  </div>

                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">
                      <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
                    </span>
                  </button>
                </div>

              </div>

              <form action method="post" enctype="multipart/form-data" data-v-url="user/login/index" data-v-vvveb-action="login" data-v-vvveb-on="submit" class="login-form">

                <input type="hidden" name="csrf" data-v-csrf>

                <div class="login-form" data-v-if-not="component.user_id">

                  <div class="mb-3">
                    <input type="email" name="email" value placeholder=" " id="user-email" class="form-control label-over" data-v-user-email required>
                    <label class="form-label" for="user-email">E-Mail Address</label>
                  </div>

                  <div class="mb-3">

                    <div class="input-group">
                      <input type="password" minlength="4" autocorrect="off" autocomplete="current-password" class="form-control label-over" placeholder=" " id="user-password" name="password" value="" aria-label="Password" required>
                      <label class="form-label" for="user-password">Password</label>
                      <button class="btn btn-sm px-3 border border-start-0" type="button" onclick="togglePasswordInput(this, 'user-password')">
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                          <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                          <path d="M3 3l18 18" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button type="submit" value="Login" class="btn btn-primary py-2 btn-login w-100">

                    <span class="loading d-none">
                      <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                      </span>
                      <span>Authenticating</span>...
                    </span>

                    <span class="button-text">
                      Login <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ms-2" aria-hidden="true">
                        <path d="M5 12l14 0" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                      </svg>
                    </span>

                  </button>
                  <div class="my-2"></div>
                  <a href="/user/reset" data-v-url="user/reset/index" class="my-2">Forgot your password?</a>

                  <div class="my-2"></div>
                  <!--
		<a>
			<span class="btn btn-secondary btn-sm">
				  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945" /></svg>
			</span>
		</a>
		<a>
			<span class="btn btn-secondary btn-sm">
			  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
			</span>
		</a> -->
                  <hr class="text-secondary my-3">
                  <span>Don’t have an account?</span>
                  <br>
                  <a href="/user/signup" data-v-url="user/signup/index">Register Account</a>
                  <span class="text-body-tertiary">|</span>
                  <a href="/user/login" data-v-url="user/login/index">Login</a>

                </div>


                <div class="user-form" data-v-if="component.user_id">
                  <div class="text-center" data-v-if="user.first_name">Welcome <b data-v-user-first_name data-filter-capitalize>John</b>
                    <b data-v-user-last_name data-filter-capitalize>Doe</b>
                  </div>
                  <div class="text-center" data-v-if-not="user.first_name">Welcome <b data-v-user-username>johndoe</b>
                  </div>

                  <div class="dropdown-divider opacity-50 my-3"></div>

                  <ul class="m-3 list-unstyled">
                    <li>
                      <a href="user" data-v-url="user/index">
                        <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        <span>My account</span>
                      </a>
                    </li>
                    <li>
                      <a href="user/comments" data-v-url="user/comments/index">
                        <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                          <path d="M8 9h8" />
                          <path d="M8 13h6" />
                          <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" />
                        </svg>
                        <span>Comments</span>
                      </a>
                    </li>
                    <li>
                      <a href="user/orders" data-v-url="user/orders/index">
                        <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                          <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                          <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                        </svg>
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="user/downloads" data-v-url="user/downloads/index">
                        <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                          <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
                          <path d="M12.5 15.5l2 2" />
                          <path d="M15 13l2 2" />
                        </svg>
                        <span>Downloads</span>
                      </a>
                    </li>
                    <li>
                      <a href="user/wishlist" data-v-url="user/wishlist/index">
                        <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                          <path d="M7 11l5 5l5 -5" />
                          <path d="M12 4l0 12" />
                        </svg>
                        <span>Wishlist</span>
                      </a>
                    </li>
                    <li>
                      <a href="user/profile" data-v-url="user/profile/index">
                        <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted m-1" aria-hidden="true">
                          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        </svg>
                        <span>Profile</span>
                      </a>
                    </li>
                  </ul>


                  <input type="hidden" name="logout">

                  <button type="submit" value="logout" class="btn btn-sm btn-primary w-100">

                    <span class="loading d-none">
                      <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                      </span>
                      <span>Loading ...</span>...
                    </span>

                    <span class="button-text">
                      <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="m-1" aria-hidden="true">
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M9 12h12l-3 -3" />
                        <path d="M18 15l3 -3" />
                      </svg>
                      <span>Log out</span>
                      </a>
                    </span>

                  </button>
                </div>
              </form>


            </div>
          </div>
        </div>

      </li>


      <li class="nav-toggle">
        <!-- Cart Area -->
        <div class="dropdown mini-cart" data-v-component-cart>

          <a class="dropdown-toggle cart-info nav-link " href role="button" id="cart-dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-v-url="cart/cart/index">
            <!-- <img src="demo/img/bag.svg" width="20" alt> -->
            <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
              <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
            </svg>
            <span class="visually-hidden">Cart</span>
            <strong class="badge bg-primary-subtle text-body" data-v-cart-total_items data-v-if="cart.total_items > 0"></strong>
          </a>


          <div class="dropdown-menu dropdown-menu-end cart-box" aria-labelledby="cart-dropdown">


            <div class="table-responsive flex-grow-1">
              <table class="table cart-table align-middle mb-0">
                <tbody>


                  <tr data-v-cart-product>
                    <td class="text-center">
                      <a href="#40" data-v-cart-product-url>
                        <img src="demo/img/product.webp" alt="Product name" class="img-rounded" loading="lazy" data-v-cart-product-image width=50>
                      </a>
                    </td>
                    <td class="text-start small">
                      <a href="#40" class="d-block" data-v-cart-product-url>
                        <span data-v-cart-product-name>Product name</span>
                      </a>

                      <span data-v-cart-product-quantity>1</span>
                      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted" aria-hidden="true">
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                      <span data-v-cart-product-price_tax_formatted>$123.20</span>

                      <div class="option" data-v-if="product.option">
                        <div class="" data-v-product-option>
                          <span data-v-product-option-option>Color</span>: <span data-v-product-option-name>Red</span>
                          <span data-v-if="value.price > 0">(<span data-v-product-option-price></span>)</span>
                        </div>
                        <div class="" data-v-product-option>
                          <span data-v-product-option-option>Size</span>: <span data-v-product-option-name>XL</span>
                          <span data-v-if="value.price > 0">(<span data-v-product-option-price></span>)</span>
                        </div>
                        <div class="" data-v-product-option>
                          <span data-v-product-option-option>Material</span>: <span data-v-product-option-name>Wool</span>
                          <span data-v-if="value.price > 0">(<span data-v-product-option-price></span>)</span>
                        </div>
                      </div>

                      <div class="subscription" data-v-if="product.subscription">
                        <span>Subscription plan</span>:
                        <span data-v-cart-product-subscription_name>Subscription plan</span>
                      </div>
                    </td>
                    <td class="text-end">
                      <a class="btn btn-remove btn-sm" data-v-vvveb-action="removeFromCart" data-v-cart-product-remove-url>
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <path d="M18 6l-12 12" />
                          <path d="M6 6l12 12" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr data-v-cart-product>
                    <td class="text-center">
                      <a href="#40" data-v-cart-product-url>
                        <img src="demo/img/product.webp" alt="Product name" class="img-rounded" loading="lazy" data-v-cart-product-image width=50>
                      </a>
                    </td>
                    <td class="text-start">
                      <a href="#40" class="d-block" data-v-cart-product-url data-v-cart-product-name>
                        Product name
                      </a>

                      <span data-v-cart-product-quantity>1</span>
                      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted" aria-hidden="true">
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                      <span data-v-cart-product-price_tax_formatted>$123.20</span>


                    </td>
                    <td class="text-end">
                      <a class="btn btn-outline-secondary btn-sm border-0" data-v-vvveb-action="removeFromCart" data-v-cart-product-remove-url>
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                          <path d="M18 6l-12 12" />
                          <path d="M6 6l12 12" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                  <tr data-v-if-not="cart.total_items">
                    <td colspan="100">
                      <div class="bg-body-tertiary p-4 mt-2 d-flex">
                        <div class="text-center opacity-75 pe-4">
                          <!-- <img src="demo/img/bag.svg" width="20" alt> -->
                          <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary" aria-hidden="true">
                            <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                          </svg>
                        </div>
                        <div class="">
                          <h6 class="my-2 p-0">Empty cart</h6>
                          <span class="text-muted">No products added yet!</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>

            <div class="p-3 pt-0 border-top" data-v-if="cart.total_items">
              <div class="table-responsive mb-2" data-v-cart-totals>
                <table class="table mb-0 cart-table cart-total" cellspacing="0">
                  <tfoot>
                    <tr data-v-cart-total>
                      <td colspan="5" class="text-end">
                        <small data-v-cart-total-title>Sub-Total</small>:
                      </td>
                      <td class="text-end">
                        <span data-v-cart-total-text data-v-if="total.text"> - </span>
                        <span data-v-cart-total-value_formatted data-v-if="total.value != 0">$101.00</span>
                      </td>
                    </tr>
                    <tr data-v-cart-total>
                      <td colspan="5" class="text-end">
                        <small>Eco Tax (2.00):</small>
                      </td>
                      <td class="text-end">$2.00</td>
                    </tr>
                    <tr data-v-cart-total>
                      <td colspan="5" class="text-end">
                        <small>VAT (19%):</small>
                      </td>
                      <td class="text-end">$20.20</td>
                    </tr>
                    <tr data-v-cart-total>
                      <td colspan="5" class="text-end">
                        <small>Total:</small>
                      </td>
                      <td class="text-end">$123.20</td>
                    </tr>
                    <tr>
                      <td colspan="5" class="text-end">Total:</td>
                      <td class="text-end" data-v-cart-total_formatted>$0</td>
                    </tr>
                  </tfoot>

                </table>
              </div>

            </div>

            <div class="row mt-2 g-2 px-3 pb-2" data-v-if="cart.total_items">
              <div class="col-6">
                <a href="" class="btn btn-light btn-sm border w-100" data-v-url="cart/cart/index" data-url>
                  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                  <span>View cart</span>
                </a>
              </div>
              <div class="col-6">
                <a href="" class="btn btn-primary btn-sm w-100" data-v-url="checkout/checkout/index">
                  <span>Checkout</span>
                  <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </a>
              </div>
            </div>



          </div>

        </div>

      </li>

    </ul>


    <button class="btn btn-outline-secondary btn-sm border-0" type="submit" title="Search" data-bs-toggle="modal" data-bs-target="#searchModal">
      <div class="la-flip-horizontal">
        <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </div>
    </button>


    <!--
	<div class="search-area toggle-hover">
		<form action="/search" method="get" data-v-action="/search">
			<input type="hidden" name="route" value="search">
			<div class="input-group">
				<input type="search" name="search" class="form-control" id="headerSearch" placeholder="Type for search" data-v-vvveb-action="search" data-v-vvveb-on="keyup">
				<button class="btn border-0" type="submit" title="Search">
					<div class="la-flip-horizontal">
						<svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /> <path d="M21 21l-6 -6" /></svg>
					</div>
				</button>
			</div>			  
		</form>
	</div>
-->
  </div>

</div>`
});
	Vvveb.BlocksGroup['Menu'] = ["menu/menu-1"];
Vvveb.Blocks.add("pagination/pagination-1", {
    name: "Pagination 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/pagination/pagination-1-thumb.webp",
    html: `<div>
  <div data-pagination data-v-parent-component="posts" data-v-parent-index="0" data-v-parameters='{}'>

    <nav data-v-if="pagecount > 1">
      <ul class="pagination pagination-sm justify-content-center">

        <!--
			<li class="page-item pager-first" data-first>
				<a class="page-link" title="First page" data-page-url data-v-if="current_page > 1">
					<span aria-hidden="true" ><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 7l-5 5l5 5" /> <path d="M17 7l-5 5l5 5" /></svg></span>
					<span class="sr-only">First</span>
				</a>
			</li>
			-->

        <li class="page-item pager-prev" data-prev>

          <a class="page-link" aria-label="Previous" title="Previous page" data-page-url data-scroll="start" data-v-if="current_page > 1">
            <!-- <svg width="16" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l14 0" /> <path d="M5 12l6 6" /> <path d="M5 12l6 -6" /></svg> -->
            <span aria-hidden="true">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12l14 0" />
                <path d="M5 12l6 6" />
                <path d="M5 12l6 -6" />
              </svg>
            </span>
            <!-- <span>Newer Posts</span> -->
          </a>

        </li>


        <li class="page-item" data-page>
          <a class="page-link" data-page-no data-page-url data-scroll="start">1</a>
        </li>
        <li class="page-item" data-page>
          <a class="page-link" data-page-no data-page-url data-scroll="start">2</a>
        </li>
        <li class="page-item" data-page>
          <a class="page-link" data-page-no data-page-url data-scroll="start">3</a>
        </li>
        <li class="page-item" data-page>
          <a class="page-link" data-page-no data-page-url data-scroll="start">4</a>
        </li>
        <li class="page-item" data-page>
          <a class="page-link" data-page-no data-page-url data-scroll="start">5</a>
        </li>

        <li class="page-item pager-next" data-next>
          <a class="page-link" aria-label="Next" title="Next page" data-page-url data-scroll="start" data-v-if="current_page < pagecount">
            <!-- <span>Older Posts</span> -->
            <!-- <svg width="16" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l14 0" /> <path d="M13 18l6 -6" /> <path d="M13 6l6 6" /></svg> -->
            <span aria-hidden="true">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </span>
          </a>
        </li>

        <!--
			<li class="page-item pager-last" data-last>
				<a class="page-link" title="Last page" data-page-url data-v-if="current_page < pagecount">
				<span aria-hidden="true" ><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7l5 5l-5 5" /> <path d="M13 7l5 5l-5 5" /></svg></span>
					<span class="sr-only">Last</span>
				</a>
			</li>
			-->

      </ul>
    </nav>
  </div>


</div>`
});
	Vvveb.BlocksGroup['Pagination'] = ["pagination/pagination-1"];
Vvveb.Blocks.add("post/post-1", {
    name: "Post 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/post/post-1-thumb.webp",
    html: `<div data-v-component-post>
  <div class="mb-2">

    <article class="card post ">
      <div class="card-img-top" data-v-if="post.image">
        <img src="demo/img/video-1.webp" alt="Post cover image" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
      </div>
      <!-- Post Title -->
      <a data-v-post-url>
        <div class="card-body p-4">
          <div class="post-title card-title">
            <h3 class="h4" data-v-post-name>
              How to launch your online store in a weekend
            </h3>
          </div>


          <ul class="post-meta text-start mb-3 small">

            <li class="post-author meta-wrapper">
              <span class="meta-icon">
                <span class="screen-reader-text">Post author</span>
                <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </span>
              <span class="meta-text">
                By <a href="content/post.html" data-v-post-author-url>
                  <span data-v-post-display_name>admin</span>
                </a>
              </span>
            </li>

            <li class="post-date meta-wrapper">
              <span class="meta-icon">
                <span class="screen-reader-text">Post date</span>

                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                  <path d="M11 15h1" />
                  <path d="M12 15v3" />
                </svg>
              </span>
              <span class="meta-text">
                <a href="content/post.html" data-v-post-url>
                  <!-- <span data-v-post-created_at data-filter-friendly_date>December 31, 2020</span> -->
                  <span data-v-post-created_at_formatted>December 31, 2020</span>
                </a>
              </span>
            </li>
            <!--
						<li class="post-comment-link meta-wrapper">
							<span class="meta-icon">
								<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M8 9h8" /> <path d="M8 13h6" /> <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" /></svg>
							</span>
							<span class="meta-text">
								<a href="#comments" data-v-post-comments-url><span data-v-post-comment_text>0 Comments</span></a>
							</span>
						</li>
						-->
          </ul>

          <p class="card-text text-muted" data-v-post-excerpt>Learn practical tips to grow traffic, engage readers and turn visits into sales.</p>
          <button title="{$post.name}" role="button" class="btn btn-link px-0">
            <span>Read more</span>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </button>
        </div>
      </a>
    </article>


  </div>
</div>`
});Vvveb.Blocks.add("post/posts-1", {
    name: "Posts 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/post/posts-1-thumb.webp",
    html: `<div class="container" data-v-component-posts="posts-1" data-v-limit="3" data-v-image_size="medium">
  <div class="row">



    <div class="col-12 col-lg-4 mb-2" data-v-post>

      <article class="card post h-100 shadow-sm">
        <div class="card-img-top" data-v-if="post.image">
          <img src="demo/img/video-1.webp" alt="Post cover image" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
        </div>
        <!-- Post Title -->
        <a data-v-post-url>
          <div class="card-body p-4">
            <div class="post-title card-title">
              <h3 class="h4" data-v-post-name>
                How to launch your online store in a weekend
              </h3>
            </div>


            <ul class="post-meta text-start mb-3 small">

              <li class="post-author meta-wrapper">
                <span class="meta-icon">
                  <span class="screen-reader-text">Post author</span>
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </span>
                <span class="meta-text">
                  By <a href="content/post.html" data-v-post-author-url>
                    <span data-v-post-display_name>admin</span>
                  </a>
                </span>
              </li>

              <li class="post-date meta-wrapper">
                <span class="meta-icon">
                  <span class="screen-reader-text">Post date</span>

                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M11 15h1" />
                    <path d="M12 15v3" />
                  </svg>
                </span>
                <span class="meta-text">
                  <a href="content/post.html" data-v-post-url>
                    <!-- <span data-v-post-created_at data-filter-friendly_date>December 31, 2020</span> -->
                    <span data-v-post-created_at_formatted>December 31, 2020</span>
                  </a>
                </span>
              </li>
              <!--
						<li class="post-comment-link meta-wrapper">
							<span class="meta-icon">
								<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M8 9h8" /> <path d="M8 13h6" /> <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" /></svg>
							</span>
							<span class="meta-text">
								<a href="#comments" data-v-post-comments-url><span data-v-post-comment_text>0 Comments</span></a>
							</span>
						</li>
						-->
            </ul>

            <p class="card-text text-muted" data-v-post-excerpt>Learn practical tips to grow traffic, engage readers and turn visits into sales.</p>
            <button title="{$post.name}" role="button" class="btn btn-link px-0">
              <span>Read more</span>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </a>
      </article>


    </div>



    <div class="col-12 col-lg-4 mb-2" data-v-post>

      <article class="card post h-100 shadow-sm">
        <div class="card-img-top" data-v-if="post.image">
          <img src="demo/img/video-1.webp" alt="Post cover image" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
        </div>
        <!-- Post Title -->
        <a data-v-post-url>
          <div class="card-body p-4">
            <div class="post-title card-title">
              <h3 class="h4" data-v-post-name>
                How to launch your online store in a weekend
              </h3>
            </div>


            <ul class="post-meta text-start mb-3 small">

              <li class="post-author meta-wrapper">
                <span class="meta-icon">
                  <span class="screen-reader-text">Post author</span>
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </span>
                <span class="meta-text">
                  By <a href="content/post.html" data-v-post-author-url>
                    <span data-v-post-display_name>admin</span>
                  </a>
                </span>
              </li>

              <li class="post-date meta-wrapper">
                <span class="meta-icon">
                  <span class="screen-reader-text">Post date</span>

                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M11 15h1" />
                    <path d="M12 15v3" />
                  </svg>
                </span>
                <span class="meta-text">
                  <a href="content/post.html" data-v-post-url>
                    <!-- <span data-v-post-created_at data-filter-friendly_date>December 31, 2020</span> -->
                    <span data-v-post-created_at_formatted>December 31, 2020</span>
                  </a>
                </span>
              </li>
              <!--
						<li class="post-comment-link meta-wrapper">
							<span class="meta-icon">
								<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M8 9h8" /> <path d="M8 13h6" /> <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" /></svg>
							</span>
							<span class="meta-text">
								<a href="#comments" data-v-post-comments-url><span data-v-post-comment_text>0 Comments</span></a>
							</span>
						</li>
						-->
            </ul>

            <p class="card-text text-muted" data-v-post-excerpt>Learn practical tips to grow traffic, engage readers and turn visits into sales.</p>
            <button title="{$post.name}" role="button" class="btn btn-link px-0">
              <span>Read more</span>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </a>
      </article>


    </div>



    <div class="col-12 col-lg-4 mb-2" data-v-post>

      <article class="card post h-100 shadow-sm">
        <div class="card-img-top" data-v-if="post.image">
          <img src="demo/img/video-1.webp" alt="Post cover image" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
        </div>
        <!-- Post Title -->
        <a data-v-post-url>
          <div class="card-body p-4">
            <div class="post-title card-title">
              <h3 class="h4" data-v-post-name>
                How to launch your online store in a weekend
              </h3>
            </div>


            <ul class="post-meta text-start mb-3 small">

              <li class="post-author meta-wrapper">
                <span class="meta-icon">
                  <span class="screen-reader-text">Post author</span>
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </span>
                <span class="meta-text">
                  By <a href="content/post.html" data-v-post-author-url>
                    <span data-v-post-display_name>admin</span>
                  </a>
                </span>
              </li>

              <li class="post-date meta-wrapper">
                <span class="meta-icon">
                  <span class="screen-reader-text">Post date</span>

                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M11 15h1" />
                    <path d="M12 15v3" />
                  </svg>
                </span>
                <span class="meta-text">
                  <a href="content/post.html" data-v-post-url>
                    <!-- <span data-v-post-created_at data-filter-friendly_date>December 31, 2020</span> -->
                    <span data-v-post-created_at_formatted>December 31, 2020</span>
                  </a>
                </span>
              </li>
              <!--
						<li class="post-comment-link meta-wrapper">
							<span class="meta-icon">
								<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M8 9h8" /> <path d="M8 13h6" /> <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12" /></svg>
							</span>
							<span class="meta-text">
								<a href="#comments" data-v-post-comments-url><span data-v-post-comment_text>0 Comments</span></a>
							</span>
						</li>
						-->
            </ul>

            <p class="card-text text-muted" data-v-post-excerpt>Learn practical tips to grow traffic, engage readers and turn visits into sales.</p>
            <button title="{$post.name}" role="button" class="btn btn-link px-0">
              <span>Read more</span>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </a>
      </article>


    </div>



  </div>
</div>`
});
	Vvveb.BlocksGroup['Post'] = ["post/post-1","post/posts-1"];
Vvveb.Blocks.add("product/product-1", {
    name: "Product 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/product/product-1-thumb.webp",
    html: `<div data-v-component-product>
  <div class="mb-3">

    <article class="single-product-wrapper">
      <!-- Product Image -->
      <div class="product-image">
        <a href="product/product.html" data-v-product-url>

          <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-if="prod.image" data-v-product-image />
          <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

          <!-- Hover Thumb -->
          <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-product-image-1 />
        </a>


        <!-- Favourite -->
        <div class="product-favourite">
          <a aria-label="Add to wishlist" href="product/product.html" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
            <span></span>
          </a>
        </div>

        <!-- Compare -->
        <div class="product-compare">
          <a aria-label="Add to compare" href="product/product.html" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 4l3 3l-3 3" />
              <path d="M18 20l3 -3l-3 -3" />
              <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
              <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
            </svg>
            <span></span>
          </a>
        </div>

        <div class="badges">
          <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
        </div>
      </div>

      <!-- Product Description -->
      <div class="product-content">

        <a href="product/product.html" class="text-body" data-v-product-url>
          <span data-v-product-name>Product 8</span>
        </a>

        <p data-v-if="prod.min_price > 0">
          <span class="text-muted small">From</span>
          <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
        </p>

        <div data-v-if-not="prod.min_price">
          <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
          <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
        </div>

        <!-- Hover Content -->
        <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
          <!-- Add to Cart -->
          <div class="add-to-cart-btn">
            <input type="hidden" name="product_id" value="" data-v-product-product_id />

            <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
              <span class="button-text">
                Out of stock
              </span>
            </a>

            <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

              <span class="loading d-none">
                <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                <span>Add to cart</span>
              </span>

              <span class="button-text">
                <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                </svg>
                <span>Add to cart</span>
              </span>

            </a>
          </div>
        </div>

      </div>
    </article>


  </div>
</div>`
});Vvveb.Blocks.add("product/products-1", {
    name: "Products 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/product/products-1-thumb.webp",
    html: `<div class="container" data-v-component-products="popular" data-v-limit="8" data-v-image_size="medium">
  <div class="row">



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-if="prod.image" data-v-product-image />
            <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

            <!-- Hover Thumb -->
            <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-product-image-1 />
          </a>


          <!-- Favourite -->
          <div class="product-favourite">
            <a aria-label="Add to wishlist" href="product/product.html" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a aria-label="Add to compare" href="product/product.html" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 4l3 3l-3 3" />
                <path d="M18 20l3 -3l-3 -3" />
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
                <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
              </svg>
              <span></span>
            </a>
          </div>

          <div class="badges">
            <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p data-v-if="prod.min_price > 0">
            <span class="text-muted small">From</span>
            <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
          </p>

          <div data-v-if-not="prod.min_price">
            <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
            <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
          </div>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                <span class="button-text">
                  Out of stock
                </span>
              </a>

              <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>
                </span>

                <span class="button-text">
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                  </svg>
                  <span>Add to cart</span>
                </span>

              </a>
            </div>
          </div>

        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-if="prod.image" data-v-product-image />
            <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

            <!-- Hover Thumb -->
            <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-product-image-1 />
          </a>


          <!-- Favourite -->
          <div class="product-favourite">
            <a aria-label="Add to wishlist" href="product/product.html" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a aria-label="Add to compare" href="product/product.html" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 4l3 3l-3 3" />
                <path d="M18 20l3 -3l-3 -3" />
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
                <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
              </svg>
              <span></span>
            </a>
          </div>

          <div class="badges">
            <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p data-v-if="prod.min_price > 0">
            <span class="text-muted small">From</span>
            <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
          </p>

          <div data-v-if-not="prod.min_price">
            <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
            <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
          </div>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                <span class="button-text">
                  Out of stock
                </span>
              </a>

              <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>
                </span>

                <span class="button-text">
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                  </svg>
                  <span>Add to cart</span>
                </span>

              </a>
            </div>
          </div>

        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-if="prod.image" data-v-product-image />
            <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

            <!-- Hover Thumb -->
            <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-product-image-1 />
          </a>


          <!-- Favourite -->
          <div class="product-favourite">
            <a aria-label="Add to wishlist" href="product/product.html" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a aria-label="Add to compare" href="product/product.html" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 4l3 3l-3 3" />
                <path d="M18 20l3 -3l-3 -3" />
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
                <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
              </svg>
              <span></span>
            </a>
          </div>

          <div class="badges">
            <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p data-v-if="prod.min_price > 0">
            <span class="text-muted small">From</span>
            <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
          </p>

          <div data-v-if-not="prod.min_price">
            <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
            <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
          </div>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                <span class="button-text">
                  Out of stock
                </span>
              </a>

              <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>
                </span>

                <span class="button-text">
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                  </svg>
                  <span>Add to cart</span>
                </span>

              </a>
            </div>
          </div>

        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-if="prod.image" data-v-product-image />
            <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

            <!-- Hover Thumb -->
            <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-product-image-1 />
          </a>


          <!-- Favourite -->
          <div class="product-favourite">
            <a aria-label="Add to wishlist" href="product/product.html" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a aria-label="Add to compare" href="product/product.html" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 4l3 3l-3 3" />
                <path d="M18 20l3 -3l-3 -3" />
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
                <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
              </svg>
              <span></span>
            </a>
          </div>

          <div class="badges">
            <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p data-v-if="prod.min_price > 0">
            <span class="text-muted small">From</span>
            <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
          </p>

          <div data-v-if-not="prod.min_price">
            <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
            <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
          </div>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                <span class="button-text">
                  Out of stock
                </span>
              </a>

              <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>
                </span>

                <span class="button-text">
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                  </svg>
                  <span>Add to cart</span>
                </span>

              </a>
            </div>
          </div>

        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-if="prod.image" data-v-product-image />
            <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

            <!-- Hover Thumb -->
            <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-product-image-1 />
          </a>


          <!-- Favourite -->
          <div class="product-favourite">
            <a aria-label="Add to wishlist" href="product/product.html" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a aria-label="Add to compare" href="product/product.html" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 4l3 3l-3 3" />
                <path d="M18 20l3 -3l-3 -3" />
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
                <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
              </svg>
              <span></span>
            </a>
          </div>

          <div class="badges">
            <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p data-v-if="prod.min_price > 0">
            <span class="text-muted small">From</span>
            <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
          </p>

          <div data-v-if-not="prod.min_price">
            <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
            <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
          </div>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                <span class="button-text">
                  Out of stock
                </span>
              </a>

              <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>
                </span>

                <span class="button-text">
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                  </svg>
                  <span>Add to cart</span>
                </span>

              </a>
            </div>
          </div>

        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-if="prod.image" data-v-product-image />
            <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

            <!-- Hover Thumb -->
            <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-product-image-1 />
          </a>


          <!-- Favourite -->
          <div class="product-favourite">
            <a aria-label="Add to wishlist" href="product/product.html" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a aria-label="Add to compare" href="product/product.html" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 4l3 3l-3 3" />
                <path d="M18 20l3 -3l-3 -3" />
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
                <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
              </svg>
              <span></span>
            </a>
          </div>

          <div class="badges">
            <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p data-v-if="prod.min_price > 0">
            <span class="text-muted small">From</span>
            <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
          </p>

          <div data-v-if-not="prod.min_price">
            <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
            <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
          </div>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                <span class="button-text">
                  Out of stock
                </span>
              </a>

              <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>
                </span>

                <span class="button-text">
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                  </svg>
                  <span>Add to cart</span>
                </span>

              </a>
            </div>
          </div>

        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-if="prod.image" data-v-product-image />
            <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

            <!-- Hover Thumb -->
            <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-product-image-1 />
          </a>


          <!-- Favourite -->
          <div class="product-favourite">
            <a aria-label="Add to wishlist" href="product/product.html" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a aria-label="Add to compare" href="product/product.html" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 4l3 3l-3 3" />
                <path d="M18 20l3 -3l-3 -3" />
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
                <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
              </svg>
              <span></span>
            </a>
          </div>

          <div class="badges">
            <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p data-v-if="prod.min_price > 0">
            <span class="text-muted small">From</span>
            <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
          </p>

          <div data-v-if-not="prod.min_price">
            <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
            <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
          </div>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                <span class="button-text">
                  Out of stock
                </span>
              </a>

              <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>
                </span>

                <span class="button-text">
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                  </svg>
                  <span>Add to cart</span>
                </span>

              </a>
            </div>
          </div>

        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-if="prod.image" data-v-product-image />
            <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

            <!-- Hover Thumb -->
            <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" data-v-product-image-1 />
          </a>


          <!-- Favourite -->
          <div class="product-favourite">
            <a aria-label="Add to wishlist" href="product/product.html" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a aria-label="Add to compare" href="product/product.html" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 4l3 3l-3 3" />
                <path d="M18 20l3 -3l-3 -3" />
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
                <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
              </svg>
              <span></span>
            </a>
          </div>

          <div class="badges">
            <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p data-v-if="prod.min_price > 0">
            <span class="text-muted small">From</span>
            <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
          </p>

          <div data-v-if-not="prod.min_price">
            <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
            <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
          </div>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                <span class="button-text">
                  Out of stock
                </span>
              </a>

              <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>
                </span>

                <span class="button-text">
                  <svg width="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                  </svg>
                  <span>Add to cart</span>
                </span>

              </a>
            </div>
          </div>

        </div>
      </article>


    </div>



  </div>
</div>`
});
	Vvveb.BlocksGroup['Product'] = ["product/product-1","product/products-1"];
Vvveb.Blocks.add("search/search-1", {
    name: "Search 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/search/search-1-thumb.webp",
    html: `<div class="modal d-block position-static" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content shadow">
      <div class="modal-body p-0">

        <form action="/search" method="get">
          <input type="hidden" name="route" value="search" />
          <div class="d-flex">
            <div class="input-group">
              <input type="search" name="search" class="form-control border-0 p-3 px-4" id="headerSearch" placeholder="Start typing to search" data-v-vvveb-action="search" data-selector=".search-results" data-v-vvveb-on="input" data-url="/search" />
              <button class="btn btn-outline-primary border-0" type="submit" title="Search" aria-label="Search">
                <svg width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </button>
            </div>
          </div>

          <div class="loading d-none d-flex justify-content-center m-5">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </form>

        <div class="search-results">
        </div>

      </div>
    </div>
  </div>
</div>`
});
	Vvveb.BlocksGroup['Search'] = ["search/search-1"];
Vvveb.Blocks.add("sidebar/sidebar-1", {
    name: "Sidebar 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/sidebar/sidebar-1-thumb.webp",
    html: `<div class="row">
  <!-- navigation -->
  <aside class="col-lg-3 col-xxl-2 sidebar">
    <div class="sticky" style="top:100px;">
      <nav class="navbar navbar-vertical navbar-expand-lg navbar-light">
        <div>


          <a href="index.html" class="navbar-brand d-block"><!-- <img src="demo/img/logo.png" alt="Site logo" loading="lazy" alt="Logo">--></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>


        <div class="menutree" data-v-component-categories="left-column-categories" data-v-limit="1000">

          <!--  Catagories  -->
          <ul class="menu-content collapse show">
            <!-- Single Item -->
            <li>
              <ul class="sub-menu " data-v-cats>
                <li data-v-cat class="expand">
                  <input type="checkbox" id="m3" data-v-if="category.children > 0" />
                  <label for="m3" data-v-if="category.children > 0">
                    <a data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Bodysuits</a>
                  </label>

                  <a data-v-if="category.children = 0" data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Bodysuits</a>
                </li>
                <li data-v-cat>
                  <a data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Dresses</a>
                </li>
                <li data-v-cat>
                  <a data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Hoodies &amp; Sweats</a>
                </li>
                <li data-v-cat>
                  <a data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Jackets &amp; Coats</a>
                </li>
                <li data-v-cat>
                  <a data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Jeans</a>
                </li>
                <li data-v-cat>
                  <a data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Pants &amp; Leggings</a>
                </li>
                <li data-v-cat>
                  <a data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Rompers &amp; Jumpsuits</a>
                </li>
                <li data-v-cat>
                  <a data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Shirts &amp; Blouses</a>
                </li>
                <li data-v-cat>
                  <a data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Shirts</a>
                </li>
                <li data-v-cat>
                  <a data-v-cat-url data-url data-selector=".content-body" data-v-cat-name>Sweaters &amp; Knits</a>
                </li>
              </ul>
            </li>
            <!-- Single Item -->
            <li data-bs-toggle="collapse" data-bs-target="#shoes" class="collapsed" data-v-cats>
              <a>shoes</a>
              <ul class="sub-menu collapse" id="shoes">
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>Bodysuits</a>
                </li>
                <li>
                  <a>Dresses</a>
                </li>
                <li>
                  <a>Hoodies &amp; Sweats</a>
                </li>
                <li>
                  <a>Jackets &amp; Coats</a>
                </li>
                <li>
                  <a>Jeans</a>
                </li>
                <li>
                  <a>Pants &amp; Leggings</a>
                </li>
                <li>
                  <a>Rompers &amp; Jumpsuits</a>
                </li>
                <li>
                  <a>Shirts &amp; Blouses</a>
                </li>
                <li>
                  <a>Shirts</a>
                </li>
                <li>
                  <a>Sweaters &amp; Knits</a>
                </li>
              </ul>
            </li>
            <!-- Single Item -->
            <li data-bs-toggle="collapse" data-bs-target="#accessories" class="collapsed" data-v-cats>
              <a>accessories</a>
              <ul class="sub-menu collapse" id="accessories">
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>Bodysuits</a>
                </li>
                <li>
                  <a>Dresses</a>
                </li>
                <li>
                  <a>Hoodies &amp; Sweats</a>
                </li>
                <li>
                  <a>Jackets &amp; Coats</a>
                </li>
                <li>
                  <a>Jeans</a>
                </li>
                <li>
                  <a>Pants &amp; Leggings</a>
                </li>
                <li>
                  <a>Rompers &amp; Jumpsuits</a>
                </li>
                <li>
                  <a>Shirts &amp; Blouses</a>
                </li>
                <li>
                  <a>Shirts</a>
                </li>
                <li>
                  <a>Sweaters &amp; Knits</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
  <!-- / navigation -->







</div>`
});
	Vvveb.BlocksGroup['Sidebar'] = ["sidebar/sidebar-1"];
Vvveb.Blocks.add("subscribe/notify-1", {
    name: "Notify 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/subscribe/notify-1-thumb.webp",
    html: `<div data-v-component-plugin-newsletter-form="" data-v-storage="database" data-v-confirm-email="true" data-v-name="notify" data-v-list="notify">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error data-v-type="@@name">

      <div class="icon align-middle me-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M12 9v4" />
          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
          <path d="M12 16h.01" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex alert-dismissable" role="alert" data-v-notification-success data-v-type="@@name">

      <div class="icon align-middle me-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable" role="alert" data-v-notification-info data-v-type="@@name">

      <div class="icon align-middle me-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 9h.01" />
          <path d="M11 12h1v4h1" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post" data-v-vvveb-action="submit" data-selector="[data-v-component-plugin-newsletter-form='']" data-v-vvveb-on="submit">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>


    <div class="search position-relative d-flex">
      <input class="form-control" name="email" placeholder="Your email address" required>
      <button type="submit" class="btn btn-primary btn-shadow position-absolute end-0">

        <span class="loading d-none">
          <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
          </span>
          <span>Submitting</span> ...
        </span>

        <span class="button-text">
          <span>Notify me</span><!-- <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50 ms-2"  aria-hidden="true"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" /> <path d="M3 7l9 6l9 -6" /></svg> -->
        </span>

      </button>
    </div>


    <!-- if these hidden inputs are filled then ignore, robots -->

    <input type="text" class="form-control d-none" placeholder="Contact form" name="newsletter">

    <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

    <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


  </form>
</div>`
});Vvveb.Blocks.add("subscribe/subscribe-1", {
    name: "Subscribe 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/subscribe/subscribe-1-thumb.webp",
    html: `<div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-confirm-email="true" data-v-name="contact-form-appointment">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

      <div class="icon align-middle me-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M12 9v4" />
          <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0" />
          <path d="M12 16h.01" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex alert-dismissable" role="alert" data-v-notification-success>

      <div class="icon align-middle me-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable" role="alert" data-v-notification-info>

      <div class="icon align-middle me-2">
        <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-middle lh-1" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 9h.01" />
          <path d="M11 12h1v4h1" />
        </svg>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6l-12 12" /> <path d="M6 6l12 12" /></svg> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post" data-v-vvveb-action="submit" data-selector="[data-v-component-plugin-contact-form-form]" data-v-vvveb-on="submit">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

    <div class="row">
      <div class="search position-relative">
        <input class="form-control rounded-5" name="email" placeholder="Your email address">
        <button type="submit" class="btn btn-primary position-absolute  rounded-5">

          <span class="loading d-none">
            <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
            </span>
            <span>Submitting</span> ...
          </span>

          <span class="button-text">
            <span>Submit</span>
            <svg width="1.33em" height="1.33em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50 ms-2" aria-hidden="true">
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </span>

        </button>
      </div>
    </div>


    <!-- if these hidden inputs are filled then ignore, robots -->

    <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

    <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

    <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


  </form>
</div>`
});
	Vvveb.BlocksGroup['Subscribe'] = ["subscribe/notify-1","subscribe/subscribe-1"];
Vvveb.Blocks.add("toc/toc-1", {
    name: "Toc 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/toc/toc-1-thumb.webp",
    html: `<div>
  <aside class="col-md-3 col-xxl-3 d-none d-md-block" data-v-post-toc>
    <div class="sticky p-3" style="top:100px;" id="toc-sidebar">
      <div class="nav flex-column toc" data-v-toc-list>
        <ol>
          <li class="nav-item" data-v-toc-item>
            <a class="nav-link" href="#heading-1" data-v-toc-item-url data-v-toc-item-name>heading 1</a>
          </li>
          <li class="nav-item" data-v-toc-item>
            <a class="nav-link" href="#heading-2" data-v-toc-item-url data-v-toc-item-name>heading 2</a>
          </li>
          <li class="nav-item" data-v-toc-item>
            <a class="nav-link" href="#heading-3" data-v-toc-item-url data-v-toc-item-name>heading 3</a>
          </li>
        </ol>
      </div>
    </div>
  </aside>



</div>`
});
	Vvveb.BlocksGroup['Toc'] = ["toc/toc-1"];
