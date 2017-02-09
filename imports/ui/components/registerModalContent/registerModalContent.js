import { Template } from "meteor/templating";

import "./register.html";

Template.register.events({
  "submit #registerForm": function(event) {
    event.preventDefault();

    var email = event.target.registerEmail.value;
    var password = event.target.registerPassword.value;
    Accounts.createUser({
      email: email,
      password: password
    });
  }
});
