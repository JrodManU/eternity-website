import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./resetPassword.css";
import "./resetPassword.html";

var doneCallback;
var hi = "hi";

Accounts.onResetPasswordLink(function(token, done) {
  Session.set("resetPasswordToken", token);
  doneCallback = done;
});

Template.resetPassword.events({
  "submit #resetPasswordForm":function(event, template) {
    event.preventDefault();
    if(Session.get("resetPasswordToken")) {
      var newPassword = template.$("#resetPasswordField").val();
      Accounts.resetPassword(Session.get("resetPasswordToken"), newPassword, function(error) {
        if(error) {
          MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          MeteorAlerts.alert("Password reset succesffuly", 2000, ["meteorAlertSuccess"]);
          doneCallback();
          doneCallback = null;
          Session.set("resetPasswordToken", null);
        }
      });
    }
  }
});
