import { Template } from "meteor/templating";

import "./registerModalContent.css";
import "./registerModalContent.html";

Template.registerModalContent.events({
  "submit #registerForm": function(event, template) {
    event.preventDefault();
    var email = template.$("#registerEmail").val().trim();
    var password = template.$("#registerPassword").val().trim();
    var password2 = template.$("#registerPassword2").val().trim();
    var firstName = template.$("#registerFirstName").val().trim();
    var lastName = template.$("#registerLastName").val().trim();
    var phoneNumber = template.$("#registerPhoneNumber").val().trim();
    var captchaData = grecaptcha.getResponse();

    //The password checks are done on the client, so the user could bypass them
    //But you'd have to be pretty dumb to "hack" for a weak password
    Meteor.call("createUserWithCaptcha",
      email,
      password,
      password2,
      firstName,
      lastName,
      phoneNumber,
      captchaData,
      function(error) {
        grecaptcha.reset();
        if(error) {
          MeteorAlerts.alert(error.reason, 2000, ["meteorAlertWarning"]);
        } else {
          MeteorAlerts.alert("Success! Please verify your email and login.", 3000, ["meteorAlertSuccess"]);
          Session.set("showLoginModal", false);
        }
    });
  },
  "click .switchToLogin"(event) {
    event.preventDefault();
    Session.set("showLoginModalContent", true);
  }
});
