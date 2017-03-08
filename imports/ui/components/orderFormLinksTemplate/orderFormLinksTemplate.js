import "./orderFormLinksTemplate.css";
import "./orderFormLinksTemplate.html";
import {Meteor} from "meteor/meteor";
import { Session } from "meteor/session";

Meteor.subscribe("orderFormLinks");

Template.orderFormLinksTemplate.helpers({
  "orderFormLinks": function(){
    return OrderFormLinks.find({});
  },
  "linkSize": function() {
    return Session.get("bannerHeight") + "px";
  }
});

Template.orderFormLinksTemplate.events({
  "click .orderFormLinkDesc"(event) {
    if(Meteor.userId()) {
      Meteor.call("insertOrderAndGo", this._id);
    } else {
      MeteorAlerts.alert("Please log in first", 2000, ["meteorAlertWarning"]);
    }
  }
});
