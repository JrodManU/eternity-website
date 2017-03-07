import { Meteor } from "meteor/meteor";

Meteor.startup(function() {
  if(Meteor.users.find({}).count() < 1) {
    Accounts.createUser({
      email: "eternitytrading1@gmail.com",
      password: "password"
    });
  }
})
