//Lấy danh sách sản phẩm
import getProducts from "./getProducts.js";
getProducts();

//Lấy sản phẩm theo id
async function getProductsById() {
  const queryString = window.location.search;
  // Tạo đối tượng URLSearchParams từ query string
  const urlParams = new URLSearchParams(queryString);
  // Lấy giá trị của tham số 'id'
  const productId = urlParams.get("id");
  // Kiểm tra và hiển thị giá trị id (ở đây chỉ log ra console)
  console.log("ID sản phẩm:", productId);
  // Lấy toàn bộ query string
  const products = await getProducts(); // Đợi dữ liệu từ getProducts()
  console.log("products", products);
  const id = parseInt(productId);
  console.log("parse id", id);
  const productsItem = products.find((item) => item.id === id);
  console.log("productsItem", productsItem);

  const productCart = `
          <!-- Bên trái: Ảnh giày và thumbnail -->
          <div class="product-gallery">
            <img
              src=${productsItem.image}
              alt="Classic 2.5 Edge Shoes"
              class="main-image"
            />
            <div class="thumbnails">
              <img
                src=${productsItem.image}
                alt="Thumbnail 1"
                class="thumb selected"
              />
              <img
                src=${productsItem.image}
                alt="Thumbnail 2"
                class="thumb"
              />
              <img
                src=${productsItem.image}
                alt="Thumbnail 3"
                class="thumb"
              />
            </div>
          </div>

          <!-- Bên phải: Thông tin sản phẩm -->
          <div class="product-info">
            <div class="product-info-main">
              <div class="rating-review">
                <span class="stars">☆☆☆☆☆</span>
                <a href="#" class="review-link">Write a Review</a>
              </div>
              <h1 class="title">${productsItem.name}</h1>
              <h2 class="subtitle">${productsItem.alias}</h2>
              <div class="category">CATEGORY: <span>Sneakers</span></div>
              <p class="description">
                 ${productsItem.description}
              </p>

              <div class="size-section">
                <div class="size-label">Size: 34</div>
                <div class="size-options">
                  <button class="size-option active">34</button>
                  <button class="size-option">36</button>
                  <button class="size-option">38</button>
                </div>
              </div>

              <div class="extra-links">
                <a href="#" class="sizing-guide">See Sizing Guide</a>
                <a href="#" class="share">Share</a>
              </div>

              <div class="quantity-section">
                <button class="qty-btn" >–</button>
                <div class="qty-number" style="color: black">1</div>
                <button class="qty-btn">+</button>
              </div>

              <div class="price-section">
                <div class="current-price">${productsItem.price}USD</div>
                <div class="old-price">800.00 USD</div>
              </div>

              <div class="buttons">
                <button class="buy-now">BUY IT NOW</button>
                <button class="add-to-cart">ADD TO CART</button>
              </div>
            </div>
          </div>
    `;
  document.querySelector(".product-items").innerHTML += productCart;
}

getProductsById();
