import { Meteor } from "meteor/meteor";

Meteor.methods({
  "insertOrderAndGo"(orderFormLinkId) {
    var userId = Meteor.userId();
    if(userId) {
      var orderId;
      var type = null;

      if(orderFormLinkId) {
        type = OrderFormLinks.findOne(orderFormLinkId).type;
      }

      Orders.insert({
        userId: userId,
        type: type,
        createdAt: new Date(),
        reviewed: false,
        markedForReview: false,
        text: null
      }, function(error, order) {
        if(error) {
          MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          orderId = order;
        }
      });
      FlowRouter.go("orderForm", {orderId: orderId}, null);
    } else {
      MeteorAlerts.alert("Please log in first", 2000, ["meteorAlertWarning"]);
    }
  },
  "updateOrder"(orderId, text){
    var userId = Meteor.userId();
    if(userId && Orders.findOne(orderId).userId === userId) {
      Orders.update(orderId, {$set: { text: text}}, function(error) {
        if(error) {
          MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          MeteorAlerts.alert("Order updated successfully", 2000, ["meteorAlertSuccess"]);
        }
      });
    }
  },
  "deleteOrder"(orderId) {
    var userId = Meteor.userId();
    if(userId && (Roles.userIsInRole(userId, ["admin"]) || Orders.findOne({_id: orderId}).userId === userId)) {
      Orders.remove(orderId, function(error) {
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
    var userId = Meteor.userId();
    if(userId && Orders.findOne(orderId).userId === userId) {
      Orders.update(orderId, {$set: { text: "" }}, function(error) {
        if(error) {
          MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          MeteorAlerts.alert("Order reset successfully", 2000, ["meteorAlertSuccess"]);
        }
      });
    }
  },
  "toggleOrderForReview"(orderId) {
    var userId = Meteor.userId();
    if(userId && Orders.findOne(orderId).userId == userId) {
      var newValue = !Orders.findOne(orderId).markedForReview;
      Orders.update(orderId, {$set: { markedForReview: newValue}}, function(error) {
        if(error) {
          MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          if(newValue) {
            MeteorAlerts.alert("Order marked for review successfully", 2000, ["meteorAlertSuccess"]);
          } else {
            MeteorAlerts.alert("Order unmarked for review successfully", 2000, ["meteorAlertSuccess"]);
          }
        }
      });
    }
  },
  "markOrderAsReviewed"(orderId) {
    var userId = Meteor.userId();
    if(userId && Roles.userIsInRole(userId, ["admin"])) {
      Orders.update(orderId, {$set: { reviewed: true }}, function(error) {
        if(error) {
          MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        }
      });
    }
  }
});
