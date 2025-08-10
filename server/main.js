import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/db/TaskCollection.js';
import '/imports/api/taskMethods';
import '/imports/api/taskPublications';



const insertTask = async (taskText, user) =>
  await TasksCollection.insertAsync({
    taskName: taskText.taskName,
    taskDescription: taskText.taskDescription,
    taskDueDate: taskText.taskDueDate,
    category: taskText.category,
    userId: user._id,
    createdAt: new Date(),
  });

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(async () => {
  const user = await Accounts.findUserByUsername(SEED_USERNAME);

  if (!user) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }


  if (await TasksCollection.find().countAsync() === 0 && user) {
    [
      { taskName: 'First Task', taskDescription: 'Description for first task', taskDueDate: '2023-10-01', category: 'Work' },
      { taskName: 'Second Task', taskDescription: 'Description for second task', taskDueDate: '2023-10-02', category: 'Personal' },
      { taskName: 'Third Task', taskDescription: 'Description for third task', taskDueDate: '2023-10-03', category: 'Work' },
      { taskName: 'Fourth Task', taskDescription: 'Description for fourth task', taskDueDate: '2023-10-04', category: 'Personal' },
      { taskName: 'Fifth Task', taskDescription: 'Description for fifth task', taskDueDate: '2023-10-05', category: 'Work' },
      { taskName: 'Sixth Task', taskDescription: 'Description for sixth task', taskDueDate: '2023-10-06', category: 'Urgent' },
      { taskName: 'Seventh Task', taskDescription: 'Description for seventh task', taskDueDate: '2023-10-07', category: 'General' },
    ].forEach(taskText => insertTask(taskText, user));
  }
});