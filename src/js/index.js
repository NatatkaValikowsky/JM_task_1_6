//import 'normalize.css';
import '../scss/style.scss';

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import '../scss/slider.scss';

function getSlider(obj){
  this.init(obj);
  this.addListeners(obj);
}

getSlider.prototype = {
  swiper: undefined,
  documentElement: document.documentElement,

  init: function(obj){
    if(this.documentElement.clientWidth < 768){
      this.swiper = new Swiper(obj.container, obj.options);
    }
  },

  addListeners: function (obj) {
    window.addEventListener('resize', function () {
      if(this.documentElement.clientWidth < 768 && this.swiper === undefined){
        this.swiper = new Swiper(obj.container, obj.options)
      }else if(this.documentElement.clientWidth > 768 && this.swiper !== undefined){
        this.swiper.forEach(function (el) {
          el.destroy(true, true);
        });
        this.swiper = undefined;

        document.querySelectorAll('.slider-pagination').forEach(function (el) {
          el.textContent = '';
        });
      }
    }.bind(this));
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const mySlider = new getSlider({
    container: '.slider',
    options: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.slider-pagination',
        clickable: true
      },
      slideClass: 'slider-item',
    }
  });

  var expandedButtons = document.querySelectorAll('.expand-button');

  expandedButtons.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      var target = event.target;
      target.classList.toggle('expand-button--expanded');
      target.textContent = (target.classList.contains('expand-button--expanded')) ? 'Скрыть' : 'Показать все';
      target.closest('.section').querySelector('.expand-block').classList.toggle('expand-block--expanded');
    });
  });

  var body = document.body;

  var menuButton = document.querySelector('.ui-button--menu');
  var closeButton = document.querySelector('.ui-button--close');
  var menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('menu--opened');
    body.classList.toggle('body--limited');
  });

  closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('menu--opened');
    body.classList.toggle('body--limited');
  });

  var messageButton = document.querySelectorAll('.ui-button--message');
  var callbackCloseButton = document.querySelector('.modal--message .modal__close-button');
  var callbackBlock = document.querySelector('.modal--message');

  messageButton.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      callbackBlock.classList.toggle('modal--opened');
      body.classList.toggle('body--limited');
    });
  });

  callbackCloseButton.addEventListener('click', function (event) {
    event.preventDefault();
    callbackBlock.classList.toggle('modal--opened');
    body.classList.toggle('body--limited');
    if(menu.classList.contains('menu--opened')){
      menu.classList.remove('menu--opened');
    }
  });

  var callButton = document.querySelectorAll('.ui-button--phone');
  var callCloseButton = document.querySelector('.modal--callback .modal__close-button');
  var callBlock = document.querySelector('.modal--callback');

  callButton.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      callBlock.classList.toggle('modal--opened');
      body.classList.toggle('body--limited');
      if(menu.classList.contains('menu--opened')){
        menu.classList.remove('menu--opened');
      }
    });
  });

  callCloseButton.addEventListener('click', function (event) {
    event.preventDefault();
    callBlock.classList.toggle('modal--opened');
    body.classList.toggle('body--limited');
  });
});

