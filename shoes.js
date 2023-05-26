document.addEventListener("DOMContentLoaded", () => {
  const addtocart = document.querySelectorAll(".product button");
  const addtocartitems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");


  let cartItems = [];
  let total = 0;

  addtocart.forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = button.parentElement;
      const productName = product.querySelector("h2").textContent;
      const productPrice = parseFloat(product.querySelector("p").textContent.slice(1));

      const item = {
        id: index + 1,
        name: productName,
        price: productPrice
      };

      cartItems.push(item);
      total += productPrice;

      const listItem = document.createElement("li");
      listItem.textContent = `${productName} - ₱${productPrice.toFixed(2)}`;
      addtocartitems.appendChild(listItem);

      totalPrice.textContent = `Total Price: ₱${total.toFixed(2)}`;

      


    });
  });
});

