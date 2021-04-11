$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav_bar').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){
      $('#menu').removeClass('fa-times');
      $('.nav_bar').removeClass('nav-toggle');
  });

});
