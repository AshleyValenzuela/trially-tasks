# Trially Task Management System

## Overview

This project is a fullstack application designed for managing tasks. It is built with a FastAPI backend, Next.js and React frontend, PostgreSQL database, and Docker for containerization. The application will allow users to create, read, update, and delete tasks as well as register and login. Each task has a title, description, status, and due date.

## Project Structure

- `server/`: Backend code with FastAPI
- `client/`: Frontend code with Next.js and React
- `docker-compose.prod.yml`: Docker Compose configuration for setting up the application in production along with `docker-compose.yml`
- `docker-compose.test.yml`: Docker Compose configuration for setting up the application in testing along with `docker-compose.yml`
- `docker-compose.yml`: Docker Compose configuration for setting up the application
- `init.sql`: SQL script to initialize the PostgreSQL database with tables and seed data
- `.env.dev`: Environment file for development
- `.env.prod`: Environment file for production
- `.env.test`: Environment file for test

## Requirements

- Docker and Docker Compose installed on your machine

## Setup Instructions

### Using Docker

1. **Clone the repository:**

   `git clone https://github.com/AshleyValenzuela/trially-tasks.git`

2. **Create environment files:**

- Environment files for prod, testing, and development have been included. Before deploying to production and for best practices/security, these would be added to the .gitignore. You can find them under .env.dev, .env.test, and .env.prod. 

3. **Build and run the containers:**
- For development:
`docker-compose --env-file .env.dev up --build`

4. **Access the application:**

- Frontend: http://localhost:3000
- Backend: http://localhost:8000

- Once you access the frontend, a navbar will guide you to four different pages: home, tasks, register, and login. Currently, you can only view 5 tasks under the tasks tab. Creating, updating, and deleting tasks as well as authenticating is in the works!

<img width="1453" alt="Screenshot 2024-07-31 at 5 16 23 PM" src="https://github.com/user-attachments/assets/e5397892-d146-4346-b975-992fe958111a">

## Database Initialization
- The Trially Tasks data model can be found here: https://drive.google.com/file/d/10QjRncXmrJOBkW2_LwjPhGwtwb5BMjTv/view?usp=sharing

- The `init.sql` file is used to create the database tables and seed initial data. It is automatically executed when the PostgreSQL container is started.

## Next Steps to complete application and prepare for Production

1. **Resolve Non-GET Request Issues:**
   - Investigate and fix the issue causing a bug with POST, PUT, and DELETE requests. Currently, these requests cannot be made. Server is not receiving the requests (likely due to a CORS or network issue with Docker).

2. **Authentication and Authorization:**
   - Implement user authentication and authorization to secure the application using JWTs.
   - Implement a data model where authentication entities living in the user table instead live in an authentication table. This helps with scaling authentication. 

3. **Database Migrations:**
   - Use Alembic or another migration tool to handle database schema changes in a production environment and to track a history of migrations.

4. **Error Handling and Testing:**
   - Implement robust error handling on both backend and frontend.
   - Add unit tests, integration tests, and end-to-end tests to ensure the application is reliable.

5. **CI/CD Pipeline:**
   - Set up a continuous integration and deployment pipeline to automate testing and deployment.

6. **Frontend Improvements:**
   - Enhance the user interface and user experience, for example by separating out the authentication functionality from the main navbar.
   - Add form validation and better error messages.

7. **Backend Improvements:**
   - Implement caching mechanisms to reduce database load.

## Conclusion

This project kicks off a task management system using modern technologies like FastAPI, React, and Docker. By following the next steps outlined above, the application can be wrapped up, further improved, and prepped for production!
