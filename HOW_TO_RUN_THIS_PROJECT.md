# Employee Performance Management System (EPMS) - Bhavya Demo

Welcome to the **Employee Performance Management System (EPMS)** demo project. This repository contains the complete frontend and backend code for the performance management portal, complete with interactive HR Analytics, Intern/Employee Dashboards, Goal Tracking, KRA & Objectives, Self Assessments, and Reviews.

---

## 📁 Project Structure

```
bhavya_demo/
├── backend/                   # Django REST Framework backend
│   ├── apps/                  # Modular apps (users, cycles, goals, reviews, analytics)
│   ├── config/                # Django project settings & URLs
│   ├── db.sqlite3             # Pre-seeded SQLite database with demo accounts & cycles
│   ├── requirements.txt       # Python dependencies
│   └── manage.py              # Django management script
├── epms_frontend/             # React + Vite + TypeScript + Tailwind CSS frontend
│   ├── src/                   # React components, pages, context, and routing
│   ├── package.json           # Node.js dependencies and scripts
│   └── vite.config.ts         # Vite configuration
├── HR_Dashboard_Package/      # Standalone HR Dashboard package & architecture
│   └── README_AND_PROJECT_EXPLANATION.md
├── docs/                      # Project documentation and specifications
├── README.md                  # Project overview
└── HOW_TO_RUN_THIS_PROJECT.md # This guide
```

---

## ⚡ Quick Start Guide

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Python 3.10+**: [Download Python](https://www.python.org/downloads/)
- **Node.js 18+ (with npm)**: [Download Node.js](https://nodejs.org/)

---

### 2. Running the Backend (Django)

1. Open your terminal / command prompt and navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   - **Windows (PowerShell or CMD)**:
     ```powershell
     python -m venv venv
     .\venv\Scripts\activate
     ```
   - **macOS / Linux**:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. The SQLite database (`db.sqlite3`) is already bundled with seed data. Run migrations (just in case) and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver 127.0.0.1:8000
   ```

   The backend API will be live at: **`http://127.0.0.1:8000/`**

---

### 3. Running the Frontend (React + Vite)

1. Open a new terminal window and navigate to the `epms_frontend` directory:
   ```bash
   cd epms_frontend
   ```

2. Install npm dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: **`http://localhost:5173/`**

---

## 🔑 Demo Access & Features

- **HR Dashboard & Analytics**: High-level overview of review completion rates, department rankings, team performance distributions, and timeline tracking.
- **KRA & Objectives**: Configurable Key Result Areas, weighting, target metrics, and progress tracking.
- **Employee & Intern Portal**: Self-assessments, goal management, multi-stage review workflows.
- **Pre-seeded Data**: Includes demo users across HR, Managers, and Interns with active performance cycles.

---
*Created for Bhavya Demo Presentation & Evaluation.*
