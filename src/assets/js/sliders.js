export default function () {

	const bannersSlider = new Swiper('#banners-slider', {
		navigation: {
			prevEl: '#banners-slider-nav-prev',
			nextEl: '#banners-slider-nav-next',
			disabledClass: 'disable',
		},
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		disabledClass: 'nav-disable'

	})

	const featuresSlider = new Swiper('#features-slider', {
		navigation: {
			prevEl: '#features-slider-nav-prev',
			nextEl: '#features-slider-nav-next',
			disabledClass: 'disable',
		},
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		disabledClass: 'nav-disable'

	})

    const productPageThumbNail = new Swiper("#productPageThumbNail", {
        spaceBetween: 15,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    });

    const productPageLarge = new Swiper("#productPageLarge", {
        spaceBetween: 10,
        thumbs: {
            swiper: productPageThumbNail,
        },
    });

	const galleryEl = document.getElementById('lightgallery');

	if(!galleryEl) return;

	lightGallery(galleryEl, {
		download: false,
		thumbnail: true,
		speed: 400,
		mousewheel: true,
	})

}