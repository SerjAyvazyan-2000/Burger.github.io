const burger = document.querySelector('.burger_menu');
const menu = document.querySelector('.header_menu');
const menuClose = document.querySelector('.menu_close_image');


const labelCheek = document.querySelector('.save_cart_details');

document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuClose.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        }
    });


    function openMenu() {
        menu.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');

    }


});

document.addEventListener('DOMContentLoaded', function () {
    const position = {lat: 40.172747, lng: 44.514032};
    let map = new google.maps.Map(document.getElementById("map"), {
        center: position,
        zoom: 18,
        zoomControl: false,
        draggable: false,
        gestureHandling: 'none',
        mapId: "DEMO_MAP_ID",
        mapTypeId: 'terrain',

    });
    const marker = new google.maps.Marker({
        map: map,
        position: position,
        title: "Uluru",
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.price_counter');

    counters.forEach(function (counter) {
        const counterCountElement = counter.querySelector('.counter_count');
        const btnIncrement = counter.querySelector('.btn_increment');
        const btnDecrement = counter.querySelector('.btn_decrement');

        let counterValue = 1;


        const updateCounterText = () => {
            counterCountElement.textContent = counterValue;
        };

        btnIncrement.addEventListener('click', function () {
            counterValue++;
            updateCounterText();
        });

        btnDecrement.addEventListener('click', function () {
            if (counterValue > 0) {
                counterValue--;
                updateCounterText();
            }
        });
        updateCounterText()

    });

});


function movePromoCode() {
    const screenWidth = window.innerWidth;
    const promoCode = document.querySelector('.basket_promo_code');
    const promoCheckout = document.querySelector('.promo_code_checkout');
    const cartOrder = document.querySelector('.cart_order_block');
    const cartLeftBlock = document.querySelector('.cart_left_products_block');
    const paymentBox = document.querySelector('.cart_payment_box');
    const payment = document.querySelector('.cart_payment');


    const getThereBlock = document.querySelector('.get_there_block');
    const checkoutTools = document.querySelector('.checkout_tolls');
    const backBlock = document.querySelector('.back_btn');

    if (cartLeftBlock && cartOrder && paymentBox && promoCode) {
        if (screenWidth <= 1102) {
            cartOrder.appendChild(promoCode);
            paymentBox.appendChild(getThereBlock)
        } else {
            cartLeftBlock.insertBefore(promoCode, cartLeftBlock.lastChild);
            payment.insertBefore(getThereBlock, payment.lastChild)
        }
    }

    if (promoCheckout && cartLeftBlock) {
        if (screenWidth <= 1102) {
            cartOrder.appendChild(promoCheckout);
            paymentBox.appendChild(getThereBlock)
            paymentBox.appendChild(backBlock)
        } else {
            // cartLeftBlock.insertBefore(promoCode, cartLeftBlock.lastChild);
            payment.insertBefore(getThereBlock, payment.lastChild)
            paymentBox.appendChild(promoCheckout)
            checkoutTools.insertBefore(backBlock, checkoutTools.firstChild);

        }
    }

}


let counterAdded = false;
let counterAddedToProductTools = true;

function movePriceCounter() {
    const screenWidth = window.innerWidth;
    const priceBlocks = document.querySelectorAll('.info_price_block');
    const productPriceTools = document.querySelectorAll('.product_price_tools');
    const priceCounter = document.querySelector('.price_counter');
    if (screenWidth <= 767) {
        if (!counterAdded) {
            priceBlocks.forEach(priceBlock => {
                priceBlock.appendChild(priceCounter.cloneNode(true));
            });
            counterAdded = true;

        }
        if (counterAddedToProductTools) {
            productPriceTools.forEach(productTools => {
                const counterInProductTools = productTools.querySelector('.price_counter');
                if (counterInProductTools) {
                    productTools.removeChild(counterInProductTools);
                }
            });
            counterAddedToProductTools = false;
        }
    } else {
        if (counterAdded) {
            priceBlocks.forEach(priceBlock => {
                const counterInBlock = priceBlock.querySelector('.price_counter');
                if (counterInBlock) {
                    priceBlock.removeChild(counterInBlock);
                }
            });
            counterAdded = false;
        }
        if (!counterAddedToProductTools) {
            productPriceTools.forEach(productTools => {

                productTools.insertBefore(priceCounter.cloneNode(true), productTools.firstChild);
            });
            counterAddedToProductTools = true;
        }
    }


}

function moveFooterLogo() {

    const screenWidth = window.innerWidth;
    const footerMobile = document.querySelector('.footer_info_block_mobil');
    const footerContent = document.querySelector('.footer_content');

    const outLogo = document.querySelector('.footer_out_logo');
    const footerLogos = document.querySelector('.footer_mobil_logos');
    const footer = document.querySelector('.footer');
    const footerEnd = document.querySelector('.footer_finish');


    if (screenWidth <= 700) {
        if (footerLogos && outLogo) {
            footerLogos.appendChild(outLogo);
            footerMobile.appendChild(footerEnd)
        }
    } else {
        footer.insertBefore(outLogo, footer.firstChild);
        // footerContent.insertBefore(footerEnd,footerContent.firstChild)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    movePriceCounter();
    movePromoCode()
    moveFooterLogo()
});


window.addEventListener('resize', () => {
    movePromoCode()
    moveFooterLogo()
    movePriceCounter()
});
document.addEventListener('DOMContentLoaded', function () {
    let categoriesList = document.querySelectorAll('.header_categories_item')

    if (categoriesList && categoriesList.length) {
        categoriesList.forEach((item, index) => {
            item.addEventListener('click', function () {
                let sectionId = item.getAttribute('data-id');
                let section = document.querySelector('[data-section-id="' + sectionId + '"]');

                if (section) {
                    let offset = section.getBoundingClientRect().top + window.scrollY - 190;
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                } else {
                    console.log('Элемент section не найден для data-section-id:', sectionId);
                }

            });
        })

    }


});
document.addEventListener('DOMContentLoaded', function () {
    let lastSection = document.querySelector('.section_drinks')
    let parallaxBlock = document.querySelector('.parallax_categories')
    let mapSection = document.querySelector('.section_map')


    let parallaxList = document.querySelectorAll('.parallax_categories_item')
    if (parallaxList && parallaxList.length) {
        parallaxList.forEach((item, index) => {
            item.addEventListener('click', function () {
                let sectionId = item.getAttribute('data-section-id');
                let section = document.querySelector('[data-section-id="' + sectionId + '"]');

                if (section) {
                    let offset = section.getBoundingClientRect().top + window.scrollY - 190;
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                } else {
                    console.log('Элемент section не найден для data-section-id:', sectionId);
                }

            });


        })
    }

    function isSectionBottomVisible() {
        if (lastSection) {
            let rect = lastSection.getBoundingClientRect();
            return rect.bottom >= 0 && rect.bottom <= window.innerHeight;
        }

    }

    function isMapSectionTopVisible() {
        if (mapSection) {
            let rect = mapSection.getBoundingClientRect();
            return rect.bottom >= 0 && rect.bottom <= window.innerHeight;
        }

    }

    function handleScroll() {
        if (isSectionBottomVisible() && parallaxBlock) {
            parallaxBlock.classList.remove('active')
        }
        if (isMapSectionTopVisible() && parallaxBlock) {
            parallaxBlock.classList.remove('active')

        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function () {
    const subListTitles = document.querySelectorAll('.sub_list_title');

    subListTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            const subListBody = this.nextElementSibling;
            const isActive = subListBody.classList.contains('active');
            if (isActive) {
                subListBody.classList.remove('active');
                title.classList.remove('active');

            } else {
                const activeSubListBody = document.querySelector('.sub_list_body.active');
                const activeSubListTitle = document.querySelector('.sub_list_title.active');
                if (activeSubListBody && activeSubListTitle) {
                    activeSubListBody.classList.remove('active');
                    activeSubListTitle.classList.remove('active');
                }
                subListBody.classList.add('active');
                title.classList.add('active');

            }
        });
    });
});
const handleChangeCheek = () => {
    console.log(labelCheek)
    if (labelCheek.classList.contains('active')) {
        labelCheek.classList.remove('active');
    } else {
        labelCheek.classList.add('active');
    }
};


document.addEventListener('DOMContentLoaded', function () {
    let titleBlocks = document.querySelectorAll('.jobs_list .job_item_title_block');
    let subLists = document.querySelectorAll('.jobs_list .job_sub_list');
    if (titleBlocks && subLists) {
        titleBlocks.forEach(function (titleBlock, index) {
            titleBlock.addEventListener('click', function (event) {
                titleBlock.classList.toggle('active');
                subLists[index].classList.toggle('active');

                titleBlocks.forEach(function (otherTitleBlock, otherIndex) {
                    if (otherTitleBlock !== titleBlock) {
                        otherTitleBlock.classList.remove('active');
                        subLists[otherIndex].classList.remove('active');
                    }
                });

                event.stopPropagation();
            });
        });

    }

});
document.addEventListener('DOMContentLoaded', function () {

    let productImages = document.querySelectorAll('.product_item_image');

    productImages.forEach(function (productImage) {
        productImage.addEventListener('mouseover', function () {
            this.querySelector('.product_img_hover').classList.add('active');

            this.querySelector('.product_img').classList.add('disable');
        });

        productImage.addEventListener('mouseout', function () {
            this.querySelector('.product_img_hover').classList.remove('active');

            this.querySelector('.product_img').classList.remove('disable');
        });
    });

});
document.addEventListener('DOMContentLoaded', function () {

    const cardList = document.querySelectorAll('.checkout_payment_item')

    if (cardList) {
        cardList.forEach((item) => {
            item.addEventListener('click', function () {
                cardList.forEach((otherItem) => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        });
    }


});
document.addEventListener('DOMContentLoaded', function () {

    const openSubMenu = document.querySelector('.sub_menu_btn')
    const subMenu = document.querySelector('.categories_sub_list')
    const subArrow = document.querySelector('.sub_icon')



    if (openSubMenu && subMenu) {
        openSubMenu.addEventListener('click', function () {
            if (subMenu !== subMenu && subMenu.classList.contains('active')) {
                subMenu.classList.remove('active');
                subArrow.classList.remove('active')
            }
            subMenu.classList.toggle('active');
            subArrow.classList.toggle('active')

        });
    }


});







