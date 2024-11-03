
// ! Mini Nav Dropdown 

document.addEventListener("DOMContentLoaded", function () {
  const currencyDropdown = document.getElementById("currency-dropdown");
  const languageDropdown = document.getElementById("language-dropdown");
  const currencyContent = currencyDropdown.querySelector(".dropdown-content");
  const languageContent = languageDropdown.querySelector(".dropdown-content");

  // Toggle the currency dropdown when clicking the button
  currencyDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllDropdowns(); // Close other dropdowns
    currencyContent.classList.toggle("show");
  });

  // Toggle the language dropdown when clicking the button
  languageDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllDropdowns(); // Close other dropdowns
    languageContent.classList.toggle("show");
  });

  // Update the currency when an option is selected and close the dropdown
  document.querySelectorAll(".currency-option").forEach(option => {
    option.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent event from bubbling up
      const currencyText = this.getAttribute("data-currency");
      const currencyImg = this.getAttribute("data-img");
      currencyDropdown.querySelector(".selected-currency img").src = currencyImg;
      currencyDropdown.querySelector(".selected-currency span").textContent = currencyText;
      currencyContent.classList.remove("show"); // Close dropdown after selection
    });
  });

  // Update the language when an option is selected and close the dropdown
  document.querySelectorAll(".language-option").forEach(option => {
    option.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent event from bubbling up
      const langText = this.getAttribute("data-lang");
      languageDropdown.querySelector(".selected-language span").textContent = langText;
      languageContent.classList.remove("show"); // Close dropdown after selection
    });
  });

  // Close dropdowns when clicking outside
  window.addEventListener("click", function () {
    closeAllDropdowns();
  });

  // Function to close all open dropdowns
  function closeAllDropdowns() {
    currencyContent.classList.remove("show");
    languageContent.classList.remove("show");
  }
});



// ! Responsive Nav Dropdowns

document.addEventListener("DOMContentLoaded", function () {
  const currencyDropdown = document.getElementById("resp-currency-dropdown");
  const languageDropdown = document.getElementById("resp-language-dropdown");

  const perfumeDropdownToggle = document.getElementById("perfume-dropdown-toggle");
  const perfumeDropdownContent = document.getElementById("perfume-dropdown-content");

  const currencyContent = currencyDropdown.querySelector(".resp-dropdown-content");
  const languageContent = languageDropdown.querySelector(".resp-dropdown-content");

  // Toggle the currency dropdown when clicking the button
  currencyDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllDropdowns(); // Close other dropdowns
    currencyContent.classList.toggle("show");
  });

  // Toggle the language dropdown when clicking the button
  languageDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllDropdowns(); // Close other dropdowns
    languageContent.classList.toggle("show");
  });

  // Toggle the perfume dropdown when clicking on the text or icon
  perfumeDropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    closeAllDropdowns();
    perfumeDropdownContent.classList.toggle("show");
  });

  // Add click event to each perfume option to close the dropdown after selection
  document.querySelectorAll(".resp-perfume-option").forEach(option => {
    option.addEventListener("click", function (e) {
      e.stopPropagation();
      perfumeDropdownContent.classList.remove("show"); // Close dropdown after selection
    });
  });

  // Update the currency when an option is selected and close the dropdown
  document.querySelectorAll(".resp-currency-option").forEach(option => {
    option.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent event from bubbling up
      const currencyText = this.getAttribute("data-currency");
      const currencyImg = this.getAttribute("data-img");
      currencyDropdown.querySelector(".selected-resp-currency img").src = currencyImg;
      currencyDropdown.querySelector(".selected-resp-currency span").textContent = currencyText;
      currencyContent.classList.remove("show"); // Close dropdown after selection
    });
  });

  // Update the language when an option is selected and close the dropdown
  document.querySelectorAll(".resp-language-option").forEach(option => {
    option.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent event from bubbling up
      const langText = this.getAttribute("data-lang");
      languageDropdown.querySelector(".selected-resp-language span").textContent = langText;
      languageContent.classList.remove("show"); // Close dropdown after selection
    });
  });

  // Close dropdowns when clicking outside
  window.addEventListener("click", function () {
    closeAllDropdowns();
  });

  // Function to close all open dropdowns
  function closeAllDropdowns() {
    currencyContent.classList.remove("show");
    languageContent.classList.remove("show");
    perfumeDropdownContent.classList.remove("show");
  }
});




//! Toggler for responsive search bar
const searchIcon = document.querySelector('.search-resp-icon');
const searchContainer = document.querySelector('.resp-search-container');
const searchInput = document.querySelector('.resp-search-input');

//! Toggle search bar display on icon click
searchIcon.addEventListener('click', (event) => {
  searchContainer.classList.toggle('d-none');
  // !Prevent event propagation to document click listener
  event.stopPropagation();
});

//! Close search bar when clicking outside and clear input
document.addEventListener('click', (event) => {
  const isClickInsideSearch = searchContainer.contains(event.target);
  const isClickOnSearchIcon = searchIcon.contains(event.target);

  if (!isClickInsideSearch && !isClickOnSearchIcon && !searchContainer.classList.contains('d-none')) {
    searchContainer.classList.add('d-none');
    searchInput.value = ''; // Clear input when closing
  }
});



// ! Main Nav Dropdown 

document.addEventListener("DOMContentLoaded", function () {
  const perfumeDropdownToggle = document.querySelector(".desktop-perfume-dropdown-toggle");
  const perfumeDropdownContent = document.querySelector(".desktop-perfume-dropdown-content");

  // Toggle the dropdown when clicking on "عطور" or the arrow icon
  perfumeDropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    perfumeDropdownContent.classList.toggle("show-desktop-dropdown");
  });

  // Close dropdown when clicking outside
  window.addEventListener("click", function () {
    perfumeDropdownContent.classList.remove("show-desktop-dropdown");
  });

  // Add click event to each option to close the dropdown after selection
  document.querySelectorAll(".desktop-perfume-option").forEach(option => {
    option.addEventListener("click", function (e) {
      e.stopPropagation();
      perfumeDropdownContent.classList.remove("show-desktop-dropdown"); // Close dropdown after selection
    });
  });
});






// ! Nav Toggle 
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




// ! Slider

var swiper = new Swiper('.hero-section .hero-slider .slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  loop: true,
});
