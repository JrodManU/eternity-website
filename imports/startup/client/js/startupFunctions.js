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
        MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
      } else {
        MeteorAlerts.alert("Your email has been verified!", 2000, ["meteorAlertSuccess"]);
      }
    });
  }

  reCAPTCHA.config({
        publickey: "6Ld8gh0UAAAAAKAN6qYZHNMn74ZqvZ6r7AKNOEvo"
    });
});
