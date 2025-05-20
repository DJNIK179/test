(function () {


    //Бургер


    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger_icon')
        const burgerNavLink = e.target.closest('.header__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1000) return

        if (!document.body.classList.contains('body--opened__menu')) {
            document.body.classList.add('body--opened__menu')
        }
        else {
            document.body.classList.remove('body--opened__menu')
        }

    }


    //Модалка


    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img--button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened__modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened__modal')
        }
    }

    //Табы

    const tabControls = document.querySelector('.program__tab-list')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.program__tab-link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('program__tab-link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.program__tab-link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('program__tab-link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('program__tab-link--active')
        tabContent.classList.add('tab-content--show')

    }


    //Аккордеон


    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(eL => {

        eL.addEventListener('click', (e) => {

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });


    // Свайпер--Галлерея

    new Swiper('.swiper', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            // when window width is >= 320px
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }

    });


    // Свайпер--Галлерея


    new Swiper('.testimonials__swiper', {

        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.testimonials__scrollbar',
            draggable: true,    
        },

        breakpoints: {

            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }
    });


    // Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')

    const im = new Inputmask ('+7 (999) 999-99-99')
    im.mask(telInputs)

    
})()    