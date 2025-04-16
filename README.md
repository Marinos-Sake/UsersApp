# 🧑‍💻 usersApp

**usersApp** is a Node.js application designed for efficient user management and authentication.  
It serves as a robust backend solution for applications requiring secure login, password management, and API integration.

---

## 🔑 Key Features

- ✅ **User Authentication**: Secure JWT-based session management.
- 🔐 **Password Encryption**: Strong hashing using **bcrypt**.
- 📚 **API Documentation**: Interactive docs with **Swagger UI**.
- 📝 **Logging**: Uses **winston** with daily rotation & MongoDB transport.
- 🌐 **CORS Support**: Seamless frontend-backend integration.

---
- **Node.js** – Asynchronous and scalable runtime.
- **Express.js** – Fast and minimal HTTP server.
- **MongoDB & Mongoose** – NoSQL database and schema modeling.
- **JWT & Bcrypt** – Authentication and password security.
- **Swagger UI & mongoose-to-swagger** – Auto-generated API docs.
- **Winston** – Advanced logging with persistent storage.
- **CORS** – Cross-origin request support.
- **dotenv** – Environment variable management.
- **Jest** – Testing framework.
- **cross-env** – OS-compatible environment variables.
- **google-auth-library** – Google OAuth2 integration.

---

## ⚙️ Setup and Installation

1. **Clone this repository:**  
   `git clone https://github.com/yourusername/usersapp.git`

2. **Navigate into the project directory:**  
   `cd usersapp`

3. **Install dependencies:**  
   `npm install`

4. **Set up environment variables:**
   - Create a .env file in the root directory.

   -  Use .env.sample as a template by copying its content:
      `cp .env.sample .env`

   - Then, fill in your actual credentials (MongoDB URI, JWT secret, Google OAuth credentials, etc.) inside the .env file.

5. **Start the server:**

   - **For development:**  
     `npm run dev`

   - **For production:**  
     `npm start`

### **Access the Application**
- 🔗 Base URL: http://localhost:3000
- 📚 API Documentation (Swagger UI): http://localhost:3000/api-docs
