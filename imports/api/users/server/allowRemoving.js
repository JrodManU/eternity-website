import { Meteor } from "meteor/meteor";

Meteor.startup(function() {
  Meteor.users.allow({
    remove:function() {
      return true;
    }
  });
});
