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
    //So that login shows up when opened
    Session.set("showLoginModalContent", true);
  },
  "click .forgotPassword"(event, template) {
    var email = template.$("#forgotPasswordEmail").val();
    if(email.length > 254) {
      MeteorAlerts.alert("No email is that long.", 2000, ["meteorAlertWarning"]);
      return;
    }
    Accounts.forgotPassword({email: email}, function(error) {
      if(error) {
        MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
      } else {
        MeteorAlerts.alert("Email Sent. Check your mailbox.", 2000, ["meteorAlertSuccess"]);
        Session.set("showLoginModal", false);
        Session.set("showLoginModalContent", true);
      }
    });
  }
});
