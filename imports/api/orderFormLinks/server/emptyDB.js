Meteor.startup(function() {
  var orderFormLinksData = [
    {"title":"Car Decal",
    "body":"This is a car decal",
    "image":"carDecal.jpg",
    "type":"carDecal"},
    {"title":"Car Decal",
    "body":"This is a car decal",
    "image":"carDecal.jpg",
    "type":"carDecal"}
  ];
  if(OrderFormLinks.find().count() == 0) {
    for(var i = 0; i < orderFormLinksData.length; i++) {
      OrderFormLinks.insert(orderFormLinksData[i]);
    }
  }
});
