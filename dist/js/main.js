/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/svg.js */ \"./src/js/svg.js\");\n/* harmony import */ var _js_svg_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_svg_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_yamap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/yamap.js */ \"./src/js/yamap.js\");\n/* harmony import */ var _js_yamap_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_yamap_js__WEBPACK_IMPORTED_MODULE_1__);\n// import $ from \"jquery\"; // импортируем через webpack как плагин в gulpfile чтобы библиотека была доступна глобально.\n// import Swiper from 'swiper';\n// import '../plugins/jquery.fancybox.min.js';\n// import Inputmask from \"inputmask\";\n\n\n\nlet setLocalization = function (e) {\n  e.preventDefault();\n  e.currentTarget.parentNode.querySelectorAll('.active').forEach(function (el) {\n    el.classList.remove('active');\n  });\n  e.currentTarget.classList.add('active');\n};\n\nlet toggleMenu = function (e) {\n  e.preventDefault();\n  e.currentTarget.closest('.menu-block').classList.toggle('open');\n  e.currentTarget.closest('header').classList.toggle('open');\n};\n\ndocument.querySelectorAll('.localization-link').forEach(item => {\n  item.addEventListener('click', setLocalization);\n});\ndocument.querySelectorAll('.btn-menu').forEach(item => {\n  item.addEventListener('click', toggleMenu);\n});\n$(document).ready(function () {\n  $('.scrollbar-inner').scrollbar();\n\n  let showSliderNav = function (nav, ind, count) {\n    if (ind == 1) {\n      $(nav + ' .slider-nav-prev').hide();\n    } else {\n      $(nav + ' .slider-nav-prev').show();\n    }\n\n    if (ind == count) {\n      $(nav + ' .slider-nav-next').hide();\n    } else {\n      $(nav + ' .slider-nav-next').show();\n    }\n  };\n\n  let servicesSliderPagination = $('.services-block .slider-pagination');\n  let servicesSlider = $('.services-slider');\n  servicesSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {\n    let i = (currentSlide ? currentSlide : 0) + 1;\n    servicesSliderPagination.html('<span>' + i + '</span>/<span>' + slick.slideCount + '</span>');\n    showSliderNav('.services-block', i, slick.slideCount);\n  });\n  servicesSlider.slick({\n    dots: false,\n    infinite: false,\n    // speed: 300,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    prevArrow: \".services-block .slider-nav-prev\",\n    nextArrow: \".services-block .slider-nav-next\",\n    responsive: [//     {\n    //         breakpoint: 1024,\n    //         settings: {\n    //             slidesToShow: 3,\n    //             slidesToScroll: 3,\n    //             infinite: true,\n    //             dots: true\n    //         }\n    //     },\n    //     {\n    //         breakpoint: 600,\n    //         settings: {\n    //             slidesToShow: 2,\n    //             slidesToScroll: 2\n    //         }\n    //     },\n    {\n      breakpoint: 992,\n      settings: {\n        variableWidth: true\n      }\n    }]\n  }); // let knowSliderPagination = $('.know-block .slider-pagination');\n\n  let knowSlider = $('.know-slider');\n  knowSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {\n    let i = (currentSlide ? currentSlide : 0) + 1; // knowSliderPagination.html('<span>' + i +'</span>/<span>' + slick.slideCount + '</span>');\n\n    showSliderNav('.know-block', i, slick.slideCount);\n  });\n  knowSlider.slick({\n    dots: false,\n    // infinite: false,\n    infinite: true,\n    // autoplay: true,\n    // speed: 300,\n    slidesToShow: 2,\n    slidesToScroll: 1,\n    // slidesPerRow: 4,\n    rows: 2,\n    prevArrow: \".know-block .slider-nav-prev\",\n    nextArrow: \".know-block .slider-nav-next\",\n    responsive: [// {\n    //     breakpoint: 1200,\n    //     settings: {\n    //         variableWidth: true,\n    //         slidesToShow: 1,\n    //         slidesToScroll: 1,\n    //     }\n    // },\n    {\n      breakpoint: 1200,\n      settings: {\n        variableWidth: true,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        rows: 1\n      }\n    }]\n  });\n  let galerySliderPagination = $('.galery-block .slider-pagination');\n  let galerySlider = $('.galery-slider');\n  galerySlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {\n    let i = (currentSlide ? currentSlide : 0) + 1; // galerySliderPagination.html('<span>' + i +'</span>/<span>' + slick.slideCount + '</span>');\n\n    galerySliderPagination.html('<span>' + i * slick.options.rows + '</span>/<span>' + slick.options.rows * slick.slideCount + '</span>');\n    showSliderNav('.galery-block', i, slick.slideCount);\n  });\n  galerySlider.slick({\n    dots: false,\n    // infinite: false,\n    infinite: true,\n    // autoplay: true,\n    // speed: 300,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    // slidesPerRow: 4,\n    rows: 2,\n    prevArrow: \".galery-block .slider-nav-prev\",\n    nextArrow: \".galery-block .slider-nav-next\",\n    responsive: [{\n      breakpoint: 992,\n      settings: {\n        slidesToShow: 3,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        variableWidth: true,\n        slidesToShow: 2,\n        slidesToScroll: 1\n      }\n    }, {\n      breakpoint: 576,\n      settings: {\n        variableWidth: true,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        rows: 1,\n        slidesPerRow: 1\n      }\n    }]\n  }); // let brandSliderPagination = $('.brand-block .slider-pagination');\n\n  let brandSlider = $('.brand-slider');\n  brandSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {\n    let i = (currentSlide ? currentSlide : 0) + 1; // brandSliderPagination.html('<span>' + i +'</span>/<span>' + slick.slideCount + '</span>');\n\n    showSliderNav('.brand-block', i, slick.slideCount);\n  });\n  brandSlider.slick({\n    dots: false,\n    infinite: true,\n    // speed: 300,\n    slidesToShow: 5,\n    slidesToScroll: 1,\n    variableWidth: true,\n    prevArrow: \".brand-block .slider-nav-prev\",\n    nextArrow: \".brand-block .slider-nav-next\",\n    responsive: [{\n      breakpoint: 1500,\n      settings: {\n        slidesToShow: 4\n      }\n    }, {\n      breakpoint: 992,\n      settings: {\n        slidesToShow: 3\n      }\n    }, {\n      breakpoint: 768,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 576,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  });\n  $('.select-value').on('click', function () {\n    if ($(this).hasClass('open')) {\n      $(this).siblings('input').val('');\n      $(this).find('span').text($(this).attr('data-placeholder'));\n    }\n\n    $(this).toggleClass('open');\n  });\n  $('.select-dropdown li').on('click', function () {\n    let parent = $(this).parent();\n    $(parent).siblings('.select-value').removeClass('open');\n    $(parent).siblings('input').val($(this).attr('data-value'));\n    $(parent).siblings('.select-value').find('span').text($(this).text());\n  });\n  $('[data-type=collapse]').on('click', function (e) {\n    e.preventDefault();\n    $(this).toggleClass('open');\n    $(this).closest('.project-item').toggleClass('open'); // if ($(window).width()<577) {\n    //     $(this).closest('.project-item').find('.project-text').scrollbar('destroy');\n    // }\n  });\n  $('.file-input input').on('change', function (e) {\n    let placeholder = this.closest('.file-input').dataset.placeholder;\n    let span = this.parentNode.previousElementSibling;\n\n    if (this.value != '') {\n      span.innerText = this.files[0].name;\n    } else {\n      span.innerText = placeholder;\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/svg.js":
/*!***********************!*\
  !*** ./src/js/svg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(";\n\n(function (window, document) {\n  'use strict';\n\n  let file = 'img/icon-sprite.svg',\n      revision = 1;\n  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;\n\n  let isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,\n      request,\n      data,\n      insertIT = function () {\n    document.body.insertAdjacentHTML('afterbegin', data);\n  },\n      insert = function () {\n    if (document.body) insertIT();else document.addEventListener('DOMContentLoaded', insertIT);\n  };\n\n  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {\n    data = localStorage.getItem('inlineSVGdata');\n\n    if (data) {\n      insert();\n      return true;\n    }\n  }\n\n  try {\n    request = new XMLHttpRequest();\n    request.open('GET', file, true);\n\n    request.onload = function () {\n      if (request.status >= 200 && request.status < 400) {\n        data = request.responseText;\n        insert();\n\n        if (isLocalStorage) {\n          localStorage.setItem('inlineSVGdata', data);\n          localStorage.setItem('inlineSVGrev', revision);\n        }\n      }\n    };\n\n    request.send();\n  } catch (e) {}\n})(window, document);\n\n//# sourceURL=webpack:///./src/js/svg.js?");

/***/ }),

