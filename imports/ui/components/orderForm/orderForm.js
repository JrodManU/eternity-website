import { Template } from "meteor/templating";
import "./orderForm.html";

Template.orderForm.helpers({
  "order":function(){
    return Orders.findOne({_id:FlowRouter.getParam("orderId")});
  }
});
