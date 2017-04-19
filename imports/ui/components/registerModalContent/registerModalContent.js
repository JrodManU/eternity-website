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
    var captchaData = grecaptcha.getResponse();
    var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);
    if (!verifyCaptchaResponse.success) {
      errorNumber = 422;
      errorMessage = "reCAPTCHA failed, please try again";
    } else if(!email) {
      errorMessage = "Please enter a username";
    } else if(!password) {
      errorMessage = "Please enter a password";
    } else if(password !== password2) {
      errorMessage = "Passwords do not match.";
    } else if(password.length < 8) {
      errorMessage = "Your password must be at least 8 characters";
    } else if(!firstName) {
      errorMessage = "Please enter a first name";
    } else if(firstName.legth > 30) {
      errorMessage = "First name is too long";
    } else if(!lastName) {
      errorMessage = "Please enter a last name";
    } else if(lastName.length > 30) {
      errorMessage = "Last name is too long";
    } else if(!phoneNumber) {
      errorMessage = "Please enter a phone number";
    } else if(phoneNumber.length > 10) {
      errorMessage = "Phone number is too long, please use this format XXXXXXXXXX";
    }

    if(errorMessage) {
      throw new Meteor.Error(errorNumber, errorMessage);
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
        MeteorAlerts.alert(error.reason, 1000, ["meteorAlertWarning"]);
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
