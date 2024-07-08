//  Rohan Amberkar
// Student Number - 8829877


// Populating events section
// Initializating the variable eventsCardData for appending with html of card in forEach loop below
let eventsCardData = '';
events.forEach(event => {
	const currentEvent = `<div class="card"> <div class="card-img"> <img src=${event.image} alt=${event.name}> </div> <div class="card-caption"> <div class="priciing d-flex justify-between items-center"> <h3><a href="#">${event.name}</a></h3> <span class="price">${event.price}</span> </div> <p><a href="#">${event.date}</a></p> </div> </div>`; 
	eventsCardData += currentEvent;
});
// populating events-wrapper with eventsCardData
$('#events-wrapper').html(eventsCardData);



// Initialize the Slick slider for elements with the class "slider"
$('.slider').slick({
	dots: false,
	autoplay: true,
	// Allow infinite looping of the slider items
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	// Number of slides to scroll when navigating the slider
	slidesToScroll: 2,
});

// Function to handle scroll animation on page load and scroll events
$(function () {
	// Attach a scroll event handler to the window
	if ($('.js-scroll-trigger').length) {
		scrollAnimation();
	}
	// aimation
	function scrollAnimation() {
		$(window).scroll(function () {
			$(".js-scroll-trigger").each(function () {
				// Get the position of the current element from the top of the document
				let position = $(this).offset().top,
				// Get the current scroll position from the top of the document
				scroll = $(window).scrollTop(),
				// Get the height of the window (viewport)
				windowHeight = $(window).height();
				// Check if the element is within 100 pixels from the bottom of the viewport
				if (scroll > position - windowHeight + 100) {
					// Add the class "is-active" to the element to trigger the animation
					$(this).addClass('is-active');
				}
			});
		});
	}
	// Trigger the scroll event on page load to apply the animation to visible elements
	$(window).trigger('scroll');
});


// Hide all slideshow elements except the first one using CSS selector (gt(0) selects elements with index greater than 0)
$(".slideshow > div:gt(0)").hide();
// Set an interval function to create a slideshow effect
setInterval(function() { 
	$('.slideshow > div:first')
	// Fade out the first visible element in the slideshow over 1000 milliseconds (1 second)
	.fadeOut(1000)
	// Select the next sibling element after the first one, and fade it in over 1000 milliseconds
	.next()
	.fadeIn(1000)
	// End the chain of animations and move the first element to the end of the slideshow
	.end()
	.appendTo('.slideshow');
}, 3000);



// Rohan Amberkar
// Student Number - 8829877






