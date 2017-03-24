import {Meteor} from "meteor/meteor";
import { Session } from "meteor/session";

import "./orderFormLinksTemplate.css";

import "./orderFormLinksTemplate.html";

Meteor.subscribe("orderFormLinks");

Template.orderFormLinksTemplate.helpers({
  "orderFormLinks": function(){
    return OrderFormLinks.find({});
  }
});

Template.orderFormLinksTemplate.events({
  "click .orderFormLinkDesc"(event) {
    if(Meteor.userId()) {
      Meteor.call("insertOrderAndGo", this._id, null, null, null, null, null, null, null, null, null, null);
    } else {
      MeteorAlerts.alert("Please log in first", 2000, ["meteorAlertWarning"]);
    }
  }
});
