document.addEventListener('DOMContentLoaded', function() {
  var menuBtn = document.getElementById('navButton');
  var navLinks = document.getElementById('navLinks');

  menuBtn.addEventListener('click', function() {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    } else {
      navLinks.classList.add('show');
    }
  });

  // Reset styles on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1080) {
      navLinks.classList.remove('show');
    }
  });
});