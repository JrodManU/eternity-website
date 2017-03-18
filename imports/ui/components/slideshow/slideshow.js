import "./slideshow.html";
import "./slideshow.css";

import { Template } from "meteor/templating";

Template.slideshow.onRendered(function() {
  console.log("hi");
  this.$("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    this.$('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  5000);
});
