'use strict';


//=============/=============/ BURGER /=============/=============

const $burger = document.querySelector('._burger');
const $menu = document.querySelector('.menu');
const $menuItems = document.querySelectorAll('.menu__item');
const $body = document.body;
const $header = document.querySelector('.header');
const headerHeight = $header.offsetHeight;
console.log(headerHeight);
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

$burger.addEventListener('click', () => {
	$body.classList.toggle('_stop-scroll');
	$burger.classList.toggle('_burger--active');
	$menu.classList.toggle('menu--active');
});

$menuItems.forEach((el) => {
	el.addEventListener('click', () => {
		$body.classList.remove('_stop-scroll');
		$burger.classList.remove('_burger--active');
		$menu.classList.remove('menu--active');
	})
});

