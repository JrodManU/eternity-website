import "./orderFormLinksTemplate.html";
import {Meteor} from "meteor/meteor";

Meteor.subscribe("orderFormLinks");

Template.orderFormLinksTemplate.helpers({
  "orderFormLinks": function(){
    return OrderFormLinks.find({});
  }
});
