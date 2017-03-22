import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./allUsers.css";

import "./allUsers.html";

Meteor.subscribe("users");

Template.allUsers.onCreated(function() {
  Session.set("usersSearchFilter", "");
});

Template.allUsers.helpers({
  "users":function() {
    return Meteor.users.find({emails: {$elemMatch: {address: {$regex: ".*" + Session.get("usersSearchFilter") + ".*"}}}});
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
  },
  "submit #usersSearchForm":function(event, template) {
    event.preventDefault();
    var filter = template.$("#usersSearchField").val().trim();
    //254 is the max length for emails.
    if(filter.length > 254) {
      MeteorAlerts.alert("No email is that long.", 2000, ["meteorAlertWarning"]);
      return;
    }
    Session.set("usersSearchFilter", template.$("#usersSearchField").val().trim());
  }
});
