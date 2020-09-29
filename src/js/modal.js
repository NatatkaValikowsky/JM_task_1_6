document.addEventListener('DOMContentLoaded', function () {
  const buttonOpenCallbackModal = document.querySelectorAll('.ui-button--phone'),
        buttonCloseCallbackModal = document.querySelector('.modal--callback .modal__close-button'),
        buttonOpenMessageModal = document.querySelectorAll('.ui-button--message'),
        buttonCloseMessageModal = document.querySelector('.modal--message .modal__close-button'),
        callbackModal = document.querySelector('.modal--callback'),
        messageModal = document.querySelector('.modal--message'),
        overlay = document.querySelector('.overlay--modal');

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
    document.addEventListener('keyup', documentKeyUpHandler);
  }

  function buttonCloseCallbackModalClickHandler(event){
    event.preventDefault();
    closeModal(callbackModal);
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
    document.addEventListener('keyup', documentKeyUpHandler);
  }

  function buttonCloseMessageModalClickHandler(event){
    event.preventDefault();
    closeModal(messageModal);
    buttonOpenMessageModal.forEach(function (element) {
      element.addEventListener('click', buttonOpenMessageModalClickHandler);
    });
    buttonCloseMessageModal.removeEventListener('click', buttonCloseMessageModalClickHandler);
    overlay.removeEventListener('click', overlayClickHandler);
    document.removeEventListener('keyup', documentKeyUpHandler);
  }

  function overlayClickHandler(event){
    event.preventDefault();
    if(messageModal.classList.contains('modal--opened')){
      closeModal(messageModal);
      buttonCloseMessageModal.removeEventListener('click', buttonCloseMessageModalClickHandler);
      buttonOpenMessageModal.forEach(function (element) {
        element.removeEventListener('click', buttonOpenMessageModalClickHandler);
      });
    } else if(callbackModal.classList.contains('modal--opened')){
      closeModal(callbackModal);
      buttonCloseCallbackModal.removeEventListener('click', buttonCloseCallbackModalClickHandler);
      buttonOpenCallbackModal.forEach(function (element) {
        element.addEventListener('click', buttonOpenCallbackModalClickHandler);
      });
    }
    overlay.removeEventListener('click', overlayClickHandler);
    document.removeEventListener('keyup', documentKeyUpHandler);
  }

  function documentKeyUpHandler(event){
    event.preventDefault();
    let isEsc = event.code === 'Escape';
    if(isEsc && !(overlay.classList.contains('overlay--active'))){
      if(messageModal.classList.contains('modal--opened')){
        closeModal(messageModal);
        buttonOpenMessageModal.forEach(function (element) {
          element.addEventListener('click', buttonOpenMessageModalClickHandler);
        });
        buttonCloseMessageModal.removeEventListener('click', buttonCloseMessageModalClickHandler);
        overlay.removeEventListener('click', overlayClickHandler);
      } else{
        closeModal(callbackModal);
        buttonOpenMessageModal.forEach(function (element) {
          element.addEventListener('click', buttonOpenMessageModalClickHandler);
        });
        buttonCloseMessageModal.removeEventListener('click', buttonCloseMessageModalClickHandler);
        overlay.removeEventListener('click', overlayClickHandler);
      }
      document.removeEventListener('keyup', documentKeyUpHandler);
    }
  }

  function callbackModalCloseHandlers(){
    buttonOpenCallbackModal.forEach(function (element) {
      element.addEventListener('click', buttonOpenCallbackModalClickHandler);
    });
    buttonCloseCallbackModal.removeEventListener('click', buttonCloseCallbackModalClickHandler);
    overlay.removeEventListener('click', overlayClickHandler);
    document.removeEventListener('keyup', documentKeyUpHandler);
  }

  function openModal(modal) {
    modal.classList.add('modal--opened');
    overlay.classList.add('overlay--active');
  }

  function closeModal(modal){
    modal.classList.remove('modal--opened');
    overlay.classList.remove('overlay--active');
  }
});
