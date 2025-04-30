
//search input visibility
document.querySelector(".btn-search").onclick = () => {
  const searchOverlay = document.querySelector(".search-overplay");
  searchOverlay.classList.toggle("active");
};

document.querySelector(".btn_end-popup").onclick = () => {
  document.querySelector(".search-overplay").classList.remove("active");
  searchOverlay.style.zIndex = "";
};

// Profile menu
document.querySelector(".item_profile").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation(); // Prevent event from bubbling to document
  const dropdown = this.querySelector(".dropdown_profile");
  dropdown.classList.toggle("show");
});

// Prevent closing when clicking inside the dropdown
document
  .querySelector(".dropdown_profile")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  const dropdown = document.querySelector(".dropdown_profile");
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
});

// Cart toggle
const cartMain = document.querySelector(".cart-items");
const cartItems = document.querySelector(".cart-items a"); // Add selector for cart items link
const closeCart = document.querySelector(".close_mini-cart");
const cartContent = document.querySelector(".cart-content");
const cartOverplace = document.querySelector(".cart-overplace");
const headerMiNiContent = document.querySelector(".header_mini-content");

// Open cart only when clicking on cart-items
cartItems.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  cartOverplace.style.visibility = "visible";
  cartOverplace.style.opacity = "1";
  cartContent.style.transition = "transform 0.3s ease-in-out";
  cartContent.style.transform = "translateX(0)";
  cartOverplace.classList.add("active");
});

// Close cart
closeCart.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  cartContent.style.transition = "transform 0.3s ease-in-out";
  cartContent.style.transform = "translateX(400px)";
  cartOverplace.style.opacity = "0";

  setTimeout(() => {
    cartOverplace.style.visibility = "hidden";
    cartOverplace.classList.remove("active");
    cartContent.style.transition = "";
  }, 300);
});

// Close when clicking overlay
cartOverplace.addEventListener("click", function (e) {
  if (e.target === cartOverplace) {
    closeCart.click();
  }
});

// Menu hover effects
const menuItems = document.querySelectorAll(
  ".header__menu--left .menu--left__list > li"
);

menuItems.forEach((item) => {
  const dropdownMenu = item.querySelector(".dropdown-menu");

  if (dropdownMenu) {
    item.addEventListener("mouseenter", () => {
      dropdownMenu.style.visibility = "visible";
      dropdownMenu.style.opacity = "1";
      dropdownMenu.style.transform = "translateY(0)";
    });

    item.addEventListener("mouseleave", () => {
      dropdownMenu.style.visibility = "hidden";
      dropdownMenu.style.opacity = "0";
      dropdownMenu.style.transform = "translateY(-10px)";
    });
  }
});

// Sidebar toggle
const btnBurger = document.querySelector(".btn-burger");
const sidebarOverlay = document.querySelector(".side-nav-overlay");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");





//product images 
document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các phần tử product-item và sneaker-image
  const productItems = document.querySelectorAll(".product-item");
  console.log(productItems);
  // Lấy tất cả các sneaker-item
  const sneakerItems = document.querySelectorAll(".sneaker-image");

  // Lặp qua từng product-item
  productItems.forEach((productItem, index) => {
    productItem.addEventListener("click", () => {
      // Ẩn tất cả sneaker-items
      sneakerItems.forEach((sneaker) => sneaker.classList.remove("active"));
      // Xóa class active khỏi tất cả các product-item
      productItems.forEach((item) => item.classList.remove("active"));

      productItem.classList.add("active");
      // Hiển thị sneaker-item tương ứng
      const sneakerToShow = document.querySelector(`.sneaker-banner-${index + 1}`);
      if (sneakerToShow) {
        sneakerToShow.classList.add("active");
      } else {
        console.error(`Không tìm thấy .sneaker-banner-${index + 1}`);
      }
    });
  });
});