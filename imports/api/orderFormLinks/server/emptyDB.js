Meteor.startup(function() {
  var orderFormLinksData = [
    {"title":"Car Decal",
    "body":"Advertise on the go with car decals",
    "image":"orderFormLinkImages/carDecal.jpg"},
    {"title":"Business Card",
    "body":"Get the best small cards for promoting your business",
    "image":"orderFormLinkImages/businessCard.jpg"},
    {"title":"Flyer",
    "body":"Pass out eye catching flyers to boost sales",
    "image":"orderFormLinkImages/flyer.jpg"},
    {"title":"Freebies",
    "body":"Get anything from pens to key chains to pass out",
    "image":"orderFormLinkImages/freebies.jpg"},
    {"title":"Packaging",
    "body":"Encase your product in a stylish box",
    "image":"orderFormLinkImages/packaging.jpg"},
    {"title":"Sign",
    "body":"Put up an attention drawing sign",
    "image":"orderFormLinkImages/sign.jpg"}
  ];
  if(OrderFormLinks.find().count() == 0) {
    for(var i = 0; i < orderFormLinksData.length; i++) {
      OrderFormLinks.insert(orderFormLinksData[i]);
    }
  }
});
