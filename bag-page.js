const savedIds = JSON.parse(localStorage.getItem("woodsBag") || "[]");
const bagItems = document.querySelector("#bag-items");

const productsInBag = savedIds
  .map((id) => window.products.find((product) => product.id === id))
  .filter((product) => product);

if (productsInBag.length === 0) {
  bagItems.textContent = "Your bag is empty.";
} else {
  bagItems.innerHTML = productsInBag
    .map(
      (product) => `
    <article class="bag-item">
      <img src="${product.image}" alt="${product.name}" />
    <div>
        <h2>${product.name}</h2>
        <p>
            ${
              product.price === null
                ? "Price coming soon"
                : "₦" + Number(product.price).toLocaleString("en-NG")
            }
        </p>
    </div>
    <button class="remove-item" data-product-id="${product.id}" type="button">
    Remove
   </button>
    </article>
  `,
    )
    .join("");
}

bagItems.addEventListener("click", (event) => {
  if (!event.target.matches(".remove-item")) return;

  const productId = event.target.dataset.productId;
  const itemIndex = savedIds.indexOf(productId);

  if (itemIndex !== -1) {
    savedIds.splice(itemIndex, 1);
  }

  localStorage.setItem("woodsBag", JSON.stringify(savedIds));
  event.target.closest(".bag-item").remove();

  if (savedIds.length === 0) {
    bagItems.textContent = "Your bag is empty.";
  }

  document.querySelector(".bag-count").textContent = savedIds.length;
});
