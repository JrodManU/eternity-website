import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./loginModalContent.css";

import "./loginModalContent.html";

Template.loginModalContent.events({
  "submit #loginForm": function(event) {
    event.preventDefault();

    var email = event.target.loginEmail.value;
    var password = event.target.loginPassword.value;
    if(!email.trim()) {
      MeteorAlerts.alert("Please enter a Username", 2000, ["meteorAlertWarning"]);
      return;
    }
    if(!password.trim()) {
      MeteorAlerts.alert("Please enter a password", 2000, ["meteorAlertWarning"]);
      return;
    }
    Meteor.loginWithPassword(email, password, function(error) {
      if(error) {
        console.log(error);
        if(error.error === "notVerified") {
          MeteorAlerts.alert(error.reason, 2000, ["meteorAlertWarning"]);
        } else {
          MeteorAlerts.alert("User does not exist or password is incorrect.", 2000, ["meteorAlertWarning"]);
        }
      } else {
        MeteorAlerts.alert("Successfully logged in!", 2000, ["meteorAlertSuccess"]);
        Session.set("showLoginModal", false);
      }
    });
  },
  "click .switchToRegister"() {
    event.preventDefault();
    //this is the session variable that decides between register or login
    Session.set("showLoginModalContent", false);
  }
});
