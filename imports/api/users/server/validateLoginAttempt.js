Accounts.validateLoginAttempt(function(options) {
    /* options:
        type            (String)    The service name, such as "password" or "twitter".
        allowed         (Boolean)   Whether this login is allowed and will be successful.
        error           (Error)     When allowed is false, the exception describing why the login failed.
        user            (Object)    When it is known which user was attempting to login, the Meteor user object.
        connection      (Object)    The connection object the request came in on.
        methodName      (String)    The name of the Meteor method being used to login.
        methodArguments (Array)     An array of the arguments passed to the login method
    */

    // If the login has failed, just return false.
    if (!options.allowed) {
      return false;
    }

    if (options.user.emails[0].verified == true) {
      return true;
    } else {
      throw new Meteor.Error("notVerified", "You must verify your email address before you can log in.");
    }
    return true;
});
