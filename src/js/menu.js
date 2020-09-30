document.addEventListener('DOMContentLoaded', function () {
  const buttonOpenMenu = document.querySelector('.ui-button--menu'),
        buttonCloseMenu = document.querySelector('.menu__close-button'),
        menu = document.querySelector('.menu'),
        overlayMenu = document.querySelector('.overlay--menu'),
        overlayModal = document.querySelector('.overlay--modal');

  function buttonOpenMenuClickHandler(event){
    event.preventDefault();
    openMenu();
    buttonOpenMenu.removeEventListener('click', openMenu);
    buttonCloseMenu.addEventListener('click', buttonCloseMenuClickHandler);
    overlayMenu.addEventListener('click', overlayMenuClickHandler);
    document.addEventListener('keyup', escapeKeyDownHandler);
  }

  function buttonCloseMenuClickHandler(event){
    event.preventDefault();
    closeMenu();
    closeHandlersWorker();
  }

  function overlayMenuClickHandler(event){
    event.preventDefault();
    closeMenu();
    closeHandlersWorker();
  }

  function escapeKeyDownHandler(event){
    event.preventDefault();
    let isEsc = event.code === 'Escape';
    if(isEsc && !(overlayModal.classList.contains('overlay--active'))){
      closeMenu();
      closeHandlersWorker();
    }
  }

  function closeHandlersWorker(){
    buttonCloseMenu.removeEventListener('click', buttonCloseMenuClickHandler);
    overlayMenu.removeEventListener('click', overlayMenuClickHandler);
    buttonOpenMenu.addEventListener('click', buttonOpenMenuClickHandler);
    document.removeEventListener('keyup', escapeKeyDownHandler);
  }

  function openMenu(){
    menu.classList.add('menu--opened');
    overlayMenu.classList.add('overlay--active');
    document.body.classList.add('body--covered');
  }

  function closeMenu(){
    menu.classList.remove('menu--opened');
    overlayMenu.classList.remove('overlay--active');
    document.body.classList.remove('body--covered');
  }

  buttonOpenMenu.addEventListener('click', buttonOpenMenuClickHandler);
});
