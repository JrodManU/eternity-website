import { Session } from "meteor/session";
import { Template } from "meteor/templating";

import "./banner.css";

import "./banner.html";


//sizing stuff
Template.banner.helpers({
  "bannerHeight": function() {
    return Session.get("bannerHeight");
  }
});
