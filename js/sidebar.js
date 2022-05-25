document.addEventListener('DOMContentLoaded', () => {

	// получаем все элементы с классом pushmenu
	const pushmenu = document.getElementsByClassName('menu-mobile__button');

	// получаем элемент с классом hidden-overley
	const hiddenOverley = document.querySelector('.menu-mobile__overlay');

	// отслеживаем клик клика по оверлею
	hiddenOverley.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('show');
		document.querySelector('.menu-mobile__nav').classList.toggle('show');
		
		for( i=0; i < pushmenu.length; i++ ){
				pushmenu[i].classList.toggle('mobile-menu_active');
		}
	});

	const pushmenuFunction = function() {
		document.querySelector('.menu-mobile__button').classList.toggle('mobile-menu_active');
		document.querySelector('.menu-mobile__nav').classList.toggle('show');
		document.querySelector('.menu-mobile__overlay').classList.toggle('.mobile-menu_active');
	};

	// Отслеживаем клики кнопок с классом pushmenu 
	for( i=0; i < pushmenu.length; i++ ){
		pushmenu[i].addEventListener('click', pushmenuFunction, false);
	}

	// Получим все родительские элементы в меню
	const sidebarAccordeon = document.querySelectorAll('.burger-menu .menu-mobile__nav a:first-child');
	const accordeonFunction =  function() { 
		this.parentNode.querySelector('ul').classList.toggle('show');
		this.querySelector('i').classList.toggle('rotate');
	}
	// Отслеживаем клики родительских пунктов меню 
	for( i=0; i < sidebarAccordeon.length; i++ ){
		sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
	}
});