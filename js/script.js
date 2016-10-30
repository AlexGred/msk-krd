$(document).ready(function() {
  
  // affix
  $('.navbar').affix({
    offset: {
      top: 20
    }
  });

  // Phone mask
  $('#phone-number').mask('+7 (999) 999-99-99');
  $('#phone-number-1').mask('+7 (999) 999-99-99');

  // Slide contacts form
  var slide = $('#slide-contact-form');
  var slideClass = 'active-slide';

  if (slide.hasClass(slideClass)) {
    slide.removeClass(slideClass);
  }
  else {
    slide.addClass(slideClass);
  }

  /* Navbar-brand */
  $(window).scroll(function() {
    if (!$('.navbar-brand').hasClass('transition')) {
      $('.navbar-brand').addClass('transition');
    }
  });
    



  // Scroll spy
  $('body').scrollspy({ target: '.navbar-main-menu' });

  // Modal
  $('.contacts-modal-btn').click(function(event) {
    $('#contacts-modal').addClass('animated').modal();
    $('.modal-backdrop').addClass('animated fadeInModal');
  });

  // Smooth scroll for anchor
  $('a[href^="#"]').click(function () {
    var dest = $(this).attr("href");
    dest = $(dest).offset().top;

    $('html,body').animate({ scrollTop: dest}, 600, 'easeOutCirc');

    return false;
  });

  // Scroll animate
  $('.region-title').viewportChecker({
    classToAdd: 'sc-visible animated fadeInDown',
    offset: 100    
  });

  $('.item-advantages.left .item-wrapper').viewportChecker({
    classToAdd: 'sc-visible animated fadeInLeft',
    offset: 100    
  });

  $('.region .region-description').viewportChecker({
    classToAdd: 'sc-visible animated fadeInDown',
    offset: 100    
  });

  $('.region .btn-primary').viewportChecker({
    classToAdd: 'sc-visible animated fadeInUpBtn',
    offset: 100    
  });  

  $('.region-gallery .row').viewportChecker({
    classToAdd: 'sc-visible animated fadeInLeft',
    offset: 200    
  }); 

  $('.region-review .row, .region-contacts .row').viewportChecker({
    classToAdd: 'sc-visible animated fadeInDown',
    offset: 100,   
  });

  $('.region .form-control').viewportChecker({
    classToAdd: 'sc-visible animated slideInLeftForm',
    offset: 100    
  });

  $('.region-services .row').viewportChecker({
    classToAdd: 'sc-visible animated fadeInDown',
    offset: 100    
  });

  $('.item-advantages.right .item-wrapper').viewportChecker({
    classToAdd: 'sc-visible animated fadeInRight',
    offset: 100    
  });

  $('.footer .item-left').viewportChecker({
    classToAdd: 'sc-visible animated fadeInLeft',
    offset: 0    
  }); 

  $('.footer .item-right').viewportChecker({
    classToAdd: 'sc-visible animated fadeInRight',
    offset: 0   
  }); 

  $('.header-content').addClass('sc-visible animated fadeIn'); 

  $('.navbar').addClass('sc-visible animated slideInDown'); 

  $('.arrow-down').addClass('sc-visible animated fadeInUpBtn');

  /* Gallery */
  $('.gallery-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('a.cbox-item').colorbox();

  /* Parallax */
  $('.region-form').parallax('50%', 0.1);

  /* Arrow down */
  $('.arrow-down').click(function(event) {
    var dest = $('#services').offset().top - 50;

    $('html,body').animate({ scrollTop: dest}, 800, 'easeOutCirc');
  });

});
