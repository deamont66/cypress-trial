# Betsys trial day

## Installation

Run `npm install` to install all needed dependencies.

## Open Cypress UI interface

Run `npm run open` to open cypress.
It will open cypress UI in the browser of choice.
Tests should automatically re-run each time changes in their source code are saved.

## User stories (Todo list app)

We have a todo list app (let's use https://example.cypress.io/todo).

Prepare test cases for the following user stories and automate using Cypress what you can:

### Task list and basic task management
As a user, I need a way to manage my tasks.
I want to have a simple todo list that will help me organize what I need to do :)

#### Acceptance criteria:
- Each task should have a required title.
- Tasks should be displayed in the list view.
- Tasks should be displayed in the order they were created (from oldest to newest).
- Number of uncompleted tasks should be displayed under the task list on the left side.
- It should be possible to add a new task (single input on top of the list submitted by pressing enter).
- It should be possible to mark a task as done (checking checkbox left of the task title).
- It should be possible to unmark a task as done (unchecking checkbox left of the task title).
- It should be possible to delete a task ("x" button right of the task title).

### Task list and advanced task management
As a user, I'm expecting more advanced ways to manage my tasks to boost my efficiency when working with my todo list.

#### Acceptance criteria:
- Each task title should be editable (after double click).
- There should be a button to mark all tasks as done (left of the add new task input).
- There should be a button to remove all done tasks (under the task list on the right side).
- There should be buttons to filter tasks by done state (under the task list).
