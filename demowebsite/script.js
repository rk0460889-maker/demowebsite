
let cart = 0;

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function addToCart() {
  cart++;
  document.getElementById("cartCount").innerText = cart;
}

function searchProduct() {
  let query = document.getElementById("searchInput").value;
  if(query.trim() !== "") {
    alert("Searching for: " + query);
  } else {
    alert("Please enter a product name.");
  }
}
