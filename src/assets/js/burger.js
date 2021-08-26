export default function () {


const btnBurger = document.getElementById('burger-btn');
if(!btnBurger) return;

const btnBurgerClose = document.getElementById('burger-btn-close');
const header = document.getElementById('header');

const ACTIVE_CLASS = 'burger-active';

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

btnBurger.addEventListener('click', function() {

	openEl(header);

})

btnBurgerClose.addEventListener('click', function() {

	closeEl(header);

})


}