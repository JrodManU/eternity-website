import { Template } from "meteor/templating";
import "./orderForm.html";

import "./orderForm.css";

Template.orderForm.onRender({
  $(".selectTypeOfOrder").change(function(){

  });
});

Template.orderForm.helpers({
  "order":function(){
    return Orders.findOne({_id:FlowRouter.getParam("orderId")});
  }
});

Template.orderForm.events({
  "submit .orderForm"(event){
    //prevent default submit
    event.preventDefault();
    //get value from form element
    var target = event.target;
    var text = target.orderDescription.value;
    //insert task into current collection
    Meteor.call("updateOrder", FlowRouter.getParam("orderId"), text);
    target.orderDescription.value="";
  },
  "click .deleteOrder"(){
    Meteor.call("deleteOrder", FlowRouter.getParam("orderId"));
  },
  "click .newOrder"(){
    Meteor.call("insertOrderAndGo", "");
  },
  "click .resetOrder"() {
    Meteor.call("resetOrder", FlowRouter.getParam("orderId"));
  }
});
