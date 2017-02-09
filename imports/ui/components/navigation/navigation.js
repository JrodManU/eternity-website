import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./navigation.css";
import "./navigation.html";

Template.navigation.rendered = function() {
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
    if ($(window).scrollTop() >= Session.get("bannerHeight")) {
      $('.navbar').addClass('navbarFixed');
    }
    if ($(window).scrollTop() < Session.get("bannerHeight")) {
      $('.navbar').removeClass('navbarFixed');
    }
  });
}
