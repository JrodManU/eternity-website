import "./orderFormLinksTemplate.html";
import "./orderFormLinksTemplate.css";
import {Meteor} from "meteor/meteor";

Meteor.subscribe("orderFormLinks");

Template.orderFormLinksTemplate.helpers({
  "orderFormLinks": function(){
    return OrderFormLinks.find({});
  },
  "pathForOrderForm": function() {
    var orderFormLink = this;
    var routeName = "orderForm";
    var params = null;
    var queryParams = { type: orderFormLink.title };
    var path = FlowRouter.path(routeName, params, queryParams);
    return path;
  }
});