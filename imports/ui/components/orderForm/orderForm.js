import {Template} from "meteor/templating";
import "./orderForm.html";

Template.orderForm.events({
  "submit #printOrder"(event){
    //prevents default form submission
    event.preventDefault();
    console.log("Hi.");
    Meteor.call("submitOrderForm");
  },
});
