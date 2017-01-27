import { Template } from "meteor/templating";
import "./orderForm.html";

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
    Meteor.call("insertOrder", text);
    target.orderDescription.value="";
  }
});
