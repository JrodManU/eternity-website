import "./orderFormLinksTemplate.html";
import {Meteor} from "meteor/meteor";

Meteor.subscribe("orderFormLinks");
Template.orderFormLinkTemplate.helpers({
  "orderFormLinks": function(){
      return OrderFormLinks.find();
  }
});
