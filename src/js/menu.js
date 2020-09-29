document.addEventListener('DOMContentLoaded', function () {
  const buttonOpenMenu = document.querySelector('.ui-button--menu'),
        buttonCloseMenu = document.querySelector('.menu .ui-button--close'),
        menu = document.querySelector('.menu'),
        overlayMenu = document.querySelector('.overlay--menu'),
        overlayModal = document.querySelector('.overlay--modal');

  buttonOpenMenu.addEventListener('click', buttonOpenMenuClickHandler);

  function buttonOpenMenuClickHandler(event){
    event.preventDefault();
    openMenu();
    buttonOpenMenu.removeEventListener('click', openMenu);
    buttonCloseMenu.addEventListener('click', buttonCloseMenuClickHandler);
    overlayMenu.addEventListener('click', overlayMenuClickHandler);
    document.addEventListener('keyup', menuKeyUpHandler);
  }

  function buttonCloseMenuClickHandler(event){
    event.preventDefault();
    menuCloseHandlers();
  }

  function overlayMenuClickHandler(event){
    event.preventDefault();
    menuCloseHandlers();
  }

  function menuKeyUpHandler(event){
    event.preventDefault();
    let isEsc = event.code === 'Escape';
    if(isEsc && !(overlayModal.classList.contains('overlay--active'))){
      menuCloseHandlers();
    }
  }

  function menuCloseHandlers(){
    closeMenu();
    buttonCloseMenu.removeEventListener('click', buttonCloseMenuClickHandler);
    overlayMenu.removeEventListener('click', overlayMenuClickHandler);
    buttonOpenMenu.addEventListener('click', buttonOpenMenuClickHandler);
    document.removeEventListener('keyup', menuKeyUpHandler);
  }

  function openMenu(){
    menu.classList.add('menu--opened');
    overlayMenu.classList.add('overlay--active');
  }

  function closeMenu(){
    menu.classList.remove('menu--opened');
    overlayMenu.classList.remove('overlay--active');
  }
});
