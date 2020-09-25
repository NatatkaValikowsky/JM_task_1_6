document.addEventListener('DOMContentLoaded', function () {
  const messageButton = document.querySelectorAll('.ui-button--message'),
    callbackCloseButton = document.querySelector('.modal--message .modal__close-button'),
    callbackBlock = document.querySelector('.modal--message'),
    modalWrapper = document.querySelector('.overlay--modal');

  messageButton.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      callbackBlock.classList.add('modal--opened');
      modalWrapper.classList.add('overlay--active');
    });
  });

  callbackCloseButton.addEventListener('click', function (event) {
    event.preventDefault();
    callbackBlock.classList.remove('modal--opened');
    modalWrapper.classList.remove('overlay--active');
  });

  modalWrapper.addEventListener('click', function (event) {
    event.preventDefault();
    if(event.target === modalWrapper){
      callbackBlock.classList.remove('modal--opened');
      modalWrapper.classList.remove('overlay--active');
    }
  });

  const callButton = document.querySelectorAll('.ui-button--phone'),
    callCloseButton = document.querySelector('.modal--callback .modal__close-button'),
    callBlock = document.querySelector('.modal--callback');

  callButton.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      callBlock.classList.add('modal--opened');
      modalWrapper.classList.add('overlay--active');
    });
  });

  callCloseButton.addEventListener('click', function (event) {
    event.preventDefault();
    callBlock.classList.remove('modal--opened');
    modalWrapper.classList.remove('overlay--active');
  });

  modalWrapper.addEventListener('click', function (event) {
    event.preventDefault();
    if(event.target === modalWrapper){
      callBlock.classList.remove('modal--opened');
      modalWrapper.classList.remove('overlay--active');
    }
  });

});
