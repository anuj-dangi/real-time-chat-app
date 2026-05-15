# Real-Time Chat App

A full-stack, real-time web chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.io. This project allows users to sign up, log in, manage their profile, and chat with other users in real time.

## 🚀 Features

- **Real-time Messaging:** Chat instantly with other online users using Socket.io.
- **Authentication:** Secure user signup, login, and logout using JWT and HTTP-only cookies.
- **Online Status:** See which users are currently online.
- **Profile Management:** Update user profile picture (using Cloudinary).
- **Responsive Design:** Beautiful, mobile-friendly UI built with React, TailwindCSS, and DaisyUI.
- **Global State Management:** Fast and simple state management using Zustand.

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **TailwindCSS** & **DaisyUI** for styling
- **Zustand** for state management
- **React Router** for navigation
- **Socket.io-client** for real-time communication
- **Axios** for API requests
- **React Hot Toast** for notifications
- **Lucide React** for icons

### Backend
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose** for the database
- **Socket.io** for WebSockets
- **JSON Web Tokens (JWT)** for authentication
- **Bcrypt.js** for password hashing
- **Cloudinary** for image storage

## 📋 Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- A [Cloudinary](https://cloudinary.com/) account for image storage

## 🔑 Environment Variables

You need to create a `.env` file in the `backend` folder with the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

# Cloudinary Configuration
CLOUDNIARY_CLOUD_NAME=your_cloud_name
CLOUDNIARY_API_KEY=your_api_key
CLOUDNIARY_API_SECRET=your_api_secret
```

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnujDangi87/real-time-chat-app.git
   cd real-time-chat-app
   ```

2. **Install dependencies:**
   From the root directory, run the following command to install dependencies for both the frontend and backend:
   ```bash
   npm run build
   ```
   *(This script uses the root `package.json` to run `npm install` in both `frontend/` and `backend/`, and then builds the frontend.)*

   Alternatively, you can install them manually:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Start the application:**

   **For Development:**
   You will need two terminals.

   Terminal 1 (Backend):
   ```bash
   cd backend
   npm run dev
   ```

   Terminal 2 (Frontend):
   ```bash
   cd frontend
   npm run dev
   ```

   **For Production:**
   You can start the entire app from the root directory after building the frontend:
   ```bash
   npm start
   ```

## 📜 Available Scripts (Root Directory)

- `npm run build`: Installs all dependencies for both frontend and backend, and builds the frontend React application.
- `npm start`: Starts the Node.js backend server (which will also serve the frontend build in production).

## 📄 License

This project is licensed under the ISC License.
