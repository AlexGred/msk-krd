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

  // Scroll spy
  $('body').scrollspy({ target: '.navbar-main-menu' });

  // Modal
  $('.contacts-modal-btn').click(function(event) {
    $('#contacts-modal').addClass('animated').modal();
    $('.modal-backdrop').addClass('animated slideInDown');
  });

  // Smooth scroll for anchor
  $('a[href^="#"]').click(function () {
    var dest = $(this).attr("href");
    dest = $(dest).offset().top;

    $('html,body').animate({ scrollTop: dest}, 600, 'easeOutCirc');

    return false;
  });

  // Scroll animate
  $('.region').viewportChecker({
    classToAdd: 'sc-visible animated fadeInDown',
    offset: 100    
  });

  $('.footer').viewportChecker({
    classToAdd: 'sc-visible animated slideInUp',
    offset: 0    
  }); 

  /* Gallery */
  $('.gallery-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

});
