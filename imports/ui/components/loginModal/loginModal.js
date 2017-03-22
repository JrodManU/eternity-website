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
  "click .forgotPassword"(event, template) {

    Accounts.forgotPassword({email: email}, function(err) {
        if (err) {
          if (err.message === 'User not found [403]') {
            console.log('This email does not exist.');
          } else {
            console.log('We are sorry but something went wrong.');
          }
        } else {
          console.log('Email Sent. Check your mailbox.');
        }
      });
  }
});
