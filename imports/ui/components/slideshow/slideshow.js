import { Template } from "meteor/templating";

import "./slideshow.css";

import "./slideshow.html";

Template.slideshow.onCreated(function() {
  this.interval = window.setInterval(function() {
    var current = $("#slideshow img:nth-child(1)");
    $("#slideshow").append(current);
  }, 3000);
});

Template.slideshow.onDestroyed(function() {
  window.clearInterval(this.interval);
});
