# MERN Starter

This repository contains a quick starter kit for a MERN (MongoDB, Express.js, React, Node.js) application. It provides a solid foundation for building scalable full-stack applications. The frontend is bootstrapped with Vite using the `react` template, and the backend is set up with Express.js. No use of TypeScript in this starter kit.

## Features

### Frontend

- React, set up with Vite for faster development and optimized builds
- State management with Redux Toolkit with an Example feature
- UI alerts with react-toastify
- UI icons with react-icons
- UI spinners with react-spinners
- Styling with Tailwindcss
- Form validation with Formik and Yup

### Backend

- Express.js as a minimalist web framework for Node.js ready to expand
- Use of mongoose, a MongoDB object modeling for Node.js
- Use of Nodemon to restart the dev server automatically
- Use of dotenv to load environment variables.
- Use of express-validator (string validators and sanitizers)
- Implementation of basic functionalities for a User model

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Preferably the latest LTS version)
- npm (Comes with Node.js)

## Installation

Follow these steps to get your development environment running:

### Clone the repository

```
git clone [Your Repository URL]
cd [Your Repository Name]
```

### Set up the frontend

Navigate to the `client` directory, install dependencies, and start the development server:

```
cd client
npm install
npm run dev
```

This will start the frontend development server, typically available at `http://localhost:5173`.

### Set up the backend

Rename the `env.example` file as `.env` and adjust your environment variables to your needs. Then, in a new terminal, navigate to the `server` directory from the root of the project, install dependencies, and start the backend server:

```
cd server
npm install
npm run dev
```

This command will start the Express.js server, usually on `http://localhost:5000`.
