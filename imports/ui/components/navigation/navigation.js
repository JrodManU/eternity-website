import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./navigation.css";

import "./navigation.html";

//The banner requires a lot of sizing stuff in order to work

Template.navigation.onRendered(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= Session.get("bannerHeight")) {
      $('.navbar').addClass('navbarFixed');
    }
    if ($(window).scrollTop() < Session.get("bannerHeight")) {
      $('.navbar').removeClass('navbarFixed');
    }
  });
});

Template.navigation.events({
  "click #mobileTripleBar":function(event, template) {
    template.$("#navLinksMobile").toggle();
  },
  "click #navLinksMobile li a":function(event, template) {
    template.$("#navLinksMobile").hide();
  }
})
