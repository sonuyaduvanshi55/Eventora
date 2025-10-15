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
  - Virtual and physical coordinators manage event execution

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

