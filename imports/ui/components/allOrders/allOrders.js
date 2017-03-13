import { Template } from "meteor/templating";

import "./allOrders.html";

Template.allOrders.helpers({
  "orders":function() {
    return Orders.find({$and: [
      {markedForReview: true},
      {reviewed: false}
    ]});
  },
  "email":function() {
    return Meteor.users.findOne({_id: this.userId}).emails[0].address;
  }
});

Template.allOrders.events({
  "click .markAsReviewed":function() {
    Meteor.call("markOrderAsReviewed", this._id);
  },
  "click .viewOrder":function() {
    FlowRouter.go("orderView", {orderId: this._id});
  }
});
