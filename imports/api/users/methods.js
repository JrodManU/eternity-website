import { Meteor } from "meteor/meteor";

Meteor.methods({
  "assignRole"(userId, role) {
    var actingUser = Meteor.user();
    var targetUser = Meteor.users.find(userId);
    if(targetUser && targetUser != actingUser && Roles.userIsInRole(actingUser, ["owner"])) {
      Roles.setUserRoles(userId, [role]);
    }
  },
  "deleteUser"(userId) {
    var actingUser = Meteor.user();
    var targetUser = Meteor.users.findOne(userId);
    if(targetUser && targetUser != actingUser && ((Roles.userIsInRole(targetUser, ["normal"]) && Roles.userIsInRole(actingUser, ["admin"])) || (Roles.userIsInRole(targetUser, ["admin"]) && Roles.userIsInRole(actingUser, ["owner"])))) {
      Meteor.users.remove(userId);
      Orders.remove({userId: userId});
    }
  },
  "createUserWithCaptcha"(email, password, password2, firstName, lastName, phoneNumber, captchaData,) {
    //get the captcha data
    var captchaStatus = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData).success;;
    if (!captchaStatus) {
      throw new Meteor.Error("422", "reCAPTCHA failed, please try again");
    } else if(!email) {
      throw new Meteor.Error("400", "Please enter a username");
    } else if(!password) {
      throw new Meteor.Error("400", "Please enter a password");
    } else if(password !== password2) {
      throw new Meteor.Error("400", "Passwords do not match");
    } else if(password.length < 8) {
      throw new Meteor.Error("400", "Your password must be atleast 8 characters.");
    } else if(!firstName) {
      throw new Meteor.Error("400", "Please enter a first name");
    } else if(firstName.legth > 30) {
      throw new Meteor.Error("400", "First name is too long");
    } else if(!lastName) {
      throw new Meteor.Error("400", "Please enter a last name");
    } else if(lastName.length > 30) {
      throw new Meteor.Error("400", "Last name is too long");
    } else if(!phoneNumber) {
      throw new Meteor.Error("400", "Please enter a phone number");
    } else if(phoneNumber.length > 10) {
      throw new Meteor.Error("400", "Phone number is too long, please use this format XXXXXXXXXX");
    }

    //The password checks are done on the client, so the user could bypass them
    //But you'd have to be pretty dumb to "hack" for a weak password
    var userId = Accounts.createUser({
      email: email,
      password: password,
      profile: {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
      }
    });
    if(!userId) {
      throw new Meteor.error("500", "Internal error, account not created");
    }
  }
});
