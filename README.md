# 🚀 ProjmanageBackend

**ProjmanageBackend** is a RESTful backend API built for managing collaborative projects.  
This is **Phase 1** of the project — focused exclusively on **User Authentication and Authorization**.

---

## 📘 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features (Phase 1)](#features-phase-1)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Server](#running-the-server)
- [API Endpoints (Phase 1)](#api-endpoints-phase-1)
- [Postman Collection](#postman-collection)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

---

## 🧩 About the Project

**ProjmanageBackend** is the backend API for a project management application designed to be built in multiple phases.  
This first phase delivers **secure authentication and user management** features using modern Node.js and Express practices.

---

## ⚙️ Tech Stack

- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **MongoDB + Mongoose** – Database & ORM  
- **JWT** – Authentication system  
- **Nodemailer** – Email services (verification, reset)  
- **dotenv** – Environment variables  
- **Cors** – Cross-origin request handling  

---

## ✨ Features (Phase 1)

✅ User registration with email verification  
✅ Secure JWT authentication (Access + Refresh tokens)  
✅ Forgot/Reset password  
✅ Change password (secured)  
✅ Resend email verification  
✅ Get current user details  

---

## 📂 Project Structure

```
projmanage-backend/
│
├── src/
│   ├── config/        # Database & email setup
│   ├── controllers/   # Auth controller logic
│   ├── middleware/    # Auth & validation middlewares
│   ├── models/        # Mongoose models (User)
│   ├── routes/        # API routes
│   ├── utils/         # Utility functions (tokens, mail)
│   └── app.js         # Configuration
│   └── index.js       # Entry Point
│  
│
├── .env.example
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have:
- [Node.js](https://nodejs.org/en/download/) (v18+)
- [MongoDB](https://www.mongodb.com/)
- Git installed and configured

---

### ⚡ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ashishwankhade/ProjmanageBackend.git
   ```

2. Navigate into the folder:
   ```bash
   cd ProjmanageBackend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

### 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env

MONGO0_URL= 
PORT = 8000
CORS_ORIGIN =*

ACCESS_TOKEN_SECRET = test
ACCESS_TOKEN_EXPIRY =1D

REFRESH_TOKEN_SECRET = ID
REFRESH_TOKEN_EXPIRY =7D

MAILTRAP_SMTP_HOST= 
MAILTRAP_SMTP_PORT= 
MAILTRAP_SMTP_USER= 
MAILTRAP_SMTP_PASSWORD=

FORGOT_PASSWORD_REDIRECT_URL=http://localhost:3000/forgot-passwprd
```

*(Refer to `.env.example`.)*

---

### ▶️ Running the Server

Run in development mode:
```bash
npm run dev
```

Run in production mode:
```bash
npm start
```

Server will start at:  
👉 `http://localhost:8000/api/v1/`

---

## 🧠 API Endpoints (Phase 1)

**Base Path:** `/api/v1/auth/`

| Method | Endpoint | Description | Auth Required |
|--------|-----------|-------------|----------------|
| POST | `/register` | Register new user | No |
| POST | `/login` | Login and get JWT tokens | No |
| POST | `/logout` | Logout user | Yes |
| GET | `/current-user` | Get logged-in user details | Yes |
| POST | `/change-password` | Change user password | Yes |
| POST | `/refresh-token` | Get new access token | No |
| GET | `/verify-email/:verificationToken` | Verify user email | No |
| POST | `/forgot-password` | Send password reset email | No |
| POST | `/reset-password/:resetToken` | Reset user password | No |
| POST | `/resend-email-verification` | Resend verification email | Yes |

---

## 🧰 Postman Collection

To help you test the **authentication routes**, import this Postman collection.

**Filename:** `ProjmanageBackend.postman_collection.json`


📥 **How to use:**
1. Copy the above JSON and save it as `ProjmanageBackend_Auth.postman_collection.json`.  
2. Open **Postman → Import → File → Select this JSON file**.  
3. Replace `{{access_token}}` and `{{resetToken}}` values during testing.  

---

## 🧾 Security

- JWT authentication (Access & Refresh tokens)  
- Bcrypt password hashing  
- Email verification tokens  
- Protected routes middleware  
- Secure password reset flow  
- CORS-enabled API  

---

## 🤝 Contributing

1. Fork the repo  
2. Create a branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m "Added authentication feature"`)  
4. Push to your branch (`git push origin feature/your-feature`)  
5. Open a Pull Request 🚀  

---

## 🪪 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
