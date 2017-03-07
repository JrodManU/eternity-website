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
    if(userId) {
      Roles.addUsersToRoles(userId, ["normal"]);
    }
  },
  "assignRole"(role) {
    var userId = Meteor.userId();
    if(userId && Roles.userIsInRole(userId, ["admin"])) {
      Roles.setUserRoles(userId, [role]);
    }
  }
});
