import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './Form.html';

Template.form.events({
  async "submit .task-form"(event) {
    event.preventDefault();

    const target = event.target;
    const taskName = target.taskName.value;
    const taskDescription = target.taskDescription.value;
    const taskDueDate = target.taskDueDate.value;
    const category = target.category.value;

    Meteor.call('tasks.insert', taskName, taskDescription, taskDueDate, category);

    target.taskName.value = '';
    target.taskDescription.value = '';
    target.taskDueDate.value = '';
    target.category.value = 'Work';
    target.taskName.focus();
  }
});
