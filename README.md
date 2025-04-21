# Todo Application with Next.js, Context API, and MongoDB
Here's Live Project Link [click here](https://todo-app-using-usecontext-api.netlify.app/)
## This is a simple Todo Application built with Next.js, useContext API, and MongoDB. The app allows users to create, read, update, delete, and toggle the completion status of tasks. The application demonstrates the use of the Context API for state management and integrates with MongoDB through API routes to persist the data.

Features
Add Todo: Input field to add a new task input.

View Todos: Displays a list of tasks fetched from MongoDB.

Edit Todo: Ability to edit an existing task and save the changes.

Delete Todo: Option to remove a task from the UI and MongoDB.

Toggle Completion Status: Mark tasks as complete/incomplete using a checkbox.

State Management: Uses Context API to manage application state across components.

API Integration: Communication with MongoDB through Next.js API routes using Axios.

## Requirements
Node.js
MongoDB Atlas or local MongoDB server

## Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/sahilmachhi/Next-JS-Todo-Project-with-UseContext-API-and-API-Routes.git
cd ./todo-app
```
### 2. Install Dependencies
Run the following command to install all the required dependencies.

```bash
npm i
```
### 3. MongoDB Setup
If you don't have a MongoDB account, sign up at MongoDB Atlas or set up a local MongoDB instance.

Create a new database cluster and get the connection string (MongoDB URI).

Add the connection URI to the .env.local file in the root directory of the project. Create the .env.local file if it does not exist.

Example of .env.local:

```bash
MONGODB_URI= (Paste here your mongodb url)
```

### 4. Running the Application
To run the application locally in development mode, use the following command:

```bash
npm run dev
```
The app should now be running on http://localhost:3000.

### 5. API Routes
The following API routes are implemented to interact with MongoDB:

GET /api/todos: Fetches all todos.

GET /api/todos/:id: Fetch Single todo.

POST /api/todos: Creates a new todo.

PUT /api/todos/:id: Updates an existing todo.

DELETE /api/todos/:id: Deletes a todo.



### 6. Deployment
I deployed this app on Netlify here's live [Link](https://todo-app-using-usecontext-api.netlify.app/)

7. Testing
You can test the application by navigating to http://localhost:3000 and interacting with the interface to add, update, toggle, and delete todos.

