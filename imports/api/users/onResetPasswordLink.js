import { Template } from "meteor/templating";
import { Session } from "meteor/session";

var doneCallback;

Accounts.onResetPasswordLink(function(token, done) {
  Session.set("resetPasswordToken", token);
  doneCallback = done;
});

/*Template.resetPassword.events({
  "submit #resetPasswordForm":function(event, template) {
    event.preventDefault();

    var newPassword = template.$("#resetPasswordField");

    if(doneCallback) {
      Accounts.resetPassword(Session.get("resetPasswordToken"), newPassword, function(error) {
        if(error) {
          MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          MeteorAlerts.alert("Password reset succesffuly", 2000, ["meteorAlertSuccess"]);
          doneCallback();
        }
      });
    }

    Session.set("resetPasswordToken", null);
  }
});*/
