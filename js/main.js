const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// Клик по кнопке
navBtn.addEventListener('click', function (event) {
  event.stopPropagation();
  toggleMobileNav();
})

// Клик по окну за пределами навигации
window.addEventListener('click', function() {
  console.log('Click on window')

  if (body.classList.contains('no-scroll')) {
    toggleMobileNav();
  }
}) 

// Останавливаем клик за пределами открытой мобильной навигации
mobileNav.addEventListener('click', function (event) {
  event.stopPropagation();
})

function toggleMobileNav() {
    body.classList.toggle('no-scroll');
    navBtn.classList.toggle('nav-button-close');
    mobileNav.classList.toggle('mobile-nav-active');
}