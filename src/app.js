$(function() {
  // Function to load content dynamically
  function loadContent(url) {
    if (url === 'src/start.html') {
      $('body').css('overflow', 'hidden'); // Hide overflow on start page
      $('#content').fadeOut(300, function() {
        $('#content').empty();
        $('#start').fadeOut(300, function() {
          $('header').css('background', 'linear-gradient(to bottom, transparent, transparent)'); // Set transparent gradient for fade out
          $('#start').load(url, function() {
            $('#start').fadeIn(300);
            setupVideoControls();  // Setup video controls after loading content
            showVolume();  // Show volume controls
          });
        });
      });
    } else {
      $('body').css('overflow', 'auto'); // Set overflow to auto for other pages
      $('#start').fadeOut(300, function() {
        $('#start').empty();
        $('#content').fadeOut(300, function() {
          $('#content').load(url, function() {
            $('#content').fadeIn(300);
            $('header').css('background', 'linear-gradient(to bottom, #000000 40%, #000000c7 70%, #00000000 100%)'); // Apply gradient background
            hideVolume();  // Hide volume controls
            setupFiltering();  // Setup filtering after loading content
          });
        });
      });
    }
  }
  
  // Initial load
  loadContent('src/start.html');

  // Handle navigation clicks
  $(document).on('click', 'nav a', function(e) {
    var url = $(this).attr('href');
    if (!url.startsWith('mailto:')) {
      e.preventDefault();
      loadContent(url);
    }
  });

// Function to setup video controls
function setupVideoControls() {
  var video = document.getElementById('videoElement');
  var muteButton = document.getElementById("muteButton");
  var unmuteButton = document.getElementById("unmuteButton");
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');
  var start = document.getElementById('start');

  if (video && muteButton && unmuteButton) {
    video.muted = true;  // Mute video by default

    muteButton.addEventListener('click', function() {
      video.muted = false;
      muteButton.style.display = "none";
      unmuteButton.style.display = "block";
    });

    unmuteButton.addEventListener('click', function() {
      video.muted = true;
      muteButton.style.display = "block";
      unmuteButton.style.display = "none";
    });

    // Add event listener to the document body
    document.body.addEventListener('click', function(event) {
      // Check if #start is not empty
      if (start && start.innerHTML.trim() !== "") {
        if (!header.contains(event.target) && !footer.contains(event.target)) {
          // Toggle mute/unmute
          if (video.muted) {
            video.muted = false;
            muteButton.style.display = "none";
            unmuteButton.style.display = "block";
          } else {
            video.muted = true;
            muteButton.style.display = "block";
            unmuteButton.style.display = "none";
          }
        }
      }
    });
  }
}

  // Function to show volume controls
  function showVolume() {
    document.getElementById('muteButton').style.display = "block";
    document.getElementById('unmuteButton').style.display = "none";
  }

  // Function to hide volume controls
  function hideVolume() {
    document.getElementById('muteButton').style.display = "none";
    document.getElementById('unmuteButton').style.display = "none";
  }

  // Function to setup filtering
  function setupFiltering() {
    const filterLinks = document.querySelectorAll('.portfolio-nav ul li a');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        filterLinks.forEach(link => link.classList.remove('active'));

        // Add active class to clicked link
        link.classList.add('active');

        // Get filter value
        const filter = link.getAttribute('data-filter');

        // Fade out all items
        portfolioItems.forEach(item => {
          item.classList.add('hidden');
        });

        // After fade out, reorganize
        setTimeout(() => {
          portfolioItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
              item.style.visibility = 'visible';
              // item.style.opacity = '0';
              item.style.display = 'block';
            } else {
              item.style.visibility = 'hidden';
              // item.style.opacity = '0';
              item.style.display = 'none';
            }
          });

          // After an additional 200ms delay, remove the 'hidden' class
          setTimeout(() => {
            portfolioItems.forEach(item => {
              if (item.style.display === 'block') {
                item.classList.remove('hidden');
                // item.style.opacity = '1';
              }
            });
          }, 100); // Additional 300ms delay
        }, 250); // Initial 200ms delay for fade out
      });
    });
  }
});