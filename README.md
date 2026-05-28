# Battle Beast Fitness Studio

## Introduction

Battle Beast Fitness Studio is a full stack fitness web application developed to provide an interactive platform for gym members and visitors. The application allows users to explore membership plans, trainers, services, reviews, and register through an online form.

The project integrates frontend and backend technologies to create a complete working application where user registration data is stored in a database.

---

## About Thiranity Tech

Thiranity Tech focuses on developing practical technology solutions and encourages learning through real-world project implementation. This project demonstrates integration between frontend, backend, APIs, and database systems.

---

# Technologies Used

## Frontend

* React.js
* CSS

## Backend

* FastAPI
* Python

## Database

* SQLite

---

# Features

* Modern fitness landing page
* Responsive UI
* Membership plans section
* Trainer information
* Customer reviews
* Registration form
* Backend API integration
* SQLite database storage

---

# Project Structure

```text
BattleBeast/

frontend/

backend/

users.db
```

---

# Running Frontend

Move to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Running Backend

Move to backend folder:

```bash
cd backend
```

Install required packages:

```bash
pip install fastapi uvicorn pydantic
```

Start backend server:

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

# API Endpoints

Submit user data:

```text
POST /submit
```

View stored users:

```text
GET /data
```

Example:

```text
http://127.0.0.1:8000/data
```

---

# Database

SQLite database is used for storing user registration details.

Stored Information:

* Name
* Email

Database file:

```text
users.db
```

---

# Future Improvements

* Login authentication
* Online booking
* Admin dashboard
* Payment integration
* Membership management

---

# Author

Developed for learning full stack development concepts including frontend, backend, APIs, and database integration.
