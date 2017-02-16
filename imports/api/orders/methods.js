import { Meteor } from "meteor/meteor";

Meteor.methods({
  "insertOrderAndGo"(orderFormLinkId) {
    var orderId;
    var orderFormLink = OrderFormLinks.findOne({_id: orderFormLinkId});
    Orders.insert({
      userId: this.userId,
      type: orderFormLink.type,
      createdAt: new Date()
    }, function(error, order) {
      if(error) {
        console.log(error.reason);
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
