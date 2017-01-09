Meteor.publish("orderFormLinks", function() {
  return OrderFormLinks.find();
});
