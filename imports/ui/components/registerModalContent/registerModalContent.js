import { Template } from "meteor/templating";

import "./registerModalContent.html";

import "./registerModalContent.css";

Template.registerModalContent.events({
  "submit #registerForm": function(event) {
    event.preventDefault();

    var email = event.target.registerEmail.value;
    var password = event.target.registerPassword.value;
    var password2 = event.target.registerPassword2.value;
    if(!email.trim()) {
      MeteorAlerts.alert("Please enter a username", 2000, ["meteorAlertWarning"]);
      return;
    }
    if(!password.trim()) {
      MeteorAlerts.alert("Please enter a password", 2000, ["meteorAlertWarning"]);
      return;
    }
    if(password !== password2) {
      MeteorAlerts.alert("Passwords do not match.", 2000, ["meteorAlertWarning"]);
    }
    Accounts.createUser({
      email: email,
      password: password
    }, function(error) {
      if(error) {
        MeteorAlerts.alert(error.message, 1000, ["meteorAlertWarning"]);
      } else {
        MeteorAlerts.alert("Successfully registered!", 2000, ["meteorAlertSuccess"]);
        Session.set("showLoginModal", false);
        Meteor.call("sendVerificationLink");
      }
    });
  },
  "click .switchToLogin"(event) {
    event.preventDefault();
    Session.set("showLoginModalContent", true);
  }
});
