export default function () {

	function setAdaptiveSlider(el, match, config) {

		const sliderEl = el;
		if(!sliderEl) return

		const breakpointMob = window.matchMedia(`(min-width:${match}px)`)

		let slider;

		const enableSlider = function() {
			slider = new Swiper(sliderEl, config)
		}

		const breakpointChecker = function() {
			if(breakpointMob.matches === true) {
				if(slider !== undefined) slider.destroy(true,true);
				return;
			} else if (breakpointMob.matches === false) {
				return enableSlider();
			}
		}
		breakpointMob.addListener(breakpointChecker);
		breakpointChecker();
	}

	const vacantPremisesSlider = document.querySelector('#vacant-premises-slider')

	if(vacantPremisesSlider) {
		setAdaptiveSlider(vacantPremisesSlider, 1200, {
				breakpoints: {
					0: {
						slidesPerView: 1,
						spaceBetween: 10,
						pagination: {
							el: '#vacant-premises-slider-pagination',
							type: 'bullets',
						}
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 10,
						pagination: {
							el: '#vacant-premises-slider-pagination',
							type: 'bullets',
						}
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
						pagination: {
							el: '#vacant-premises-slider-pagination',
							type: 'bullets',
						}
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 10,
						pagination: {
							el: '#vacant-premises-slider-pagination',
							type: 'bullets',
						}
					}
				}
			})
	}

}