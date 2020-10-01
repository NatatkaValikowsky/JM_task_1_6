const expandedButtons = document.querySelectorAll('.expand-button');

expandedButtons.forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();
    let target = event.target;
    target.classList.toggle('expand-button--expanded');
    target.textContent = (target.classList.contains('expand-button--expanded')) ? 'Скрыть' : 'Показать все';
    target.closest('.section').querySelector('.expand-block').classList.toggle('expand-block--expanded');
  });
});
