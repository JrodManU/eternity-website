import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./navigation.css";
import "./navigation.html";

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
