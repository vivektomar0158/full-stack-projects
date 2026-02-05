# Expense Tracker — Full Stack


<img width="800" height="500" alt="Screenshot 2026-02-05 114642" src="https://github.com/user-attachments/assets/78fe5df2-6330-4ca9-b086-c583dfb4616b" />


A modern full-stack expense tracking application (Spring Boot + React) that supports JWT auth, CRUD for expenses, budgets, dashboards and charts.

---

## Demo
- **Frontend (live):** https://expense-tracker-frontend-l779.onrender.com    
- **Backend health:** https://expense-tracker-tu4t.onrender.com/actuator/health  

---

## Features
- Dashboard: real-time stats, monthly comparisons, spending trends.
- Expense management: create / read / update / delete transactions with categories and payment methods.
- Budget tracking by category.
- JWT authentication (register / login).
- Visual reports using Recharts.

(Source: project README & repo tree.) :contentReference[oaicite:3]{index=3}

---

## Tech stack
**Backend**
- Java 17, Spring Boot 3.x
- Spring Security + JWT
- Spring Data JPA (PostgreSQL)
- Maven

**Frontend**
- React 18 (Vite)
- Tailwind CSS
- React Hook Form + Zod
- Lucide React icons
- Recharts for visualizations

(Source: project README.) :contentReference[oaicite:4]{index=4}

---

## Quickstart (local)

### Prerequisites
- JDK 17+
- Node.js 18+
- PostgreSQL running (default port 5432)

### 1) Backend
```bash
# from repository root
./mvnw spring-boot:run          # Linux / mac
# or
mvnw.cmd spring-boot:run       # Windows
2) Frontend
cd frontend
npm install
npm run dev

Tests

Backend

./mvnw test
# Integration (if configured)
./mvnw -Pintegration test


Frontend

cd frontend
npm run test        # unit (Vitest)
npx playwright test  # e2e (Playwright)


(Source: project README / repo structure.)

Project structure
expense-tracker/
├─ src/main/java/        # backend source
├─ src/main/resources/   # backend resources (application.properties)
├─ frontend/             # React app (Vite)
│  ├─ src/
│  ├─ public/
│  └─ e2e/               # Playwright tests
└─ run_app.bat


(derived from repo tree).
