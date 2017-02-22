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
    Meteor.loginWithPassword(email, password, function(error) {
      if(error) {
      } else {
        Session.set("showLoginModal", false);
      }
    });
  },
  "click .switchToRegister"() {
    Session.set("showLoginModalContent", false);
  }
});
