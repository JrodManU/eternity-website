import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import "./orderFormPage.html";

Template.body.events({
  "submit .orderFormTask"(event){
    //prevent default submit
    event.preventDefault();
    //get value from form element
    var target = event.target;
    var text = target.orderDescription.value;
    //insert task into current collection
    Orders.insert({
      userId: Meteor.user(),
      text: text,
      createdAt: new Date()
    });
    target.text.value="";
  }
});
