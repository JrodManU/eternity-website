import { Meteor } from "meteor/meteor";
import { Email } from "meteor/email";

Meteor.methods({
  "insertOrderAndGo"(orderFormLinkId) {
    var orderId;
    var type = null;

    if(orderFormLinkId) {
      type = OrderFormLinks.findOne({_id: orderFormLinkId}).type;
    }

    Orders.insert({
      userId: this.userId,
      type: type,
      createdAt: new Date()
    }, function(error, order) {
      if(error) {
        MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
      } else {
        orderId = order;
      }
    });
    FlowRouter.go("orderForm", {orderId: orderId}, null);
  },
  "updateOrder"(orderId, text){
    Orders.update(orderId, {$set: { text: text}}, function(error) {
      if(error) {
        MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
      } else {
        MeteorAlerts.alert("Order updated successfully", 2000, ["meteorAlertSuccess"]);
      }
    });
  },
  "deleteOrder"(orderId){
    Orders.remove({_id: orderId}, function(error) {
      if(error) {
        MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
      } else {
        MeteorAlerts.alert("Order deleted successfully", 2000, ["meteorAlertSuccess"]);
      }
    });
    FlowRouter.go("orderForm", {orderId: "none"}, null);
  },
  "resetOrder"(orderId) {
    Orders.update(orderId, {$set: { text: ""}}, function(error) {
      if(error) {
        MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
      } else {
        MeteorAlerts.alert("Order reset successfully", 2000, ["meteorAlertSuccess"]);
      }
    });
  },
  "submitOrder" (orderId) {
    Email.send({
      to: "mrjrodmac@gmail.com",
      from: Meteor.user().emails[0].address,
      subject: "Order from website",
      text: Orders.find({_id: orderId}).type
    });
  }
});
