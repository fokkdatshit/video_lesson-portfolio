$(window).on('load', function () {

   // vide.js - video background
   $('#header').vide('./video/cover', {
      bgColor: '#966d4a'
   });
});

var $page = $('html, body');
$('a[href*="#"]').click(function () {
   $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
   }, 500);
   return false;
});

