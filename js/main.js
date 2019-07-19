// Javascript help from Larissa Muramoto and Mario Hseih
// Shorthand for $( document ).ready()
$(function() {

  // * * * Section: Video Carousel * * * //
  let videoIndex = 1;
  // * * * Section: About overlay functinality * * * //
  let aboutLogic = 0;

  // * * * Section: Forward button logic via visual buttons * * * //
  $('#forward-action').on('click', nextVideo);

  function nextVideo() {
    if (videoIndex == 1) {
      $('#first-video').addClass('inactive');
      $('#second-video').removeClass('inactive');
      videoIndex = 2;
    } else if (videoIndex == 2) {
      $('#second-video').addClass('inactive');
      $('#third-video').removeClass('inactive');
      videoIndex = 3;
    } else if (videoIndex == 3) {
      $('#third-video').addClass('inactive');
      $('#first-video').removeClass('inactive');
      videoIndex = 1;
    }
  }


  // * * * Section: Video carousel logic via keyboard buttons * * * //

  $(document).on("keydown", function(event) {
    if (event.which == 39) {
      console.log("right");
      nextVideo();

    } else if (event.which == 37) {
      console.log("left");
      previousVideo();
    }
  })

  // * * * Section: Bakcwards button logic via visual buttons* * * //
  $('#backward-action').on('click', previousVideo);

  function previousVideo() {
    if (videoIndex == 1) {
      $('#first-video').addClass('inactive');
      $('#third-video').removeClass('inactive');
      videoIndex = 3;
    } else if (videoIndex == 3) {
      $('#third-video').addClass('inactive');
      $('#second-video').removeClass('inactive');
      videoIndex = 2;
    } else if (videoIndex == 2) {
      $('#second-video').addClass('inactive');
      $('#first-video').removeClass('inactive');
      videoIndex = 1;
    }
  }

  // * * * Section: About Section Logic * * * //
  // sets the classes depending on the logic state
  $('#about-action').on('click', function() {
    // checks which state the about overlay is in. 0 = off, 1 = on
    if (aboutLogic == 0) {
      $('#about-inactive').removeClass('inactive');
      $('#about-inactive2').removeClass('inactive');
      aboutLogic = 1;
      // checks which state the about overlay is in. 0 = off, 1 = on
    } else if (aboutLogic == 1) {
      $('#about-inactive').addClass('inactive');
      $('#about-inactive2').addClass('inactive');
      aboutLogic = 0;
    }
  });

});
