import { Template } from "meteor/templating";

import "./allOrders.html";

Template.allOrders.helpers({
  "orders":function() {
    return Orders.find({markedForReview: true});
  }
})
