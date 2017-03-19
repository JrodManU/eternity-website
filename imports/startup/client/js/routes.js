import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

import "../css/reset.css";
import "../css/root.css";
import "../css/meteorAlert.css";

import "./globalHelpers.js";
import "./startupFunctions.js";

import "../../../ui/layouts/mainLayout/mainLayout.js";

import "../../../ui/pages/aboutUsPage/aboutUsPage.js";
import "../../../ui/pages/adminPage/adminPage.js";
import "../../../ui/pages/homePage/homePage.js";
import "../../../ui/pages/orderFormLinkEditPage/orderFormLinkEditPage.js";
import "../../../ui/pages/orderFormPage/orderFormPage.js";
import "../../../ui/pages/orderViewPage/orderViewPage.js";

import "../../../ui/components/allOrderFormLinks/allOrderFormLinks.js";
import "../../../ui/components/allOrders/allOrders.js";
import "../../../ui/components/allUsers/allUsers.js";
import "../../../ui/components/backButton/backButton.js";
import "../../../ui/components/banner/banner.js";
import "../../../ui/components/footer/footer.js";
import "../../../ui/components/loginButtons/loginButtons.js";
import "../../../ui/components/loginModal/loginModal.js";
import "../../../ui/components/loginModalContent/loginModalContent.js";
import "../../../ui/components/logout/logout.js";
import "../../../ui/components/navigation/navigation.js";
import "../../../ui/components/navLinks/navLinks.js";
import "../../../ui/components/order/order.js";
import "../../../ui/components/orderForm/orderForm.js";
import "../../../ui/components/orderFormLinksTemplate/orderFormLinksTemplate.js";
import "../../../ui/components/orderFormLinkForm/orderFormLinkForm.js";
import "../../../ui/components/registerModalContent/registerModalContent.js";
import "../../../ui/components/slideshow/slideshow.js";
import "../../../ui/components/userOrders/userOrders.js";

FlowRouter.route("/", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "homePage"});
  },
  name: "home"
});

FlowRouter.route("/admin", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "adminPage"});
  },
  name: "admin"
});

FlowRouter.route("/aboutUs", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "aboutUsPage"});
  },
  name: "aboutUs"
});

FlowRouter.route("/orderFormLinkEdit/:orderFormLinkId", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "orderFormLinkEditPage"});
  },
  name: "orderFormLinkEdit"
});

FlowRouter.route("/orderForm/:orderId", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "orderFormPage"});
  },
  name: "orderForm"
});

FlowRouter.route("/orderView/:orderId", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "orderViewPage"});
  },
  name: "orderView"
});
