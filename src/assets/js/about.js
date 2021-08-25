export default function () {

	const tabsNL = document.querySelectorAll('.about__tab-box .about__tab');
	const tabs = Array.prototype.slice.call(tabsNL);

	if(!tabs.length) return;

	const ACTIVE_CLASS = 'active';

	const itemsNL = document.querySelectorAll('.about__content .about__content-item');
	const items = Array.prototype.slice.call(itemsNL);

	tabs.forEach((tab,i) => {
		tab.addEventListener('click', function() {
			if(tab.classList.contains(ACTIVE_CLASS)) return;
			items.forEach(item => item.classList.remove(ACTIVE_CLASS))
			tabs.forEach(item => item.classList.remove(ACTIVE_CLASS))
			items[i].classList.add(ACTIVE_CLASS)
			tab.classList.add(ACTIVE_CLASS)
		})
	})

}