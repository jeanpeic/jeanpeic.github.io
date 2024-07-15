document.addEventListener('DOMContentLoaded', function() {
  var menuBtn = document.getElementById('navButton');
  var navLinks = document.getElementById('navLinks');
  var navItems = document.querySelectorAll('.navLinks li a');

  menuBtn.addEventListener('click', function() {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    } else {
      navLinks.classList.add('show');
    }
  });

  // Close the nav menu when a nav link is clicked
  navItems.forEach(function(navItem) {
    navItem.addEventListener('click', function() {
      navLinks.classList.remove('show');
    });
  });

  // Reset styles on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1080) {
      navLinks.classList.remove('show');
    }
  });
});