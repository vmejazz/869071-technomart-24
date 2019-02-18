var popupCart = document.querySelector('.modal-cart-add');
var openPopupButton = document.querySelectorAll('.product-button-bookmark');
var closePopupButton = popupCart.querySelector('.button-close');

for (var i = 0; i < openPopupButton.length; i++) {
    openPopupButton[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    popupCart.classList.add('modal-cart--show');
    });
}

closePopupButton.addEventListener('click', function() {
    popupCart.classList.remove('modal-cart--show');
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        popupCart.classList.remove('modal-cart--show');
        popupMap.classList.remove('map-full--show');
        popupWriteUs.classList.remove('modal-write-us--show');
    }
});

// MAPS POPUP

var popupMap = document.querySelector('.contacts-map-full');
var openPopupMap = document.querySelector('.contacts-map');
var closePopupMap = popupMap.querySelector('.button-close');

openPopupMap.addEventListener('click', function (evt) {
   evt.preventDefault();
   popupMap.classList.add('map-full--show');
});

closePopupMap.addEventListener('click', function() {
    popupMap.classList.remove('map-full--show');
});


// WRITE US

var popupWriteUs = document.querySelector('.modal-write-us');
var openPopupWriteUs = document.querySelector('.button-write-us');
var closePopupWriteUs = popupWriteUs.querySelector('.button-close');

openPopupWriteUs.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWriteUs.classList.add('modal-write-us--show');
});

closePopupWriteUs.addEventListener('click', function () {
    popupWriteUs.classList.remove('modal-write-us--show');
});


// SERVICES

var sliderServices = document.querySelectorAll('.services-navigation li');
var openSliderServices = document.querySelectorAll('.services-navigation a');
var servicesDetail = document.querySelectorAll('.services-detail');

var sliderCliker = function (slider, link, detail) {
    slider.addEventListener('click', function (evt) {
        evt.preventDefault();
        for (i = 0; i <  openSliderServices.length; i++) {
            sliderServices[i].classList.remove('services-navigation-active');
            servicesDetail[i].classList.remove('service--active');
        };
        link.classList.add('services-navigation-active');
        detail.classList.add('service--active');
    });
}

for (i = 0; i < openSliderServices.length; i++) {
    sliderCliker(openSliderServices[i], sliderServices[i], servicesDetail[i]);
}

// PROMO SLIDER

var sliderDrill = document.querySelector('.slider-drill');
var sliderDotsDrill = document.querySelector(".slider-dots-drill");

sliderDotsDrill.addEventListener('click', function () {
    sliderDrill.classList.add('slider-item--active');
    sliderPerforator.classList.remove('slider-item--active');
})

var sliderPerforator = document.querySelector('.slider-perforator');
var sliderDotsPerforator = document.querySelector(".slider-dots-perforator");

sliderDotsPerforator.addEventListener('click', function () {
    sliderPerforator.classList.add('slider-item--active');
    sliderDrill.classList.remove('slider-item--active');
})

