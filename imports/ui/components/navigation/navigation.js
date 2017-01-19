import "./navigation.html";
import "./navigation.css";

Template.navigation.rendered = function() {
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
    if ($(window).scrollTop() > 280) {
      $('#navigation').addClass('navbarFixed');
    }
    if ($(window).scrollTop() < 281) {
      $('#navigation').removeClass('navbarFixed');
    }
  });
}
