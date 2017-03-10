import { Meteor } from "meteor/meteor";

Meteor.methods({
  "sendVerificationLink"() {
    var userId = Meteor.userId();
    if(userId) {
      return Accounts.sendVerificationEmail(userId);
    }
  },
  "selfAssignDefaultRole"() {
    var userId = Meteor.userId();
    if(userId && !Roles.userIsInRole(userId, ["owner"])) {
      Roles.addUsersToRoles(userId, ["normal"]);
    }
  },
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
    }
  }
});
