import { Meteor } from "meteor/meteor";

Meteor.methods({
  "insertOrder"(text) {
    var orderId;
    Orders.insert({
      userId: this.userId,
      text: text,
      createdAt: new Date()
    });
  },
  "insertOrderAndGo"(text) {
    var orderId;
    Orders.insert({
      userId: this.userId,
      text: text,
      createdAt: new Date()
    }, function(error, order) {
      if(error) {
        console.log(error);
      } else {
        orderId = order;
      }
    });
    FlowRouter.go("orderForm", {orderId: orderId}, null);
  },
  "updateOrder"(orderId, text){
    Orders.update(orderId, {$set: { text: text}});
  },
  "deleteOrder"(orderId){
    Orders.remove({_id: orderId});
  },
  "resetOrder"(orderId) {
    Orders.update(orderId, {$set: { text: "lol"}});
  }

});
