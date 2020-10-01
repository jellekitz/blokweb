// JavaScript Document

var toggleButton = document.querySelector('#hamburger-icon');
var closeButton = document.querySelector('.close');
var fullScreenNavigation = document.querySelector('.fullscreen-navigation');

function toggle( event ) {
    fullScreenNavigation.classList.toggle('none') ;
}

toggleButton.addEventListener('click', toggle);
closeButton.addEventListener('click', toggle);