# Nanbify - Real-Time Chat Application 💬

Nanbify is a full-stack chat application built using the **MERN stack** (MongoDB, Express, React, Node.js). It provides real-time messaging, supports image sharing on desktop or larger-screen devices, and offers customizable themes and profile updates for a personalized user experience.

---

## Features 🚀

- **Real-Time Messaging**: Instant communication powered by **Socket.io**.
- **Image Sharing**: Share images, supported on desktop or larger-screen devices.
- **Customizable Themes**: Choose from **32 unique themes** for a personalized experience.
- **Profile Picture Updates**: Easily update your profile picture.
- **Secure Authentication**: Passwords are hashed with **bcryptjs**, and authentication is managed using **jsonwebtoken**.
- **REST API**: Robust backend powered by **Express.js**.
- **Cloud Storage**: Image uploads are hosted on **Cloudinary**.
- **Database**: Data is securely stored in **MongoDB** using **Mongoose**.
- **Modern UI**: Built with **TailwindCSS** and **DaisyUI** for a sleek design.
- **State Management**: Simplified using **Zustand**.
- **Responsive Design**: Optimized for desktop and larger devices.

---

## Tech Stack 🛠️

### Frontend:
- **React.js**
- **TailwindCSS** with **DaisyUI**

### Backend:
- **Node.js**
- **Express.js**
- **Socket.io**

### Database:
- **MongoDB** (via **Mongoose**)

### State Management:
- **Zustand**

### Other Tools & Libraries:
- **dotenv**: Manage environment variables.
- **bcryptjs**: Password hashing for security.
- **jsonwebtoken**: Token-based authentication.
- **Cloudinary**: Image hosting and management.
- **cookie-parser**: Parse HTTP cookies.
- **CORS**: Enable cross-origin requests.

---

## Project Structure 📂

```
Nanbify/
├── backend/           # Backend code (Node.js, Express)
├── frontend/          # Frontend code (React.js, TailwindCSS, DaisyUI)
├── .env               # Environment variables
├── README.md          # Project documentation
```
---

## Setup .env file

```
PORT=5001
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```


---

## Build the app
```
npm run build
```

---
## Start the app
```
npm start
```
---


## Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

---

## Acknowledgements ❤️

- [Socket.io](https://socket.io/)
- [DaisyUI](https://daisyui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Cloudinary](https://cloudinary.com/)

---

Enjoy using **Nanbify**! 🎉







