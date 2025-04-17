
# Express MongoDB CRUD API

This is a simple CRUD (Create, Read, Update, Delete) API built with **Express.js** and **MongoDB** using **Mongoose** as the ODM.

## 🚀 Getting Started

### 📦 Installation

To start the project, run the following commands in your terminal:

```bash
npm init
npm i express
npm i mongoose
npm i body-parser
npm i dotenv
```

### 🧪 Testing

This project has been tested using **Postman** for all CRUD operations.

## 📌 Features

- Create new users
- Read/get user data
- Update existing user data
- Delete users

## 📁 Project Structure (Example)

```
.
├── server.js
├── .env
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
```

## 📫 Notes

- Make sure MongoDB is running locally or provide a cloud MongoDB URI in your `.env` file.
- Use `body-parser` middleware to parse incoming request bodies.
- All endpoints are testable via **Postman**.

