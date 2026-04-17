# Sprint project

## Team Works On My Machine

- Peter Firlotte
- Mason Josefchuck
- CJ Gonzales

## Project Description

This project is a news aggregating site that allows for users to rate articles based on how relevant those specific articles are to the topic.

## User Stories

- As a user, I want to create an account which allows me to rate articles, so I can inform others if the content is reliable.
- As a user, I want to browse a list of news articles grouped by topic so that I can easily find content.
- As a user, I want to see which articles are worth reading, based on the average ratings of other users.

## Kanban Items Completed and Who Completed Them - Sprint Review 1

- Initialize Project - Peter Firlotte
- Project README.md - Cj Gonzales
- Set up Project Git Repository - Peter Firlotte
- Team Vercel Account/Management - Peter Firlotte
- App Stylesheet and Style Guide -  Peter Firlotte
- Footer High-Level Component - Mason Josefchuk
- Navigation Bar High-Level Component - Peter Firlotte
- Landing Page High-Level Component - Cj Gonzales
- Footer CSS Styling - Mason Josefchuk
- Navigation Bar CSS Styling - Peter Firlotte
- Landing Page CSS Styling - Cj Gonzales
- App Integration - Mason Josefchuk

## Kanban Items Completed and Who Completed Them - Sprint Review 2

- Multi Page Navigation -  Peter Firlotte
- Project README update -  Peter Firlotte & Mason Josefchuk
- Navigation Interfaces -  Peter Firlotte (Completed in previous sprint)
- Feature page "Recent" -  Mason Josefchuk
- Feature page "Recent": Form component - Mason Josefchuk
- Feature page "Popular" -  Cj Gonzales
- Feature page "Popular": Form component -  Cj Gonzales
- Feature page "Popular": Element Add/Remove component -  Cj Gonzales
- Feature page "User Page" - Peter Firlotte
- Feature page "User Page": Form component -  Peter Firlotte
- Feature page "User Page": Element Add/Remove component -  Peter Firlotte
- Create central fake article section for testing - Cj Gonzales

## Kanban Items Completed and Who Completed Them - Sprint Review 3

- Hook Definitons - Cj Gonzales
- Service Definition(s) - Mason Josefchuk
- Move and Refactor test data - Mason Josefchuk
- Shared-page-state Refactor - Mason Josfchuk/Peter Firlotte/Cj Gonzales
- Individual Repository Definition(s) and Integration - Mason Josefchuk
- Test Data - Mason Josefchuk
- New/Refactor Component - Mason Josfchuk
- Architecture Layout Document - Mason Josefchuk
- Individual Repository Definition(s) and Integration - Peter Firlotte
- Test Data - Peter Firlotte
- New/Refactor Component - Peter Firlotte
- Architecture Layout Document - Peter Firlotte
- Individual Repository Definition(s) and Integration - Cj Gonzales
- Test Data - Cj Gonzales
- New/Refactor Component - Cj Gonzales
- Architecture Layout Document - Cj Gonzales
  
## Kanban Items Completed and Who Completed Them - Sprint Review 4

- Development SQL Database - Mason Josefchuk
- Back-end App Initialization - Mason Josefchuk, Peter Firlotte, CJ Gonzales
- Update Vercel Deployment - Peter Firlotte
- Prisma and Client Initialization - Peter Firlotte
- Reorganize React Hooks - Mason Josefchuk
- Setup base front & backend setup files - Peter Firlotte
- Setup Vercell files - Peter Firlotte
- Backend Cors configuration - Peter Firlotte
- Front-end sends requests to back-end - Mason Josefchuk, Peter Firlotte, CJ Gonzales
- Resource Data Schemas - Mason Josefchuk, Peter Firlotte, CJ Gonzales
- Backend Resource Endpoints - Mason Josefchuk, Peter Firlotte, CJ Gonzales
- Application State Persistence - Mason Josefchuk, Peter Firlotte, CJ Gonzales

## Local Project Setup instructions
### Installing Dependencies
- Navigate into the project root directory in the terminal (file_path\Full-Stack Project\ )
- In the powershell terminal, run the command `npm install` to allow for project dependencies that allow both frontend and backend to 
  communicate effectively and not duplicate dependencies that can be used in both sections
- Navigate into the Frontend directory of the project in the terminal (file_path\Full-Stack Project\apps\frontend\ )
- In the powershell terminal, run the command `npm install` to allow for project dependencies to download that is exclusive to the frontend 
  portion of the project
- Navigate into the Backend directory of the project in the terminal (file_path\Full-Stack Project\apps\backend\ )
- In the powershell terminal, run the command `npm install` to allow for project dependencies to download that is exclusive to the backend 
  portion of the project

### Creating the Local Database
- Launch the Docker desktop program (If you do not have the desktop program, install it from the Docker website)
- Navigate into the project root directory in the terminal (file_path\Full-Stack Project\ )
- Change the username and password inside of the Docker file if you want to secure the database from default settings
- Once all settings are confirmed, run the command `Docker compose up` to deploy the database
- Verify the database is online and running by using a SQL-based administration software like pgadmin 4 and log into the database using this example url
  `"postgresql://{username}:{password}@{Database IP/localhost}:{Port Number}/Fullstack-Project"` (remove curly brackets and change default username and password 
  field if you have changed the Docker username and password setting)

### Adding enviornment variables into project
- Navigate into the Backend directory of the project in the terminal (file_path\Full-Stack Project\apps\backend\ )
- Create .env file inside of the Backend directory to allow the Database and Frontend to talk to the Backend.
- Create `DATABASE_URL` and `FRONTEND_URL` variables that hosts the SQL Docker Container link and Frontend Server link
  ex. `DATABASE_URL = "postgresql://{username}:{password}@{Database IP/localhost}:{Port Number}/Fullstack-Project"` (remove curly brackets)
  ex. `FRONTEND_URL = "http://{Server IP/localhost}:{Port Number}"` (remove curly brackets)
- Navigate into the Frontend directory of the project in the terminal (file_path\Full-Stack Project\apps\frontend\ )
- Create .env file inside of the Frontend directory to allow Vercel Deployment and Backend to talk to the Frontend.
- Create `VITE_API_BASE_URL` and `API_BASE_URL` variables that hosts the SQL Docker Container link and Frontend Server link
  ex. `API_BASE_URL = "http://{Server IP/localhost}:{Port Number}/api/v1/"` (remove curly brackets)
  ex. `VITE_API_BASE_URL = "http://{Server IP/localhost}:{Port Number}"` (remove curly brackets)

### Create a Clerk Auth Account/integrate into Project
- 

### Migrating and seeding the database
- Verify the Docker container containing the Database is currently running by running the command `docker ps` in the project root directory 
  (file_path\Full-Stack Project\ ) If it isn't, run the command `docker compose up`
- Navigate into the Backend directory of the project in the terminal (file_path\Full-Stack Project\apps\backend\ )
- Verify the Database can be remotely accessed by using tools like pgadmin 4 or running the command `npx prisma studio` to verify it can be accessed
- In the powershell terminal, run the command `npx prisma generate` to verify the prisma client has been generated
- In the powershell terminal, run the command `npx prisma migrate dev --name <NameOfMigration>` to convert the prisma code to an sql migration file
- In the powershell terminal, run the command `npx prisma migrate dev` to upload the sql migration file generated by prisma to the remote database
- In the powershell terminal, run the command `npx prisma db seed` to inject the data the Docker Database needs for the website to fuction

### Running the Server and Application
- 