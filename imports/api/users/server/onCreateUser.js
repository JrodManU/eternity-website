Accounts.onCreateUser(function(options, user) {
  var email = options.email;
  if(email.length > 254 || email.length < 3) {
    throw new Meteor.Error("403", "No email is that long. (or short)");
  }
  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id);
    Roles.addUsersToRoles(user._id, ["normal"]);
  }, 2000);
  return user;
});
