import { Meteor } from "meteor/meteor";
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
  $(document).ready(function(){
  $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
    })
});
}

Template.navigation.events({
  "click #orderFormNavButton": function(event) {
    event.preventDefault();
    Meteor.call("insertOrderAndGo", null);
  }
});
