$(document).ready(function() {
  
  // affix
  $('.navbar').affix({
    offset: {
      top: 20
    }
  });

  // Phone mask
  $('#phone-number').mask('+7 (999) 999-99-99');

  // Slide contacts form
  var slide = $('#slide-contact-form');
  var slideClass = 'active-slide';

  if (slide.hasClass(slideClass)) {
    slide.removeClass(slideClass);
  }
  else {
    slide.addClass(slideClass);
  }

});
