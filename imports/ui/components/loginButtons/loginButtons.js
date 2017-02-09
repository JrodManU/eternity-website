import "./loginButtons.html";

Template.loginButtons.events({
  "click #loginButton"() {
    Session.set("showLoginModal", true);
  }
});
