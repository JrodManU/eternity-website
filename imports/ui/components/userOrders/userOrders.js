import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import "./userOrders.html";
import "./userOrders.css";

Meteor.subscribe("orders");

Template.userOrders.helpers({
  "userOrders": function() {
    return Orders.find({});
  }
});
