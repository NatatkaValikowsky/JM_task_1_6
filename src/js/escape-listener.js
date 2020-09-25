document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu'),
    menuWrapper = document.querySelector('.overlay--menu'),
    callBlock = document.querySelector('.modal--callback'),
    callbackBlock = document.querySelector('.modal--message'),
    modalWrapper = document.querySelector('.overlay--modal');

  document.addEventListener('keyup', function (event) {
    let isEsc = event.code === 'Escape';
    if(isEsc && callbackBlock.classList.contains('modal--opened') || callBlock.classList.contains('modal--opened')){
      callbackBlock.classList.remove('modal--opened');
      callBlock.classList.remove('modal--opened');
      modalWrapper.classList.remove('overlay--active');
    } else if(isEsc && menu.classList.contains('menu--opened')){
      menu.classList.remove('menu--opened');
      menuWrapper.classList.remove('overlay--active');
    }
  });

});
