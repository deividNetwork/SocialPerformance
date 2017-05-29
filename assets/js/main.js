$(document).ready(function () {
    var app = {
        init: function () {
            menuMobile.init();
            owlCarousel.init();
        }
    };

    var menuMobile = {
        selector: 'header .top .menu .menu-mobile',

        init: function () {
            this.element = $(this.selector);

            this.bindEvents();
        },

        bindEvents: function () {
            this.element.bind('click', this.toggleMenu);
        },

        toggleMenu: function () {
            $(this).toggleClass('open');
        }
    };

    var owlCarousel = {
        selector: '.owl-carousel',

        itemsOnDesktop: 1,

        init: function () {
            this.element = $(this.selector);

            if (this.element.data('items-on-desktop') != undefined) {
                this.itemsOnDesktop = parseInt(owlCarousel.element.data('items-on-desktop'));
            }

            if (this.element.length) {
                this.bindEvents();
            }
        },

        bindEvents: function () {
            this.element.owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    1000: {
                        items: owlCarousel.itemsOnDesktop
                    }
                }
            });
        }
    };

    app.init();
});