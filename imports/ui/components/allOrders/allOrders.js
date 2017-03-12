import { Template } from "meteor/templating";

import "./allOrders.html";

Template.allOrders.helpers({
  "orders":function() {
    return Orders.find({$and: [
      {markedForReview: true},
      {reviewed: false}
    ]});
  }
});

Template.allOrders.events({
  "click .markAsReviewed":function() {
    Meteor.call("markOrderAsReviewed", this._id);
  }
});
