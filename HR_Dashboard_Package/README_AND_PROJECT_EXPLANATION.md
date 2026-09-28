# MIRAI Intern Performance Management System (PMS)
## HR Intelligence & Appraisal Dashboard — College Project Package

---

### 1. Executive Summary & Project Purpose
This project is an **Intern Performance Management System (PMS)** developed to automate, streamline, and quantify performance evaluations for college and industrial intern cohorts. 

Unlike cluttered enterprise HR software, this system is specifically tailored for academic cohorts, featuring clear hierarchical grouping, mentor capacity allocation, objective competency grading, and an audit-trail-backed publishing desk.

---

### 2. Core Functional Modules

#### A. Academic Grouping Hierarchy
- **Cohort**: Top-level term (e.g., `MIRAI Cohort 1` spanning `Sep 26 – Dec 26`).
- **Batches**: Divided into 4 primary streams:
  - **Batch A** (Sub-batches: `A1`, `A2`)
  - **Batch B** (Sub-batches: `B1`, `B2`)
  - **Batch C** (Sub-batches: `C1`, `C2`)
  - **Batch D** (Sub-batches: `D1`, `D2`)
- **Sub-Batches**: Granular project pods (A1 through D1) ensuring focused team deliverables.

#### B. Mentor Guidance & Allocation
- Real-time mentor tracking with workload limits (e.g., `2 / 4 Interns assigned`).
- **Interactive Mentor Management**: Ability to onboard new project mentors and safely remove/reassign existing mentors with confirmation prompts.

#### C. The 8 Core Competencies Evaluation Rubric
All intern evaluations are scored using an objective, industry-aligned rubric divided into **Technical** and **Behavioral** dimensions:

1. **Technical Capability (60% Weightage)**:
   - *Technical Proficiency* (Core language and framework mastery: React, Python, APIs)
   - *Problem Solving & Analytical Thinking* (Debugging, architecture, algorithmic solutions)
   - *Code / Output Quality & Execution* (Adherence to standards, testing, documentation)

2. **Behavioral Capability (40% Weightage)**:
   - *Learning Agility & Curiosity* (Speed of absorbing new tech and taking initiative)
   - *Ownership, Accountability & Reliability* (Meeting sprint deadlines independently)
   - *Professionalism & Collaboration* (Team synergy and workplace ethics)
   - *Communication & Reporting* (Daily standups, PR descriptions, demo clarity)
   - *Adaptability & Feedback Receptivity* (Iterating positively on mentor reviews)

#### D. Automatic Classification Engine
The system dynamically computes the weighted average and automatically classifies the intern:
- 🌟 **Achieved (>= 85.0%)**: High performers ready for industry placement / PPO.
- 📈 **Progressing (70.0% – 84.9%)**: Steady growth with standard guidance.
- ⚠️ **Focus Required (< 70.0%)**: Needs targeted mentorship and focused recovery milestones.

#### E. Publishing Desk & Controlled Results Broadcast
- **Draft vs Published**: Keeps preliminary grades private until finalized by the HR panel.
- **Selective & Bulk Publishing**: Selective checkbox selection or "Select All Pending" to broadcast verified scores to interns.

#### F. Real-time Audit Trail & Evidence Verification
- **Activity Log**: Automatically logs all administrative actions (adding interns, updating marks, status toggles, removals) with timestamps.
- **Evidence Desk**: Review actual GitHub PRs, Figma designs, and deployment links submitted by interns before signing off on grades.

---

### 3. File Structure in this Package

```
HR_Dashboard_Package/
│
├── README_AND_PROJECT_EXPLANATION.md   <-- Complete project & viva guide
│
├── frontend/                           <-- React + TypeScript + Tailwind UI
│   ├── pages/
│   │   ├── HrDashboard.tsx             <-- Primary HR Desk (All Features & Rubric)
│   │   └── ProfilePage.tsx             <-- Clean Employee / Student Profile
│   ├── components/
│   │   ├── Sidebar.tsx                 <-- Streamlined Navigation
│   │   ├── Header.tsx                  <-- Dynamic Route Header & Greetings
│   │   ├── DailoqaLogo.tsx             <-- Branding Component
│   │   └── NotificationBell.tsx        <-- Real-time Notification Component
│   ├── hooks/
│   │   └── useAuth.ts                  <-- Role-based auth hook (HR, Admin, Intern)
│   ├── routes/
│   │   └── adminRoutes.tsx             <-- Routing setup
│   └── package.json                    <-- Dependencies list
│
└── backend/                            <-- Django REST Framework Backend
    ├── apps/                           <-- Appraisals, Employees, KPI apps
    ├── config/                         <-- Django settings & URLs
    ├── manage.py                       <-- Django management script
    ├── requirements.txt                <-- Python dependencies
    ├── db.sqlite3                      <-- SQLite pre-populated database
    └── seed_intern_pms.py              <-- Script to seed MIRAI Cohort data
```

---

### 4. How to Run This Project

#### Frontend Setup:
1. Ensure Node.js (v18+) is installed.
2. In your terminal:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

#### Backend Setup (Optional for local API persistence):
1. In your terminal:
   ```bash
   cd backend
   python -m venv venv
   .\venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver 127.0.0.1:8000
   ```

---

### 5. Viva / Presentation Q&A Cheat Sheet

**Q1: Why did you design an HR dashboard specifically for interns instead of using general employee software?**  
*Answer*: Standard enterprise HR tools focus on complex annual appraisals, salary bands, and KRA weightage matrices that don't match academic internship cycles. Our system introduces academic cohort terms (Sep-Dec), batch/sub-batch pod structures (A1-D1), mentor allocation limits, and an 8-competency grading rubric (60% Technical, 40% Behavioral) suited for student evaluation.

**Q2: How are intern scores calculated and classified?**  
*Answer*: Evaluators rate interns on a 1–5 scale across 8 core competencies. The system computes a weighted formula: Technical Capability accounts for 60% and Behavioral accounts for 40%. The resulting percentage dynamically triggers classification into *Achieved* (≥85%), *Progressing* (70–84%), or *Focus Required* (<70%).

**Q3: How do you prevent accidental grade leaks to students?**  
*Answer*: The system enforces a two-stage workflow: **Draft** and **Published**. Grades stay in Draft mode while mentors evaluate. Only the authorized HR Partner can review and broadcast results via the Publishing Desk.

**Q4: What happens if an intern or mentor is removed?**  
*Answer*: Data integrity is strictly preserved. When an intern is removed, their associated evidence and goals are handled with confirmation options (Deactivation vs Permanent Removal). When a mentor is removed, any assigned interns are safely updated to `Unassigned` so their evaluation history is never orphaned.
