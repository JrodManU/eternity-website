import "./loginModal.css";
import "./loginModal.html";

import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

Template.loginModal.helpers({
  "showLoginModal":function() {
    return Session.get("showLoginModal");
  },
  "showLoginModalContent":function() {
    return Session.get("showLoginModalContent");
  }
});

Template.loginModal.events({
  "click .closeLoginModal"() {
    Session.set("showLoginModal", false);
  }
})
