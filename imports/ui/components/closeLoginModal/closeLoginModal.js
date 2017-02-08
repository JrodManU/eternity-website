import "./closeLoginModal.css";
import "./closeLoginModal.html";

Template.closeLoginModal.events({
  "click .closeLoginModal"() {
    Session.set("showLoginModal", false);
  }
})
