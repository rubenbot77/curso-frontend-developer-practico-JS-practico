const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCar = document.querySelector('.navbar-shopping-cart');
const orderDetail = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCar.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart() {
    orderDetail.classList.toggle('inactive')
}