OrderSchema = new SimpleSchema({
  userId: {
    type: String,
    label: "Author of order",
    optional: true,
    max: 20,
    defaultValue: null
  },
  orderFormLinkId: {
    type: String,
    label: "Base of order",
    optional: true,
    max: 20,
    defaultValue: null
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
    max: 50,
    defaultValue: null
  },
  type: {
    type: String,
    label: "Type of order",
    optional: true,
    max: 50,
    defaultValue: null
  },
  amount: {
    type: Number,
    label: "Amount of items ordered",
    optional: true,
    max: 30000,
    defaultValue: null
  },
  width: {
    type: Number,
    label: "Width of items ordered",
    optional: true,
    max: 30000,
    defaultValue: null
  },
  height: {
    type: Number,
    label: "Height of items ordered",
    optional: true,
    max: 30000,
    defaultValue: null
  },
  description: {
    type: String,
    label: "Description of order",
    optional: true,
    max: 2000,
    defaultValue: null
  },
  firstName: {
    type: String,
    label: "First name of orderer",
    optional: true,
    max: 50,
    defaultValue: null
  },
  lastName: {
    type: String,
    label: "Last name of orderer",
    optional: true,
    max: 50,
    defaultValue: null
  },
  phoneNumber: {
    type: String,
    label: "Phone number of orderer",
    optional: true,
    max: 20,
    defaultValue: null
  }
});
