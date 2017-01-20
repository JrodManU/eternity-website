import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

import "../css/reset.css";
import "../css/root.css";

import "./startupFunctions.js";

import "../../../ui/layouts/mainLayout/mainLayout.js";

import "../../../ui/pages/homePage/homePage.js";
import "../../../ui/pages/orderFormPage/orderFormPage.js"

import "../../../ui/components/banner/banner.js";
import "../../../ui/components/footer/footer.js";
import "../../../ui/components/header/header.js";
import "../../../ui/components/navigation/navigation.js";
import "../../../ui/components/orderFormLinksTemplate/orderFormLinksTemplate.js";

FlowRouter.route("/", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "homePage"});
  }
});

FlowRouter.route("/orderForm", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "orderFormPage"});
  },
  name: "orderForm"
});
