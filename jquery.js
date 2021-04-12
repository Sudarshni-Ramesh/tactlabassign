$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav_bar').toggleClass('nav-toggle');
  });

  $('#login').click(function(){
    $('.login-form').addClass('popup');
  });

  $('.login-form form .fa-times').click(function(){
    $('.login-form').removeClass('popup');
  });

  $(window).on('load scroll',function(){

      $('#menu').removeClass('fa-times');
      $('.nav_bar').removeClass('nav-toggle');

      $('.login-form').removeClass('popup');
      
  });

});
