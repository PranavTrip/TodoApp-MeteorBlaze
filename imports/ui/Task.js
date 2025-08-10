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
    'click .add-task-btn'(event) {
        const category = event.currentTarget.getAttribute('data-category');
        Session.set('selectedCategory', category);
    }
});

Template.taskColumns.helpers({
    async categories() {
        let categorySet = new Set(['Work', 'Personal', 'Urgent', 'General']);
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

Template.taskColumns.onRendered(function () {
    const container = this.find('.category-row');

    container.addEventListener('dragstart', (e) => {
        const li = e.target.closest('.draggable-task');
        if (li) {
            e.dataTransfer.setData('text/plain', li.dataset.id);
        }
    });

    container.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    container.addEventListener('drop', (e) => {
        e.preventDefault();

        const taskId = e.dataTransfer.getData('text/plain');
        const dropTarget = e.target.closest('[data-category]');
        const newCategory = dropTarget?.dataset?.category;

        if (taskId && newCategory) {
            Meteor.call('tasks.updateCategory', taskId, newCategory, (err) => {
                if (err) {
                    console.error('Error updating category:', err);
                }
            });
        }
    });

});
