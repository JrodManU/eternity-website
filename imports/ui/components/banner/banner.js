import "./banner.css";
import "./banner.html";
import { Session } from "meteor/session";
import { Template } from "meteor/templating";

Template.banner.helpers({
  "bannerHeight": function() {
    console.log("helper");
    console.log(Session.get("bannerHeight"));
    return Session.get("bannerHeight");
  }
});
