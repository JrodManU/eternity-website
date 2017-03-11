import { Template } from "meteor/templating";

Template.registerHelper('formatDate', function(date) {
  return date.toDateString();
});
