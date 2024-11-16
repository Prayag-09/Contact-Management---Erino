# Contact Management - Mini Feature of a CRM

⭐ **SDE Internship Assignment**

## Overview

The Contact Management feature is a key part of a CRM system that allows users to manage essential contact information. It supports adding, viewing, editing, and deleting contacts in a centralized interface. This functionality is designed to streamline workflows, enhance accessibility, and help maintain strong business relationships.

### Use Cases

1. **Add a New Contact**: Capture essential contact details such as name, email, phone number, company, and job title.
2. **View Contacts**: Display a sortable and paginated table of all contacts.
3. **Edit Contacts**: Update contact details to ensure data is up-to-date.
4. **Delete Contacts**: Remove outdated or duplicate entries to keep the list clean and relevant.

---

## Features

### Frontend

- **Built with React, and Material UI (MUI)**.
- **Contact Form**: A form with fields for `Username`, `Email`, `Phone Number`, `Company`, and `Job Title`.
- **Contact Table**: Displays contacts with sorting, pagination, and action buttons for editing and deleting.

### Backend

- **Built with NodeJS, Express, Typescript, Prisma, and PostgreSQL**.
- API Endpoints:
  - **POST /contacts**: Create a new contact.
  - **GET /contacts**: Retrieve all contacts.
  - **PUT /contacts/:id**: Update contact details.
  - **DELETE /contacts/:id**: Delete a contact.
- **Error Handling**: Validates input, checks for duplicate entries, and returns meaningful error messages.

### Database

- **PostgreSQL**: A relational database that efficiently handles structured data for CRUD operations.

---

## Tech Stack

### Frontend

- ReactJS with Vite for fast development.
- Material UI for a clean and consistent UI.
- TypeScript for type safety.

### Backend

- NodeJS with Express for REST API development.
- Prisma for ORM (Object Relational Mapping).
- PostgreSQL for data persistence.

### Tools

- Docker for database containerization.

---

## Getting Started

### Prerequisites

- Node.js (v18 or above)
- Docker Desktop
- PostgreSQL (or Dockerized PostgreSQL)

### Installation Steps

#### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Prayag-09/Contact-Management---Erino.git
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the database:

   - Create a `.env` file in the backend folder and add the following:
     ```env
     DATABASE_URL=postgresql://username:password@localhost:5432/contacts_db
     ```
   - Replace `username`, `password`, and `contacts_db` with your PostgreSQL details.

4. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Start the backend server:
   ```bash
   npm run dev
   ```

#### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser:
   - The frontend will run on `http://localhost:5173`.

---

## API Documentation

### Base URL: `http://localhost:8000/api/contact/`

| Method | Endpoint | Description       | Request Body                                                     |
| ------ | -------- | ----------------- | ---------------------------------------------------------------- |
| POST   | `/`      | Add a new contact | `{ firstName, lastName, email, phoneNumber, company, jobTitle }` |
| GET    | `/`      | Get all contacts  | -                                                                |
| PUT    | `/:id`   | Update a contact  | `{ firstName, lastName, email, phoneNumber, company, jobTitle }` |
| DELETE | `/:id`   | Delete a contact  | -                                                                |

---

## Database Schema

```prisma
model Contact {
  id          Int    @id @default(autoincrement())
  username    String @unique
  email       String @unique
  phoneNumber String
  company     String
  jobTitle    String
}
```

---

## How to Use the Application

1. **Home Page**

   - Displays a table of contacts.
   - You can sort and paginate the contacts.

2. **Add or Edit Contacts**

   - Navigate to `/create` to add or edit contact details.

3. **Delete Contacts**
   - Use the delete button in the table to remove a contact.

---

## Challenges and Solutions

1. **Learning MUI Components**

   - **Challenge**: Not very familiar with MUI components, which required additional time to learn how to add styling and use components effectively.
   - **Solution**: Studied the MUI documentation to understand how to use and customize components according to the project requirements.

2. **Pagination and Sorting**

   - **Challenge**: Efficiently managing large datasets in the contact table and implementing pagination and sorting.
   - **Solution**: Utilized MUI Table’s built-in sorting functionality and implemented backend pagination with query parameters. This was my first experience with sorting and pagination, and I had to learn how to use these features effectively.

3. **Frontend State Management**
   - **Challenge**: Managing the state for the contact form and table dynamically while keeping the UI in sync with the data.
   - **Solution**: Leveraged React’s `useState` and `useEffect` hooks to manage data.

## Screenshots
**Contact Page**
![image](https://github.com/user-attachments/assets/dae49a6f-911b-41e3-8b46-c823f41142ca)

**Table Page**
![image](https://github.com/user-attachments/assets/750ef722-27c8-4487-9bda-4700a8a77d8c)
