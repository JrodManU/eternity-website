Meteor.publish("orderFormLinks", function() {
  return OrderFormLinks.Find({});
});
