import "./slideshow.html";
import "./slideshow.css";

import { Template } from "meteor/templating";

Template.slideshow.onCreated(function() {
  window.setInterval(function() {
    var current = $("#slideshow img:nth-child(1)");
    var next = $("#slideshow img:nth-child(2)");
    $("#slideshow").append(current);
  }, 1000);
});
