import { Meteor } from "meteor/meteor";

Meteor.methods({
  "deleteOrderFormLink"(orderFormLinkId) {
    var userId = Meteor.userId();
    if(userId && Roles.userIsInRole(userId, ["admin"])) {
      OrderFormLinks.remove(orderFormLinkId);
    }
  },
  "insertOrderFormLink"(orderFormLinkId, title, body, imageLink) {
    var userId = Meteor.userId();
    if(userId && Roles.userIsInRole(userId, ["admin"])) {

      if(imageLink != null && imageLink.trim().length == 0) {
        imageLink = null;
      }
      imageLink = "orderFormLinkImages/carDecal.jpg";
      var orderFormLink = {
        title: title,
        body: body,
        imageLink: imageLink
      }
      OrderFormLinkSchema.clean(orderFormLink);
      var orderFormLinkSchemaContext = OrderFormLinkSchema.newContext();
      if(!orderFormLinkSchemaContext.validate(orderFormLink)) {
        MeteorAlerts.alert("One of the input fields is way too long", 2000, ["meteorAlertWarning"]);
      } else {
        OrderFormLinks.insert(orderFormLink);
      }
    }
  },
  "updateOrderFormLink"(orderFormLinkId, title, body, imageLink) {
    var userId = Meteor.userId();
    if(userId && Roles.userIsInRole(userId, ["admin"])) {

      if(imageLink != null && imageLink.trim().length == 0) {
        imageLink = null;
      }

      var orderFormLink = {
        title: title,
        body: body,
        imageLink: imageLink
      }
      OrderFormLinkSchema.clean(orderFormLink);
      var orderFormLinkSchemaContext = OrderFormLinkSchema.newContext();
      if(!orderFormLinkSchemaContext.validate(orderFormLink)) {
        MeteorAlerts.alert("One of the input fields is way too long", 2000, ["meteorAlertWarning"]);
      } else {
        OrderFormLinks.update({_id: orderFormLinkId}, {$set: {
          title: orderFormLink.title,
          body: orderFormLink.body,
          imageLink: orderFormLink.imageLink
        }});
      }
    }
  }
});
