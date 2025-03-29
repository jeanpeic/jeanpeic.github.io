$(function() {
  // Setup smooth scrolling for all anchor links
  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });

  // Function to setup video overlay (only used on videos.html page)
  function setupVideoOverlay() {
    var portfolioItems = document.querySelectorAll('.portfolio-item');
    var videoOverlay = document.getElementById('videoOverlay');
    var videoFrame = document.getElementById('videoFrame');

    if (!videoOverlay || !videoFrame) return;
    
    // Show video overlay when portfolio image is clicked
    portfolioItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var videoUrl = item.getAttribute('data-video');
        videoFrame.src = videoUrl;
        videoOverlay.classList.add('active');
      });
    });

    // Hide video overlay when clicking outside the video container
    videoOverlay.addEventListener('click', function(e) {
      if (e.target === videoOverlay) {
        videoOverlay.classList.remove('active');
        videoFrame.src = ""; // Stop the video when closing
      }
    });
  }

  // Initialize video overlay if we're on the videos page
  if (window.location.pathname.includes('videos.html')) {
    setupVideoOverlay();
  }
});