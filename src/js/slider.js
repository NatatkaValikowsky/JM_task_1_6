import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

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
});
