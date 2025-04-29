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

// Open sidebar
btnBurger.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  // Show overlay first
  sidebarOverlay.style.visibility = "visible";
  btnBurger.style.zIndex = "0";
  sidebar.style.zIndex = "1";
  requestAnimationFrame(() => {
    sidebarOverlay.style.opacity = "1";
    sidebar.style.visibility = "visible";
    sidebar.style.transform = "translateX(0)";
  });
});

// Close sidebar
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.blur(); // Remove focus from button after click

  // Start closing animation
  sidebar.style.transform = "translateX(400px)";
  sidebarOverlay.style.opacity = "0";

  // Hide elements after animation
  setTimeout(() => {
    sidebarOverlay.style.visibility = "hidden";
    sidebar.style.visibility = "hidden";
  }, 300);
});

// Close when clicking overlay
sidebarOverlay.addEventListener("click", function (e) {
  if (e.target === sidebarOverlay) {
    closeBtn.click();
  }
});
