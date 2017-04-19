import { Meteor } from "meteor/meteor";

Meteor.methods({
  "assignRole"(userId, role) {
    var actingUser = Meteor.user();
    var targetUser = Meteor.users.find(userId);
    if(targetUser && targetUser != actingUser && Roles.userIsInRole(actingUser, ["owner"])) {
      Roles.setUserRoles(userId, [role]);
    }
  },
  "deleteUser"(userId) {
    var actingUser = Meteor.user();
    var targetUser = Meteor.users.findOne(userId);
    if(targetUser && targetUser != actingUser && ((Roles.userIsInRole(targetUser, ["normal"]) && Roles.userIsInRole(actingUser, ["admin"])) || (Roles.userIsInRole(targetUser, ["admin"]) && Roles.userIsInRole(actingUser, ["owner"])))) {
      Meteor.users.remove(userId);
      Orders.remove({userId: userId});
    }
  },
  "createUserWithCaptcha"(email, password, password2, captchaData) {
    var errorNumber = 400;
    var errorMessage = null;

    var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);
    if (!verifyCaptchaResponse.success) {
      errorNumber = 422;
      errorMessage = "reCAPTCHA Failed: " + verifyCaptchaResponse.error;
    } else if(!email) {
      errorMessage = "Please enter a username";
    } else if(!password) {
      errorMessage = "Please enter a password";
    } else if(password !== password2) {
      errorMessage = "Passwords do not match.";
    } else if(password.length < 8) {
      errorMessage = "Your password must be at least 8 characters";
    }

    if(errorMessage) {
      throw new Meteor.Error(errorNumber, errorMessage);
    }

    //The password checks are done on the client, so the user could bypass them
    //But you'd have to be pretty dumb to "hack" for a weak password
    Accounts.createUser({
      email: email,
      password: password
    }, function(error) {
      if(error) {
        if(Meteor.isClient) MeteorAlerts.alert(error.message, 1000, ["meteorAlertWarning"]);
      } else {
        if(Meteor.isClient) MeteorAlerts.alert("Successfully registered!", 2000, ["meteorAlertSuccess"]);
      }
    });
  }
});
