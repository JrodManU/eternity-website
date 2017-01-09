import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

import "../../ui/layouts/mainLayout/mainLayout.js";

import "../../ui/pages/homePage/homePage.js";
import "../../ui/pages/orderFormPage/orderFormPage.js"

import "../../ui/components/footer/footer.js";
import "../../ui/components/header/header.js";
import "../../ui/components/navigation/navigation.js";
import "../../ui/components/orderFormLinksTemplate/orderFormLinksTemplate.js";

FlowRouter.route("/", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "homePage"});
  }
});

FlowRouter.route("/orderForm/:orderFormLinkId", {
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {page: "orderFormPage"});
  }
});
