document.addEventListener('DOMContentLoaded', function () {
  // Select the burger icon and the toggle menu
  const burgerIcon = document.querySelector('.burger-icon');
  const toggleMenu = document.querySelector('.toggle-menu');
  const closeButton = document.querySelector('.close-btn');

  // Show the menu when the burger icon is clicked
  burgerIcon.addEventListener('click', function () {
    toggleMenu.classList.add('active');
  });

  // Hide the menu when the close button is clicked
  closeButton.addEventListener('click', function () {
    toggleMenu.classList.remove('active');
  });

  // Optional: Close menu when clicking outside of it (if needed)
  toggleMenu.addEventListener('click', function (event) {
    if (event.target === toggleMenu) {
      toggleMenu.classList.remove('active');
    }
  });
});



var swiper = new Swiper('.hero-section .hero-slider .slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  loop: true,
});
