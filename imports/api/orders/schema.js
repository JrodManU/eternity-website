OrderSchema = new SimpleSchema({
  userId: {
    type: String,
    label: "Author of order",
    optional: true,
    max: 20
  },
  orderFormLinkId: {
    type: String,
    label: "Base of order",
    optional: true,
    max: 20
  },
  createdAt: {
    type: Date,
    label: "Timestamp of order",
    optional: true
  },
  markedForReview: {
    type: Boolean,
    label: "Order marked for review status",
    optional: true,
    defaultValue: false
  },
  reviewed: {
    type: Boolean,
    label: "Order reviewed status",
    optional: true,
    defaultValue: false
  },
  name: {
    type: String,
    label: "Name of order",
    optional: true,
    max: 50
  },
  type: {
    type: String,
    label: "Type of order",
    optional: true,
    max: 50
  },
  amount: {
    type: String,
    label: "Amount of items ordered",
    optional: true,
    max: 10
  },
  width: {
    type: String,
    label: "Width of items ordered",
    optional: true,
    max: 10
  },
  height: {
    type: String,
    label: "Height of items ordered",
    optional: true,
    max: 10
  },
  description: {
    type: String,
    label: "Description of order",
    optional: true,
    max: 2000
  },
  firstName: {
    type: String,
    label: "First name of orderer",
    optional: true,
    max: 50
  },
  lastName: {
    type: String,
    label: "Last name of orderer",
    optional: true,
    max: 50
  },
  phoneNumber: {
    type: String,
    label: "Phone number of orderer",
    optional: true,
    max: 20
  }
});
