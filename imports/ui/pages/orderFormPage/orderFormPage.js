import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import "./orderFormPage.html";

Meteor.subscribe("orders");

Template.orderFormPage.events({
  "submit .orderForm"(event){
    console.log("Hi.");
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
