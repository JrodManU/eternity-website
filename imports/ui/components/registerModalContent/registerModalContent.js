import { Template } from "meteor/templating";

import "./registerModalContent.css";
import "./registerModalContent.html";

Template.registerModalContent.events({
  "submit #registerForm": function(event, template) {
    event.preventDefault();

    var email = template.$("#registerEmail").value.trim();
    var password = template.$("#registerEmail").value.trim();
    var password2 = template.$("#registerEmail").value.trim();
    var firstName = template.$("#registerFirstName").value.trim();
    var lastName = template.$("#registerLastName").value.trim();
    var phoneNumber = template.$("#registerPhoneNumber").value.trim();
    //get the captcha data
    var captchaData = grecaptcha.getResponse();

    Meteor.call("createUserWithCaptcha", email, password, password2, firstName, lastName, phoneNumber, captchaData, function(error) {
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
