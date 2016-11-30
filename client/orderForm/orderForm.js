import {Template} from "meteor/templating";
import "./orderForm.html";

Template.orderForm.events({
  "submit #orderForm"(event){
    //prevents default form submission
    event.preventDefault();
  },
});
