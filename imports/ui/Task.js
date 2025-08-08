import { Template } from 'meteor/templating';
import './Task.html';
import { TasksCollection } from '../db/TaskCollection';

const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

Template.task.events({
    'click .toggle-checked'() {
        Meteor.call('tasks.setIsChecked', this._id, !this.isChecked);
    },
    'click .delete'() {
        Meteor.call('tasks.remove', this._id);
    },
});

Template.taskColumns.helpers({
    async categories() {
        let categorySet = new Set(['Work', 'Personal', 'Urgent','General']);
        return Array.from(categorySet);
    },
    async tasksInCategory(category) {
        const query = { category };
        if (!isUserLogged()) {
            return [];
        }
        return await TasksCollection.find(query, {
            sort: { createdAt: -1 }
        });
    },
})