import { Meteor } from "meteor/meteor";
import { Email } from "meteor/email";

Meteor.methods({
  console.log(Orders.find({_id: orderId}).type);
  /*"submitOrder" (orderId) {
    Email.send({
      to: "mrjrodmac@gmail.com",
      from: "no-reply@eternity.com",
      subject: "Order from website",
      text: Orders.find({_id: orderId}).type
    });
  }*/
});
