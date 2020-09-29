document.addEventListener('DOMContentLoaded', function () {
  const buttonOpenCallbackModal = document.querySelectorAll('.ui-button--phone'),
        buttonCloseCallbackModal = document.querySelector('.modal--callback .modal__close-button'),
        buttonOpenMessageModal = document.querySelectorAll('.ui-button--message'),
        buttonCloseMessageModal = document.querySelector('.modal--message .modal__close-button'),
        callbackModal = document.querySelector('.modal--callback'),
        messageModal = document.querySelector('.modal--message'),
        overlay = document.querySelector('.overlay--modal'),
        menu = document.querySelector('.menu');

  buttonOpenCallbackModal.forEach(function (element) {
    element.addEventListener('click', buttonOpenCallbackModalClickHandler);
  });

  buttonOpenMessageModal.forEach(function (element) {
    element.addEventListener('click', buttonOpenMessageModalClickHandler);
  });

  function buttonOpenCallbackModalClickHandler(event){
    event.preventDefault();
    openModal(callbackModal);
    buttonOpenCallbackModal.forEach(function (element) {
      element.removeEventListener('click', buttonOpenCallbackModalClickHandler);
    });
    buttonCloseCallbackModal.addEventListener('click', buttonCloseCallbackModalClickHandler);
    overlay.addEventListener('click', overlayClickHandler);
    document.addEventListener('keyup', modalKeyUpHandler);
  }

  function buttonCloseCallbackModalClickHandler(event){
    event.preventDefault();
    callbackModalCloseHandlers();
  }

  function buttonOpenMessageModalClickHandler(event){
    event.preventDefault();
    openModal(messageModal);
    buttonOpenMessageModal.forEach(function (element) {
      element.removeEventListener('click', buttonOpenMessageModalClickHandler);
    });
    buttonCloseMessageModal.addEventListener('click', buttonCloseMessageModalClickHandler);
    overlay.addEventListener('click', overlayClickHandler);
    document.addEventListener('keyup', modalKeyUpHandler);
  }

  function buttonCloseMessageModalClickHandler(event){
    event.preventDefault();
    messageModalCloseHandlers()
  }

  function overlayClickHandler(event){
    event.preventDefault();
    if(messageModal.classList.contains('modal--opened')){
      messageModalCloseHandlers()
    } else if(callbackModal.classList.contains('modal--opened')){
      callbackModalCloseHandlers();
    }

  }

  function modalKeyUpHandler(event){
    event.preventDefault();
    let isEsc = event.code === 'Escape';
    if(isEsc && overlay.classList.contains('overlay--active')){
      if(messageModal.classList.contains('modal--opened')){
        messageModalCloseHandlers()
      } else{
        callbackModalCloseHandlers();
      }
    }
  }

  function callbackModalCloseHandlers(){
    closeModal(callbackModal);
    buttonOpenCallbackModal.forEach(function (element) {
      element.addEventListener('click', buttonOpenCallbackModalClickHandler);
    });
    buttonCloseCallbackModal.removeEventListener('click', buttonCloseCallbackModalClickHandler);
    overlay.removeEventListener('click', overlayClickHandler);
    document.removeEventListener('keyup', modalKeyUpHandler);
  }

  function messageModalCloseHandlers(){
    closeModal(messageModal);
    buttonOpenMessageModal.forEach(function (element) {
      element.addEventListener('click', buttonOpenMessageModalClickHandler);
    });
    buttonCloseMessageModal.removeEventListener('click', buttonCloseMessageModalClickHandler);
    overlay.removeEventListener('click', overlayClickHandler);
    document.removeEventListener('keyup', modalKeyUpHandler);
  }

  function openModal(modal) {
    modal.classList.add('modal--opened');
    overlay.classList.add('overlay--active');
    document.body.classList.add('body--covered');
  }

  function closeModal(modal){
    modal.classList.remove('modal--opened');
    overlay.classList.remove('overlay--active');
    if(!menu.classList.contains('menu--opened')){
      document.body.classList.remove('body--covered');
    }
  }
});
