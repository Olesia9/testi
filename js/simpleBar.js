const header = document.querySelector('.header__top');
const headerH = document.querySelector('.header__top').clientHeight;
const titleHead = document.querySelector('.header__content-title');
const burgerBtn =document.querySelector('.menu-mobile__button');

console.log(headerH)

document.onscroll = function () {
    let scroll = window.scrollY;

    console.log(scroll)

    if (scroll > headerH) {
        header.classList.add('header__top--fixed');
        titleHead.style.paddingTop = headerH + 'px';
        burgerBtn.style.zIndex = '999';
        burgerBtn.classList.add('menu-mobile__button--bot')
    } else {
    }
}