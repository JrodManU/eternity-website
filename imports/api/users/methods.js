import { Meteor } from "meteor/meteor";

Meteor.methods({
  "sendVerificationLink"() {
    var userId = Meteor.userId();
    if(userId) {
      return Accounts.sendVerificationEmail(userId);
    }
  },
  "assignRole"() {
    var userId = Meteor.userId();
    if(userId) {
      Roles.addUsersToRoles(userId, ["normal"]);
    }
  }
});
