 /*import "./orderFormPage.html";

Meteor.subscribe("orderFormPage")

Template.body.events({
  "submit .orderFormTask"(event){
//prevent default submit
event.preventDefault();
//get value from form element
const target = event.target;
const text = target.text.value;
//insert task into current collection
Tasks.insert({
  text,
  createdAt: new Date();
});
target.text.value="";
};
});
*/
