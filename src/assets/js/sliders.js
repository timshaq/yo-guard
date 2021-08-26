export default function () {

	const bannersSlider = new Swiper('#banners-slider', {
		navigation: {
			prevEl: '#banners-slider-nav-prev',
			nextEl: '#banners-slider-nav-next',
			disabledClass: 'disable',
		},
		loop: true,
		disabledClass: 'nav-disable',
		breakpoints: {
			0: {
				pagination: {
					el: '#banners-slider-pagination',
					type: 'bullets',
				},
				slidesPerView: 1,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
		}

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
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    	breakpoints: {
    		0: {
		        spaceBetween: 15,
		        slidesPerView: 2,
        		direction: 'horizontal',
    		},
    		576: {
		        spaceBetween: 15,
		        slidesPerView: 3,
        		direction: 'horizontal',
    		},
    		1366: {
		        spaceBetween: 15,
		        slidesPerView: 3,
        		direction: 'vertical',
    		},
    	}
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