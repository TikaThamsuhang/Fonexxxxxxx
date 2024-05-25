document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-bar input');
    const products = document.querySelectorAll('.product');

    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase();
        
        products.forEach(product => {
            const productName = product.querySelector('.card__title').textContent.toLowerCase();
            const productPrice = product.querySelector('.cost').textContent.toLowerCase();

            if (productName.includes(searchText) || productPrice.includes(searchText)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});