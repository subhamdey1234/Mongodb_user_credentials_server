Here's a sample `README.md` for a **MongoDB Login Form and Register Form** project:

---

# MongoDB Login and Register Form

## Overview
This project demonstrates a basic **Login** and **Registration** system using **MongoDB** as the database. The system is built with **Node.js** and **Express.js**, with form validation and authentication.

### Features
- User Registration with form validation  
- User Login with authentication  
- Passwords are hashed for security using **bcrypt**  
- MongoDB is used for data storage  
- Session management with **express-session**  
- Error handling and user-friendly feedback  

---
### Screen_shots
![login](https://github.com/user-attachments/assets/8ae2f046-7aeb-49e1-a298-bac5254eeebd)
![register](https://github.com/user-attachments/assets/a1e30e70-eb2b-48ee-ac27-8fd6828d1b84)



## Technologies Used
- **Node.js**  
- **Express.js**  
- **MongoDB** (via **Mongoose** ODM)  
- **bcrypt** for password hashing  
- **express-session** for session management  
- **EJS** or **HTML/CSS** for the front-end  

---

## Prerequisites
Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org)  
- [MongoDB](https://www.mongodb.com/try/download/community)  

---

## Installation and Setup

1. **Clone the repository**
   ```bash
   git [clone https://github.com/yourusername/mongodb-login-register.git](https://github.com/subhamdey1234/Mongodb_user_credentials_server)
   cd mongodb-login-register
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root and add the following:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/yourdatabasename
   SESSION_SECRET=your_secret_key
   ```

4. **Start the MongoDB server**
   ```bash
   mongod
   ```

5. **Run the application**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

---

## Project Structure
```
mongodb-login-register/
│
├── views/            # EJS templates (login, register, dashboard)
├── public/           # Static files (CSS, images)
├── routes/           # Express routes (auth.js)
├── models/           # Mongoose models (User.js)
├── app.js            # Main server file
├── .env              # Environment variables
├── package.json      # Node.js dependencies and scripts
└── README.md         # Project documentation
```

---

## Usage

### Registration
1. Navigate to `/register`.  
2. Fill out the form with your details (username, email, password).  
3. Submit the form to create a new account.  

### Login
1. Navigate to `/login`.  
2. Enter your registered username and password.  
3. Upon successful login, you'll be redirected to a dashboard.  

---

## Security Features
- **Password Hashing**: Passwords are hashed using `bcrypt` before being stored in the database.  
- **Session Management**: Sessions are used to keep users logged in across pages.  
- **Form Validation**: Prevents submission of invalid data.  

---

## Future Enhancements
- Add email verification during registration  
- Implement JWT-based authentication  
- Enable OAuth login with third-party providers (Google, Facebook, etc.)  
- Password reset functionality  

---


---

## Contact
For any questions or feedback, reach out to:  
**Email**: sdey06384@gmail.com  
**GitHub**: [https://github.com/subhamdey1234](https://github.com/subhamdey1234)  

---

