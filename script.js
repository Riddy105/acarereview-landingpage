`use strict`;
const navEl = document.querySelector(`nav`);
const btnEL = document.querySelector(`.mobile-nav-btn`);

btnEL.addEventListener(`click`, function () {
  navEl.classList.toggle(`nav-open`);
});
