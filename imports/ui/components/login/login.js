import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import "./login.html";

Template.login.events({
  "submit #loginForm": function(event) {
    event.preventDefault();

    var email = event.target.loginEmail.value;
    var password = event.target.loginPassword.value;
    Meteor.loginWithPassword(email, password);
  }
});
