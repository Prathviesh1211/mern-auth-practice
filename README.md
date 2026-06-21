# 🔐 MERN Authentication System

A full-stack authentication system built using the MERN stack featuring JWT authentication, protected routes, React Context API, theme switching, and a responsive modern UI.

## 🌐 Live Demo

### Frontend

https://mern-auth-practice.vercel.app/

### Backend API

https://mern-auth-practice-nl3l.onrender.com/

---
## 📸 Screenshots

### Home Page

![Home Light](`<img width="1903" height="991" alt="Screenshot 2026-06-21 140621" src="https://github.com/user-attachments/assets/8f8bbfbe-625e-4c47-9efe-bc1dee866a8d" />
)

### Login Page

![Login](<img width="1887" height="1034" alt="Screenshot 2026-06-21 140632" src="https://github.com/user-attachments/assets/58f573d9-683a-45cd-8a33-4e1c02c21b88" />
)

### Signup Page

![Signup](<img width="1865" height="1059" alt="Screenshot 2026-06-21 140641" src="https://github.com/user-attachments/assets/69346e85-154f-4ea6-b508-201c02bd7be2" />
)

### Profile Page

![Profile](<img width="1851" height="1016" alt="Screenshot 2026-06-21 140658" src="https://github.com/user-attachments/assets/86ea7a47-d22d-4013-a18e-89dc461f0426" />
)


## 🚀 Features

* User Registration
* User Login
* User Logout
* JWT Authentication
* Secure HTTP-Only Cookies
* Protected Routes
* React Context API
* Custom Hooks
* Light / Dark Theme Toggle
* Responsive UI
* Toast Notifications
* Profile Page
* Route Protection
* Modern DaisyUI Design

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* DaisyUI
* Axios
* Sonner

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* Cookie Parser
* CORS

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

## 📂 Project Structure

```text
project/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication Flow

### Signup

1. User submits registration form
2. Backend validates input
3. Password is hashed using bcrypt
4. User is stored in MongoDB
5. User is redirected to Login page

### Login

1. User submits credentials
2. Backend verifies email and password
3. JWT token is generated
4. Token is stored in an HTTP-only cookie
5. User is authenticated

### Protected Routes

1. User requests protected resources
2. JWT token is verified
3. Unauthorized users are redirected
4. Authorized users gain access

### Logout

1. Authentication cookie is removed
2. User state is cleared
3. User is redirected to Login page

---

## 🎯 Learning Outcomes

Through this project I learned:

* React Context API
* Custom Hooks
* JWT Authentication
* Cookie-Based Authentication
* Protected Routes
* MongoDB Atlas Integration
* REST API Development
* Authentication Middleware
* State Management
* React Router
* Tailwind CSS
* DaisyUI Theming
* Deployment using Render and Vercel

---

## ⚙️ Environment Variables

### Backend (.env)

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

## 📦 Installation

### Clone Repository

```bash
git clone <repository-url>

cd project-folder
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Login Page
* Signup Page
* Profile Page
* Dark Theme
* Light Theme

---

## 🔮 Future Improvements

* Forgot Password Feature
* Email Verification
* Refresh Tokens
* Role-Based Authorization
* Profile Editing
* Account Settings
* Google OAuth Login
* Password Reset Flow

---

## 👨‍💻 Author

### Prathviesh Naik

Computer Science Engineering Student

Built as a learning project to understand full-stack authentication using the MERN stack.

---

⭐ If you found this project useful, feel free to star the repository.
