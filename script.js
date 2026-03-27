/* Hamburger Menu Toggle */
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function() {
  navbar.classList.toggle('active');
});

// Close menu when a navbar link is clicked
let navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    navbar.classList.remove('active');
  });
});
