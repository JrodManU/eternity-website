import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import "./logout.html"

Template.logout.events({
  "click #logout": function(event) {
    event.preventDefault();

    Meteor.logout(function(error) {
      if(error) {
        MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
      } else {
        MeteorAlerts.alert("Succesfully logged out.", 2000, ["meteorAlertSuccess"]);
      }
    });
  }
});
