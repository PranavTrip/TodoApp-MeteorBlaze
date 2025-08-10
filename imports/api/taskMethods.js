import { check } from 'meteor/check';
import { TasksCollection } from '../db/TaskCollection';

Meteor.methods({
    async 'tasks.insert'(taskName, taskDescription, taskDueDate, category) {
        check(taskName, String);
        check(taskDescription, String);
        check(taskDueDate, String);
        check(category, String);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        await TasksCollection.insertAsync({
            taskName, taskDescription, taskDueDate,
            createdAt: new Date,
            userId: this.userId,
            category: category,
        })
    },

    async 'tasks.remove'(taskId) {
        check(taskId, String);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        const task = await TasksCollection.findOneAsync({ _id: taskId, userId: this.userId });

        if (!task) {
            throw new Meteor.Error('Access denied.');
        }

        await TasksCollection.removeAsync(taskId);
    },

    async 'tasks.setIsChecked'(taskId, isChecked) {
        check(taskId, String);
        check(isChecked, Boolean);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        const task = await TasksCollection.findOneAsync({ _id: taskId, userId: this.userId });

        if (!task) {
            throw new Meteor.Error('Access denied.');
        }
        await TasksCollection.updateAsync(taskId, {
            $set: {
                isChecked
            }
        });
    },

    async 'tasks.updateCategory'(taskId, newCategory) {
        check(taskId, String);
        check(newCategory, String);
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        const task = await TasksCollection.findOneAsync({ _id: taskId });
        if (!task || task.userId !== Meteor.userId()) {
            throw new Meteor.Error('Not authorized to move this task');
        }

        await TasksCollection.updateAsync(taskId, {
            $set: { category: newCategory },
        });
    },
});