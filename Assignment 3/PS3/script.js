// Toggle the hamburger menu

function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('open');

}
function closeOnResize(){
    const menu=document.querySelector('.nav-menu');
    const screenWidth=window.innerWidth;

    if(screenWidth>=769){
        menu.classList.remove('open');
    }
}
window.addEventListener('resize',closeOnResize);

// Toggle the cart sidebar
function toggleCart() {
    document.getElementById('cart').classList.toggle('open');
}

// Add a book to the cart
function addToCart(bookTitle) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = bookTitle;
    cartItems.appendChild(listItem);
    updateCartCount();
}

// Show a description popup (dummy implementation)
function showDescription(bookTitle) {
    const popup = document.getElementById('popup');
    popup.textContent = `Description of ${bookTitle}`;
    popup.style.display = 'block';
    setTimeout(() => popup.style.display = 'none', 3000);
}

// Clear the cart
function clearCart() {
    document.getElementById('cart-items').innerHTML = '';
    updateCartCount();
}

// Update the cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-items').children.length;
    document.getElementById('cart-count').textContent = cartCount;
}

// cart functionality and adding ,removing of books from the cart

let cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const popup = document.getElementById('popup');
const cartElement = document.getElementById('cart');

function addToCart(bookTitle, bookImage) {
    const book = { title: bookTitle, image: bookImage };
    cart.push(book);
    updateCart();
    showPopup(`"${bookTitle}" added to cart`);
}

function removeFromCart(bookTitle) {
    cart = cart.filter(item => item.title !== bookTitle);
    updateCart();
    showPopup(`Removed "${bookTitle}" from cart`);
    alert(`Removed "${bookTitle}" from cart`);
}

function updateCart() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.image;
        const title = document.createElement('span');
        title.textContent = item.title;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.id = `remove-${item.title.replace(/\s+/g, '-').toLowerCase()}`;
        removeBtn.onclick = () => removeFromCart(item.title);
        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.textContent = message;
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000); // Hide after 2 seconds
}


function toggleCart() {
    cartElement.classList.toggle('open');
}

function clearCart() {
    cart = [];
    updateCart();
    showPopup('Cart cleared');
}
