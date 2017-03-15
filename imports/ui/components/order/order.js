import { Template } from "meteor/templating";

import "./order.css";

import "./order.html";

Template.order.helpers({
  "order":function() {
    return Orders.findOne({_id:FlowRouter.getParam("orderId")});
  }
});
