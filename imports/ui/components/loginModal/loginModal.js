import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";

import "./loginModal.css";

import "./loginModal.html";



Template.loginModal.helpers({
  "showLoginModal":function() {
    return Session.get("showLoginModal");
  },
  "showLoginModalContent":function() {
    return Session.get("showLoginModalContent");
  },
  "loginModalHeader":function() {
    if(Session.get("showLoginModalContent")) {
      return "Please Login";
    } else {
      return "Please Register";
    }
  }
});

Template.loginModal.events({
  "click .closeLoginModal"() {
    Session.set("showLoginModal", false);
  },
  "submit #forgotPasswordForm"(event, template) {
    event.preventDefault();
    var email = template.$("#forgotPasswordEmail").val();
    Accounts.forgotPassword({email: email}, function(error) {
      if(error) {
        MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
      } else {
        MeteorAlerts.alert("Email sent. Please check your inbox.", 2000, ["meteorAlertSuccess"]);
      }
    });
  }
});
