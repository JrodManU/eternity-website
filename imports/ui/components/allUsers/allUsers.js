import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import "./allUsers.html";

Meteor.subscribe("users");

Template.allUsers.helpers({
  "users":function() {
    return Meteor.users.find({});
  },
  "iteratedUserIsInRole":function(role) {
    return Roles.userIsInRole(this._id, role);
  }
});

Template.allUsers.events({
  "click .promoteToAdmin":function() {
    Meteor.call("assignRole", this._id, "admin");
  },
  "click .demoteToNormal":function() {
    Meteor.call("assignRole", this._id, "normal");
  },
  "click .deleteUser":function() {
    Meteor.call("deleteUser", this._id);
  }
});
