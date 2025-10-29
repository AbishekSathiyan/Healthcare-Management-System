# Healthcare-Management-System

A full-stack Healthcare Management System built with the MERN Stack, integrating Firebase Auth, Socket.IO, Twilio, Cloudinary, Razorpay, and OpenAI API. It enables patient registration, doctor scheduling, online consultations, AI health assistance, secure payments, and admin analytics in one digital platform.



* Full project overview
* Tech stack
* Setup guide
* Collaboration workflow
* Team section (Abishek S & Merlin Baskar) 


````
# 🏥 Healthcare Management System  

A full-stack **Healthcare Management System** built with the **MERN Stack**, integrating **Firebase Auth**, **Socket.IO**, **Twilio**, **Cloudinary**, **Razorpay**, and **OpenAI API**.  
This system enables patient registration, doctor scheduling, online consultations, AI health assistance, secure payments, and real-time communication — all in one digital platform.

---

## ⚙️ Features

### 👨‍⚕️ Core Modules
1. **Patient Registration** – Manage new and returning patients  
2. **Doctor Schedule Management** – Set available timings and appointments  
3. **Online Consultation** – Real-time chat and video using Socket.IO  
4. **Medical Record Storage** – Store prescriptions and reports on Cloudinary  
5. **AI Health Assistant** – Uses OpenAI API for patient queries and health tips  
6. **Appointment Reminders** – Automated SMS/WhatsApp via Twilio  
7. **Payment Gateway** – Secure billing using Razorpay  
8. **Admin Dashboard** – Analytics using Chart.js (appointments, doctors, users)

---

## 🧠 Tech Stack Summary

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend** | React.js, Tailwind CSS | UI for doctors & patients |
| **Backend** | Node.js + Express.js | REST APIs & business logic |
| **Database** | MongoDB (Mongoose) | Store users, records, schedules |
| **Real-time** | Socket.IO | Live consultations & chat |
| **Auth** | Firebase + Bcrypt | Secure authentication |
| **Notifications** | Twilio API | Appointment & reminder alerts |
| **Payments** | Razorpay API | Online payment integration |
| **Storage** | Cloudinary | Store prescriptions & medical reports |
| **AI** | OpenAI API | Smart health chatbot assistance |
| **Analytics** | Chart.js + React | Admin dashboard visualizations |
| **Deployment** | Render / Vercel | Hosting & scalability |
| **Tokens** | JWT (Refresh Tokens) | Persistent login sessions |

---

## 🚀 Installation Guide

### 🧩 1. Clone the Repository

git clone https://github.com/AbishekSathiyan/Healthcare-Management-System.git
cd Healthcare-Management-System


### 🎨 2. Setup Client (React + Tailwind)

```bash
cd client
npm install
npm run dev
```

### ⚙️ 3. Setup Server


cd server
npm install
npm start


### 🔑 4. Environment Variables

Create `.env` in both `client` and `server` directories with:

```
MONGO_URI=
FIREBASE_API_KEY=
TWILIO_SID=
TWILIO_AUTH_TOKEN=
RAZORPAY_KEY_ID=
RAZORPAY_SECRET=
OPENAI_API_KEY=
CLOUDINARY_URL==
JWT_SECRET=
```

---

## 🧑‍💻 Collaboration Workflow

### 🔀 Branching Strategy

| Role             | Branch             | Description                     |
| ---------------- | ------------------ | ------------------------------- |
| Abishek Sathiyan | `feature/frontend` | React UI, integrations, styling |
| Merlin           | `feature/backend`  | APIs, database, and logic       |

### 💡 Workflow Commands

```bash
# Create a new branch
git checkout -b feature/frontend

# Stage and commit
git add .
git commit -m "Added frontend UI components"

# Push your branch
git push origin feature/frontend
```

### 🧩 Merging via Pull Requests

1. Push branch to GitHub
2. Go to **Pull Requests → New Pull Request**
3. Select your branch → Review → Merge to `main`

---

## 📊 Admin Dashboard

* Built using **React + Chart.js**
* Displays stats on appointments, doctors, users, and revenue.

---

## ☁️ Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

## 👨‍💻 Team Members

| Name             | Role                    | GitHub                                                 |
| ---------------- | ----------------------- | ------------------------------------------------------ |
| Abishek Sathiyan | Frontend & Project Lead | [@AbishekSathiyan](https://github.com/AbishekSathiyan) |
| Merlin           | Backend Developer       | [GitHub Profile](#)                                    |

---

## 🏗️ Future Enhancements

* Doctor availability calendar integration
* Video call support via WebRTC
* Push notifications via Firebase Cloud Messaging
* AI-based symptom analysis

---

## 🧾 License

This project is open-source under the [MIT License](LICENSE).

---

### 🌟 Developed with dedication by Abishek & Merlin Baskar

```

---

