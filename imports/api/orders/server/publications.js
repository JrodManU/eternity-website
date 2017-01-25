import { Meteor } from "meteor/meteor";

Meteor.publish("orders", function() {
//return Orders.find({}, {fields: {"userId": this.userId}});
return Orders.find({});
});
