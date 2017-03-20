OrderFormLinkSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Order form link title",
    optional: true,
    max: 30,
    defaultValue: ""
  },
  body: {
    type: String,
    label: "Order form link body",
    optional: true,
    max: 100,
    defaultValue: ""
  },
  image: {
    type: String,
    label: "Order form link image",
    optional: true,
    max: 500,
    defaultValue: null
  }
});
