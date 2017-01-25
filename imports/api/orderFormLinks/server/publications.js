import { Meteor } from "meteor/meteor";

Meteor.publish("orderFormLinks", function() {
  return OrderFormLinks.find({});
});
