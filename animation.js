handleScroll();

function handleScroll() {
    const elements = document.querySelectorAll('.animation');
    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

        if (isElementVisible) {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);




document.addEventListener('DOMContentLoaded', function () {
        let parallaxCategories = document.querySelector('.parallax_categories');

        if(parallaxCategories){
            window.addEventListener('scroll', function () {
                if (window.scrollY > 0) {
                    parallaxCategories.classList.add('active');
                } else {
                    parallaxCategories.classList.remove('active');
                }
            });
        }


});
document.addEventListener('DOMContentLoaded', function () {
    let parallaxItems = document.querySelectorAll('.parallax_categories_item');
    let parallaxTexts = document.querySelectorAll('.parallax_categories_text');

    if (parallaxItems && parallaxTexts) {
        window.addEventListener('scroll', function () {
            parallaxItems.forEach(function (item, index) {
               let textItem = parallaxTexts[index];
                if (!textItem) {
                    return;
                }

                let sectionId = item.getAttribute('data-section-id');
                let section = document.querySelector('[data-section-id="' + sectionId + '"]');
                let rect = section.getBoundingClientRect();
                let centerY = window.innerHeight / 2;
                let isCentered = rect.top <= centerY && rect.bottom >= centerY;

                if (isCentered) {
                    item.classList.add('active');
                    textItem.classList.add('active');

                } else {
                    item.classList.remove('active');
                    textItem.classList.remove('active')
                }


            });
        });
    }
});



// document.addEventListener('DOMContentLoaded', function () {
//     const items = document.querySelectorAll('.product_item');
//
//
//     function handleScroll() {
//         items.forEach((item,index) => {
//             const elementRect = item.getBoundingClientRect();
//             const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;
//             if (isElementVisible) {
//                 setTimeout(() => {
//                     item.classList.add('visible');
//                 }, index * 60);
//             } else {
//                 setTimeout(() => {
//                     item.classList.remove('visible');
//                 }, index * 60);
//             }
//         });
//
//     }
//
//
//
//     handleScroll();
//     window.addEventListener('scroll', handleScroll);
// });

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.product_item');

    function animateVisibility(item, isVisible, index) {
        const delay = index * 20;
        setTimeout(() => {
            if (isVisible) {
                item.classList.add('visible');
            }
        }, delay);
    }

    function handleScroll() {
        items.forEach((item, index) => {
            const elementRect = item.getBoundingClientRect();
            const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

            animateVisibility(item, isElementVisible, index);
        });
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);
});
