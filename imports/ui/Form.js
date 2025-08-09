import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './Form.html';

Template.form.events({
  async "submit .task-form"(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;
    const category = target.category.value;

    Meteor.call('tasks.insert', text, category);

    target.text.value = '';
    target.category.value = 'Work';
    target.text.focus();
  }
});
