# **usersApp**

**usersApp** is a Node.js application designed for efficient user management and authentication. This project serves as a robust backend solution for applications requiring user authentication, secure password management, and API integration. The app is built with modern technologies, ensuring high performance and scalability.

### **Key Features:**
- **User Authentication**: Secure user authentication with **JWT** (JSON Web Tokens) for session management.
- **Password Encryption**: Uses **bcrypt** for strong password hashing, ensuring user credentials are kept safe.
- **API Documentation**: Automatically generates API documentation using **Swagger UI**, making it easy to understand and interact with the API.
- **Logging**: Comprehensive logging with **winston**, including daily rotation and MongoDB integration for log persistence.
- **CORS Support**: Handles cross-origin requests seamlessly, allowing for smooth integration with various frontend frameworks.

### **Technologies:**
- **Node.js**: The application is built on Node.js, ensuring efficient asynchronous execution.
- **Express.js**: A fast, minimal web framework that powers the app's HTTP server.
- **MongoDB & Mongoose**: A NoSQL database used to store user data and application logs.
- **JWT & Bcrypt**: For secure user authentication and password management.
- **Swagger UI & mongoose-to-swagger**: Provides interactive API documentation, making it easier to test and understand the API.
- **Winston**: A versatile logging library used with daily rotation and MongoDB transport to persist logs.
- **CORS**: Enables handling of cross-origin requests for seamless frontend-backend communication.
- **dotenv**: Loads environment variables from a .env file for secure configuration management.
- **Jest**: A powerful testing framework for running unit and integration tests.
- **cross-env**: Ensures environment variables work consistently across Windows, macOS, and Linux.
- **google-auth-library**: Provides tools to integrate with Google OAuth2 authentication if needed.





### **Setup and Installation**

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
