document.addEventListener("DOMContentLoaded", function() {
    const saveButtons = document.querySelectorAll('.save-btn');

    saveButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const productCard = event.target.closest('.save-card');

            if (productCard) {
                const productDetails = {
                    name: productCard.querySelector('.save-card-details h3').textContent,
                    price: productCard.querySelector('.save-card-details h3:nth-child(2)').textContent,
                    location: productCard.querySelector('.save-card-address p').textContent,
                    imageUrl: productCard.querySelector('.save-card-img img').src
                    // Add more details as needed
                };

                saveProductForLater(productDetails);
            }
        });
    });

    function saveProductForLater(productDetails) {
        let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

        // Add the product details to the array of saved items
        savedItems.push(productDetails);

        // Update localStorage with the updated list of saved items
        localStorage.setItem('savedItems', JSON.stringify(savedItems));

        // Optionally, provide feedback to the user (e.g., show a message)
        alert('Product saved for later!');
    }
});
