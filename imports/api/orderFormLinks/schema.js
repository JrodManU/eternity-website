OrderFormLinkSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Order form link title",
    optional: true,
    max: 30
  },
  body: {
    type: String,
    label: "Order form link body",
    optional: true,
    max: 100
  },
  image: {
    type: String,
    label: "Order form link image",
    optional: true,
    max: 50
  },
  imageLink: {
    type: String,
    label: "Order form link image link",
    optional: true,
    max: 300
  },
  type: {
    type:String,
    label: "Order form link type",
    optional: true,
    max: 30
  }
});
