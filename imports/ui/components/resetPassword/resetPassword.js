import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./resetPassword.css";
import "./resetPassword.html";

//have to call this once reset
var doneCallback;

//called when the user clicks the link in their email
Accounts.onResetPasswordLink(function(token, done) {
  Session.set("resetPasswordToken", token);
  doneCallback = done;
});

Template.resetPassword.events({
  "submit #resetPasswordForm":function(event, template) {
    event.preventDefault();
    if(Session.get("resetPasswordToken")) {
      var newPassword = template.$("#resetPasswordField").val();
      var newPassword2 = template.$("#resetPasswordField2").val();
      if(newPassword != newPassword2) {
        MeteorAlerts.alert("Passwords are not the same", 2000, ["meteorAlertWarning"]);
        return;
      }
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
