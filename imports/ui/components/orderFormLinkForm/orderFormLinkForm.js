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
    var title = template.$("#orderFormLinkFormTitle").val();
    var body = template.$("#orderFormLinkFormBody").val();
    var image = template.$("#orderFormLinkFormImage").val();
    var orderFormLinkId = FlowRouter.getParam("orderFormLinkId");
    //creates a new one if none are found
    if(OrderFormLinks.findOne(orderFormLinkId)) {
      Meteor.call("updateOrderFormLink", orderFormLinkId, title, body, image);
    } else {
      Meteor.call("insertOrderFormLink", orderFormLinkId, title, body, image);
    }
  }
});
