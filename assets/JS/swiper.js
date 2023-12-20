import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

let swiper = new Swiper('.swiper', {
    spaceBetween:30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        clickable: true,
    },
    breakpoints: {


        1668: {
            slidesPerView:5
        },
        1306: {
            slidesPerView:4
        },
        1291: {
            slidesPerView:4
        },
        1000: {
            slidesPerView:4
        },
        800: {
            slidesPerView:3
        },
        722: {
            slidesPerView:3
        },
        472: {
            slidesPerView:3,
            spaceBetween:10,

        },
        390: {
            slidesPerView:2,
            spaceBetween:10,

        },

        300: {
            slidesPerView:2
        },

    },
});
let swiperBanner = new Swiper('.swiper_banner', {
    dots:true,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {


    },
});

let swiperDishes = new Swiper('.swiper_recommended_dishes', {
    slidesPerView: 4,
    spaceBetween:30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1840: {
            slidesPerView:4
        },
        1668: {
            slidesPerView:3
        },
        1306: {
            slidesPerView:3
        },
        1291: {
            slidesPerView:3
        },
        1000: {
            slidesPerView:3
        },
        800: {
            slidesPerView:2
        },
        722: {
            slidesPerView:2
        },
        390: {
            spaceBetween:10,
            slidesPerView:2
        },
        300: {
            slidesPerView:1
        },

    },
});

