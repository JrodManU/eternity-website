import { Template } from "meteor/templating";
import "./orderForm.html";

import "./orderForm.css";

Template.orderForm.helpers({
  "order":function() {
    return Orders.findOne({_id:FlowRouter.getParam("orderId")});
  }
});

Template.orderForm.events({
  "click .saveOrder"(event, template) {
    //get value from form element
    var text = template.$(".orderFormTextField").val();
    //insert task into current collection
    Meteor.call("updateOrder", FlowRouter.getParam("orderId"), text);
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
    Meteor.call("submitOrder", FlowRouter.getParam("orderId"));
  },
  "change .selectTypeOfOrder"(event, template) {
    if(event.target.value == "Other") {
      template.$(".hideOtherType").show();
    } else {
      template.$(".hideOtherType").hide();
    }
  }
});
