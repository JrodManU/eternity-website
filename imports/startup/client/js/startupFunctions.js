import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";

Meteor.startup(function() {
  Session.set("bannerHeight", $(window).width() / 5);
  Session.set("showLoginModal", false);
  Session.set("showLoginModalContent", true);

  $(window).resize(function(event) {
    Session.set("bannerHeight", $(window).width() / 5);
  });
});
