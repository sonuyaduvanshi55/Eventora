# 🎉 Welcome to Eventora

**Eventora** is a full-stack event management platform built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It connects clients with vendors for informal events such as weddings, birthdays, engagements, and more. Clients can book services, manage events, and receive personalized recommendations powered by machine learning.

This project is being developed as a **final-year academic submission** with real-world deployment goals and startup potential.

---

## 🔧 Technologies

- **MongoDB** – NoSQL database for storing users, services, and events
- **Express.js** – Backend framework for building RESTful APIs
- **React.js** – Frontend library for building interactive UIs
- **Node.js** – Runtime environment for server-side JavaScript
- **JWT & bcrypt** – Secure authentication and password hashing
- **AWS S3** – Cloud storage for service images
- **Google OAuth** – Social login integration
- **Tailwind CSS** – Utility-first CSS framework for responsive design
- **EmailJS** – Email notifications for bookings and updates

---

## 🚀 Features

- **Role-Based Authentication**
  - Clients, vendors, coordinators, and admins
  - Login via email/password or Google OAuth

- **Vendor Service Listings**
  - Vendors can create, update, and delete services
  - Clients can browse and filter services by category, price, and location

- **Event Booking**
  - Clients select event type, date, budget, and services
  - Coordinators manage event execution and status updates

- **Image Uploads**
  - Upload service photos via file or link
  - Stored securely on AWS S3

- **Booking Management**
  - Clients can view and update bookings
  - Vendors and coordinators track assigned events

- **Machine Learning (Coming Soon)**
  - Vendor recommendation engine
  - Budget-based package suggestions

---

## 📦 Deployment Plan

| Layer      | Platform        |
|------------|-----------------|
| Frontend   | Vercel          |
| Backend    | Render / Heroku |
| Database   | MongoDB Atlas   |
| Storage    | AWS S3          |

---

## 🧭 Architecture Overview

### 🖥️ Client (React + Tailwind)
- **Auth**
  - Google OAuth / JWT
- **Booking Interface**
  - Select Event Type, Date, Budget, Services
- **Vendor Dashboard**
  - Create / Edit / Delete Services
- **Coordinator Panel**
  - Manage Assigned Events

### ⚙️ Backend (Node.js + Express)
- **Routes**
  - `/user`
  - `/service`
  - `/event`
  - `/upload`
- **Controllers**
  - Business Logic
- **Middleware**
  - Auth & Role Validation
- **Models**
  - User, Service, Event
- **Utils**
  - S3 Upload
  - Password Generator
  - Date Utilities

### 🗄️ Database (MongoDB Atlas)
- Users
- Services
- Events

### 🤖 ML Microservice (Python - Flask/FastAPI)
- Vendor Recommendation
- Package Suggestion



---

## 🔮 Future Scope

- **Machine Learning Models**
  - Recommend vendors based on event type, location, and ratings
  - Suggest service packages under client budget

- **Payment Gateway Integration**
  - Support for INR transactions via Razorpay or Stripe

- **Admin Dashboard**
  - Analytics, user management, and event tracking

---

## 📚 Final Year Project

This project is being developed as part of a final-year academic curriculum and will be featured in the creator’s resume and portfolio. It demonstrates full-stack development, cloud integration, and machine learning capabilities.

---

## 📂 Source Code

[🔗 GitHub Repository](https://github.com/sonuyaduvanshi55/Eventora)
