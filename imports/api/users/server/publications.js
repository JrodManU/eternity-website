import { Meteor } from "meteor/meteor";

Meteor.publish("users", function() {
  //admins only
  if(Roles.userIsInRole(this.userId, ["admin"])) {
    return Meteor.users.find({"emails.address":
      {$ne: "eternitytrading1@gmail.com"}
    });
  }
});
