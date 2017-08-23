$(document).ready(function(){



  /*-------------For Sticky nav--------------------*/
$('.section-features').waypoint(function(direction) {
  if (direction == 'down') {
    $('nav').addClass('sticky')
  } else {
    $('nav').removeClass('sticky');
   }
  }, {
    offset: '60px;'
});

/*-------------Scroll on Buttons--------------------*/
$('.btn-full').click(function(){
  $('html, body').animate({scrollTop: $('.section-plans').offset().top},1000);
});

$('.btn-ghost').click(function(){
  $('html, body').animate({scrollTop: $('.section-features').offset().top},1000);
});

/*-------------Navagation--scroll--------------------*/

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

/*-----------------Animations-on-scroll-------------------*/
$('.js--wp-1').waypoint(function(direction){
  $()
  $('.js--wp-1').addClass('animated fadeIn');
}, {
  offset: '50%'
});

$('.js--wp-2').waypoint(function(direction){
  $()
  $('.js--wp-2').addClass('animated fadeInLeft');
}, {
  offset: '50%'
});

$('.js--wp-3').waypoint(function(direction){
  $()
  $('.js--wp-3').addClass('animated fadeIn');
}, {
  offset: '50%'
});

$('.js--wp-4').waypoint(function(direction){
  $()
  $('.js--wp-4').addClass('animated pulse');
}, {
  offset: '50%'
});

/*-----------------moblie-nav-------------------*/


$('.mobile-nav-icon').click(function() {

  var nav = $('.main-nav');

  var icon = $('.mobile-nav-icon i');

  nav.slideToggle(200);
  if (icon.hasClass('ion-navicon-round')) {
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round')
  } else {
    icon.addClass('ion-navicon-round');
    icon.removeClass('ion-close-round')
  }

});

/*--------------MAPS------------------*/

var map = new GMaps({
  div: '.map',
  lat: 38.7809853,
  lng:-77.05,
  zoom: 12
});

map.addMarker({
  lat: 38.7809853,
  lng: -77.1003165,
  title: 'Washington D.C',
  infoWindow: {
    content: '<p>Our D.C HQ</p>'
  }
});

});
