import { Session } from "meteor/session";
import { Template } from "meteor/templating";

import "./banner.css";

import "./banner.html";


//sizing stuff
Template.banner.helpers({
  "bannerHeight": function() {
    return Session.get("bannerHeight");
  },
  "bannerInfoHeight": function() {
    return Session.get("bannerHeight") * .8;
  },
  "bannerInfoMargin": function() {
    return Session.get("bannerHeight") * .1;
  },
  "titleFontSize": function() {
    return Session.get("bannerHeight") * .3;
  }
});
