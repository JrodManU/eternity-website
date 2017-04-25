import { Template } from "meteor/templating";
import { Session } from "meteor/session";

import "./navigation.css";

import "./navigation.html";

Template.navigation.helpers({
  "centerWithBannerHeight":function() {
    return Session.get("bannerHeight") / 3;
  },
  "bannerHeight":function() {
    var bannerHeight = Session.get("bannerHeight");
    return bannerHeight - (bannerHeight / 3);
  }
})

Template.navigation.events({
  "click #mobileTripleBar":function(event, template) {
    template.$("#navLinksMobile").toggle();
  },
  "click #navLinksMobile li a":function(event, template) {
    template.$("#navLinksMobile").hide();
  }
});
