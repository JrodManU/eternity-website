import "./loginModal.css";
import "./loginModal.html";

import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";

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
  }
});
