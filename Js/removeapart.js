// Get all the "Remove" buttons
const removeButtons = document.querySelectorAll('.remove-btn');

// Add a click event listener to each "Remove" button
removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the parent card element
    const card = button.closest('.save-card');

    // Extract the product data from the card
    const productData = {
      image: card.querySelector('.save-card-img img').src,
      name: card.querySelector('.save-card-details h3:first-child').textContent,
      price: card.querySelector('.save-card-details h3:last-child').textContent,
      location: card.querySelector('.save-card-address p').textContent
    };

    // Retrieve saved products from local storage
    let savedProducts = JSON.parse(localStorage.getItem('savedProducts')) || [];

    // Filter out the product to remove based on matching data
    savedProducts = savedProducts.filter(product => {
      return !(product.image === productData.image &&
               product.name === productData.name &&
               product.price === productData.price &&
               product.location === productData.location);
    });

    // Update the local storage with the filtered products
    localStorage.setItem('savedProducts', JSON.stringify(savedProducts));

    // Remove the card from the DOM
    card.remove();

    // Check if there are no more saved apartments
    const savedApartments = document.querySelectorAll('.save-card');
    if (savedApartments.length === 0) {
      const savedApartmentsContainer = document.querySelector('.apartment-comp');
      savedApartmentsContainer.classList.add('hidden');
    }
  });
});
