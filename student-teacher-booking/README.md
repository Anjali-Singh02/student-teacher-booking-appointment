# 🎓 Student-Teacher Appointment Booking System

## 📌 Description

This web application facilitates the scheduling of appointments between students and teachers. It streamlines the booking, management, and tracking of appointments, enhancing communication and accessibility for both students and teachers.

Built with **React**, **Vite**, and **Tailwind CSS**, and powered by **Firebase** for authentication and data storage.

---

## ✨ Features

-   **🔐 User Authentication**
    Secure login and registration for students and teachers using Firebase Authentication.

-   **🧑‍🏫 Role-Based Access**
    Different interfaces and capabilities for students and teachers.

-   **📅 Appointment Scheduling**

    -   Students can view teacher availability and request appointments.
    -   Teachers can set their availability and manage appointment schedules.

-   **🗂️ Appointment Management**

    -   Students: View, reschedule, or cancel appointments.
    -   Teachers: View, approve, or decline appointment requests.

-   **🔔 Notifications**
    In-app notifications for appointment requests, confirmations, and updates.

-   **👤 User Profiles**
    Users can manage their profile details, including contact information and preferences.

-   **🗃️ Data Storage**
    Appointment data and user profiles are stored in Firebase Firestore.

-   **⚛️ Built with React**
    Dynamic, responsive UI for an interactive user experience.

-   **🎨 Styled with Tailwind CSS**
    Modern, responsive design using utility-first CSS.

-   **⚡ Fast Development**
    Leveraging Vite for lightning-fast development and builds.

---

## 🛠️ Technologies Used

| Area           | Tech               |
| -------------- | ------------------ |
| Frontend       | React              |
| Build Tool     | Vite               |
| Styling        | Tailwind CSS       |
| Authentication | Firebase Auth      |
| Database       | Firebase Firestore |

---

## 🚀 Installation

### ✅ Prerequisites

-   Node.js and npm installed
-   Firebase account and project set up

### 📥 Clone the Repository

```bash
git clone <repository_url>
cd <project_name>
```

### 📦 Install Dependencies

```bash
npm install
```

### 🔧 Configure Firebase

1. Get your Firebase config from your Firebase project settings.
2. Replace placeholder values in `src/firebase.js` or `src/config/firebase.js`:

```js
const firebaseConfig = {
	apiKey: 'YOUR_API_KEY',
	authDomain: 'YOUR_AUTH_DOMAIN',
	projectId: 'YOUR_PROJECT_ID',
	storageBucket: 'YOUR_STORAGE_BUCKET',
	messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
	appId: 'YOUR_APP_ID',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { auth, firestore };
```

### 📄 Set Environment Variables

Create a `.env` file in the root directory and add:

```env
REACT_APP_FIREBASE_API_KEY="YOUR_API_KEY"
```

### ▶️ Run the Application

```bash
npm run dev
```

---

## 🧑‍💻 Usage

### 👩‍🎓 Student Workflow

-   Register or log in
-   View teacher profiles and availability
-   Request appointments
-   View, reschedule, or cancel upcoming appointments

### 👨‍🏫 Teacher Workflow

-   Register or log in
-   Set available times for appointments
-   View appointment requests
-   Approve or decline appointments
-   Manage upcoming appointments

---

## 🗂️ Project Structure

```bash
src/
├── components/       # Reusable components (UI, form elements)
├── pages/            # Page-level components (dashboards, login, etc.)
├── firebase.js       # Firebase configuration and initialization
├── App.jsx           # Root component
public/
├── index.html        # HTML entry point
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Commit your changes
4. Push to your forked repo
5. Submit a pull request 🚀

---

## 📄 License

This project is licensed under the **MIT License**.
