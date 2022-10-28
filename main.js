const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCar = document.querySelector('.navbar-shopping-cart');
const orderDetail = document.querySelector('.product-detail')
const productDetailAside = document.querySelector('.product-detail-info')
const productInfoClose = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container')
const darkMode = document.querySelector('.darken')



navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCar.addEventListener('click', toggleShoppingCart);
productInfoClose.addEventListener('click', closeDetailInfo,);

function toggleDesktopMenu(){
    const isOrderDetailClosed = orderDetail.classList.contains('inactive');
    const isProductDetailAside = productDetailAside.classList.contains('inactive')
    if (!isOrderDetailClosed){
        orderDetail.classList.add('inactive')
    }
    if (!isProductDetailAside){
        productDetailAside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu (){
    const isOrderDetailClosed = orderDetail.classList.contains('inactive');
    const isProductDetailAside = productDetailAside.classList.contains('inactive')
    if (!isOrderDetailClosed){
        orderDetail.classList.add('inactive')
    }
    if (!isProductDetailAside){
        productDetailAside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailAside = productDetailAside.classList.contains('inactive')
    

    if (!ismobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    if (!isProductDetailAside){
        productDetailAside.classList.add('inactive')
    }
    orderDetail.classList.toggle('inactive')
}
function openProductDetailAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');


    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    if (!ismobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    productDetailAside.classList.remove('inactive')
    darkMode.classList.remove('inactive')
}

function closeDetailInfo(){
    productDetailAside.classList.add('inactive');
    darkMode.classList.add('inactive')
}
const productList = [];
productList.push({
   name: 'Bike',
   price: 120, 
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'TV',
    price: 1000, 
    image: 'https://www.cnet.com/a/img/resize/a02dad955b8bbba9741af353237be6f4046f0770/hub/2022/06/22/872fa7ca-8a46-46fd-b035-8bb01e40257d/samsung-qn65qn60b-tv-5616.jpg?auto=webp&fit=crop&height=528&width=940',
 });
 productList.push({
    name: 'Phone',
    price: 620, 
    image: 'https://www.movilzona.es/app/uploads-movilzona.es/2019/02/Galaxy-A10.jpg?x=480&y=375&quality=40',
 });
function renderProduct (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div')
     
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p')
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard)
        
      }
};
renderProduct(productList);
