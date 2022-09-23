var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.header-burgernav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
}); 