import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './Signup.html';

Template.signup.events({
  'submit .signup-form'(event) {
    event.preventDefault();
    const username = event.target.username.value.trim();
    const password = event.target.password.value;

    Accounts.createUser({ username, password }, (error) => {
      if (error) {
        alert(error.reason);
      }
    });
  },
  'click #go-to-login'(event) {
    event.preventDefault();
    Session.set('showSignup', false);
  }
});
