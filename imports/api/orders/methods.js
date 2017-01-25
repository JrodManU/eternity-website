import { Meteor } from "meteor/meteor";

Meteor.methods({
  "insertOrder"(text) {
    Orders.insert({
      userId: this.userId,
      text: text,
      createdAt: new Date()
    });
  }

});
