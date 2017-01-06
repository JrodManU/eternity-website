import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

import "../../ui/layouts/mainLayout/mainLayout.js";

import "../../ui/components/footer/footer.js";
import "../../ui/components/header/header.js";
import "../../ui/components/navigation/navigation.js";
import "../../ui/components/orderForm/orderForm.js";
import "../../ui/components/orderFormLinksTemplate/orderFormLinksTemplate.js";
import "../../ui/components/orderFormLinkTemplate/orderFormLinkTemplate.js";

FlowRouter.route("/", {
  action: function() {
    console.log("Wew lad");
    BlazeLayout.render("mainLayout", {page: "homePage"});
  }
});
