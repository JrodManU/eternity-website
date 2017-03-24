import { Template } from "meteor/templating";

import "./slideshow.css";

import "./slideshow.html";

Template.slideshow.onCreated(function() {
  //just rotates through the images every 3 seconds
  this.interval = window.setInterval(function() {
    var current = $("#slideshow img:nth-child(1)");
    $("#slideshow").append(current);
  }, 3000);
});

//gotta unset the interval or else you get a spazshow
Template.slideshow.onDestroyed(function() {
  window.clearInterval(this.interval);
});
