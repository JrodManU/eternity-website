import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";
Meteor.startup(function() {
  Session.set("bannerHeight", $(window).width() / 5);
  $(window).resize(function(event) {
    Session.set("bannerHeight", $(window).width() / 5);
  });
});
