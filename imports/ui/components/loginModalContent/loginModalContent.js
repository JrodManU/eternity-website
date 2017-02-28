import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./loginModalContent.html";

import "./loginModalContent.css";

Template.loginModalContent.events({
  "submit #loginForm": function(event) {
    event.preventDefault();

    var email = event.target.loginEmail.value;
    var password = event.target.loginPassword.value;
    if(email.trim() == String.empty) {
      MeteorAlerts.alert("Please enter a username", 2000, []);
    }
    if(password.trim() == String.empty) {
      MeteorAlerts.alert("Please enter a password", 2000, []);
    }
    Meteor.loginWithPassword(email, password, function(error) {
      if(error) {
        MeteorAlerts.alert("User does not exist or password is incorrect.", 2000, []);
      } else {
        MeteorAlerts.alert("Successfully logged in!", 2000, []);
        Session.set("showLoginModal", false);
      }
    });
  },
  "click .switchToRegister"() {
    event.preventDefault();
    Session.set("showLoginModalContent", false);
  }
});
