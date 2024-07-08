// Get all the accordion elements

$(document).ready(function() {
    $('.accordian-tab').click(function() {
        $(this).next('.desp').slideToggle(200);
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).children('i').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).children('i').removeClass('fa-minus').addClass('fa-plus');
        }
    });
});


// Keyur Gandhi
// Student ID - 8891596
