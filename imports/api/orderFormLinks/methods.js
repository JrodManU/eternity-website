import { Meteor } from "meteor/meteor";

Meteor.methods({
  "deleteOrderFormLink"(orderFormLinkId) {
    var userId = Meteor.userId();
    if(userId && Roles.userIsInRole(userId, ["admin"])) {
      OrderFormLinks.remove(orderFormLinkId);
    }
  },
  "insertOrderFormLink"(orderFormLinkId, title, body, image) {
    var userId = Meteor.userId();
    if(userId && Roles.userIsInRole(userId, ["admin"])) {
      var orderFormLink = {
        title: title,
        body: body,
        image: image
      }
      OrderFormLinkSchema.clean(orderFormLink);
      var orderFormLinkSchemaContext = OrderFormLinkSchema.newContext();
      if(!orderFormLinkSchemaContext.validate(orderFormLink)) {
        MeteorAlerts.alert("One of the input fields is way too long", 2000, ["meteorAlertWarning"]);
      } else {
        OrderFormLinks.insert(orderFormLink, function(error, orderFormLinkId) {
          if(error) {
            if(Meteor.isClient) MeteorAlerts.alert(error.reason, 2000, ["meteorAlertWarning"]);
          } else {
            if(Meteor.isClient) MeteorAlerts.alert("Order form link successfully inserted", 2000, ["meteorAlertSuccess"]);
            window.history.back();
          }
        });
      }
    }
  },
  "updateOrderFormLink"(orderFormLinkId, title, body, image) {
    var userId = Meteor.userId();
    if(userId && Roles.userIsInRole(userId, ["admin"])) {
      var orderFormLink = {
        title: title,
        body: body,
        image: image
      }
      OrderFormLinkSchema.clean(orderFormLink);
      var orderFormLinkSchemaContext = OrderFormLinkSchema.newContext();
      if(!orderFormLinkSchemaContext.validate(orderFormLink)) {
        MeteorAlerts.alert("One of the input fields is way too long", 2000, ["meteorAlertWarning"]);
      } else {
        OrderFormLinks.update({_id: orderFormLinkId}, {$set: {
          title: orderFormLink.title,
          body: orderFormLink.body,
          image: orderFormLink.image
        }}, function(error) {
          if(error) {
            if(Meteor.isClient) MeteorAlerts.alert(error.reason, 2000, ["meteorAlertWarning"]);
          } else {
            if(Meteor.isClient) {
              MeteorAlerts.alert("Order form link successfully updated", 2000, ["meteorAlertSuccess"]);
              window.history.back();
            }
          }
        });
      }
    }
  }
});
