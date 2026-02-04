# Expense Tracker - Pro

A full-stack, modern expense tracking application built with Spring Boot and React.

## Features

- **Dashboard**: Real-time stats, monthly comparisons, and spending trends.
- **Expense Management**: Full CRUD operations for daily transactions with categories and payment methods.
- **Budget Tracking**: Set and monitor monthly budget limits by category.
- **Authentication**: Secure JWT-based authentication with registration and login.
- **Reports**: Visual data representations using Recharts.

## Tech Stack

### Backend
- **Java 17** with **Spring Boot 3.5.10**
- **Spring Security** with **JWT**
- **Spring Data JPA** with **PostgreSQL**
- **Maven** for build management
- **JUnit 5** and **Mockito** for testing

### Frontend
- **React 18** with **Vite**
- **Tailwind CSS** for styling
- **React Hook Form** with **Zod** (for validation)
- **Lucide React** for icons
- **Recharts** for data visualization
- **Vitest** and **React Testing Library** for unit testing
- **Playwright** for End-to-End testing

## Getting Started

### Prerequisites
- JDK 17+
- Node.js 18+
- PostgreSQL (ensure it's running on port 5432)

### Running the Application

I've provided a convenient batch script to start both servers:
```bash
./run_app.bat
```

Or manually:

**Backend:**
```bash
mvnw.cmd spring-boot:run
```

**Frontend:**
```bash
cd frontend
npm run dev
```

## Testing

### Backend Tests
```bash
mvnw.cmd test                  # Unit tests
mvnw.cmd test -Pintegration    # Integration tests (if configured)
```

### Frontend Tests
```bash
cd frontend
npm run test                   # Unit tests (Vitest)
npx playwright test            # End-to-End tests
```

## Project Structure

```
expense-tracker/
├── src/main/java/             # Backend source
├── src/main/resources/        # Backend resources (application.properties)
├── frontend/                  # Frontend project
│   ├── src/                   # React source
│   ├── e2e/                   # Playwright tests
│   └── public/                # Static assets
└── run_app.bat                # Start script
```
