import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import "./userOrders.html";
import "./userOrders.css";

Meteor.subscribe("orders");

Template.userOrders.helpers({
  "userOrders": function() {
    return Orders.find({userId: Meteor.userId()});
  },
  "orderStatus":function() {
    //Reviewed, Pending, and In-Progress
    if (this.reviewed) {
      return "Reviewed";
    } else if (this.markedForReview) {
      return "Pending";
    } else {
      return "In Progress";
    }
  }
});

Template.userOrders.events({
  "click .editMessage": function() {
    FlowRouter.go("orderForm", {orderId: this._id});
  }
});
