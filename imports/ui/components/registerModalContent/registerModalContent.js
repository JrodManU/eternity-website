import { Template } from "meteor/templating";

import "./registerModalContent.css";
import "./registerModalContent.html";

Template.registerModalContent.events({
  "submit #registerForm": function(event) {
    event.preventDefault();

    var email = event.target.registerEmail.value.trim();
    var password = event.target.registerPassword.value.trim();
    var password2 = event.target.registerPassword2.value.trim();
    if(!email) {
      MeteorAlerts.alert("Please enter a username", 2000, ["meteorAlertWarning"]);
      return;
    }
    if(!password) {
      MeteorAlerts.alert("Please enter a password", 2000, ["meteorAlertWarning"]);
      return;
    }
    if(password !== password2) {
      MeteorAlerts.alert("Passwords do not match.", 2000, ["meteorAlertWarning"]);
      return;
    }
    if(password.length < 8) {
      MeteorAlerts.alert("Your password must be at least 8 characters", 2000, ["meteorAlertWarning"]);
      return;
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
      }
    });
  },
  "click .switchToLogin"(event) {
    event.preventDefault();
    Session.set("showLoginModalContent", true);
  }
});
