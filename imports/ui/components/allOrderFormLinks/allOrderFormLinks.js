import { Template } from "meteor/templating";

import "./allOrderFormLinks.html";
import "./allOrderFormLinks.css";

Template.allOrderFormLinks.helpers({
  "orderFormLinks":function() {
    return OrderFormLinks.find({});
  }
});

Template.allOrderFormLinks.events({
  "click .editOrderFormLink":function() {
    FlowRouter.go("orderFormLinkEditPage", {orderFormLinkId: this._id});
  },
  "click .deleteOrderFormLink":function() {

  }
});
