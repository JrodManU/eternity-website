import { Meteor } from "meteor/meteor";

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
    FlowRouter.go("orderForm", {orderId: "none"}, null);
  },
  "resetOrder"(orderId) {
    Orders.update(orderId, {$set: { text: "lol"}});
  }
});
