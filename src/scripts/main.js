// START OF .header__nav

const navItems = document.querySelectorAll('.header__nav-item');

navItems.forEach((li) => {
  li.addEventListener('click', function () {
    let item = document.querySelector('.header__nav-item--active');

    item.classList.remove('header__nav-item--active');
    li.classList.toggle('header__nav-item--active');
  });
});

// END OF .header__nav

// START OF .card__modal

const body = document.querySelector('body');
const showModalBtn = document.querySelector('#open-info-btn');
const modal = document.querySelector('#modal');

showModalBtn.addEventListener('click', function () {
  modal.classList.toggle('card__modal--show');
});

body.addEventListener('click', function (event) {
  if (
    event.target.classList.value !== 'card__open-info') {
    modal.classList.remove('card__modal--show');
  }
});

// END OF .card__modal
