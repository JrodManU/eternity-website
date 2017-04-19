import { Template } from "meteor/templating";

import "./registerModalContent.css";
import "./registerModalContent.html";

Template.registerModalContent.events({
  "submit #registerForm": function(event) {
    event.preventDefault();

    var email = event.target.registerEmail.value.trim();
    var password = event.target.registerPassword.value.trim();
    var password2 = event.target.registerPassword2.value.trim();
    //get the captcha data
    var captchaData = grecaptcha.getResponse();

    Meteor.call("createUserWithCaptcha", email, password, password2, captchaData, function(error) {
      grecaptcha.reset();
      if(error) {
        MeteorAlerts.alert(error.reason, 2000, ["meteorAlertWarning"]);
      }
    });
  },
  "click .switchToLogin"(event) {
    event.preventDefault();
    Session.set("showLoginModalContent", true);
  }
});
