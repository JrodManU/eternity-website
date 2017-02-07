import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

import "../css/reset.css";
import "../css/root.css";

import "./startupFunctions.js";

import "../../../ui/layouts/mainLayout/mainLayout.js";

import "../../../ui/pages/aboutUsPage/aboutUsPage.js";
import "../../../ui/pages/homePage/homePage.js";
import "../../../ui/pages/orderFormPage/orderFormPage.js"


import "../../../ui/components/banner/banner.js";
import "../../../ui/components/footer/footer.js";
import "../../../ui/components/login/login.js";
import "../../../ui/components/loginButtons/loginButtons.js";
import "../../../ui/components/loginModal/loginModal.js";
import "../../../ui/components/logout/logout.js";
import "../../../ui/components/navigation/navigation.js";
import "../../../ui/components/orderForm/orderForm.js";
import "../../../ui/components/orderFormLinksTemplate/orderFormLinksTemplate.js";
import "../../../ui/components/register/register.js";
import "../../../ui/components/userOrders/userOrders.js";

FlowRouter.route("/", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "homePage"});
  },
  name: "home"
});

FlowRouter.route("/orderForm/:orderId", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "orderFormPage"});
  },
  name: "orderForm"
});

FlowRouter.route("/aboutUs", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "aboutUsPage"});
  },
  name: "aboutUs"
})
