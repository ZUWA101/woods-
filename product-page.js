const productId = new URLSearchParams(window.location.search).get("id");

const selectedProduct = window.products.find(
  (product) => product.id === productId,
);

if (selectedProduct) {
  document.querySelector("#product-detail-image").src = selectedProduct.image;
  document.querySelector("#product-detail-image").alt = selectedProduct.name;
  document.querySelector("#product-detail-name").textContent =
    selectedProduct.name;
  document.querySelector("#product-detail-description").textContent =
    selectedProduct.description;

  document.querySelector("#product-detail-price").textContent =
    selectedProduct.price === null
      ? "Price coming soon"
      : `₦${Number(selectedProduct.price).toLocaleString("en-NG")}`;

  document.title = `${selectedProduct.name} | WOODS STUDIO`;
}

document.querySelector("#add-to-bag").addEventListener("click", () => {
  if (!selectedProduct) return;

  const bag = JSON.parse(localStorage.getItem("woodsBag") || "[]");
  bag.push(selectedProduct.id);

  localStorage.setItem("woodsBag", JSON.stringify(bag));
  updateBagCount();
  document.querySelector("#bag-message").textContent =
    `${selectedProduct.name} added to your bag.`;
});

const menuButton = document.querySelector(".mobile-menu-toggle");
const mobileNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

function updateBagCount() {
  const bag = JSON.parse(localStorage.getItem("woodsBag") || "[]");
  document.querySelector(".bag-count").textContent = bag.length;
}

updateBagCount();
