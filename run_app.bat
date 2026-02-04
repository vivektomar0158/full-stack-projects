@echo off
echo Starting Expense Tracker Application...

echo Starting Backend...
start "Backend" cmd /k "mvnw.cmd spring-boot:run"

echo Starting Frontend...
cd frontend
start "Frontend" cmd /k "npm.cmd run dev"

echo Application is starting. Please wait for both servers to be ready.
echo Backend: http://localhost:8080
echo Frontend: http://localhost:5173
