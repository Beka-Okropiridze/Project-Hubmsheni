// menu
// burger-menus animacia js nawili
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.header-burgernav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
}); 

// burger-menu lists gaqroba gamochena
var burgerlist = document.querySelector('.nav-list');

toggleButton.addEventListener('click', () =>  {
    if(burgerlist.style.display === 'none') {
        burgerlist.style.display = 'block';
    } else {
        burgerlist.style.display = 'none';
    }
})
// end menu
