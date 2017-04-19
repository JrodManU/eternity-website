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
  "createUser"(email, password, captchaData) {
    if(!email) {
      if(Meteor.isClient) MeteorAlerts.alert("Please enter a username", 2000, ["meteorAlertWarning"]);
      return;
    }
    if(!password) {
      if(Meteor.isClient) MeteorAlerts.alert("Please enter a password", 2000, ["meteorAlertWarning"]);
      return;
    }
    if(password !== password2) {
      if(Meteor.isClient) MeteorAlerts.alert("Passwords do not match.", 2000, ["meteorAlertWarning"]);
      return;
    }
    if(password.length < 8) {
      if(Meteor.isClient) MeteorAlerts.alert("Your password must be at least 8 characters", 2000, ["meteorAlertWarning"]);
      return;
    }
    //The password checks are done on the client, so the user could bypass them
    //But you'd have to be pretty dumb to "hack" for a weak password
    Accounts.createUser({
      email: email,
      password: password
    }, function(error) {
      grecaptcha.reset();
      if(error) {
        if(Meteor.isClient) MeteorAlerts.alert(error.message, 1000, ["meteorAlertWarning"]);
      } else {
        if(Meteor.isClient) MeteorAlerts.alert("Successfully registered!", 2000, ["meteorAlertSuccess"]);

      }
    });
  }
});
