import getProducts from "./getProducts.js";
getProducts();

// Lấy danh sách 9 sản phẩm đầu tiên
async function get10SanPhamDauTien() {
  try {
    const products = await getProducts(); // Đợi dữ liệu từ getProducts()
    const first10Products = products.filter((item, index) => index < 6); // Lấy 10 sản phẩm đầu tiên

    // Render sản phẩm lên trang
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Xóa nội dung cũ (nếu có)

    first10Products.forEach((product) => {
      const productCard = `
            <article class="product-card">
              <div class="product-card-left">
                  <div class="card-left-main">
                    <h2 class="product-name">${product.name}</h2>
           
                    <div class="sizes">
                      <label class="size-label">Size:</label>
                      <button class="size-option">36</button>
                      <button class="size-option">40</button>
                    </div>
                    <p class="price">${product.price}$</p>
                    <div class="desc">${product.description}</div>
                    <div class="card-footer">
                      <div class="wish-lbl-wrp">
                        <div class="pro-wishlist active">
                          <label>
                            <span class="wishlist-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                <path d="M7.98803 12.8426C7.90897 12.8426 7.82988 12.8275 7.75604 12.7966C7.51215 12.6945 1.77217 10.2471 0.851794 5.88868C0.496026 4.20249 0.85329 2.55743 1.80722 1.48907C2.57917 0.623688 3.68896 0.163556 5.01731 0.157384C5.02402 0.157384 5.03073 0.157384 5.0367 0.157384C6.55225 0.157384 7.4764 0.950786 7.9873 1.62622C8.50044 0.948043 9.43195 0.151213 10.9572 0.157384C12.2863 0.163556 13.3969 0.623688 14.1696 1.48907C15.122 2.55674 15.4785 4.20179 15.122 5.88935C14.2031 10.2478 8.46235 12.6959 8.21846 12.7974C8.14612 12.8275 8.06709 12.8426 7.98803 12.8426ZM5.03597 1.1853C5.03149 1.1853 5.02779 1.1853 5.02331 1.1853C4.02537 1.18941 3.2348 1.51101 2.67243 2.14119C1.92733 2.97571 1.65807 4.30328 1.95044 5.69256C2.66272 9.06906 6.93862 11.2634 7.98803 11.7557C9.03743 11.2634 13.3134 9.06906 14.0249 5.69256C14.3187 4.3026 14.0495 2.97502 13.3059 2.14119C12.7435 1.51169 11.9529 1.19077 10.9527 1.18597C10.9483 1.18597 10.9438 1.18597 10.9401 1.18597C9.17094 1.18597 8.54373 2.81595 8.51837 2.88521C8.4408 3.09298 8.22743 3.23422 7.98876 3.23422C7.98726 3.23422 7.9865 3.23422 7.98575 3.23422C7.74634 3.23354 7.53303 3.09297 7.45696 2.88383C7.43235 2.81526 6.80437 1.1853 5.03597 1.1853Z" fill="#4F4632"></path></svg></span>
                          </label>
                        </div>

                        <div class="pro-compare active">
                          <label>
                            <span class="compare-label">
                              <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.80006 12.5C9.66163 12.5 9.52632 12.4585 9.41123 12.3809C9.29614 12.3033 9.20644 12.193 9.15347 12.0639C9.1005 11.9349 9.08664 11.7928 9.11364 11.6558C9.14064 11.5188 9.20728 11.393 9.30515 11.2942L11.6103 8.96804H2.79991C2.61426 8.96804 2.4362 8.89361 2.30493 8.76114C2.17365 8.62866 2.0999 8.44899 2.0999 8.26164C2.0999 8.0743 2.17365 7.89462 2.30493 7.76215C2.4362 7.62967 2.61426 7.55525 2.79991 7.55525H13.3001C13.4386 7.55528 13.5739 7.59672 13.689 7.67435C13.8041 7.75197 13.8938 7.86228 13.9467 7.99134C13.9997 8.1204 14.0136 8.2624 13.9866 8.39941C13.9596 8.53642 13.8929 8.66227 13.795 8.76106L10.295 12.293C10.1637 12.4255 9.9857 12.5 9.80006 12.5ZM11.9001 4.72968C11.9001 4.54233 11.8264 4.36266 11.6951 4.23018C11.5638 4.09771 11.3857 4.02328 11.2001 4.02328H2.3897L4.69485 1.69713C4.82236 1.56391 4.89292 1.38547 4.89133 1.20025C4.88973 1.01504 4.81611 0.837869 4.68632 0.706898C4.55654 0.575927 4.38096 0.501636 4.19742 0.500027C4.01388 0.498417 3.83705 0.569618 3.70503 0.698293L0.204955 4.23026C0.107087 4.32905 0.0404406 4.4549 0.0134427 4.59191C-0.0135551 4.72892 0.000307272 4.87092 0.0532774 4.99998C0.106248 5.12904 0.195947 5.23935 0.311036 5.31697C0.426126 5.3946 0.561438 5.43604 0.699866 5.43607H11.2001C11.3857 5.43607 11.5638 5.36165 11.6951 5.22917C11.8264 5.0967 11.9001 4.91703 11.9001 4.72968Z" fill="#4F4632"></path>
                              </svg>
                            </span>
                            <a class="compare-now" href="/pages/compare" style="display: none" tabindex="0">
                              Compare Now
                            </a>
                          </label>
                        </div>
            
                        <div class="quickview-btn" id="quickview">
                          <a class="quickview-label" style="text-decoration: none" href="/products/zig-kinetica-2-5-edge-shoes" data-handle="zig-kinetica-2-5-edge-shoes" tabindex="0">
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.99996 3.15912C5.70988 3.15912 4.66016 4.20885 4.66016 5.49892C4.66016 6.789 5.70988 7.83873 6.99996 7.83873C8.29004 7.83873 9.33977 6.789 9.33977 5.49892C9.33977 4.20885 8.29004 3.15912 6.99996 3.15912ZM6.99996 6.8724C6.24254 6.8724 5.62648 6.25635 5.62648 5.49892C5.62648 4.7415 6.24254 4.12545 6.99996 4.12545C7.75738 4.12545 8.37344 4.7415 8.37344 5.49892C8.37344 6.25635 7.75738 6.8724 6.99996 6.8724Z" fill="#4F4632"></path>
                              <path d="M13.4184 4.21786C13.1537 3.8509 12.6889 3.28735 11.9785 2.68715C11.2954 2.10993 10.561 1.64782 9.79562 1.31368C8.87633 0.912544 7.9357 0.709106 7 0.709106C6.0643 0.709106 5.12367 0.912544 4.2041 1.31368C3.43875 1.64754 2.7043 2.10965 2.02125 2.68715C1.31086 3.28762 0.846016 3.8509 0.581328 4.21786C0.195781 4.7527 0 5.18418 0 5.5C0 5.81582 0.195508 6.24731 0.581602 6.78215C0.846289 7.14911 1.31113 7.71266 2.02152 8.31286C2.70457 8.89008 3.43902 9.35219 4.20437 9.68633C5.12367 10.0875 6.06457 10.2909 7.00027 10.2909C7.93598 10.2909 8.8766 10.0875 9.79617 9.68633C10.5615 9.35247 11.296 8.89036 11.979 8.31286C12.6894 7.71239 13.1543 7.14911 13.4189 6.78215C13.8045 6.24731 14 5.81582 14 5.5C14 5.18418 13.8045 4.7527 13.4184 4.21786ZM11.293 7.62653C10.3592 8.40118 8.85637 9.32457 7 9.32457C5.14363 9.32457 3.64109 8.40118 2.70703 7.62653C1.56406 6.67852 1.00816 5.73625 0.967422 5.5C1.00789 5.26375 1.56406 4.32149 2.70703 3.37348C3.64082 2.59883 5.14363 1.67543 7 1.67543C8.85609 1.67543 10.3589 2.59883 11.293 3.37348C12.4359 4.32149 12.9921 5.26375 13.0326 5.5C12.9918 5.73625 12.4359 6.67852 11.293 7.62653Z" fill="#4F4632"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <button class="btn sold-out" >
                        <a href="./productsDetail.html?id=${product.id}">ADD TO CART</a><i class="fas fa-shopping-cart"></i>
                      </button>
                      
                    </div>
                  </div>
              </div>
              <div class="product-card-right">
                <div class="rating">
                  <span class="star">&#9734;</span>
                  <span class="star">&#9734;</span>
                  <span class="star">&#9734;</span>
                  <span class="star">&#9734;</span>
                  <span class="star">&#9734;</span>
                </div>
                <img src="${product.image}" alt="Literate Perforated Sneaker" class="product-image">
              </div>
              
              
            </article>
      `;
      productList.innerHTML += productCard;
    });

    return first10Products;
  } catch (error) {
    console.error("Lỗi khi lấy 10 sản phẩm đầu tiên:", error.message);
  }
}
get10SanPhamDauTien();
