// BUY BUTTON

var popupCart = document.querySelector('.modal-cart-add');
var openPopupButton = document.querySelectorAll('.product-button-buy');
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
    slider.addEventListener('focusgit', function (evt) {
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
var sliderDrillHover = document.querySelectorAll('.slider-dots li:hover');


sliderDotsDrill.addEventListener('click', function () {
    sliderDrill.classList.add('slider-item--active');
    sliderPerforator.classList.remove('slider-item--active');
})

sliderDotsDrill.addEventListener('mouseover', function (e) {
    sliderDrill.classList.add('slider-item--active');
    sliderPerforator.classList.remove('slider-item--active');
    sliderDotsDrill.classList.add('dots-red');
    sliderDotsPerforator.classList.remove('dots-red');
})

sliderDotsDrill.addEventListener('focus', function (e) {
    sliderDrill.classList.add('slider-item--active');
    sliderPerforator.classList.remove('slider-item--active');
    sliderDotsPerforator.classList.remove('dots-red');
})

var sliderPerforator = document.querySelector('.slider-perforator');
var sliderDotsPerforator = document.querySelector(".slider-dots-perforator");

sliderDotsPerforator.addEventListener('click', function () {
    sliderPerforator.classList.add('slider-item--active');
    sliderDrill.classList.remove('slider-item--active');
})

sliderDotsPerforator.addEventListener('mouseover', function (e) {
    sliderPerforator.classList.add('slider-item--active');
    sliderDrill.classList.remove('slider-item--active');
    sliderDotsPerforator.classList.add('dots-red');
    sliderDotsDrill.classList.remove('dots-red');
})

sliderDotsPerforator.addEventListener('focus', function (e) {
    sliderPerforator.classList.add('slider-item--active');
    sliderDrill.classList.remove('slider-item--active');
    sliderDotsDrill.classList.remove('dots-red');
})

var arrowButton = document.querySelectorAll('.button-slider-arrows');
var sliderActive = document.querySelector('.slider-item--active');
var sliderNotActive = document.querySelector('.slider-item:not(.slider-item--active');

for (i = 0; i < arrowButton.length; i++) {

} ;

var arrowCliker = function (arrow) {
    arrow.addEventListener('click', function (evt) {
        evt.preventDefault();
        console.log(arrow);
        console.log(sliderActive);
        sliderActive.classList.remove('slider-item--active');
        var oldStage = sliderActive;
        sliderNotActive.classList.add('slider-item--active');
        sliderActive = sliderNotActive;
        sliderNotActive = oldStage;        
    });
} ;

for (i = 0; i < arrowButton.length; i++) {
    arrowCliker(arrowButton[i]);
}

