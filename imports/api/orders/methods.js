import { Meteor } from "meteor/meteor";

Meteor.methods({
  "insertOrderAndGo"(orderFormLinkId) {
    var orderId;
    console.log(orderFormLinkId);
    console.log(OrderFormLinks.find().count());
    var orderFormLink = OrderFormLinks.findOne({_id: orderFormLinkId});
    console.log(orderFormLink);
    Orders.insert({
      userId: this.userId,
      type: orderFormLink.type,
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
