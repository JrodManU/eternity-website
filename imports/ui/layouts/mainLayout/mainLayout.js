import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./mainLayout.css";
import "./mainLayout.html";

Template.mainLayout.helpers({
  "resetPasswordToken":function() {
    return Session.get("resetPasswordToken");
  }
});
