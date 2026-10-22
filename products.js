window.products = [
  {
    id: "sculpted-heel",
    name: "Sculpted Heel",
    image: "shoe.jpg",
    description: "Add a description for the shoe here.",
    price: null,
  },
  {
    id: "mini-evening-bag",
    name: "Mini Evening Bag",
    image: "handbag.jpg",
    description: "Add a description for this handbag here.",
    price: null,
  },
  {
    id: "everyday-tote",
    name: "Everyday Tote",
    image: "tote.jpg",
    description: "Add a description for this tote here.",
    price: null,
  },
];

const collectionGrid = document.querySelector(".collection-grid");

if (collectionGrid) {
  collectionGrid.innerHTML = window.products
    .map(
      (product) => `
        <article class="product-card" data-product-id="${product.id}">
          <img
            class="product-photo"
            src="${product.image}"
            alt="${product.name}"
          />
          <h3>${product.name}</h3>
          <p>Featured piece</p>
        </article>
      `,
    )
    .join("");

  collectionGrid.addEventListener("click", (event) => {
    const image = event.target.closest(".product-photo");
    if (!image) return;

    const card = image.closest(".product-card");
    window.location.href = `product.html?id=${card.dataset.productId}`;
  });
}
