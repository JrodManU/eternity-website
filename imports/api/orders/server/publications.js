import { Meteor } from "meteor/meteor";

Meteor.publish("orders", function() {
  if(Roles.userIsInRole(this.userId, ["admin"])) {
    return Orders.find({});
  } else {
    return Orders.find({"userId": this.userId});
  }
});
