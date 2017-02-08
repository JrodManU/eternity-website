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
