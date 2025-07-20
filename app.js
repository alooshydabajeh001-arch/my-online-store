document.addEventListener("DOMContentLoaded", function () {
  fetch("products.json")
    .then((response) => response.json())
    .then((products) => {
      const section = document.getElementById("products");
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.innerHTML = `
          <a href="${product.link}" target="_blank">
            <img src="${product.image}" alt="${product.name}" style="width:200px;height:auto;" />
            <h2>${product.name}</h2>
            <p>${product.price}</p>
          </a>
        `;
        section.appendChild(productCard);
      });
    });
});
