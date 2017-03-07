import { Meteor } from "meteor/meteor";

Meteor.methods({
  "insertOrderAndGo"(orderFormLinkId) {
    var orderId;
    var type = null;

    if(orderFormLinkId) {
      type = OrderFormLinks.findOne({_id: orderFormLinkId}).type;
    }

    Orders.insert({
      userId: Meteor.userId(),
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
    if(Orders.find({_id: orderId}).userId === Meteor.userId()) {
      Orders.update(orderId, {$set: { text: text}}, function(error) {
        if(error) {
          MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          MeteorAlerts.alert("Order updated successfully", 2000, ["meteorAlertSuccess"]);
        }
      });
    }
  },
  "deleteOrder"(orderId){
    var user = Meteor.user();
    if(user && (Roles.userIsInRole(user, ["admin"]) || Orders.find({_id: orderId}).userId === user._id))
      Orders.remove({_id: orderId}, function(error) {
        if(error) {
          MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          MeteorAlerts.alert("Order deleted successfully", 2000, ["meteorAlertSuccess"]);
          FlowRouter.go("orderForm", {orderId: "none"}, null);
        }
      });
    }
  },
  "resetOrder"(orderId) {
    if(Orders.find({_id: orderId}).userId === Meteor.userId()) {
      Orders.update(orderId, {$set: { text: ""}}, function(error) {
        if(error) {
          MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          MeteorAlerts.alert("Order reset successfully", 2000, ["meteorAlertSuccess"]);
        }
      });
    }
  }
});
