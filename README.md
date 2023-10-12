# Computer equipment request

This is computer equipment requesting single page application.
Main classe are Request and Equipment.
Equipment class is for creating, deleting, updating computer equipments.
Request class is for making new request by selecting dedicated equipment.

Equipment has CRUD functionality: Create, Read, Update, Delete.

Its possible to delete request or change its status.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Frontend (Angular)](#frontend-angular)
  - [Backend (Spring Boot)](#backend-spring-boot)

## Prerequisites

List any prerequisites here, such as software or dependencies. For example:
- Node.js and npm
- Java Development Kit (JDK)
- Apache Maven
- SQLite
- Git

## Getting Started

To set up the project, follow these steps: 

### Clone the Repository

To get a local copy of this project,
open your terminal or command prompt.
Navigate to the directory where you want to store the project.
Run the following command:
git clone https://github.com/H2OING/computer_request.git
Once the repository is cloned, navigate to the project directory:
cd your-repository

### Setting up the Frontend (Angular)

Navigate to the frontend directory:
cd angularclient
Install the required dependencies:
npm install
Start the Angular development server:
ng serve
The Angular application will be available at http://localhost:4200

### Setting up the Backend (Spring Boot)
Open the backend project in your preferred Java IDE (Eclipse, IntelliJ, etc.).

Configure the application properties or YAML file with your database settings and other necessary configurations.

Build the project:
mvn clean install

Run the Spring Boot application:
mvn spring-boot:run

The backend API will be accessible at http://localhost:8080

