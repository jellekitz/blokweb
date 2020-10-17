// JavaScript Document

var toggleButton = document.querySelector('#hamburger-icon'); // het aanroepen van de button
var closeButton = document.querySelector('.close'); // het aanroepen van het kruisje
var fullScreenNavigation = document.querySelector('.fullscreen-navigation'); // het aanroepen van het verborgen menu

var toggleFooterButton = document.querySelector('.liButton'); // het aanroepen van de button
var footerContainer = document.querySelector('.ul-container'); // het aanroepen van de ul-container
var arrow = document.querySelector('.liButton span'); // het aanroepen van het pijltje dat 180 graden draait bij een click

function toggle( event ) {
    fullScreenNavigation.classList.toggle('none'); // function voor het toggelen van het hamburger icoon
}

function toggleUl( event ) {
    footerContainer.classList.toggle('ul-container'); // function voor het toggelen van het footer item
    arrow.classList.toggle('arrow-animation'); // draait het pijl icoon 180 graden wanneer je er op klikt
}

toggleButton.addEventListener('click', toggle); // click voor het hamburger icoon
closeButton.addEventListener('click', toggle); // click voor de close button

toggleFooterButton.addEventListener('click', toggleUl); // click voor het openen van het footer item
