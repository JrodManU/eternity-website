import "./orderFormLinksTemplate.css";
import "./orderFormLinksTemplate.html";
import {Meteor} from "meteor/meteor";

Meteor.subscribe("orderFormLinks");

Template.orderFormLinksTemplate.helpers({
  "orderFormLinks": function(){
    return OrderFormLinks.find({});
  }
});

Template.orderFormLinksTemplate.events({
  "click .orderFormLinkDesc"(event) {
    Meteor.call("insertOrderAndGo", this._id);
  }
});
