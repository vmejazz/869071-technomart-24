var popupCart = document.querySelector('.modal-cart-add');
var linkAddProduct = document.querySelectorAll('.product-button-buy');
var popupCartClose = popupCart.querySelector('.button-close');
var popupMap = document.querySelector('.contacts-map-full');
var linkPopupMap = document.querySelector('.contacts-map');
var popupMapClose = document.querySelector('.contacts-map-full .button-close');
var popupWrireUs = document.querySelector('.modal-write-us');
var linkPopupWriteUs = document.querySelector('.button-write-us');
var popupWriteUsClose = document.querySelector('.modal-write-us .button-close');
var formWriteUs = document.getElementById('form-write-us');
var formName = document.getElementById('you-name');
var formEmail = document.getElementById('you-email');
var formText = document.getElementById('you-text');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


for (var i = 0; i < linkAddProduct.length; i++) {
  linkAddProduct[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    popupCart.classList.add('modal-cart--show');
    formName.focus();

    if (storage) {
      formName.value = storage;
    }
  });
};
  
popupCartClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupCart.classList.remove('modal-cart--show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popupCart.classList.contains('modal-cart--show')) {
      popupCart.classList.remove('modal-cart--show');
    };
  };
});

if (popupMap) {
  linkPopupMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('map-full--show');
  });

  popupMapClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupMap.classList.remove('map-full--show');
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains('map-full--show')) {
        popupMap.classList.remove('map-full--show');
      };
    };
  });
};

if (popupWrireUs) {
  linkPopupWriteUs.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWrireUs.classList.add('modal-write-us--show');
  })

  popupWriteUsClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupWrireUs.classList.remove('modal-write-us--show');
    popupWrireUs.classList.remove("modal-error");
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (popupWrireUs.classList.remove('modal-write-us--show')) {
        popupWrireUs.classList.remove('modal-write-us--show');
        popupWrireUs.classList.remove("modal-error");
      };
    };
  });
};

formWriteUs.addEventListener('submit', function(evt) {
  if (!formName.value || !formEmail.value || !formText.value) {
    evt.preventDefault();
    popupWrireUs.classList.remove("modal-error");
    popupWrireUs.offsetWidth = popupWrireUs.offsetWidth;
    popupWrireUs.classList.add("modal-error");
    // setTimeout(popupWrireUs.classList.remove("modal-error"), 5000);
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", formName.value);
      localStorage.setItem("email", formEmail.value);
      localStorage.setItem("text", formText.value);
    };
  }
});

//         SERVICES SLIDER

var servicesSlider = document.querySelectorAll('.services-navigation li');
var linkServices = document.querySelectorAll('.services-navigation a');
var servicesDetail = document.querySelectorAll('.services-detail');

var sliderCliker = function(slider, link, detail) {
  slider.addEventListener('click', function(evt) {
    evt.preventDefault();
    servicesClear();
    link.classList.add('services-navigation-active');
    detail.classList.add('service--active');
  });
  slider.addEventListener('focus', function(evt) {
    evt.preventDefault();
    servicesClear();
    link.classList.add('services-navigation-active');
    detail.classList.add('service--active');
  });
};

for (i = 0; i < linkServices.length; i++) {
  sliderCliker(linkServices[i], servicesSlider[i], servicesDetail[i]);
};

var servicesClear = function () {
  for (i = 0; i < linkServices.length; i++) {
    servicesSlider[i].classList.remove('services-navigation-active');
    servicesDetail[i].classList.remove('service--active');
  };
};

//          PROMO-SLIDER

if (document.querySelector('.slider')) {
  var sliderDrill = document.querySelector('.slider-drill');
  var sliderDotsDrill = document.querySelector('.slider-dots-drill');
  var sliderPerforator = document.querySelector('.slider-perforator');
  var sliderDotsPerforator = document.querySelector('.slider-dots-perforator');
  var arrowButton = document.querySelectorAll('.button-slider-arrows');
  var sliderActive = document.querySelector('.slider-item--active');
  var sliderNotActive = document.querySelector('.slider-item:not(.slider-item--active)');

  sliderDotsDrill.addEventListener('click', function() {
    sliderDrill.classList.add('slider-item--active');
    sliderPerforator.classList.remove('slider-item--active');
  });

  sliderDotsDrill.addEventListener('mouseover', function() {
    sliderDrill.classList.add('slider-item--active');
    sliderPerforator.classList.remove('slider-item--active');
    sliderDotsDrill.classList.add('dots-red');
    sliderDotsPerforator.classList.remove('dots-red');
  });

  sliderDotsDrill.addEventListener('focus', function() {
    sliderDrill.classList.add('slider-item--active');
    sliderPerforator.classList.remove('slider-item--active');
    sliderDotsPerforator.classList.remove('dots-red');
  });

  sliderDotsPerforator.addEventListener('click', function() {
      sliderPerforator.classList.add('slider-item--active');
      sliderDrill.classList.remove('slider-item--active');
    });
    
  sliderDotsPerforator.addEventListener('mouseover', function(e) {
    sliderPerforator.classList.add('slider-item--active');
    sliderDrill.classList.remove('slider-item--active');
    sliderDotsPerforator.classList.add('dots-red');
    sliderDotsDrill.classList.remove('dots-red');
  });

  sliderDotsPerforator.addEventListener('focus', function(e) {
    sliderPerforator.classList.add('slider-item--active');
    sliderDrill.classList.remove('slider-item--active');
    sliderDotsDrill.classList.remove('dots-red');
  });

  for (i = 0; i < arrowButton.length; i++) {}

  var arrowCliker = function(arrow) {
    arrow.addEventListener('click', function(evt) {
      evt.preventDefault();
      sliderActive.classList.toggle('slider-item--active');
      sliderNotActive.classList.toggle('slider-item--active');
    });
  };

  for (i = 0; i < arrowButton.length; i++) {
    arrowCliker(arrowButton[i]);
  };
};