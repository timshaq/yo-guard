export default function () {


const btnOpen = document.getElementById('filter-btn');
if(!btnOpen) return;


const btnClose = document.getElementById('filter-btn-close');
const filterBox = document.getElementById('filter-popup');
const btnShow = filterBox.querySelector('.catalog-filter__submit');


const ACTIVE_CLASS = 'active-filter';

function disableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'hidden';
}

function enableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'scroll';
}

function closeEl(el) {
	el.classList.remove(ACTIVE_CLASS);
	enableScroll();
}

function openEl(el) {
	el.classList.add(ACTIVE_CLASS);
	disableScroll();
}

btnOpen.addEventListener('click', function() {

	openEl(filterBox);

})

btnClose.addEventListener('click', function() {

	closeEl(filterBox);

})

btnShow.addEventListener('click', function() {

	if(filterBox.classList.contains(ACTIVE_CLASS)) {
		closeEl(filterBox);
	}

})


//  SLIDE RANGE NOUISLIDER

const priceSlidersNL = document.querySelectorAll('.price-slider');

const priceSliders = Array.prototype.slice.call(priceSlidersNL);


priceSliders.forEach(slider => {
	var stepsSlider = slider
	var input0 = slider.querySelector('.slider-input1');
	var input1 = slider.querySelector('.slider-input2');
	var inputs = [input0, input1];
	var min = parseInt(slider.getAttribute('data-min'))
	var max = parseInt(slider.getAttribute('data-max'))
	var start = 10*max/100
	var end = 90*max/100
	var symbol = slider.getAttribute('data-symbol')
	noUiSlider.create(stepsSlider, {
	    start: [start, end],
	    connect: [false,true,false],
	    range: {
	        'min': [min],
	        'max': max
	    },
	    format: {
	    	to: function(val) {
	    		return Math.ceil(val) + ` ${symbol}`;
	    	},
	    	from: function(val) {
	    		return val.replace(` ${symbol}`, '');
	    	},
	    }
	});
	stepsSlider.noUiSlider.on('update', function (values, handle) {
	    inputs[handle].value = values[handle];
	});
})

}