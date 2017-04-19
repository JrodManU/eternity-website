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
  //this is for the type select
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
    Meteor.call("updateOrder", FlowRouter.getParam("orderId"), name, type, amount, width, height, units, description);
  },
  "click .deleteOrder"(event, template){
    Meteor.call("deleteOrder", FlowRouter.getParam("orderId"));
  },
  "click .newOrder"(){
    Meteor.call("insertOrderAndGo", null, null, null, null, null, null, null, null);
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
