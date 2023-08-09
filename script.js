document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
    });
    
    function addToCart() {
      // Logic to add item to cart goes here
      alert('Item added to cart!');
    }
  });
  