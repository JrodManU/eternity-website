import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import "./userOrders.css";

import "./userOrders.html";

Meteor.subscribe("orders", function() {
  Session.set("ordersLoaded", true);
});

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
  //brings up the order
  "click .editMessage": function() {
    FlowRouter.go("orderForm", {orderId: this._id});
  }
});
