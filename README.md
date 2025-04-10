# 💼 Job Portal – MERN Stack Application

A full-stack job portal platform for job seekers and employers. Built with the MERN stack, featuring user authentication, job CRUD operations, and a responsive UI.

![Preview](https://github.com/user-attachments/assets/b987915e-30c7-4efd-92a7-351cd91eff53)

---

## 🚀 Features

- User Authentication using Firebase
- Role-based access for Employers and Job Seekers
- Create, Read, Update, Delete (CRUD) for job listings
- Email notifications using EmailJS
- Fully responsive and mobile-friendly UI

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication
- **Email Integration:** EmailJS

---

## 🧑‍💻 How to Run This Project

### 📦 Prerequisites

- Node.js & npm installed
- MongoDB (Local or MongoDB Atlas)
- Firebase Project Setup (for Authentication)
- EmailJS account (optional for email notifications)

---

### 🔹 Frontend Setup

```bash
# Navigate to frontend directory
cd client

# Install dependencies
npm install

# Create a .env file and add your Firebase config
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
...

# Start the dev server
npm run dev
