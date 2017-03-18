import "./slideshow.html";
import "./slideshow.css";

import { Template } from "meteor/templating";

Template.slideshow.onRendered(function() {
  console.log("hi");
  this.$("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    this.$('#slideshow > div:first')
      .hide()
      .next()
      .show()
      .end()
      .appendTo('#slideshow');
  },  5000);
});
