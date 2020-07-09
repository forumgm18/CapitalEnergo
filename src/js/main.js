// import $ from "jquery"; // импортируем через webpack как плагин в gulpfile чтобы библиотека была доступна глобально.

// import Swiper from 'swiper';
// import '../plugins/jquery.fancybox.min.js';
// import Inputmask from "inputmask";


import './include/svg.js';
// import '../js/yamap.js';

let setLocalization = function(e){
    e.preventDefault();
    e.currentTarget.parentNode.querySelectorAll('.active').forEach(function (el) {
        el.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
}

let toggleMenu = function(e){
    e.preventDefault();
    e.currentTarget.closest('.menu-block').classList.toggle('open')
    e.currentTarget.closest('header').classList.toggle('open')

}

document.querySelectorAll('.localization-link').forEach(item => {
    item.addEventListener('click', setLocalization);
});

document.querySelectorAll('.btn-menu').forEach(item => {
    item.addEventListener('click', toggleMenu);
});

$(document).ready(function () {

    $('.scrollbar-inner').scrollbar();

    let showSliderNav = function(nav, ind, count) {
        if (ind==1) {
            $(nav + ' .slider-nav-prev').hide();
        } else {
            $(nav + ' .slider-nav-prev').show();
        }

        if (ind==count) {
            $(nav + ' .slider-nav-next').hide();
        } else {
            $(nav + ' .slider-nav-next').show();
        }

    }

    let servicesSliderPagination = $('.services-block .slider-pagination');
    let servicesSlider = $('.services-slider');
    servicesSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        let i = (currentSlide ? currentSlide : 0) + 1;
        servicesSliderPagination.html('<span>' + i +'</span>/<span>' + slick.slideCount + '</span>');
        showSliderNav('.services-block', i, slick.slideCount);
    });
    servicesSlider.slick({
        dots: false,
        infinite: false,
        // speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow :".services-block .slider-nav-prev",
        nextArrow: ".services-block .slider-nav-next",

        responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
            {
                breakpoint: 992,
                settings: {
                    variableWidth: true

                }
            }
        ]
    });

    // let knowSliderPagination = $('.know-block .slider-pagination');
    let knowSlider = $('.know-slider');
    knowSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        let i = (currentSlide ? currentSlide : 0) + 1;
        // knowSliderPagination.html('<span>' + i +'</span>/<span>' + slick.slideCount + '</span>');
        showSliderNav('.know-block', i, slick.slideCount);
    });

    knowSlider.slick({
        dots: false,
        // infinite: false,
        infinite: true,
        // autoplay: true,

        // speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        // slidesPerRow: 4,
        rows: 2,
        prevArrow :".know-block .slider-nav-prev",
        nextArrow: ".know-block .slider-nav-next",

        responsive: [
            // {
            //     breakpoint: 1200,
            //     settings: {
            //         variableWidth: true,
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     }
            // },
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            },
        ]
    });

    let galerySliderPagination = $('.galery-block .slider-pagination');
    let galerySlider = $('.galery-slider');
    galerySlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        let i = (currentSlide ? currentSlide : 0) + 1;
        // galerySliderPagination.html('<span>' + i +'</span>/<span>' + slick.slideCount + '</span>');
        galerySliderPagination.html('<span>' + i * slick.options.rows +'</span>/<span>' + slick.options.rows * slick.slideCount + '</span>');
        showSliderNav('.galery-block', i, slick.slideCount);
    });

    galerySlider.slick({
        dots: false,
        // infinite: false,
        infinite: true,
        // autoplay: true,

        // speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        // slidesPerRow: 4,
        rows: 2,
        prevArrow :".galery-block .slider-nav-prev",
        nextArrow: ".galery-block .slider-nav-next",

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    slidesPerRow: 1,

                }
            },
        ]
    });



    // let brandSliderPagination = $('.brand-block .slider-pagination');
    let brandSlider = $('.brand-slider');
    brandSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        let i = (currentSlide ? currentSlide : 0) + 1;
        // brandSliderPagination.html('<span>' + i +'</span>/<span>' + slick.slideCount + '</span>');
        showSliderNav('.brand-block', i, slick.slideCount);
    });
    brandSlider.slick({
        dots: false,
        infinite: true,
        // speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,

        prevArrow :".brand-block .slider-nav-prev",
        nextArrow: ".brand-block .slider-nav-next",

        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });




    $('.select-value').on('click',function () {
        if($(this).hasClass('open')){
            $(this).siblings('input').val('');
            $(this).find('span').text($(this).attr('data-placeholder'));
        }
        $(this).toggleClass('open');
    });

    $('.select-dropdown li').on('click',function () {
        let parent = $(this).parent();

        $(parent).siblings('.select-value').removeClass('open');
        $(parent).siblings('input').val($(this).attr('data-value'));
        $(parent).siblings('.select-value').find('span').text($(this).text());
    });

    $('[data-type=collapse]').on('click',function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).closest('.project-item').toggleClass('open');

        // if ($(window).width()<577) {
        //     $(this).closest('.project-item').find('.project-text').scrollbar('destroy');
        // }





    });

    $('.file-input input').on('change',function (e) {
        let placeholder = this.closest('.file-input').dataset.placeholder;
        let span = this.parentNode.previousElementSibling;
        if (this.value != '') {
            span.innerText = this.files[0].name
        } else {
            span.innerText = placeholder
        }
    })


});

