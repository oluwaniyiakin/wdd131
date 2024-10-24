// Product Array
const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Smartphone' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Smartwatch' },
    { id: 5, name: 'Tablet' }
];

// Populate Product Name Dropdown
window.onload = function () {
    const productSelect = document.getElementById('product-name');
    
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Set Last Modified Date
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;
}
