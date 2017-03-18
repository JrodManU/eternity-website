import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import "./allOrderFormLinks.html";

Template.allOrderFormLinks.helpers({
  "orderFormLinks":function() {
    return OrderFormLinks.find({});
  }
});

Template.allOrderFormLinks.events({
  "click .editOrderFormLink":function() {
    FlowRouter.go("orderFormLinkEdit", {orderFormLinkId: this._id});
  },
  "click .deleteOrderFormLink":function() {
    Meteor.call("deleteOrderFormLink", this._id);
  },
  "click .addOrderFormLink":function() {
    FlowRouter.go("orderFormLinkEdit", {orderFormLinkId: "none"});
  }
});
