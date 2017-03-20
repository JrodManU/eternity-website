import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import "./orderFormLinkForm.css";

import "./orderFormLinkForm.html";

Template.orderFormLinkForm.helpers({
  "orderFormLink":function() {
    return OrderFormLinks.findOne({_id: FlowRouter.getParam("orderFormLinkId")});
  }
});

Template.orderFormLinkForm.events({
  "click .submitOrderFormLink":function(event, template) {
    var title = template.$("#orderFormLinkTitle").val();
    var body = template.$("#orderFormLinkBody").val();
    var imageLink = "";
    var orderFormLinkId = FlowRouter.getParam("orderFormLinkId");
    if(OrderFormLinks.findOne(orderFormLinkId)) {
      Meteor.call("updateOrderFormLink", orderFormLinkId, title, body, imageLink);
    } else {
      Meteor.call("insertOrderFormLink", orderFormLinkId, title, body, imageLink);
    }
  }
});
