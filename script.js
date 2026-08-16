const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuContainer = document.getElementById('mobileMenuContainer');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('close');
  mobileMenuContainer.classList.toggle('mobile-menu-show');
});
