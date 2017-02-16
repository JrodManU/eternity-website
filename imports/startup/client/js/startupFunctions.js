import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";

Meteor.startup(function() {
  Session.set("bannerHeight", $(window).width() / 5);
  Session.set("showLoginModal", false);
  Session.set("showLoginModalContent", true);

  $(window).resize(function(event) {
    Session.set("bannerHeight", $(window).width() / 5);
  });

  if (Accounts._verifyEmailToken) {
    Accounts.verifyEmail(Accounts._verifyEmailToken, function(error) {
      if (error) {
        console.log(err.reason);
      } else {
        console.log("Thank you! Your email address has been confirmed.");
      }
    });
  }
});
