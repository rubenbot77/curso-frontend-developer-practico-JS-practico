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
    const isOrderDetailClosed = orderDetail.classList.contains('inactive');
    if (!isOrderDetailClosed){
        orderDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu (){
    const isOrderDetailClosed = orderDetail.classList.contains('inactive');

    if (!isOrderDetailClosed){
        orderDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    

    if (!ismobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    orderDetail.classList.toggle('inactive')
}