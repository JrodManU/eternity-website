import { Meteor } from "meteor/meteor";

Meteor.methods({
  "deleteOrderFormLink"(orderFormLinkId) {
    var userId = Meteor.userId();
    if(userId && Roles.userIsInRole(userId, ["admin"])) {
      OrderFormLinks.remove(orderFormLinkId);
    }
  }
});
