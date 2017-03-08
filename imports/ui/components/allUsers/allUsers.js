import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import "./allUsers.html";

Meteor.subscribe("users");

Template.allUsers.helpers({
  "users":function() {
    return Meteor.users.find({});
  }
})
