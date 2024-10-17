document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
        document.querySelector('.welcome-part>header').classList.add('change-navbar')
    } else {
        document.querySelector('.welcome-part>header').classList.remove('change-navbar')
    }
})
AOS.init();

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});