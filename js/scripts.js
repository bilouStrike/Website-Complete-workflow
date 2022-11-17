$(document).ready(function() {

    // hamburger menu nav
    $('.nav-toggle').on('click', 
    function() {
        $('.main-nav').toggleClass('is-open');
        $('.hamburger').toggleClass('is-open');
    });
});