Vvveb.Blocks.add("contact-form/contact-form-1", {
    name: "Contact form 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/contact-form/contact-form-1-thumb.webp",
    html: `<div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-form-1">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
      </div>

      <div class="flex-grow-1 align-self-center text-small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-check-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1  la-info-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" name="firstname" required>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" name="lastname" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="email" class="form-control" placeholder="Enter email" name="email" required>
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
        <button type="submit" class="btn btn-primary">Submit <i class="la la-long-arrow-alt-right ms-1"></i>
        </button>
      </div>
    </div>
  </form>
</div>`
});Vvveb.Blocks.add("contact-form/contact-form-appointment", {
    name: "Contact form appointment",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/contact-form/contact-form-appointment-thumb.webp",
    html: `<div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-confirm-email="true" data-v-name="contact-form-appointment">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
      </div>

      <div class="flex-grow-1 align-self-center text-small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-check-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1  la-info-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" name="firstname" required>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" name="lastname" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="email" class="form-control" placeholder="Enter email" name="email" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="date" class="form-control" placeholder="Date" name="datetime-local" required>
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
        <button type="submit" class="btn btn-primary">Make appointment <i class="la la-long-arrow-alt-right ms-1"></i>
        </button>
      </div>
    </div>
  </form>
</div>`
});Vvveb.Blocks.add("contact-form/contact-form-reservation", {
    name: "Contact form reservation",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/contact-form/contact-form-reservation-thumb.webp",
    html: `<div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-confirm-email="true" data-v-name="contact-form-appointment">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
      </div>

      <div class="flex-grow-1 align-self-center text-small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-check-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1  la-info-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" name="firstname" required>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" name="lastname" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="email" class="form-control" placeholder="Enter email" name="email" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="start-date" class="form-control" placeholder="Start Date" name="datetime-local" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="end-date" class="form-control" placeholder="End Date" name="datetime-local" required>
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
        <button type="submit" class="btn btn-primary">Make reservation <i class="la la-long-arrow-alt-right ms-1"></i>
        </button>
      </div>
    </div>
  </form>
</div>`
});
	Vvveb.BlocksGroup['Contact form'] = ["contact-form/contact-form-1","contact-form/contact-form-appointment","contact-form/contact-form-reservation"];
Vvveb.Blocks.add("post/post-1", {
    name: "Post 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/post/post-1-thumb.webp",
    html: `<div data-v-component-post>
  <div class="mb-2">

    <article class="card ">
      <div class="card-img-top" data-v-if="post.image">
        <img src="img/demo/video-1.webp" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
      </div>
      <!-- Post Title -->
      <a data-v-post-url>
        <div class="card-body p-4">
          <div class="post-title card-title">
            <h3 data-v-post-name>
              Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
            </h3>
          </div>
          <!-- Hover Content -->
          <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
          <button title="{$post.name}" role="button" class="btn btn-link px-0">
            <span>Read more</span>
            <i class="la la-angle-right"></i>
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

      <article class="card h-100 shadow-sm">
        <div class="card-img-top" data-v-if="post.image">
          <img src="img/demo/video-1.webp" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
        </div>
        <!-- Post Title -->
        <a data-v-post-url>
          <div class="card-body p-4">
            <div class="post-title card-title">
              <h3 data-v-post-name>
                Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
              </h3>
            </div>
            <!-- Hover Content -->
            <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
            <button title="{$post.name}" role="button" class="btn btn-link px-0">
              <span>Read more</span>
              <i class="la la-angle-right"></i>
            </button>
          </div>
        </a>
      </article>


    </div>



    <div class="col-12 col-lg-4 mb-2" data-v-post>

      <article class="card h-100 shadow-sm">
        <div class="card-img-top" data-v-if="post.image">
          <img src="img/demo/video-1.webp" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
        </div>
        <!-- Post Title -->
        <a data-v-post-url>
          <div class="card-body p-4">
            <div class="post-title card-title">
              <h3 data-v-post-name>
                Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
              </h3>
            </div>
            <!-- Hover Content -->
            <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
            <button title="{$post.name}" role="button" class="btn btn-link px-0">
              <span>Read more</span>
              <i class="la la-angle-right"></i>
            </button>
          </div>
        </a>
      </article>


    </div>



    <div class="col-12 col-lg-4 mb-2" data-v-post>

      <article class="card h-100 shadow-sm">
        <div class="card-img-top" data-v-if="post.image">
          <img src="img/demo/video-1.webp" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
        </div>
        <!-- Post Title -->
        <a data-v-post-url>
          <div class="card-body p-4">
            <div class="post-title card-title">
              <h3 data-v-post-name>
                Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
              </h3>
            </div>
            <!-- Hover Content -->
            <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
            <button title="{$post.name}" role="button" class="btn btn-link px-0">
              <span>Read more</span>
              <i class="la la-angle-right"></i>
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
      <a href="product/product.html" data-v-product-url> </a>
      <div class="product-image">
        <a href="product/product.html" data-v-product-url>

          <img src="img/demo/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

          <!-- Hover Thumb -->
          <img class="hover-img" src="img/demo/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
        </a>

        <!-- Favourite -->
        <div class="product-favourite">
          <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
            <span></span>
          </a>
        </div>

        <!-- Compare -->
        <div class="product-compare">
          <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
            <span></span>
          </a>
        </div>
      </div>

      <!-- Product Description -->
      <div class="product-content">

        <a href="product/product.html" class="text-body" data-v-product-url>
          <span data-v-product-name>Product 8</span>
        </a>

        <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>

        <!-- Hover Content -->
        <div class="hover-content" data-v-if="prod.price > 0">
          <!-- Add to Cart -->
          <div class="add-to-cart-btn">
            <input type="hidden" name="product_id" value="" data-v-product-product_id />

            <a href="javascript:void();" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
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
                <i class="la la-lg la-shopping-bag"></i>
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
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="javascript:void();" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
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
                  <i class="la la-lg la-shopping-bag"></i>
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
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="javascript:void();" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
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
                  <i class="la la-lg la-shopping-bag"></i>
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
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="javascript:void();" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
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
                  <i class="la la-lg la-shopping-bag"></i>
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
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="javascript:void();" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
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
                  <i class="la la-lg la-shopping-bag"></i>
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
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="javascript:void();" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
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
                  <i class="la la-lg la-shopping-bag"></i>
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
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="javascript:void();" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
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
                  <i class="la la-lg la-shopping-bag"></i>
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
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="javascript:void();" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
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
                  <i class="la la-lg la-shopping-bag"></i>
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
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="prod.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />

              <a href="javascript:void();" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
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
                  <i class="la la-lg la-shopping-bag"></i>
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

	Vvveb.BlocksGroup['Reusable'] = [""];
