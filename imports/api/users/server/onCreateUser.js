Accounts.onCreateUser(function(options, user) {
  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id);
    Roles.addUsersToRoles(user._id, ["normal"]);
  }, 2000);
  return user;
});
