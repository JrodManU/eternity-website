import { Template } from "meteor/templating";

import "./backButton.html";

Template.backButton.events({
  "click .backButton":function() {
    window.history.back();
  }
});
