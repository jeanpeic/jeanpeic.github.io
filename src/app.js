$(function() {
    // Function to load content dynamically
    function loadContent(url) {
      if (url === 'src/start.html') {
        $('#content').fadeOut(300, function() {
          $('#content').empty();
          $('#start').fadeOut(300, function() {
            $('#start').load(url, function() {
              $('#start').fadeIn(300);
              setupVideoControls();  // Setup video controls after loading content
              showVolume();  // Show volume controls
            });
          });
        });
      } else {
        $('#start').fadeOut(300, function() {
          $('#start').empty();
          $('#content').fadeOut(300, function() {
            $('#content').load(url, function() {
              $('#content').fadeIn(300);
              hideVolume();  // Hide volume controls
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
  });