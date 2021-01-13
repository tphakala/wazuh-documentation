$(function() {
  const header = $('#header-sticky');
  const sticky = header.offset().top;
  $('#copy-year').text(new Date().getFullYear());

  $('.navbar-toggler.btn-close').on('click', function(e) {
    let menuHeight = 0;
    if ($(this).hasClass('collapsed')) {
      $(this).removeClass('collapsed');
      $('#navbarWebMenu').removeClass('collapsed');
      if (window.pageYOffset < sticky) {
        $('#navbarWebMenu').css('top', $('#page-header').height() - window.pageYOffset);
        menuHeight = $(window).height() - $('#page-header').height() + window.pageYOffset;
      } else {
        $('#navbarWebMenu').css('top', sticky);
        menuHeight = $(window).height() - sticky;
      }
      $('#navbarWebMenu').css('height', menuHeight);
      $('html').css({'overflow-y': 'hidden'});
    } else {
      $(this).addClass('collapsed');
      $('#navbarWebMenu').addClass('collapsed');
      $('#navbarWebMenu').css('height', 0);
      $('html').css({'overflow-y': 'auto'});
    }
  });


  $(window).on('scroll', makeSticky );

  /** Make turn the header sticky **/
  function makeSticky() {
    if (window.pageYOffset > sticky) {
      header.addClass('sticky');
      $('#navbarWebMenu').addClass('scrolled');
    } else {
      header.removeClass('sticky');
      $('#navbarWebMenu').removeClass('scrolled');
    }
  }
});
