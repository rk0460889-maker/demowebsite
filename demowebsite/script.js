let cartCount = 0; // Standardized name

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

function addToCart() {
    cartCount++;
    // This updates the red circle on the icon
    const countDisplay = document.getElementById("cartCount");
    if (countDisplay) {
        countDisplay.innerText = cartCount;
    }
    alert("Product added to cart! Total items: " + cartCount);
}

function searchProduct() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        let name = product.querySelector("h3").innerText.toLowerCase();
        if (name.includes(query)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
