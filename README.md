# 📝 Todo App with Meteor.js

## 👁️ Project Overview

This is a full-stack Todo application built with Meteor.js. Users can create an account, log in, and manage their tasks. The application supports multiple categories, drag-and-drop functionality to move tasks between categories, and the ability to mark tasks as completed.

---

## ✨ Features

* **User Authentication**: Secure login and signup functionality using Meteor's `accounts-password` package.
* **Task Management**: Create, edit, and delete tasks.
* **Categorization**: Organize tasks into different categories (e.g., Work, Urgent, Personal, General).
* **Drag-and-Drop**: Easily move tasks between categories using a seamless drag-and-drop interface.
* **Real-time Updates**: Changes are instantly reflected across all connected clients thanks to Meteor's reactive data management.
* **Completion Tracking**: Mark tasks as completed to track your progress.

---

## ⚙️ Technologies Used

* **Frontend**:
    * **Meteor.js**: The full-stack JavaScript framework that powers the app.
    * **Bootstrap**: Used for a clean and responsive user interface.
* **Backend**:
    * **Node.js**: The server-side environment.
    * **MongoDB**: The default database provided by Meteor, used to store user data, tasks, and categories.
* **Other**:
    * `accounts-password`: Meteor package for email and password-based authentication.

---

## 🚀 Getting Started

Follow these steps to set up and run the app on your local machine.

### ✔️ Prerequisites

You need to have Meteor installed on your system. If you don't, you can install it with the following command:

```bash
curl [https://install.meteor.com/](https://install.meteor.com/) | sh
```

### ⬇️ Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/PranavTrip/TodoApp-MeteorBlaze.git
    cd TodoApp-MeteorBlaze
    ```

2.  Install the necessary dependencies. Meteor will handle this for you the first time you run the app.

### ▶️ Running the Application

To run the application, simply navigate to the project directory and run:

```bash
meteor npm install
```

```bash
meteor run
```
The app will start and be available at `http://localhost:3000`.

---

## 📁 Folder Structure

The project follows a standard Meteor folder structure:

* `/client`: Contains all client-side code (HTML, CSS, JavaScript).
* `/server`: Contains all server-side code (publications, methods, server-side logic).
* `/public`: Contains static assets like images and fonts.
* `/imports`: Where you place code that needs to be imported explicitly, helping to organize the app.

---

