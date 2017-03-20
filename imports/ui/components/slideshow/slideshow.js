import "./slideshow.html";
import "./slideshow.css";

import { Template } from "meteor/templating";

Template.slideshow.onCreated(function() {
  this.interval = window.setInterval(function() {
    var current = $("#slideshow img:nth-child(1)");
    var next = $("#slideshow img:nth-child(2)");
    $("#slideshow").append(current);
  }, 1000);
});

Template.slideshow.onDestroyed(function() {
  window.clearInterval(this.interval);
});
