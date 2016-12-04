// Viewport
var viewport = function() {
  var size;
  if ($(window).width() < 768) {
    size = 'xs';
  }
  else if ($(window).width() >= 768 &&  $(window).width() <= 992) {
    size = 'sm';
  }
  else if ($(window).width() > 992 &&  $(window).width() <= 1200) {
    size = 'md';
  }
  else  {
    size = 'lg';
  }

  return size;
}

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
  $('#phone-number-2').mask('+7 (999) 999-99-99');

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

  /* Modal */
  $('.contacts-modal-btn').click(function(event) {
    $('#contacts-modal').addClass('animated').modal();
    $('.modal-backdrop').addClass('animated fadeInModal');
  });

  $('.meet-modal-btn').click(function(event) {
    $('#meet-modal').addClass('animated').modal();
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
  $('.region .region-title').viewportChecker({
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
    offset: 100    
  }); 

  $('.region-review .row, .region-contacts .row, .region-how .row').viewportChecker({
    classToAdd: 'sc-visible animated fadeInDown',
    offset: 100,   
  });

  $('.region .form-control').viewportChecker({
    classToAdd: 'sc-visible animated slideInLeftForm',
    offset: 100    
  });

  $('.region-about .row').viewportChecker({
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
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 15000,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  if (viewport() != 'xs') {
    $('a.cbox-item').colorbox({
      inline: true,
      scrolling: false,
      maxWidth: '80%',
      maxHeight: '80%',
      onComplete: function() {
        var gallery = $.colorbox.element().attr('href') + ' .gallery-collapse';
        var nav = $.colorbox.element().attr('href') + ' .gallery-nav';

        $(gallery).slick({
          slidesToShow: 1,
          infinite: true,
          autoplay: false,
          speed: 1000,
          fade: true,
          asNavFor: nav
        });
        $(nav).slick({
          asNavFor: gallery,
          slidesToShow: 3,
          focusOnSelect: true
        });
        $.colorbox.resize();
      },
      onClosed: function() {
        var gallery = $.colorbox.element().attr('href') + ' .gallery-collapse';
        var nav = $.colorbox.element().attr('href') + ' .gallery-nav';

        $(gallery).slick('unslick');
        $(nav).slick('unslick');
      }
    });
  }
  else {
    $('a.cbox-item').colorbox({
      inline: true,
      scrolling: false,
      maxWidth: '100%',
      maxHeight: '100%',
      onComplete: function() {
        var gallery = $.colorbox.element().attr('href') + ' .gallery-collapse';
        var nav = $.colorbox.element().attr('href') + ' .gallery-nav';

        $(gallery).slick({
          slidesToShow: 1,
          infinite: true,
          autoplay: false,
          speed: 1000,
          fade: true,
          asNavFor: nav
        });
        $(nav).slick({
          asNavFor: gallery,
          slidesToShow: 3,
          focusOnSelect: true
        });
        $.colorbox.resize();
      },
      onClosed: function() {
        var gallery = $.colorbox.element().attr('href') + ' .gallery-collapse';
        var nav = $.colorbox.element().attr('href') + ' .gallery-nav';

        $(gallery).slick('unslick');
        $(nav).slick('unslick');
      }
    });
  }

  /* Parallax */
  $('.region-form').parallax('50%', 0.1);

  /* Arrow down */
  $('.arrow-down').click(function(event) {
    var dest = $('#services').offset().top - 50;

    $('html,body').animate({ scrollTop: dest}, 800, 'easeOutCirc');
  });


  /* Ajax form */
  $('.form-contacts').submit(function(event) {
    var name = $(this).find('input.name').val();
    var phone = $(this).find('input.phone').val();
    var email = $(this).find('input.email').val();
    var form = $(this).attr('id');

    $.ajax({
      type: "POST",
      url: "/mail.php",
      data: { name: name, phone: phone, email: email, form: form },
      success: function(data){
        $('.modal-body .close').click();
        $('.region-alert').append('<div style="opacity: 0;" class="alert alert-success fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>В течении дня мы вам перезвоним.</div>');

        opacityAlert = function() {
          $('.region-alert .alert').css('opacity', '1');
        }

        setTimeout(opacityAlert, 300);
      }
    });


    return false;
  });


});
