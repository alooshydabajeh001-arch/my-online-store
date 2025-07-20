document.addEventListener("DOMContentLoaded", function () {
  fetch('products.json')
    .then(response => response.json())
    .then(products => {
      const section = document.getElementById('products');
      products.forEach(product => {
        const div = document.createElement('div');
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" width="200" />
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <a href="${product.link}" target="_blank">Buy Now</a>
        `;
        section.appendChild(div);
      });
    })
    .catch(error => console.error('Error loading products:', error));
});
