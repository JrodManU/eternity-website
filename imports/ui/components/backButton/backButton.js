import { Template } from "meteor/templating";

import "./backButton.html";
import "./backButton.css";

Template.backButton.events({
  "click .backButton":function() {
    window.history.back();
  }
});
