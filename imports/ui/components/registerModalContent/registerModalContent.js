import { Template } from "meteor/templating";

import "./registerModalContent.css";
import "./registerModalContent.html";

Template.registerModalContent.events({
  "submit #registerForm": function(event, template) {
    event.preventDefault();
    var email = template.$("#registerEmail").val().trim();
    var password = template.$("#registerEmail").val().trim();
    var password2 = template.$("#registerEmail").val().trim();
    var firstName = template.$("#registerFirstName").val().trim();
    var lastName = template.$("#registerLastName").val().trim();
    var phoneNumber = template.$("#registerPhoneNumber").val().trim();
    //get the captcha data
    var captchaStatus = false;
    Meteor.call("verifyCaptcha", grecaptcha.getResponse(), function(error, result) {
      captchaStatus = result;
      grecaptcha.reset();
    });
    if (!captchaStatus) {
      MeteorAlerts.alert("reCAPTCHA failed, please try again", 2000, ["meteorAlertWarning"]);
    } else if(!email) {
      MeteorAlerts.alert("Please enter a username", 2000, ["meteorAlertWarning"]);
    } else if(!password) {
      MeteorAlerts.alert("Please enter a password", 2000, ["meteorAlertWarning"]);
    } else if(password !== password2) {
      MeteorAlerts.alert("Passwords do not match", 2000, ["meteorAlertWarning"]);
    } else if(password.length < 8) {
      MeteorAlerts.alert("Your password must be atleast 8 characters.", 2000, ["meteorAlertWarning"]);
    } else if(!firstName) {
      MeteorAlerts.alert("Please enter a first name", 2000, ["meteorAlertWarning"]);
    } else if(firstName.legth > 30) {
        MeteorAlerts.alert("First name is too long", 2000, ["meteorAlertWarning"]);
    } else if(!lastName) {
        MeteorAlerts.alert("Please enter a last name", 2000, ["meteorAlertWarning"]);
    } else if(lastName.length > 30) {
        MeteorAlerts.alert("Last name is too long", 2000, ["meteorAlertWarning"]);
    } else if(!phoneNumber) {
        MeteorAlerts.alert("Please enter a phone number", 2000, ["meteorAlertWarning"]);
    } else if(phoneNumber.length > 10) {
        MeteorAlerts.alert("Phone number is too long, please use this format XXXXXXXXXX", 2000, ["meteorAlertWarning"]);
    }

    //The password checks are done on the client, so the user could bypass them
    //But you'd have to be pretty dumb to "hack" for a weak password
    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
      }
    }, function(error) {
      if(error) {
        MeteorAlerts.alert(error.reason, 2000, ["meteorAlertWarning"]);
      } else {
        MeteorAlerts.alert("Successfully registered!", 2000, ["meteorAlertSuccess"]);
      }
    });
  },
  "click .switchToLogin"(event) {
    event.preventDefault();
    Session.set("showLoginModalContent", true);
  }
});
