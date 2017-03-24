import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./orderForm.css";

import "./orderForm.html";

Template.orderForm.helpers({
  "order":function() {
    return Orders.findOne({_id:FlowRouter.getParam("orderId")});
  },
  "disabled":function() {
    var order = Orders.findOne({_id:FlowRouter.getParam("orderId")});
    return order && !order.markedForReview ? "" : "disabled";
  },
  "orderFormLinks":function() {
    return OrderFormLinks.find();
  },
  "selected":function() {
    var order = Orders.findOne({_id:FlowRouter.getParam("orderId")});
    return order.type === this.title ? "selected" : "";
  },
  "measureSelected":function(measure) {
    var order = Orders.findOne({_id:FlowRouter.getParam("orderId")});
    return measure === order.units ? "selected" : "";
  }
});

Template.orderForm.events({
  "click .saveOrder"(event, template) {
    //get value from form element
    var name = template.$("#orderName").val();
    var type;
    if(template.$("#orderType").val() === "other") {
      type = template.$("#orderOtherType").val();
    } else {
      type = template.$("#orderType").val();
    }
    var amount = template.$("#orderAmount").val();
    var width = template.$("#orderWidth").val();
    var height = template.$("#orderHeight").val();
    var units = template.$("#orderUnits").val();
    var description = template.$("#orderDescription").val();
    var firstName = template.$("#orderFirstName").val();
    var lastName = template.$("#orderLastName").val();
    var phoneNumber = template.$("#orderPhoneNumber").val();
    Meteor.call("updateOrder", FlowRouter.getParam("orderId"), name, type, amount, width, height, units, description, firstName, lastName, phoneNumber);
  },
  "click .deleteOrder"(event, template){
    Meteor.call("deleteOrder", FlowRouter.getParam("orderId"));
  },
  "click .newOrder"(){
    Meteor.call("insertOrderAndGo", null);
  },
  "click .resetOrder"() {
    Meteor.call("resetOrder", FlowRouter.getParam("orderId"));
  },
  "click .submitOrder"() {
    Meteor.call("toggleOrderForReview", FlowRouter.getParam("orderId"));
  },
  "click .unsubmitOrder"() {
    Meteor.call("toggleOrderForReview", FlowRouter.getParam("orderId"));
  },
  "click .previewOrder":function() {
    FlowRouter.go("orderView", {
      orderId: FlowRouter.getParam("orderId")
    });
  }
});
