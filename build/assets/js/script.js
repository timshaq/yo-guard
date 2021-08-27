/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})({
  /***/
  "./src/assets/js/about.js": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tconst tabsNL = document.querySelectorAll('.about__tab-box .about__tab');\r\n\tconst tabs = Array.prototype.slice.call(tabsNL);\r\n\r\n\tif(!tabs.length) return;\r\n\r\n\tconst ACTIVE_CLASS = 'active';\r\n\r\n\tconst itemsNL = document.querySelectorAll('.about__content .about__content-item');\r\n\tconst items = Array.prototype.slice.call(itemsNL);\r\n\r\n\ttabs.forEach((tab,i) => {\r\n\t\ttab.addEventListener('click', function() {\r\n\t\t\tif(tab.classList.contains(ACTIVE_CLASS)) return;\r\n\t\t\titems.forEach(item => item.classList.remove(ACTIVE_CLASS))\r\n\t\t\ttabs.forEach(item => item.classList.remove(ACTIVE_CLASS))\r\n\t\t\titems[i].classList.add(ACTIVE_CLASS)\r\n\t\t\ttab.classList.add(ACTIVE_CLASS)\r\n\t\t})\r\n\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/about.js?");
    /***/
  },

  /***/
  "./src/assets/js/adaptiveSliders.js": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tfunction setAdaptiveSlider(el, match, config) {\r\n\r\n\t\tconst sliderEl = el;\r\n\t\tif(!sliderEl) return\r\n\r\n\t\tconst breakpointMob = window.matchMedia(`(min-width:${match}px)`)\r\n\r\n\t\tlet slider;\r\n\r\n\t\tconst enableSlider = function() {\r\n\t\t\tslider = new Swiper(sliderEl, config)\r\n\t\t}\r\n\r\n\t\tconst breakpointChecker = function() {\r\n\t\t\tif(breakpointMob.matches === true) {\r\n\t\t\t\tif(slider !== undefined) slider.destroy(true,true);\r\n\t\t\t\treturn;\r\n\t\t\t} else if (breakpointMob.matches === false) {\r\n\t\t\t\treturn enableSlider();\r\n\t\t\t}\r\n\t\t}\r\n\t\tbreakpointMob.addListener(breakpointChecker);\r\n\t\tbreakpointChecker();\r\n\t}\r\n\r\n\tconst vacantPremisesSlider = document.querySelector('#vacant-premises-slider')\r\n\r\n\tif(vacantPremisesSlider) {\r\n\t\tsetAdaptiveSlider(vacantPremisesSlider, 1200, {\r\n\t\t\t\tbreakpoints: {\r\n\t\t\t\t\t0: {\r\n\t\t\t\t\t\tslidesPerView: 1,\r\n\t\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t\t\tpagination: {\r\n\t\t\t\t\t\t\tel: '#vacant-premises-slider-pagination',\r\n\t\t\t\t\t\t\ttype: 'bullets',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\t576: {\r\n\t\t\t\t\t\tslidesPerView: 2,\r\n\t\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t\t\tpagination: {\r\n\t\t\t\t\t\t\tel: '#vacant-premises-slider-pagination',\r\n\t\t\t\t\t\t\ttype: 'bullets',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\t768: {\r\n\t\t\t\t\t\tslidesPerView: 2,\r\n\t\t\t\t\t\tspaceBetween: 30,\r\n\t\t\t\t\t\tpagination: {\r\n\t\t\t\t\t\t\tel: '#vacant-premises-slider-pagination',\r\n\t\t\t\t\t\t\ttype: 'bullets',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\t992: {\r\n\t\t\t\t\t\tslidesPerView: 3,\r\n\t\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t\t\tpagination: {\r\n\t\t\t\t\t\t\tel: '#vacant-premises-slider-pagination',\r\n\t\t\t\t\t\t\ttype: 'bullets',\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t}\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/adaptiveSliders.js?");
    /***/
  },

  /***/
  "./src/assets/js/burger.js": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\r\nconst btnBurger = document.getElementById('burger-btn');\r\nif(!btnBurger) return;\r\n\r\nconst btnBurgerClose = document.getElementById('burger-btn-close');\r\nconst header = document.getElementById('header');\r\n\r\nconst ACTIVE_CLASS = 'burger-active';\r\n\r\nfunction disableScroll() {\r\n\thtml.style.overflowX = 'hidden';\r\n\thtml.style.overflowY = 'hidden';\r\n}\r\n\r\nfunction enableScroll() {\r\n\thtml.style.overflowX = 'hidden';\r\n\thtml.style.overflowY = 'scroll';\r\n}\r\n\r\nfunction closeEl(el) {\r\n\tel.classList.remove(ACTIVE_CLASS);\r\n\tenableScroll();\r\n}\r\n\r\nfunction openEl(el) {\r\n\tel.classList.add(ACTIVE_CLASS);\r\n\tdisableScroll();\r\n}\r\n\r\nbtnBurger.addEventListener('click', function() {\r\n\r\n\topenEl(header);\r\n\r\n})\r\n\r\nbtnBurgerClose.addEventListener('click', function() {\r\n\r\n\tcloseEl(header);\r\n\r\n})\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/burger.js?");
    /***/
  },

  /***/
  "./src/assets/js/catalog.js": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\r\nconst btnOpen = document.getElementById('filter-btn');\r\nif(!btnOpen) return;\r\n\r\n\r\nconst btnClose = document.getElementById('filter-btn-close');\r\nconst filterBox = document.getElementById('filter-popup');\r\nconst btnShow = filterBox.querySelector('.catalog-filter__submit');\r\n\r\n\r\nconst ACTIVE_CLASS = 'active-filter';\r\n\r\nfunction disableScroll() {\r\n\thtml.style.overflowX = 'hidden';\r\n\thtml.style.overflowY = 'hidden';\r\n}\r\n\r\nfunction enableScroll() {\r\n\thtml.style.overflowX = 'hidden';\r\n\thtml.style.overflowY = 'scroll';\r\n}\r\n\r\nfunction closeEl(el) {\r\n\tel.classList.remove(ACTIVE_CLASS);\r\n\tenableScroll();\r\n}\r\n\r\nfunction openEl(el) {\r\n\tel.classList.add(ACTIVE_CLASS);\r\n\tdisableScroll();\r\n}\r\n\r\nbtnOpen.addEventListener('click', function() {\r\n\r\n\topenEl(filterBox);\r\n\r\n})\r\n\r\nbtnClose.addEventListener('click', function() {\r\n\r\n\tcloseEl(filterBox);\r\n\r\n})\r\n\r\nbtnShow.addEventListener('click', function() {\r\n\r\n\tif(filterBox.classList.contains(ACTIVE_CLASS)) {\r\n\t\tcloseEl(filterBox);\r\n\t}\r\n\r\n})\r\n\r\n\r\n//  SLIDE RANGE NOUISLIDER\r\n\r\nconst priceSlidersNL = document.querySelectorAll('.price-slider');\r\n\r\nconst priceSliders = Array.prototype.slice.call(priceSlidersNL);\r\n\r\n\r\npriceSliders.forEach(slider => {\r\n\tvar stepsSlider = slider\r\n\tvar input0 = slider.querySelector('.slider-input1');\r\n\tvar input1 = slider.querySelector('.slider-input2');\r\n\tvar inputs = [input0, input1];\r\n\tvar min = parseInt(slider.getAttribute('data-min'))\r\n\tvar max = parseInt(slider.getAttribute('data-max'))\r\n\tvar start = 10*max/100\r\n\tvar end = 90*max/100\r\n\tvar symbol = slider.getAttribute('data-symbol')\r\n\tnoUiSlider.create(stepsSlider, {\r\n\t    start: [start, end],\r\n\t    connect: [false,true,false],\r\n\t    range: {\r\n\t        'min': [min],\r\n\t        'max': max\r\n\t    },\r\n\t    format: {\r\n\t    \tto: function(val) {\r\n\t    \t\treturn Math.ceil(val) + ` ${symbol}`;\r\n\t    \t},\r\n\t    \tfrom: function(val) {\r\n\t    \t\treturn val.replace(` ${symbol}`, '');\r\n\t    \t},\r\n\t    }\r\n\t});\r\n\tstepsSlider.noUiSlider.on('update', function (values, handle) {\r\n\t    inputs[handle].value = values[handle];\r\n\t});\r\n})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/catalog.js?");
    /***/
  },

  /***/
  "./src/assets/js/script.js": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders.js */ \"./src/assets/js/sliders.js\");\n/* harmony import */ var _adaptiveSliders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adaptiveSliders.js */ \"./src/assets/js/adaptiveSliders.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/assets/js/about.js\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./burger.js */ \"./src/assets/js/burger.js\");\n/* harmony import */ var _catalog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog.js */ \"./src/assets/js/catalog.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n\tObject(_sliders_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tObject(_adaptiveSliders_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\tObject(_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\tObject(_burger_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\tObject(_catalog_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/script.js?");
    /***/
  },

  /***/
  "./src/assets/js/sliders.js": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tconst bannersSlider = new Swiper('#banners-slider', {\r\n\t\tnavigation: {\r\n\t\t\tprevEl: '#banners-slider-nav-prev',\r\n\t\t\tnextEl: '#banners-slider-nav-next',\r\n\t\t\tdisabledClass: 'disable',\r\n\t\t},\r\n\t\tloop: true,\r\n\t\tdisabledClass: 'nav-disable',\r\n\t\tbreakpoints: {\r\n\t\t\t0: {\r\n\t\t\t\tpagination: {\r\n\t\t\t\t\tel: '#banners-slider-pagination',\r\n\t\t\t\t\ttype: 'bullets',\r\n\t\t\t\t},\r\n\t\t\t\tslidesPerView: 1,\r\n\t\t\t\tspaceBetween: 10,\r\n\t\t\t},\r\n\t\t\t992: {\r\n\t\t\t\tslidesPerView: 1,\r\n\t\t\t\tspaceBetween: 10,\r\n\t\t\t},\r\n\t\t}\r\n\r\n\t})\r\n\r\n\tconst featuresSlider = new Swiper('#features-slider', {\r\n\t\tnavigation: {\r\n\t\t\tprevEl: '#features-slider-nav-prev',\r\n\t\t\tnextEl: '#features-slider-nav-next',\r\n\t\t\tdisabledClass: 'disable',\r\n\t\t},\r\n\t\tslidesPerView: 1,\r\n\t\tspaceBetween: 10,\r\n\t\tloop: true,\r\n\t\tautoplay: {\r\n\t\t\tdelay: 3000,\r\n\t\t},\r\n\t\teffect: 'fade',\r\n\t\tfadeEffect: {\r\n\t\t\tcrossFade: true\r\n\t\t},\r\n\t\tdisabledClass: 'nav-disable'\r\n\r\n\t})\r\n\r\n    const productPageThumbNail = new Swiper(\"#productPageThumbNail\", {\r\n        freeMode: true,\r\n        watchSlidesVisibility: true,\r\n        watchSlidesProgress: true,\r\n    \tbreakpoints: {\r\n    \t\t0: {\r\n\t\t        spaceBetween: 15,\r\n\t\t        slidesPerView: 2,\r\n        \t\tdirection: 'horizontal',\r\n    \t\t},\r\n    \t\t576: {\r\n\t\t        spaceBetween: 15,\r\n\t\t        slidesPerView: 3,\r\n        \t\tdirection: 'horizontal',\r\n    \t\t},\r\n    \t\t1366: {\r\n\t\t        spaceBetween: 15,\r\n\t\t        slidesPerView: 3,\r\n        \t\tdirection: 'vertical',\r\n    \t\t},\r\n    \t}\r\n    });\r\n\r\n    const productPageLarge = new Swiper(\"#productPageLarge\", {\r\n        spaceBetween: 10,\r\n        thumbs: {\r\n            swiper: productPageThumbNail,\r\n        },\r\n    });\r\n\r\n\tconst galleryEl = document.getElementById('lightgallery');\r\n\r\n\tif(!galleryEl) return;\r\n\r\n\tlightGallery(galleryEl, {\r\n\t\tdownload: false,\r\n\t\tthumbnail: true,\r\n\t\tspeed: 400,\r\n\t\tmousewheel: true,\r\n\t})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/sliders.js?");
    /***/
  },

  /***/
  0: function (module, exports, __webpack_require__) {
    eval("__webpack_require__(/*! C:\\Users\\timur\\Desktop\\yo-guard\\src\\assets\\js\\about.js */\"./src/assets/js/about.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\yo-guard\\src\\assets\\js\\adaptiveSliders.js */\"./src/assets/js/adaptiveSliders.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\yo-guard\\src\\assets\\js\\burger.js */\"./src/assets/js/burger.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\yo-guard\\src\\assets\\js\\catalog.js */\"./src/assets/js/catalog.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\yo-guard\\src\\assets\\js\\script.js */\"./src/assets/js/script.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\timur\\Desktop\\yo-guard\\src\\assets\\js\\sliders.js */\"./src/assets/js/sliders.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/about.js_./src/assets/js/adaptiveSliders.js_./src/assets/js/burger.js_./src/assets/js/catalog.js_./src/assets/js/script.js_./src/assets/js/sliders.js?");
    /***/
  }
  /******/

});