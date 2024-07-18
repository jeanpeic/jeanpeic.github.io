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

  var videoOverlay = document.getElementById('videoOverlay');
  var videoFrame = document.getElementById('videoFrame');

  menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1080) {
      navLinks.style.display = '';
      navLinks.classList.remove('show', 'fade-in', 'fade-out');
    }
  });

  function initializeVideoEventListeners() {
    var portfolioItems = document.querySelectorAll('.portfolio-img');

    portfolioItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var videoUrl = item.getAttribute('data-video');
        videoFrame.src = videoUrl;
        videoOverlay.classList.add('active');
      });
    });

    videoOverlay.addEventListener('click', function(e) {
      if (e.target === videoOverlay) {
        videoOverlay.classList.remove('active');
        videoFrame.src = ""; // Stop the video when closing
      }
    });
  }
});