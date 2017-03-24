Accounts.onCreateUser(function(options, user) {
  var email = options.email;
  if(email.length > 254 || email.length < 3) {
    throw new Meteor.Error("403", "No email is that long. (or short)");
  }
  //We have to call this two seconds later or else it will be called before the user is created
  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id);
    Roles.addUsersToRoles(user._id, ["normal"]);
  }, 2000);
  return user;
});
