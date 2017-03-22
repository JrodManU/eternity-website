import { Meteor } from "meteor/meteor";
import { MeteorAlerts } from "meteor/jrodmanu:meteor-alerts";

Meteor.methods({
  "insertOrderAndGo"(orderFormLinkId, name, type, amount, width, height, description, firstName, lastName, phoneNumber) {
    var userId = Meteor.userId();
    if(userId) {
      if(Roles.userIsInRole(userId, ["owner"])) {
        if(this.isSimulation) MeteorAlerts.alert("The owner cannot make orders", 2000, ["meteorAlertWarning"]);
        return;
      }

      var orderToInsert = {
        userId: userId,
        orderFormLinkId: orderFormLinkId,
        createdAt: new Date(),
        markedForReview: false,
        reviewed: false,
        name: name,
        type: type,
        amount: amount,
        width: width,
        height: height,
        description: description,
        firstName: firstName,
        lastName: lastName,
        phoneNUmber: phoneNumber
      }

      OrderSchema.clean(orderToInsert);
      var orderSchemaContext = OrderSchema.newContext();
      if(!orderSchemaContext.validate(orderToInsert)) {
        if(this.isSimulation) MeteorAlerts.alert("One of the input fields is way too long", 2000, ["meteorAlertWarning"]);
      } else {
        Orders.insert(orderToInsert, function(error, orderId) {
          if(error) {
            if(this.isSimulation) MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
          } else {
            if(this.isSimulation) FlowRouter.go("orderForm", {orderId: orderId}, null);
          }
        });
      }
    } else {
      if(this.isSimulation) MeteorAlerts.alert("Please log in first", 2000, ["meteorAlertWarning"]);
    }
  },
  "updateOrder"(orderId, name, type, amount, width, height, description, firstName, lastName, phoneNumber){
    var userId = Meteor.userId();
    if(userId && Orders.findOne(orderId).userId === userId) {
      Orders.update(orderId, {$set:
        { name: name,
          type: type,
          amount: amount,
          width: width,
          height: height,
          description: description,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber
        },
      }, function(error) {
        if(error) {
          if(this.isSimulation) MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          if(this.isSimulation) MeteorAlerts.alert("Order updated successfully", 2000, ["meteorAlertSuccess"]);
        }
      });
    }
  },
  "deleteOrder"(orderId) {
    var userId = Meteor.userId();
    if(userId && (Roles.userIsInRole(userId, ["admin"]) || Orders.findOne({_id: orderId}).userId === userId)) {
      Orders.remove(orderId, function(error) {
        if(error) {
          if(this.isSimulation) MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          if(this.isSimulation) MeteorAlerts.alert("Order deleted successfully", 2000, ["meteorAlertSuccess"]);
          FlowRouter.go("orderForm", {orderId: "none"}, null);
        }
      });
    }
  },
  "resetOrder"(orderId) {
    var userId = Meteor.userId();
    var order = Orders.findOne(orderId);
    if(userId && order.userId === userId) {
      var type;
      if(order.orderFormLinkId != null) {
        type = OrderFormLinks.findOne(order.orderFormLinkId).title;
      } else {
        type = null;
      }
      Orders.update(orderId, {$set: {
        name: null,
        type: type,
        amount: null,
        width: null,
        height: null,
        description: null,
        firstName: null,
        lastName: null,
        phoneNumber: null
      }}, function(error) {
        if(error) {
          if(this.isSimulation) MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          if(this.isSimulation) MeteorAlerts.alert("Order reset successfully", 2000, ["meteorAlertSuccess"]);
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
          if(this.isSimulation) MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        } else {
          if(newValue) {
            if(this.isSimulation) MeteorAlerts.alert("Order marked for review successfully", 2000, ["meteorAlertSuccess"]);
          } else {
            if(this.isSimulation) MeteorAlerts.alert("Order unmarked for review successfully", 2000, ["meteorAlertSuccess"]);
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
          if(this.isSimulation) MeteorAlerts.alert(error.message, 2000, ["meteorAlertWarning"]);
        }
      });
    }
  }
});
