// Gallery functionality using Fancybox

$(document).ready(function () {
  // Initialize the carousel
  $('[data-fancybox="carousel"]').fancybox({
    loop: true,
    buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the image slider
  $("[data-fancybox='slider']").fancybox({
    // thumbs: {
    //   autoStart: true, // Display thumbnails automatically
    // },
  });
});

// Name: Bhaumik Raja
// Student Number: 8844424
