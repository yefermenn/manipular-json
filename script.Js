document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productSelect');
    const productPrice = document.getElementById('productPrice');

    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const option = document.createElement('option');
                option.value = product.precio;
                option.textContent = product.nombre;
                productSelect.appendChild(option);
            });

            
            productPrice.value = `$${productSelect.value}`;
        });

    productSelect.addEventListener('change', () => {
        productPrice.value = `$${productSelect.value}`;
    });
});
