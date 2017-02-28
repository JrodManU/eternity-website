import { Template } from "meteor/templating";

import "./registerModalContent.html";

import "./registerModalContent.css";

Template.registerModalContent.events({
  "submit #registerForm": function(event) {
    event.preventDefault();

    var email = event.target.registerEmail.value;
    var password = event.target.registerPassword.value;
    var password2 = event.target.registerPassword2.value;
    if(email.trim() == String.empty) {
      MeteorAlerts.alert("Please enter a username", 2000, []);
    }
    if(password.trim() == String.empty) {
      MeteorAlerts.alert("Please enter a password", 2000, []);
    }
    if(password !== password2) {
      MeteorAlerts.alert("Passwords do not match.", 2000, []);
    }
    Accounts.createUser({
      email: email,
      password: password
    }, function(error) {
      if(error) {
        console.log(error.reason);
      } else {
        Session.set("showLoginModal", false);
        Meteor.call("sendVerificationLink");
      }
    });
  },
  "click .switchToLogin"() {
    Session.set("showLoginModalContent", true);
  }
});
