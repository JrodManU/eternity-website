import { Email } from "meteor/email";

Meteor.startup(function() {
  process.env.MAIL_URL = "smtp://postmaster%40sandboxb5f8022927fc49e586c7b401d2383395.mailgun.org:6784096ee8f066c8c617cce5623b63b1@smtp.mailgun.org:587";

  reCAPTCHA.config({
      privatekey: "6Ld8gh0UAAAAAFSocfHqA3mFMvOGvCz0nxGZXAgU"
  });
});
