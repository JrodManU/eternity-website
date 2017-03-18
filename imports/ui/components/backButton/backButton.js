import { Template } from "meteor/templating";

import "./backButton.html";

Template.backButton.events({
  "click .backButton":function(event) {
    event.preventDefault();
    window.history.back();
  }
});
