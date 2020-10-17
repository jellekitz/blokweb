// JavaScript Document

var toggleButton = document.querySelector('#hamburger-icon');
var closeButton = document.querySelector('.close');
var fullScreenNavigation = document.querySelector('.fullscreen-navigation');

var toggleFooterButton = document.querySelector('.liButton');
var footerContainer = document.querySelector('.ul-container');
var arrow = document.querySelector('.liButton span');

function toggle( event ) {
    fullScreenNavigation.classList.toggle('none');
}

function toggleUl( event ) {
    footerContainer.classList.toggle('ul-container');
    arrow.classList.toggle('arrow-animation');
}

toggleButton.addEventListener('click', toggle);
closeButton.addEventListener('click', toggle);

toggleFooterButton.addEventListener('click', toggleUl);
