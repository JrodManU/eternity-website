import { Template } from "meteor/templating";

import "./registerModalContent.html";

import "./registerModalContent.css";

Template.registerModalContent.events({
  "submit #registerForm": function(event) {
    event.preventDefault();

    var email = event.target.registerEmail.value;
    var password = event.target.registerPassword.value;
    Accounts.createUser({
      email: email,
      password: password
    }, function(error) {
      if(error) {
        console.log(error.reason);
      } else {
        Meteor.call("sendVerificationLink");
      }
    });
  },
  "click .switchToLogin"() {
    Session.set("showLoginModalContent", true);
  }
});
