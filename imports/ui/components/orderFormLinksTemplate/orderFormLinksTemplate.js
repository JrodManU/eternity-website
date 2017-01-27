import "./orderFormLinksTemplate.css";
import "./orderFormLinksTemplate.html";
import {Meteor} from "meteor/meteor";

Meteor.subscribe("orderFormLinks");

Template.orderFormLinksTemplate.helpers({
  "orderFormLinks": function(){
    return OrderFormLinks.find({});
  },
  "pathForOrderForm": function() {
    var orderFormLink = this;
    var routeName = "orderForm";
    var params = "lol";
    var queryParams = { type: orderFormLink.title };
    var path = FlowRouter.path(routeName, params, queryParams);
    return path;
  }
});
