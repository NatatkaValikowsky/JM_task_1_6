document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.ui-button--menu'),
    closeButton = document.querySelector('.menu .ui-button--close'),
    menu = document.querySelector('.menu'),
    menuWrapper = document.querySelector('.overlay--menu');

  menuButton.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.add('menu--opened');
    menuWrapper.classList.add('overlay--active');
  });

  closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.remove('menu--opened');
    menuWrapper.classList.remove('overlay--active');
  });

  menuWrapper.addEventListener('click', function (event) {
    event.preventDefault();
    if(event.target === menuWrapper){
      menu.classList.remove('menu--opened');
      menuWrapper.classList.remove('overlay--active');
    }
  });

});
