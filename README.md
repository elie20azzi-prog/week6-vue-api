# Week 6 Internship Project - Vue User Explorer

## Project Overview

This project was created for Week 6 of the internship.

The goal of the project is to practice Vue.js fundamentals by building a small frontend application that consumes data from a public API.

## Week 6 Concepts Covered

This project includes:

- Vue components
- Props
- Custom events
- Composition API
- Vue Router
- Pinia state management
- Public API consumption
- Unit testing with Vitest

## Application Description

The application is called **Vue User Explorer**.

It fetches user data from the JSONPlaceholder public API and displays the users inside reusable Vue components.

The user can also click a button to select a specific user and display more information about that user.

## Public API Used

The application uses:

`https://jsonplaceholder.typicode.com/users`

This API returns sample user data such as:

- Name
- Email
- Phone
- Company information

## Pages

### Home Page

The Home page contains a short introduction to the application.

### Users Page

The Users page:

- Fetches users from the public API
- Displays the users using the `UserCard` component
- Shows loading and error states
- Allows the user to select a user
- Displays details about the selected user

## Main Project Files

- `src/App.vue` - main application layout and navigation
- `src/router/index.js` - Vue Router configuration
- `src/views/HomeView.vue` - Home page
- `src/views/UsersView.vue` - Users page
- `src/components/UserCard.vue` - reusable user card component
- `src/stores/users.js` - Pinia store and API request
- `src/components/__tests__/UserCard.spec.js` - unit test for UserCard

## How to Run the Project

Install dependencies:

```bash
npm install

Start the development server:

npm run dev
Run Tests
npm run test:unit
Run Lint
npm run lint