/***/ "./src/js/yamap.js":
/*!*************************!*\
  !*** ./src/js/yamap.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let baloon = '<div class=\"contact-info baloon\">\\n' + '                <div class=\"contact-title\">\\n' + '                  <svg class=\"icon\"><use xlink:href=\"#icon-logo-only\"></use></svg>\\n' + '                  <span>ООО «КЭПИТАЛ-ЭНЕРГО»</span>\\n' + '                </div>\\n' + '                <div class=\"contact-info-content\">\\n' + '                  <a href=\"#\" class=\"contact-item\">\\n' + '                    <svg class=\"icon\"><use xlink:href=\"#icon-location\"></use></svg>\\n' + '                    <span>г. Москва,<br> ул. Салтыковская, д. 8, офис 208</span>\\n' + '                  </a>\\n' + '                  <div class=\"contact-item\">\\n' + '                    <svg class=\"icon\"><use xlink:href=\"#icon-phone\"></use></svg>\\n' + '                    <span class=\"phone\">\\n' + '                      <span>\\n' + '                        <span>тел.: </span>\\n' + '                        <a href=\"tel:84953801078\">(495) 380-10-78, </a>\\n' + '                      </span>\\n' + '                      <span>\\n' + '                        <span>факс: </span>\\n' + '                        <a href=\"tel:84992703888\">(499) 270-38-88</a>\\n' + '                      </span>\\n' + '                    </span>\\n' + '                  </div>\\n' + '                  <a href=\"mailto:info@capital-energo.ru\" class=\"contact-item\">\\n' + '                    <svg class=\"icon\"><use xlink:href=\"#icon-mail\"></use></svg>\\n' + '                    <span>info@capital-energo.ru</span>\\n' + '                  </a>\\n' + '\\n' + '                </div>\\n' + '              </div>\\n';\nymaps.ready(init);\n\nfunction init() {\n  // Создание карты.\n  var myMap = new ymaps.Map(\"map\", {\n    // Координаты центра карты.\n    // Порядок по умолчанию: «широта, долгота».\n    // Чтобы не определять координаты центра карты вручную,\n    // воспользуйтесь инструментом Определение координат.\n    center: [55.72701906902205, 37.86047699999994],\n    // Уровень масштабирования. Допустимые значения:\n    // от 0 (весь мир) до 19.\n    zoom: 16,\n    controls: ['zoomControl']\n  });\n  myMap.geoObjects.add(new ymaps.Placemark([55.72701906902205, 37.86047699999994], {\n    balloonContent: baloon\n  }, {\n    preset: 'islands#icon',\n    iconColor: '#6bc02f'\n  }));\n}\n\n//# sourceURL=webpack:///./src/js/yamap.js?");

/***/ })

/******/ });