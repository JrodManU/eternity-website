import "./navigation.css";
import "./navigation.html";

Template.navigation.rendered = function() {
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
    if ($(window).scrollTop() > 280) {
      $('.navbar').addClass('navbarFixed');
    }
    if ($(window).scrollTop() < 281) {
      $('.navbar').removeClass('navbarFixed');
    }
  });
}
