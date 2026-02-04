# Expense Tracker Documentation - Part 2: Implementation Timeline & Deployment

## ⏱️ Detailed Implementation Timeline

### **DAY 1: Backend Foundation & Core APIs**

---

### **Phase 0: Pre-Development Setup (2-3 hours)**

#### **Step 0.1: Environment Setup (30 minutes)**

**What To Do:**
1. **Install Java Development Kit (JDK) 17 or higher**
   - Download from Oracle or use OpenJDK
   - Set JAVA_HOME environment variable
   - Verify: Open terminal, run `java -version`
   - Should show version 17 or higher

2. **Install Node.js and npm**
   - Download Node.js 18+ from nodejs.org
   - npm comes bundled with Node
   - Verify: `node -v` and `npm -v`

3. **Install PostgreSQL**
   - Download from postgresql.org
   - During installation, set postgres user password (remember this!)
   - Note the port (default: 5432)
   - Install pgAdmin (GUI tool) if you want visual database management

4. **Install IDE**
   - **For Java:** IntelliJ IDEA (recommended) or Eclipse
   - **For React:** VS Code (recommended)
   - Install relevant plugins: Java Extension Pack, Spring Boot Extension

5. **Install API Testing Tool**
   - Postman (desktop app) OR
   - Thunder Client (VS Code extension) OR
   - Just use cURL commands

6. **Create GitHub Repository**
   - Create new repository on GitHub
   - Initialize with README
   - Clone to your local machine
   - Create two folders: `backend/` and `frontend/`

**Verification Checklist:**
- [ ] Java 17+ installed and verified
- [ ] Node.js 18+ installed and verified  
- [ ] PostgreSQL running, can connect
- [ ] IDE installed and ready
- [ ] GitHub repo created and cloned

**Deliverables:**
✅ All development tools installed
✅ GitHub repository created
✅ Ready to start coding

---

#### **Step 0.2: Database Setup (30 minutes)**

**What To Do:**

1. **Start PostgreSQL Service**
   - Windows: Services → PostgreSQL → Start
   - Mac: `brew services start postgresql`
   - Linux: `sudo systemctl start postgresql`

2. **Connect to PostgreSQL**
   - Using psql command line: `psql -U postgres`
   - OR using pgAdmin GUI
   - Enter the password you set during installation

3. **Create Database**
   - Run SQL: `CREATE DATABASE expense_tracker;`
   - Verify: `\l` (should see expense_tracker in list)

4. **Create Database User (Optional but recommended)**
   - Create user: `CREATE USER expense_user WITH PASSWORD 'your_secure_password';`
   - Grant permissions: `GRANT ALL PRIVILEGES ON DATABASE expense_tracker TO expense_user;`
   - This user will be used by your Spring Boot application

5. **Test Connection**
   - Connect to new database: `\c expense_tracker`
   - Should show: "You are now connected to database expense_tracker"

**Important Notes:**
- Remember your database password (you'll need it in application.properties)
- Database name: `expense_tracker`
- Default port: `5432`
- If using docker: `docker run --name postgres -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres`

**Deliverables:**
✅ PostgreSQL running
✅ expense_tracker database created
✅ Database user created (optional)
✅ Can connect successfully

---

#### **Step 0.3: Backend Project Initialization (45 minutes)**

**What To Do:**

1. **Go to Spring Initializr**
   - Open browser: https://start.spring.io/
   
2. **Project Configuration:**
   - **Project:** Maven
   - **Language:** Java
   - **Spring Boot:** 3.2.x (latest stable 3.x version)
   - **Project Metadata:**
     - Group: `com.yourname` (e.g., com.raj)
     - Artifact: `expense-tracker`
     - Name: `expense-tracker`
     - Description: `Expense Tracker with Analytics`
     - Package name: `com.yourname.expensetracker`
     - Packaging: Jar
     - Java: 17

3. **Add Dependencies:**
   Click "Add Dependencies" button and search for:
   - **Spring Web** - For REST API
   - **Spring Security** - For authentication
   - **Spring Data JPA** - For database operations
   - **PostgreSQL Driver** - Database driver
   - **Lombok** - Reduce boilerplate
   - **Validation** - Input validation

4. **Generate Project:**
   - Click "Generate" button
   - Downloads a zip file
   - Extract to your `backend/` folder
   - Rename extracted folder if needed

5. **Open in IDE:**
   - IntelliJ: File → Open → Select backend folder
   - Wait for dependencies to download (may take 2-5 minutes)
   - You'll see project structure appear

6. **Update application.properties:**
   - Location: `src/main/resources/application.properties`
   - Add database configuration, JWT settings
   - Note: Don't commit passwords to GitHub! Use environment variables in production

**What You'll See:**
- Folder structure automatically created
- pom.xml with all dependencies
- Main application class (ExpenseTrackerApplication.java)
- Empty resources folder

**First Run Test:**
- Right-click on main application class → Run
- Should start successfully (may fail if DB config not set yet)
- Check console for "Started ExpenseTrackerApplication in X seconds"

**Deliverables:**
✅ Spring Boot project created
✅ All dependencies downloaded
✅ Project opens in IDE
✅ Application.properties configured
✅ Can run application (even if errors for now)

---

#### **Step 0.4: Frontend Project Initialization (45 minutes)**

**What To Do:**

1. **Create React Project with Vite:**
   - Open terminal in your project root
   - Run: `npm create vite@latest frontend -- --template react`
   - This creates a new React project in `frontend/` folder

2. **Install Core Dependencies:**
   - Navigate to frontend: `cd frontend`
   - Install base packages: `npm install`
   - Install React Router: `npm install react-router-dom`
   - Install Axios: `npm install axios`
   - Install Recharts: `npm install recharts`
   - Install React Hook Form: `npm install react-hook-form`
   - Install date-fns: `npm install date-fns`
   - Install Lucide React: `npm install lucide-react`

3. **Install Tailwind CSS:**
   - Install Tailwind: `npm install -D tailwindcss postcss autoprefixer`
   - Initialize Tailwind: `npx tailwindcss init -p`
   - This creates `tailwind.config.js` and `postcss.config.js`

4. **Configure Tailwind:**
   - Open `tailwind.config.js`
   - Update content array to include your source files
   - Add custom theme colors if desired

5. **Update CSS:**
   - Open `src/index.css`
   - Replace content with Tailwind directives
   - Remove default styles

6. **Create Environment File:**
   - Create `.env` file in frontend root
   - Add: `VITE_API_BASE_URL=http://localhost:8080/api`
   - This URL points to your backend

7. **Test Run:**
   - Run: `npm run dev`
   - Should start dev server at http://localhost:5173
   - Open browser, should see default Vite + React page

**Project Structure Created:**
```
frontend/
├── node_modules/        (dependencies)
├── public/              (static files)
├── src/
│   ├── assets/          (images, etc.)
│   ├── App.jsx          (main component)
│   ├── App.css
│   ├── index.css        (global styles)
│   └── main.jsx         (entry point)
├── .env                 (environment variables)
├── index.html
├── package.json         (dependencies list)
├── vite.config.js       (Vite configuration)
└── tailwind.config.js   (Tailwind configuration)
```

**Deliverables:**
✅ React + Vite project created
✅ All dependencies installed
✅ Tailwind CSS configured
✅ Environment variables set
✅ Development server runs successfully

---

#### **Step 0.5: Project Structure Setup (30 minutes)**

**What To Do:**

**Backend Structure:**
1. Create packages in `src/main/java/com/yourname/expensetracker/`:
   - config/ - Configuration classes
   - controller/ - REST controllers
   - dto/ - Data Transfer Objects
   - entity/ - JPA entities
   - repository/ - Database repositories
   - service/ - Business logic
   - security/ - Security related classes
   - exception/ - Custom exceptions and handlers

**Frontend Structure:**
1. Create folders in `src/`:
   - components/ - Reusable components
     - common/ - Buttons, inputs, etc.
     - auth/ - Login, register components
     - dashboard/ - Dashboard-specific components
     - expenses/ - Expense-related components
     - budgets/ - Budget-related components
   - pages/ - Full page components
   - services/ - API service files
   - context/ - React contexts
   - utils/ - Utility functions

2. Clean up default Vite files:
   - Delete App.css
   - Clean up App.jsx to just basic component
   - Remove default counter example

**Create Basic Files:**

Backend - Create empty classes (we'll fill them later):
- ExpenseTrackerApplication.java (already exists)

Frontend - Create empty files:
- services/api.js - Axios configuration
- context/AuthContext.jsx - Authentication context
- pages/Login.jsx
- pages/Register.jsx
- pages/Dashboard.jsx
- pages/Expenses.jsx
- pages/Budgets.jsx

**Deliverables:**
✅ Backend packages created
✅ Frontend folders created
✅ Placeholder files created
✅ Clean project structure

---

### **Phase 1: Backend Foundation (4-5 hours)**

#### **Step 1.1: Create Entity Models (1 hour)**

**What To Do:**

**Understand Entities:**
- Entities are Java classes that map to database tables
- Each entity becomes a table
- Each field becomes a column
- Annotations configure mapping

**Create User Entity:**
- Location: `entity/User.java`
- Fields: id, email, password, name, createdAt
- Annotations: @Entity, @Table, @Id, @Column, @OneToMany
- Relationships: One user has many expenses and budgets

**Create Category Entity:**
- Location: `entity/Category.java`
- Fields: id, name, color, icon, user
- Nullable user (null for default categories)
- Relationship: Many expenses belong to one category

**Create Expense Entity:**
- Location: `entity/Expense.java`
- Fields: id, amount, category, date, description, paymentMethod, user, timestamps
- Relationships: Belongs to one user, belongs to one category
- Lifecycle hooks: @PrePersist, @PreUpdate for timestamps

**Create Budget Entity:**
- Location: `entity/Budget.java`
- Fields: id, user, category, monthlyLimit, month
- Relationships: Belongs to one user, references one category

**Create PaymentMethod Enum:**
- Location: `entity/PaymentMethod.java`
- Values: CASH, CARD, UPI, NET_BANKING, OTHER

**Key Annotations Used:**
- `@Entity` - Marks class as JPA entity
- `@Table(name = "users")` - Specifies table name
- `@Id` - Marks primary key
- `@GeneratedValue(strategy = GenerationType.IDENTITY)` - Auto-increment
- `@Column(nullable = false)` - NOT NULL constraint
- `@Column(unique = true)` - UNIQUE constraint
- `@ManyToOne` - Many-to-one relationship
- `@OneToMany` - One-to-many relationship
- `@JoinColumn` - Foreign key column
- `@Enumerated(EnumType.STRING)` - Store enum as string in DB

**Test Entities:**
- Run application
- Check console logs
- Hibernate should create tables automatically
- Verify in database: tables should exist with correct columns

**Common Issues:**
- Missing @Entity annotation → No table created
- Wrong column names → Check @Column(name = "...")
- Relationship errors → Check @JoinColumn and mappedBy
- Table not created → Check spring.jpa.hibernate.ddl-auto setting

**Deliverables:**
✅ User entity created
✅ Category entity created
✅ Expense entity created
✅ Budget entity created
✅ PaymentMethod enum created
✅ Tables created in database
✅ Relationships configured

---

#### **Step 1.2: Create Repository Layer (30 minutes)**

**What To Do:**

**Understand Repositories:**
- Interfaces that extend JpaRepository
- Spring generates implementation automatically
- Provides CRUD methods out of the box
- Can add custom query methods

**Create UserRepository:**
- Location: `repository/UserRepository.java`
- Extends: `JpaRepository<User, Long>`
- Custom methods:
  - findByEmail(String email) - For login
  - existsByEmail(String email) - Check duplicate

**Create CategoryRepository:**
- Location: `repository/CategoryRepository.java`
- Extends: `JpaRepository<Category, Long>`
- Custom method: findByUserIdOrUserIdIsNull(Long userId)
- This gets both default categories and user's custom ones

**Create ExpenseRepository:**
- Location: `repository/ExpenseRepository.java`
- Extends: `JpaRepository<Expense, Long>`
- Custom query methods:
  - findByUserId(...) - Get user's expenses
  - findByUserIdAndCategoryId(...) - Filter by category
  - findByUserIdAndDateBetween(...) - Date range filter
- Custom @Query methods:
  - getTotalByUserAndDateRange(...) - SUM query
  - getCategoryWiseTotals(...) - GROUP BY query

**Create BudgetRepository:**
- Location: `repository/BudgetRepository.java`
- Extends: `JpaRepository<Budget, Long>`
- Custom methods:
  - findByUserIdAndMonth(...) - Get month's budgets
  - findByUserIdAndCategoryIdAndMonth(...) - Specific budget

**How Spring Generates Queries:**
- Method name: findByUserId
- Spring generates: SELECT * FROM expense WHERE user_id = ?
- Method name: findByUserIdAndCategoryId
- Spring generates: SELECT * FROM expense WHERE user_id = ? AND category_id = ?

**For Complex Queries:**
Use @Query annotation with JPQL (Java Persistence Query Language)

**Deliverables:**
✅ UserRepository created
✅ CategoryRepository created
✅ ExpenseRepository created with custom queries
✅ BudgetRepository created
✅ All query methods defined

---

#### **Step 1.3: Create DTOs (45 minutes)**

**What To Do:**

**Understand DTOs:**
- Data Transfer Objects for API layer
- Separate from entities (don't expose database structure)
- Include validation annotations
- Clean API contracts

**Why DTOs?**
- Security: Don't send password hash to frontend
- Flexibility: API can differ from database structure
- Validation: Add input validation rules
- Documentation: Clear API contracts

**Create Auth DTOs:**

**RegisterRequest:**
- Fields: name, email, password
- Validations: @NotBlank, @Email, @Size(min=6)

**LoginRequest:**
- Fields: email, password
- Validations: @NotBlank

**AuthResponse:**
- Fields: token, type, id, name, email
- No password field!

**Create Expense DTOs:**

**ExpenseRequest:**
- Fields: amount, categoryId, date, description, paymentMethod
- Validations: @NotNull, @Positive, @Size(max=500)

**ExpenseResponse:**
- Fields: id, amount, category (CategoryResponse), date, description, paymentMethod, createdAt
- Nested CategoryResponse object

**CategoryResponse:**
- Fields: id, name, color, icon

**Create Dashboard DTOs:**

**DashboardStatsResponse:**
- Fields: totalThisMonth, totalToday, transactionCount, averageDaily
- Lists: categoryBreakdown, dailyTrend

**CategorySpending:**
- Fields: categoryName, categoryColor, amount, percentage

**DailySpending:**
- Fields: date, amount

**Create Budget DTOs:**

**BudgetRequest:**
- Fields: categoryId, monthlyLimit, month
- Validations: @NotNull, @Positive, @Pattern for month format

**BudgetResponse:**
- Fields: id, category, monthlyLimit, spent, remaining, percentageUsed, month

**Validation Annotations:**
- @NotNull - Cannot be null
- @NotBlank - Not null, not empty, not whitespace
- @Email - Valid email format
- @Size(min, max) - String length constraints
- @Positive - Number must be > 0
- @Pattern(regexp) - Matches regex pattern

**Deliverables:**
✅ Auth DTOs created with validation
✅ Expense DTOs created
✅ Dashboard DTOs created
✅ Budget DTOs created
✅ Clear input/output contracts defined

---

#### **Step 1.4: Implement JWT Security (1.5 hours)**

**What To Do:**

**Understand JWT Flow:**
1. User logs in → Server validates credentials
2. Server generates JWT with user info
3. Server signs JWT with secret key
4. Server returns JWT to client
5. Client stores JWT in localStorage
6. Client sends JWT with each request in Authorization header
7. Server validates JWT on each request
8. If valid → Process request
9. If invalid → Return 401 Unauthorized

**Create JwtTokenProvider:**
- Location: `security/JwtTokenProvider.java`
- Responsibilities:
  - Generate JWT token
  - Extract username from token
  - Validate token (check signature and expiration)
- Uses: io.jsonwebtoken (JJWT library)
- Secret key: from application.properties
- Expiration: 24 hours (configurable)

**Create CustomUserDetailsService:**
- Location: `security/CustomUserDetailsService.java`
- Implements: UserDetailsService interface
- Purpose: Load user from database for Spring Security
- Method: loadUserByUsername(email)
- Returns: Spring Security User object

**Create JwtAuthenticationFilter:**
- Location: `security/JwtAuthenticationFilter.java`
- Extends: OncePerRequestFilter
- Purpose: Intercept every request, validate JWT
- Process:
  1. Extract JWT from Authorization header
  2. Validate token
  3. Extract username
  4. Load user details
  5. Create authentication object
  6. Set in SecurityContext

**Create SecurityConfig:**
- Location: `config/SecurityConfig.java`
- Purpose: Configure Spring Security
- Configuration:
  - Disable CSRF (we're using JWT, not cookies)
  - Configure CORS
  - Set public endpoints (/api/auth/**)
  - All other endpoints require authentication
  - Add JWT filter
  - Configure password encoder (BCrypt)
  - Stateless session management

**Create CorsConfig:**
- Location: `config/CorsConfig.java`
- Purpose: Allow frontend to call backend API
- Configuration:
  - Allowed origins: http://localhost:5173 (frontend dev server)
  - Allowed methods: GET, POST, PUT, DELETE, OPTIONS
  - Allowed headers: All
  - Allow credentials: true (for Authorization header)

**Add JWT Secret to application.properties:**
- jwt.secret=your-256-bit-secret-key-here-make-it-very-long-and-random
- jwt.expiration=86400000 (24 hours in milliseconds)
- Keep secret key safe! Don't commit to GitHub in production

**Dependencies Needed:**
Add to pom.xml if not present:
- JJWT (io.jsonwebtoken) for JWT creation and validation

**Deliverables:**
✅ JWT token generation working
✅ JWT validation working
✅ Spring Security configured
✅ CORS configured
✅ Password encryption (BCrypt)
✅ Authentication filter working

---

#### **Step 1.5: Create Authentication Service (45 minutes)**

**What To Do:**

**Create AuthService:**
- Location: `service/AuthService.java`
- Mark with: @Service annotation

**Implement Registration:**
- Check if email already exists
- If exists → throw exception
- Create new User object
- Hash password with BCrypt
- Save to database using UserRepository
- Generate JWT token
- Return AuthResponse with token and user info

**Implement Login:**
- Use AuthenticationManager to validate credentials
- Spring Security + BCrypt handles password comparison
- If invalid → throws BadCredentialsException
- If valid → Get user from database
- Generate JWT token
- Return AuthResponse with token and user info

**Password Hashing:**
- Never store plain text passwords
- Use BCrypt (already configured in SecurityConfig)
- PasswordEncoder.encode(plainPassword) → hashed password
- Hashing is one-way (cannot decrypt)
- Same password produces different hash each time (salt)

**Error Handling:**
- Email exists → "Email already in use"
- Invalid credentials → "Invalid email or password"
- Don't reveal which one is wrong (security)

**Deliverables:**
✅ AuthService created
✅ Registration logic implemented
✅ Login logic implemented
✅ Password hashing working
✅ JWT generation integrated

---

### **Phase 2: Backend APIs (4-5 hours)**

#### **Step 2.1: Create Authentication Controllers (30 minutes)**

**What To Do:**

**Create AuthController:**
- Location: `controller/AuthController.java`
- Annotations: @RestController, @RequestMapping("/api/auth")

**Create Register Endpoint:**
- Path: POST /api/auth/register
- Request body: RegisterRequest DTO (use @Valid for validation)
- Call AuthService.register()
- Return AuthResponse
- Status: 201 Created on success
- Handle exceptions and return proper error responses

**Create Login Endpoint:**
- Path: POST /api/auth/login
- Request body: LoginRequest DTO (use @Valid)
- Call AuthService.login()
- Return AuthResponse
- Status: 200 OK on success

**Create Get Current User Endpoint:**
- Path: GET /api/auth/me
- Requires authentication
- Get email from Authentication object (Spring Security)
- Return user details
- Status: 200 OK

**Test with Postman:**
1. Register new user
   - Method: POST
   - URL: http://localhost:8080/api/auth/register
   - Body (JSON): {"name": "Test User", "email": "test@example.com", "password": "password123"}
   - Should return: token, user id, name, email

2. Login with same user
   - Method: POST
   - URL: http://localhost:8080/api/auth/login
   - Body (JSON): {"email": "test@example.com", "password": "password123"}
   - Should return: same structure

3. Test validation
   - Try registering with invalid email
   - Try registering with short password
   - Should get validation errors

**Deliverables:**
✅ AuthController created
✅ Register endpoint working
✅ Login endpoint working
✅ Get current user endpoint working
✅ Validation working
✅ Tested with Postman

---

#### **Step 2.2: Create Category Service and Controller (45 minutes)**

**What To Do:**

**Create Default Categories:**
- Create DataLoader component (runs on application startup)
- Location: `config/DataLoader.java`
- Implements ApplicationRunner
- Check if categories table is empty
- If empty, insert default categories:
  - Food & Dining (#FF6384, utensils)
  - Transportation (#36A2EB, car)
  - Shopping (#FFCE56, shopping-bag)
  - Entertainment (#4BC0C0, film)
  - Bills & Utilities (#9966FF, file-text)
  - Health & Fitness (#FF9F40, heart)
  - Education (#E377C2, book)
  - Other (#C9CBCF, more-horizontal)

**Create CategoryService:**
- Location: `service/CategoryService.java`
- Method: getAllCategories(userId)
  - Get default categories (user_id = null)
  - Get user's custom categories (user_id = userId)
  - Combine and return as CategoryResponse list

- Method: createCustomCategory(userId, request)
  - Create new category with user_id
  - Save to database
  - Return CategoryResponse

**Create CategoryController:**
- Location: `controller/CategoryController.java`
- Path: /api/categories

**GET /api/categories:**
- Requires authentication
- Get userId from Authentication
- Call CategoryService.getAllCategories(userId)
- Return list of CategoryResponse

**POST /api/categories:**
- Requires authentication
- Request body: CategoryRequest (name, color, icon)
- Get userId from Authentication
- Call CategoryService.createCustomCategory(userId, request)
- Return created category
- Status: 201 Created

**Test with Postman:**
1. Get categories (should include 8 default categories)
2. Create custom category
3. Get categories again (should include custom one)

**Deliverables:**
✅ Default categories loaded on startup
✅ CategoryService created
✅ Get categories endpoint working
✅ Create custom category endpoint working
✅ Tested with Postman

---

#### **Step 2.3: Create Expense Service - CRUD Operations (1.5 hours)**

**What To Do:**

**Create ExpenseService:**
- Location: `service/ExpenseService.java`

**Implement CREATE:**
- Method: createExpense(userId, request)
- Validate user exists
- Validate category exists
- Create new Expense object
- Set all fields from request
- Set user and timestamps
- Save using ExpenseRepository
- Convert to ExpenseResponse and return

**Implement READ - List with Filters:**
- Method: getExpenses(userId, categoryId, startDate, endDate, pageable)
- Use Spring Data JPA Specification for dynamic filtering
- Always filter by userId (security!)
- Add categoryId filter if provided
- Add date range filter if provided
- Apply pagination and sorting
- Return Page<ExpenseResponse>

**Implement READ - Single:**
- Method: getExpenseById(userId, expenseId)
- Find expense by ID
- Check if expense belongs to user (authorization!)
- If not → throw UnauthorizedException
- Return ExpenseResponse

**Implement UPDATE:**
- Method: updateExpense(userId, expenseId, request)
- Find existing expense
- Verify ownership (expense.user.id == userId)
- Update all fields from request
- Save updated expense
- Return ExpenseResponse

**Implement DELETE:**
- Method: deleteExpense(userId, expenseId)
- Find expense
- Verify ownership
- Delete using repository
- No return value (void)

**Mapping Helper:**
- Private method: mapToResponse(Expense expense)
- Converts Expense entity to ExpenseResponse DTO
- Maps nested Category to CategoryResponse

**Authorization is Critical:**
- Always verify user owns the expense before update/delete
- Prevents user A from modifying user B's expenses
- Check: expense.getUser().getId().equals(userId)

**Deliverables:**
✅ Create expense implemented
✅ Get expenses with filtering implemented
✅ Get single expense implemented
✅ Update expense implemented
✅ Delete expense implemented
✅ Authorization checks in place
✅ Mapping between entities and DTOs working

---

#### **Step 2.4: Create Expense Controller (45 minutes)**

**What To Do:**

**Create ExpenseController:**
- Location: `controller/ExpenseController.java`
- Path: /api/expenses
- All endpoints require authentication

**POST /api/expenses (Create):**
- Request body: ExpenseRequest (validated)
- Get userId from Authentication
- Call ExpenseService.createExpense()
- Return ExpenseResponse
- Status: 201 Created

**GET /api/expenses (List with filters):**
- Query parameters:
  - categoryId (optional)
  - startDate (optional, format: YYYY-MM-DD)
  - endDate (optional)
  - page (default: 0)
  - size (default: 10)
  - sort (default: "date,desc")
- Parse query parameters
- Create Pageable object with pagination and sorting
- Get userId from Authentication
- Call ExpenseService.getExpenses()
- Return Page<ExpenseResponse>

**GET /api/expenses/{id} (Get single):**
- Path variable: id
- Get userId from Authentication
- Call ExpenseService.getExpenseById()
- Return ExpenseResponse
- Status: 200 OK
- Errors: 404 if not found, 403 if not authorized

**PUT /api/expenses/{id} (Update):**
- Path variable: id
- Request body: ExpenseRequest (validated)
- Get userId from Authentication
- Call ExpenseService.updateExpense()
- Return updated ExpenseResponse
- Status: 200 OK

**DELETE /api/expenses/{id} (Delete):**
- Path variable: id
- Get userId from Authentication
- Call ExpenseService.deleteExpense()
- No response body
- Status: 204 No Content

**Helper Method:**
- getUserIdFromAuth(Authentication auth)
- Extracts user ID from authenticated user
- Used in all endpoints

**Test All Endpoints with Postman:**

1. **Create expense:**
   - Add Authorization header: Bearer <your-jwt-token>
   - Body: {"amount": 500, "categoryId": 1, "date": "2026-01-31", "description": "Lunch", "paymentMethod": "CARD"}

2. **Get all expenses:**
   - With filters: ?categoryId=1&startDate=2026-01-01&endDate=2026-01-31
   - With pagination: ?page=0&size=20
   - With sorting: ?sort=amount,desc

3. **Get single expense:**
   - /api/expenses/1

4. **Update expense:**
   - PUT /api/expenses/1
   - Body: updated data

5. **Delete expense:**
   - DELETE /api/expenses/1

**Deliverables:**
✅ All CRUD endpoints created
✅ Pagination working
✅ Filtering working
✅ Sorting working
✅ Authorization on all endpoints
✅ Tested with Postman

---

#### **Step 2.5: Create Dashboard Analytics Service (1 hour)**

**What To Do:**

**Create DashboardService:**
- Location: `service/DashboardService.java`

**Understand Requirements:**
We need to calculate:
- Total spent this month
- Total spent today
- Number of transactions this month
- Average daily spending
- Category-wise breakdown with percentages
- Daily spending trend

**Implement getDashboardStats(userId, month):**

**Parse Month Parameter:**
- Format: "2026-01" (YYYY-MM)
- Calculate startOfMonth: First day of month
- Calculate endOfMonth: Last day of month

**Calculate Total This Month:**
- Query: SUM of all expenses in date range
- Use repository method: getTotalByUserAndDateRange()
- If null (no expenses), return 0

**Calculate Total Today:**
- Same query but date range is just today
- today = LocalDate.now()

**Get Transaction Count:**
- Query: COUNT of expenses in month
- Use repository: findByUserIdAndDateBetween().size()

**Calculate Average Daily:**
- Total for month / days in month
- Handle division by zero
- Round to 2 decimal places

**Get Category Breakdown:**
- Query: GROUP BY category, SUM amount
- Use repository: getCategoryWiseTotals()
- Returns List of [categoryName, amount]
- Calculate percentage: (categoryAmount / totalAmount) * 100
- Build CategorySpending objects

**Get Daily Trend:**
- Query expenses for month
- Group by date in Java (or use SQL GROUP BY)
- Build map of date → total amount for that day
- Convert to List<DailySpending>
- Sort by date

**Build Response:**
- Create DashboardStatsResponse
- Set all calculated fields
- Return to controller

**Edge Cases to Handle:**
- No expenses in month → Return all zeros
- Division by zero → Handle gracefully
- Null results from database → Use default values

**Deliverables:**
✅ Dashboard service created
✅ All statistics calculated correctly
✅ Category breakdown with percentages
✅ Daily trend data
✅ Edge cases handled

---

#### **Step 2.6: Create Dashboard Controller (20 minutes)**

**What To Do:**

**Create DashboardController:**
- Location: `controller/DashboardController.java`
- Path: /api/dashboard

**GET /api/dashboard/stats:**
- Query parameter: month (optional, default: current month)
- Requires authentication
- Get userId from Authentication
- Call DashboardService.getDashboardStats()
- Return DashboardStatsResponse
- Status: 200 OK

**Test with Postman:**
1. Create some expenses first (multiple categories, different dates)
2. Call /api/dashboard/stats
3. Verify all calculations are correct
4. Test with different months
5. Test with no data (should handle gracefully)

**Deliverables:**
✅ Dashboard endpoint created
✅ Returns all statistics
✅ Calculations verified
✅ Tested with various scenarios

---

#### **Step 2.7: Create Budget Service and Controller (1 hour)**

**What To Do:**

**Create BudgetService:**
- Location: `service/BudgetService.java`

**Implement createBudget(userId, request):**
- Validate user exists
- Validate category exists
- Check if budget already exists for this user/category/month
- If exists → throw exception "Budget already exists"
- Create new Budget object
- Save to database
- Calculate spent amount for this month/category
- Build and return BudgetResponse

**Implement getBudgets(userId, month):**
- Find all budgets for user and month
- For each budget:
  - Calculate spent amount (SUM of expenses in category for month)
  - Calculate remaining (limit - spent)
  - Calculate percentage used (spent / limit * 100)
- Map to BudgetResponse objects
- Return list

**Implement updateBudget(userId, budgetId, request):**
- Find existing budget
- Verify ownership
- Update monthly limit
- Recalculate spent, remaining, percentage
- Save and return updated BudgetResponse

**Implement deleteBudget(userId, budgetId):**
- Find budget
- Verify ownership
- Delete from database

**Helper: mapToResponse(budget, userId):**
- Convert Budget entity to BudgetResponse
- Fetch and calculate spent amount
- Calculate remaining and percentage
- Return BudgetResponse

**Create BudgetController:**
- Location: `controller/BudgetController.java`
- Path: /api/budgets

**POST /api/budgets:**
- Create new budget
- Status: 201 Created

**GET /api/budgets:**
- Query param: month (default: current month)
- Get all budgets for month
- Status: 200 OK

**PUT /api/budgets/{id}:**
- Update budget limit
- Status: 200 OK

**DELETE /api/budgets/{id}:**
- Delete budget
- Status: 204 No Content

**Test with Postman:**
1. Create budget for Food category: ₹5000
2. Create some expenses in Food category: ₹3000 total
3. Get budgets → should show 60% used
4. Update budget limit to ₹4000
5. Get budgets → should show 75% used
6. Delete budget

**Deliverables:**
✅ Budget service created
✅ All CRUD operations implemented
✅ Spent amount calculation working
✅ Percentage calculation accurate
✅ Budget controller created
✅ All endpoints tested

---

**END OF DAY 1 - Backend Complete!**

**What We've Built:**
✅ Complete backend with Spring Boot
✅ Authentication with JWT
✅ User registration and login
✅ Expense CRUD with filtering
✅ Dashboard analytics
✅ Budget tracking
✅ Category management
✅ Database with relationships
✅ Security and authorization
✅ All APIs tested and working

**Next: Day 2 - Frontend Development**

---

### **DAY 2: Frontend Development (6-8 hours)**

---

### **Phase 3: Frontend Implementation**

#### **Step 3.1: Setup API Service and Auth Context (1 hour)**

**What To Do:**

**Create Axios Instance:**
- File: `src/services/api.js`
- Configure base URL from environment variable
- Create axios instance
- Add request interceptor:
  - Automatically add JWT token to Authorization header
  - Read token from localStorage
  - Format: "Bearer <token>"
- Add response interceptor:
  - Handle 401 errors globally
  - If 401 → Remove token, redirect to login
  - Otherwise, pass through error

**Create AuthContext:**
- File: `src/context/AuthContext.jsx`
- Create React context for auth state
- State: user object, loading state
- Functions: login, register, logout
- On mount: Check localStorage for token and user
- If found → Set user state
- Export AuthProvider and useAuth hook

**Implement Login Function:**
- Call API: POST /api/auth/login
- On success:
  - Extract token and user data
  - Store token in localStorage
  - Store user in localStorage (JSON)
  - Update context state
- On error:
  - Throw error for component to handle

**Implement Register Function:**
- Similar to login
- Call POST /api/auth/register

**Implement Logout Function:**
- Remove token from localStorage
- Remove user from localStorage
- Clear context state
- Redirect to login page

**Update App.jsx:**
- Wrap entire app with AuthProvider
- Now all components can access auth state

**Deliverables:**
✅ Axios instance configured
✅ Request/response interceptors working
✅ AuthContext created
✅ Login/register/logout functions implemented
✅ Token management working

---

#### **Step 3.2: Create Authentication Pages (1.5 hours)**

**What To Do:**

**Create Login Page:**
- File: `src/pages/Login.jsx`
- Use React Hook Form for form handling
- Form fields: email, password
- Validation rules:
  - Email: Required, valid format
  - Password: Required
- On submit:
  - Call useAuth().login()
  - If success → Navigate to /dashboard
  - If error → Show error message
- Show loading state on button during API call
- Link to register page
- Style with Tailwind CSS:
  - Centered card layout
  - Blue gradient background
  - Clean white form card
  - Professional button styling

**Create Register Page:**
- File: `src/pages/Register.jsx`
- Similar structure to login
- Additional field: name
- Validation:
  - Name: Required
  - Email: Required, valid format
  - Password: Required, min 6 characters
- On submit:
  - Call useAuth().register()
  - Navigate to /dashboard
- Link to login page
- Consistent styling with login page

**Common Components:**
- Input fields with error messages
- Submit button with loading state
- Error alert banner (if API fails)
- Logo/app name at top

**Design Considerations:**
- Mobile responsive (Tailwind's mobile-first approach)
- Clear error messages below each field
- Visual feedback on button click
- Disabled state during submission
- Professional color scheme (blues, whites, grays)

**Test Authentication Flow:**
1. Try to register with invalid data → See validation errors
2. Register with valid data → Navigate to dashboard
3. Logout
4. Try to login with wrong password → See error
5. Login with correct credentials → Navigate to dashboard
6. Check localStorage → Should have token and user

**Deliverables:**
✅ Login page created with validation
✅ Register page created with validation
✅ Form validation working
✅ Error handling working
✅ Navigation working
✅ Responsive design
✅ Professional UI

---

#### **Step 3.3: Create Protected Routes and Navigation (45 minutes)**

**What To Do:**

**Create ProtectedRoute Component:**
- File: `src/components/ProtectedRoute.jsx`
- Check if user is authenticated (useAuth hook)
- If loading → Show loading spinner
- If not authenticated → Redirect to /login
- If authenticated → Render children (protected page)

**Create Navbar Component:**
- File: `src/components/Navbar.jsx`
- Display app logo and name
- Navigation links:
  - Dashboard
  - Expenses
  - Budgets
- Show user name
- Logout button
- Use React Router Link for navigation
- Style with Tailwind:
  - Fixed top navigation bar
  - White background with shadow
  - Blue active link indicators
  - Responsive hamburger menu for mobile (optional for MVP)

**Setup React Router:**
- File: `src/App.jsx`
- Import BrowserRouter, Routes, Route
- Define routes:
  - /login (public)
  - /register (public)
  - / → Protected → Redirect to /dashboard
  - /dashboard → Protected
  - /expenses → Protected
  - /budgets → Protected
- Wrap protected routes with ProtectedRoute component
- Show Navbar only for protected routes

**Layout Structure:**
- Public pages: Full screen, no navbar
- Protected pages: Navbar + page content

**Test Navigation:**
1. Not logged in → Try to access /dashboard → Redirected to /login
2. Login → Should go to /dashboard
3. Click Expenses link → Should navigate
4. Click Budgets link → Should navigate
5. Click Logout → Should clear auth and go to login

**Deliverables:**
✅ ProtectedRoute component working
✅ Navbar component created
✅ All routes configured
✅ Navigation working
✅ Logout working
✅ Route protection working

---

#### **Step 3.4: Create Dashboard with Charts (2 hours)**

**What To Do:**

**Create Dashboard Service:**
- File: `src/services/dashboardService.js`
- Function: getDashboardStats(month)
- Calls API: GET /api/dashboard/stats?month=YYYY-MM
- Returns: dashboard statistics

**Create StatCard Component:**
- File: `src/components/dashboard/StatCard.jsx`
- Props: title, value, icon, bgColor
- Display metric card with icon
- Clean card design with Tailwind
- Used multiple times on dashboard

**Create Dashboard Page:**
- File: `src/pages/Dashboard.jsx`
- State:
  - stats (dashboard data)
  - loading
  - selectedMonth
- On mount: Fetch dashboard stats
- On month change: Refetch stats

**Layout Structure:**
1. **Header Section:**
   - Page title: "Dashboard"
   - Month selector (input type="month")

2. **Stats Cards Row:**
   - 4 cards in a grid
   - Total This Month (blue)
   - Total Today (green)
   - Transactions (purple)
   - Daily Average (orange)

3. **Charts Section:**
   - Two columns on desktop, stacked on mobile
   - Left: Pie Chart (Category Breakdown)
   - Right: Line Chart (Daily Trend)

**Implement Pie Chart:**
- Import Recharts components: PieChart, Pie, Cell, Tooltip, Legend
- Data: stats.categoryBreakdown
- Map each category to different color
- Show labels with category name and amount
- Responsive container

**Implement Line Chart:**
- Import: LineChart, Line, XAxis, YAxis, Tooltip
- Data: stats.dailyTrend
- X-axis: Dates (formatted with date-fns)
- Y-axis: Amount
- Blue line with dots at each point
- Responsive container

**Format Data:**
- Use date-fns to format dates nicely
- Format currency with toFixed(2)
- Format numbers with commas (for large amounts)

**Loading State:**
- While fetching: Show skeleton loaders or spinner
- After loading: Show actual data
- On error: Show error message

**Mobile Responsive:**
- Stats cards: 1 column on mobile, 2 on tablet, 4 on desktop
- Charts: Stack vertically on mobile
- Readable text sizes
- Touch-friendly interactions

**Deliverables:**
✅ Dashboard page created
✅ Stats cards displaying correctly
✅ Pie chart showing category breakdown
✅ Line chart showing daily trend
✅ Month selector working
✅ Data formatting clean
✅ Loading states implemented
✅ Mobile responsive
✅ Professional design

---

#### **Step 3.5: Create Expense Management Page (2 hours)**

**What To Do:**

**Create Expense Service:**
- File: `src/services/expenseService.js`
- Functions:
  - getExpenses(params) - Get list with filters
  - createExpense(data)
  - updateExpense(id, data)
  - deleteExpense(id)
  - getCategories() - Get all categories

**Create ExpenseForm Component:**
- File: `src/components/expenses/ExpenseForm.jsx`
- Modal overlay (fixed position, centered)
- Props: expense (for edit), categories, onSubmit, onCancel
- Form fields:
  - Amount (number input)
  - Category (dropdown)
  - Date (date input, default: today)
  - Payment Method (dropdown: CARD, CASH, UPI, NET_BANKING, OTHER)
  - Description (textarea, optional)
- Use React Hook Form
- Validation:
  - Amount: Required, positive
  - Category: Required
  - Date: Required
  - Payment method: Required
- Pre-fill form if editing existing expense
- Buttons: Save, Cancel
- Close on cancel or after successful submit

**Create Expenses Page:**
- File: `src/pages/Expenses.jsx`
- State:
  - expenses (list)
  - categories (for dropdown)
  - showForm (boolean)
  - editingExpense (expense being edited or null)
  - filters (categoryId, startDate, endDate)
  - loading

**Page Header:**
- Title: "Expenses"
- "Add Expense" button (opens modal)

**Filter Section:**
- Card with filter controls
- Category dropdown (All Categories + list)
- Start Date input
- End Date input
- Filters auto-apply on change

**Expense Table:**
- Responsive table
- Columns: Date, Description, Category, Payment, Amount, Actions
- Each row shows one expense
- Category shown as colored badge
- Actions: Edit button (pencil icon), Delete button (trash icon)

**Table Features:**
- Sort by clicking column headers (implement on frontend)
- Pagination controls (if implementing backend pagination)
- Empty state: "No expenses found. Add your first expense!"

**Actions:**
- Click Add Expense → Open modal (empty form)
- Click Edit → Open modal (pre-filled form)
- Click Delete → Confirm → Delete expense → Refresh list
- Submit form → Create/update → Close modal → Refresh list

**Filter Logic:**
- On filter change → Refetch expenses with new params
- Build query string: ?categoryId=1&startDate=2026-01-01&endDate=2026-01-31

**Mobile Responsive:**
- Table converts to cards on mobile
- Each expense is a card showing all details
- Stacked layout
- Touch-friendly action buttons

**Deliverables:**
✅ Expense service created
✅ ExpenseForm component (add/edit)
✅ Expenses page with table
✅ Filters working
✅ Add expense working
✅ Edit expense working
✅ Delete expense working
✅ Mobile responsive
✅ Clean UI with icons

---

#### **Step 3.6: Create Budget Management Page (1.5 hours)**

**What To Do:**

**Create Budget Service:**
- File: `src/services/budgetService.js`
- Functions:
  - getBudgets(month)
  - createBudget(data)
  - updateBudget(id, data)
  - deleteBudget(id)

**Create BudgetCard Component:**
- File: `src/components/budgets/BudgetCard.jsx`
- Props: budget object
- Display:
  - Category name
  - Limit amount
  - Spent amount
  - Percentage used
  - Remaining amount
  - Progress bar (visual)
  - Delete button
- Progress bar color:
  - Green: < 80%
  - Yellow: 80-99%
  - Red: >= 100%
- Warning icon if approaching or over limit

**Create BudgetFormModal Component:**
- Similar to ExpenseForm
- Fields:
  - Category (dropdown)
  - Monthly Limit (number input)
- Month comes from page state (not form field)
- Validation:
  - Category: Required
  - Limit: Required, positive

**Create Budgets Page:**
- File: `src/pages/Budgets.jsx`
- State:
  - budgets (list)
  - categories
  - showForm
  - selectedMonth (default: current month)
  - loading

**Page Header:**
- Title: "Budgets"
- Subtitle: "Set and track your spending limits"
- "Add Budget" button

**Month Selector:**
- Input type="month"
- Default: current month (format: YYYY-MM)
- On change: Fetch budgets for new month

**Budget Cards Grid:**
- Grid layout: 1 col mobile, 2 cols tablet, 3 cols desktop
- Each budget displayed as BudgetCard
- Sorted by category name or percentage used

**Empty State:**
- If no budgets: "No budgets set for this month. Add your first budget!"

**Actions:**
- Click Add Budget → Open modal
- Select category and set limit
- Submit → Create budget → Refresh list
- Click delete on card → Confirm → Delete → Refresh

**Visual Indicators:**
- Progress bar fills based on percentage
- Warning icon for 80%+ used
- Red text for exceeded budgets
- Green text for remaining amount (if positive)

**Budget Logic:**
- Can only create one budget per category per month
- If budget exists, show error
- Spent amount calculated by backend
- Percentage calculated by backend

**Deliverables:**
✅ Budget service created
✅ BudgetCard component
✅ BudgetFormModal component
✅ Budgets page created
✅ Add budget working
✅ Delete budget working
✅ Month selector working
✅ Visual progress bars
✅ Warning indicators
✅ Mobile responsive

---

**END OF DAY 2 - Frontend Complete!**

**What We've Built:**
✅ Complete React frontend
✅ Authentication pages (login/register)
✅ Protected routes
✅ Navigation bar
✅ Dashboard with charts
✅ Expense management (CRUD)
✅ Budget tracking
✅ Filters and search
✅ Responsive design
✅ Professional UI
✅ Full integration with backend

**Next: Day 3 - Testing, Polish & Deployment**

---

### **DAY 3: Testing, Polish & Deployment (6-8 hours)**

---

### **Phase 4: Testing & Quality Assurance (3-4 hours)**

#### **Step 4.1: Comprehensive Backend Testing (1.5 hours)**

**What To Do:**

**Test Authentication Endpoints:**

1. **Register - Happy Path:**
   - POST /api/auth/register
   - Body: Valid user data
   - Expected: 201 Created, JWT token returned
   - Verify: User created in database

2. **Register - Duplicate Email:**
   - Try to register with same email again
   - Expected: 400 Bad Request, error message
   - Verify: Second user not created

3. **Register - Validation Errors:**
   - Invalid email format
   - Password too short
   - Missing name
   - Expected: 400 with specific field errors

4. **Login - Valid Credentials:**
   - POST /api/auth/login
   - Correct email and password
   - Expected: 200 OK, JWT token
   - Verify: Can use token for subsequent requests

5. **Login - Invalid Credentials:**
   - Wrong password
   - Non-existent email
   - Expected: 400/401, error message

6. **Get Current User:**
   - GET /api/auth/me
   - With valid JWT
   - Expected: 200, user details
   - Without token: 401 Unauthorized

**Test Expense Endpoints:**

1. **Create Expense:**
   - Valid data, all required fields
   - Expected: 201 Created
   - Verify: Expense in database
   - Check: created_at timestamp set

2. **Create Expense - Validation:**
   - Negative amount → Error
   - Invalid category ID → Error
   - Missing required fields → Errors
   - Future date (if restricted) → Error

3. **Get Expenses - No Filters:**
   - GET /api/expenses
   - Expected: 200, paginated list
   - Verify: Only user's expenses returned

4. **Get Expenses - With Filters:**
   - Filter by category → Only that category
   - Filter by date range → Only expenses in range
   - Multiple filters combined → Correctly filtered

5. **Get Expenses - Pagination:**
   - Create 25 expenses
   - page=0&size=10 → First 10
   - page=1&size=10 → Next 10
   - Verify: totalElements correct

6. **Get Single Expense:**
   - Valid ID, user's expense → 200
   - Valid ID, different user's expense → 403 Forbidden
   - Invalid ID → 404 Not Found

7. **Update Expense:**
   - Valid update → 200
   - Other user's expense → 403
   - Invalid data → 400

8. **Delete Expense:**
   - User's expense → 204 No Content
   - Other user's expense → 403
   - Verify: Deleted from database

**Test Dashboard Endpoint:**

1. **Get Stats - Current Month:**
   - Create expenses in current month
   - GET /api/dashboard/stats
   - Verify calculations:
     - Total matches sum of expenses
     - Transaction count correct
     - Average daily = total / days
     - Category breakdown adds to 100%

2. **Get Stats - Specific Month:**
   - ?month=2026-01
   - Should only include January expenses
   - Verify date filtering

3. **Get Stats - No Data:**
   - Month with no expenses
   - Expected: All zeros, empty arrays

**Test Budget Endpoints:**

1. **Create Budget:**
   - Valid data → 201
   - Verify: Spent calculation correct

2. **Create Budget - Duplicate:**
   - Same category + month → 400 error

3. **Get Budgets:**
   - Verify spent amounts
   - Verify percentage calculations
   - Verify remaining amounts
   - Check: spent = sum of expenses in category

4. **Update Budget:**
   - Change limit → Recalculates percentage
   - Verify calculations still correct

5. **Delete Budget:**
   - 204 No Content
   - Verify: Removed from database

**Test Authorization:**

1. **Try accessing protected endpoints without token:**
   - Expected: 401 Unauthorized

2. **Try accessing with expired token:**
   - Expected: 401 Unauthorized

3. **Try accessing other user's data:**
   - Expected: 403 Forbidden

**Create Test Postman Collection:**
- Organize all tests into folders
- Save example requests and responses
- Add test scripts for automatic validation
- Export collection for documentation

**Deliverables:**
✅ All endpoints tested manually
✅ Edge cases covered
✅ Validation working correctly
✅ Authorization enforced
✅ Error messages appropriate
✅ Postman collection created

---

#### **Step 4.2: Frontend Testing & User Flow Validation (1.5 hours)**

**What To Do:**

**Test Authentication Flow:**

1. **User Registration:**
   - Fill form with valid data → Success
   - Auto-login and redirect to dashboard
   - Token stored in localStorage
   - User data stored in localStorage

2. **Form Validation:**
   - Invalid email → Show error below field
   - Short password → Show error
   - Try submit with errors → Blocked
   - Error messages clear and helpful

3. **User Login:**
   - Correct credentials → Success, navigate to dashboard
   - Wrong password → Error message shown
   - Error message user-friendly

4. **Protected Route:**
   - Logout → Try to access /dashboard → Redirect to login
   - Login → Navigate to /dashboard → Access granted

5. **Token Persistence:**
   - Login → Close browser → Open again
   - Should still be logged in
   - Token and user still in localStorage

6. **Logout:**
   - Click logout → Token removed → User removed → Redirect to login

**Test Dashboard:**

1. **Initial Load:**
   - Stats cards show correct numbers
   - Pie chart renders correctly
   - Line chart renders correctly
   - Data matches what backend returns

2. **Month Selector:**
   - Change month → New API call
   - Stats update correctly
   - Charts refresh with new data

3. **Empty State:**
   - New user with no expenses
   - Should show zeros gracefully
   - No broken charts
   - Helpful message encouraging adding expenses

4. **Loading State:**
   - While fetching data, show loading indicator
   - No flash of empty content

**Test Expense Management:**

1. **View Expenses:**
   - Table displays all expenses
   - Categories shown with colors
   - Dates formatted nicely
   - Amounts formatted with currency

2. **Add Expense:**
   - Click Add Expense → Modal opens
   - Fill form → Submit
   - Modal closes → Expense appears in table
   - Success feedback (flash message or similar)

3. **Form Validation:**
   - Empty amount → Error
   - Negative amount → Error
   - Missing category → Error
   - All errors shown clearly

4. **Edit Expense:**
   - Click Edit → Modal opens with pre-filled data
   - Change amount → Save
   - Updated expense shows in table
   - Correct data sent to API

5. **Delete Expense:**
   - Click Delete → Confirmation prompt
   - Cancel → Nothing happens
   - Confirm → Expense removed from table
   - API called correctly

6. **Filters:**
   - Select category → Table filters
   - Select date range → Table filters
   - Multiple filters → Combined filtering
   - Clear filters → Show all

7. **Empty State:**
   - No expenses → Show helpful message
   - "Add your first expense!" text

**Test Budget Management:**

1. **Add Budget:**
   - Click Add Budget → Modal opens
   - Select category, enter limit → Save
   - Budget card appears

2. **Budget Card Display:**
   - Limit shown
   - Spent amount shown
   - Percentage calculated correctly
   - Progress bar accurate
   - Colors correct (green/yellow/red)

3. **Warning Indicators:**
   - 80% used → Yellow warning
   - 100% used → Red warning
   - Warning icon appears

4. **Delete Budget:**
   - Click delete → Confirm
   - Budget removed

5. **Month Selector:**
   - Change month → Budgets update
   - Spent amounts recalculated for new month

**Test Mobile Responsive:**

1. **Open browser dev tools**
2. **Test at different breakpoints:**
   - 320px (small phone)
   - 768px (tablet)
   - 1024px (desktop)

3. **Verify:**
   - All content readable
   - Buttons touchable (not too small)
   - Tables convert to cards on mobile
   - Navigation accessible
   - Forms usable
   - No horizontal scrolling
   - Images/charts scale properly

**Browser Compatibility:**

1. **Test in multiple browsers:**
   - Chrome
   - Firefox
   - Safari (if on Mac)
   - Edge

2. **Verify:**
   - All features work
   - Styling consistent
   - No JavaScript errors
   - Charts render correctly

**Create Bug List:**
- Document any issues found
- Prioritize: Critical → High → Medium → Low
- Note steps to reproduce
- Keep list for next phase

**Deliverables:**
✅ All user flows tested
✅ Validation working everywhere
✅ Mobile responsiveness verified
✅ Multi-browser tested
✅ Bug list created
✅ User experience smooth

---

#### **Step 4.3: Bug Fixes & Code Cleanup (1 hour)**

**What To Do:**

**Fix Identified Bugs:**

**Common Frontend Issues:**

1. **Date Handling:**
   - Problem: Timezone issues causing wrong dates
   - Solution: Store dates in UTC, display in local time
   - Use date-fns consistently

2. **Decimal Precision:**
   - Problem: JavaScript floating point errors (0.1 + 0.2 = 0.30000000004)
   - Solution: Use toFixed(2) for display, handle in backend with BigDecimal

3. **Form Not Resetting:**
   - Problem: After submit, form still shows old data
   - Solution: Reset form with reset() method from React Hook Form

4. **Loading State Issues:**
   - Problem: Stale data shown while loading new data
   - Solution: Set loading=true before API call, false after

5. **Memory Leaks:**
   - Problem: Setting state after component unmounted
   - Solution: Cancel API calls in cleanup function

**Common Backend Issues:**

1. **CORS Errors:**
   - Problem: Frontend can't call backend
   - Solution: Verify CORS config includes frontend URL
   - Check: allowed origins, methods, headers

2. **SQL Query Performance:**
   - Problem: Slow queries with many expenses
   - Solution: Add database indexes
   - Verify: Indexes on user_id, date, category_id

3. **Validation Not Triggering:**
   - Problem: Invalid data getting through
   - Solution: Check @Valid annotation on controller methods

4. **Token Expiration Handling:**
   - Problem: User gets stuck when token expires
   - Solution: Frontend intercept 401, redirect to login

**Code Cleanup:**

**Frontend:**
- Remove console.log() statements
- Delete unused imports
- Remove commented code
- Fix inconsistent formatting
- Add helpful comments for complex logic
- Ensure consistent naming conventions

**Backend:**
- Remove System.out.println() debug statements
- Delete unused imports
- Remove commented code
- Ensure consistent code style
- Add JavaDoc comments for public methods
- Fix any IDE warnings

**Optimize Performance:**

**Frontend:**
- Use React.memo for expensive components
- Add debouncing to search/filter inputs (wait 300ms after typing)
- Lazy load chart library (dynamic import)
- Minimize re-renders (check with React DevTools)

**Backend:**
- Add database indexes if missing
- Use @Transactional appropriately
- Optimize N+1 query problems (use JOIN FETCH)
- Cache category list (rarely changes)

**Deliverables:**
✅ All critical bugs fixed
✅ Code cleaned up
✅ Debug statements removed
✅ Performance optimized
✅ Code formatted consistently

---

### **Phase 5: Deployment (2-3 hours)**

#### **Step 5.1: Prepare Backend for Deployment (45 minutes)**

**What To Do:**

**1. Create Production Configuration:**
- Create `application-prod.properties` file
- Use environment variables for sensitive data:
  - Database URL
  - Database username
  - Database password
  - JWT secret
  - Allowed CORS origins

**Environment Variables Needed:**
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for signing tokens
- `ALLOWED_ORIGINS` - Frontend production URL

**2. Update Security Config:**
- Add production frontend URL to CORS allowed origins
- Keep localhost for development
- Use environment variable: `${ALLOWED_ORIGINS}`

**3. Update JPA Settings:**
- Development: `spring.jpa.hibernate.ddl-auto=update`
- Production: `spring.jpa.hibernate.ddl-auto=validate`
- Disable SQL logging in production

**4. Build JAR File:**
- Clean previous builds: `mvn clean`
- Create JAR: `mvn package`
- Verify: JAR file in `target/` folder
- File name: `expense-tracker-0.0.1-SNAPSHOT.jar`

**5. Test Locally with Production Profile:**
- Run: `java -jar target/expense-tracker-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod`
- Set environment variables
- Verify application starts
- Test a few API calls

**Deliverables:**
✅ Production configuration created
✅ Environment variables documented
✅ JAR file built successfully
✅ Production CORS configured
✅ Ready for deployment

---

#### **Step 5.2: Deploy Backend (Railway or Render) (1 hour)**

**What To Do (Railway):**

**1. Create Railway Account:**
- Go to railway.app
- Sign up with GitHub

**2. Create New Project:**
- Click "New Project"
- Select "Deploy from GitHub repo"
- Connect your GitHub account
- Select your expense-tracker repository
- Select backend folder

**3. Add PostgreSQL Database:**
- In project, click "New"
- Select "Database"
- Choose "PostgreSQL"
- Railway creates database automatically
- Get connection string from environment variables

**4. Configure Environment Variables:**
- In Railway dashboard, go to Variables
- Add:
  - `JWT_SECRET`: your-secret-key-here
  - `ALLOWED_ORIGINS`: https://your-frontend-url.vercel.app
- Railway automatically sets `DATABASE_URL`

**5. Configure Build:**
- Railway auto-detects Java
- Build command: `mvn clean install`
- Start command: `java -jar target/expense-tracker-0.0.1-SNAPSHOT.jar`

**6. Deploy:**
- Railway automatically deploys
- Watch logs for any errors
- Get deployment URL (e.g., expense-tracker-production.up.railway.app)

**7. Test Deployed API:**
- Use Postman
- Try: https://your-app.railway.app/api/auth/register
- Register a test user
- Verify database connection working

**Alternative: Render.com:**
- Very similar process
- Create account, new Web Service
- Connect GitHub repo
- Add PostgreSQL database
- Set environment variables
- Deploy

**Deliverables:**
✅ Backend deployed to cloud
✅ PostgreSQL database hosted
✅ Environment variables configured
✅ API accessible via HTTPS
✅ Tested with Postman

---

#### **Step 5.3: Deploy Frontend (Vercel) (45 minutes)**

**What To Do:**

**1. Update API URL:**
- Open `.env` file
- Update: `VITE_API_BASE_URL=https://your-backend.railway.app/api`
- Or create `.env.production` file specifically for production

**2. Create Vercel Account:**
- Go to vercel.com
- Sign up with GitHub

**3. Import Project:**
- Click "New Project"
- Import your GitHub repository
- Select frontend folder
- Vercel auto-detects Vite

**4. Configure Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**5. Add Environment Variable:**
- In Vercel dashboard, go to Settings → Environment Variables
- Add: `VITE_API_BASE_URL` = your backend URL
- Make sure to include /api at the end
- Example: `https://expense-tracker.up.railway.app/api`

**6. Deploy:**
- Click "Deploy"
- Vercel builds and deploys
- Watch deployment logs
- Get production URL

**7. Update Backend CORS:**
- Go back to Railway
- Add Vercel URL to `ALLOWED_ORIGINS`
- Format: `https://your-app.vercel.app`
- Redeploy backend

**8. Test Production App:**
- Open your Vercel URL
- Try to register
- Try to login
- Create expense
- View dashboard
- Check all features work

**9. Custom Domain (Optional):**
- In Vercel, go to Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions
- Free SSL certificate included

**Deliverables:**
✅ Frontend deployed to Vercel
✅ Environment variables set
✅ Backend CORS updated
✅ Production app working
✅ HTTPS enabled
✅ (Optional) Custom domain configured

---

#### **Step 5.4: Create Documentation (30 minutes)**

**What To Do:**

**1. Update README.md:**

**Structure:**
- Project title and description
- Live demo link
- Screenshot section (add 3-4 screenshots)
- Features list
- Tech stack
- Installation instructions
- Environment variables needed
- API endpoints list
- Future enhancements
- License

**2. Add Screenshots:**
- Take screenshots of:
  - Login page
  - Dashboard with charts
  - Expense management page
  - Budget tracking page
- Use tools like Awesome Screenshots
- Save in `screenshots/` folder
- Reference in README

**3. Document API Endpoints:**
Create API_DOCUMENTATION.md:
- List all endpoints
- Request/response examples
- Authentication requirements
- Error codes and messages

**4. Add .gitignore:**
Ensure sensitive files not committed:
- node_modules/
- .env
- .env.local
- target/
- .idea/
- .DS_Store

**5. Create LICENSE file:**
- Add MIT License (or your choice)
- Include year and your name

**Deliverables:**
✅ Comprehensive README
✅ Screenshots added
✅ API documentation
✅ License file
✅ Clean git history

---

## 📊 Testing Strategy

### Manual Testing Checklist

**Authentication:**
- [ ] User can register with valid data
- [ ] Duplicate email prevented
- [ ] Validation errors shown clearly
- [ ] User can login with correct credentials
- [ ] Wrong password shows error
- [ ] Token stored in localStorage
- [ ] Logout clears token and redirects

**Expense Management:**
- [ ] Can create expense with valid data
- [ ] Validation prevents invalid expenses
- [ ] Can view all expenses
- [ ] Can filter by category
- [ ] Can filter by date range
- [ ] Can edit existing expense
- [ ] Can delete expense with confirmation
- [ ] Only user's expenses shown

**Dashboard:**
- [ ] Stats cards show correct numbers
- [ ] Pie chart renders with categories
- [ ] Line chart shows daily trend
- [ ] Month selector updates data
- [ ] Empty state handled gracefully

**Budget Management:**
- [ ] Can create budget
- [ ] Duplicate budget prevented
- [ ] Spent amount calculated correctly
- [ ] Percentage accurate
- [ ] Progress bar displays correctly
- [ ] Warning shown at 80%+
- [ ] Can delete budget

**Responsive Design:**
- [ ] Works on mobile (320px+)
- [ ] Works on tablet (768px+)
- [ ] Works on desktop (1024px+)
- [ ] No horizontal scrolling
- [ ] Touch-friendly on mobile

**Browser Compatibility:**
- [ ] Chrome works
- [ ] Firefox works
- [ ] Safari works (if available)
- [ ] Edge works

---

## 🎓 Success Metrics

### Technical Achievements

**Backend:**
✅ RESTful API with 15+ endpoints
✅ JWT authentication implemented
✅ Spring Security configured
✅ Database with 4 tables and relationships
✅ Complex queries (aggregations, joins)
✅ Pagination and filtering
✅ Input validation
✅ Error handling
✅ CORS configuration

**Frontend:**
✅ Modern React 18 with hooks
✅ React Router navigation
✅ Protected routes
✅ Form validation
✅ State management
✅ API integration
✅ Data visualization (3 chart types)
✅ Responsive design
✅ Professional UI

**Full-Stack Integration:**
✅ Frontend-backend communication
✅ Token-based authentication flow
✅ Error handling across stack
✅ Loading states
✅ User feedback

**Deployment:**
✅ Backend on Railway/Render
✅ Frontend on Vercel
✅ PostgreSQL database hosted
✅ HTTPS enabled
✅ Environment configuration
✅ Production-ready

---

### Project Completion Criteria

**Must-Have (MVP):**
- [x] User authentication
- [x] Expense CRUD
- [x] Category management
- [x] Dashboard with stats
- [x] Budget tracking
- [x] Charts (Pie, Line)
- [x] Filtering
- [x] Responsive design
- [x] Deployed and accessible

**Nice-to-Have (Future):**
- [ ] Export to CSV
- [ ] PDF reports
- [ ] Search functionality
- [ ] Recurring expenses
- [ ] Dark mode
- [ ] Profile settings
- [ ] Email notifications
- [ ] Multi-currency

---

### Career Impact

**Resume Addition:**
```
Expense Tracker | Full-Stack Application
- Built complete expense management system using Java Spring Boot and React
- Implemented JWT authentication and role-based access control
- Designed PostgreSQL database with normalized schema and relationships
- Created RESTful API with 15+ endpoints supporting CRUD operations
- Developed responsive UI with React, Tailwind CSS, and Recharts
- Integrated data visualization with pie charts and trend analysis
- Deployed to production using Railway (backend) and Vercel (frontend)
- Tech: Java 17, Spring Boot, PostgreSQL, React 18, Tailwind CSS
```

**LinkedIn Post:**
```
🚀 Just completed my Expense Tracker application!

A full-stack expense management system that helps users:
✅ Track daily expenses
✅ Set category-based budgets
✅ Visualize spending patterns
✅ Get financial insights

Built with:
- Backend: Java Spring Boot, PostgreSQL
- Frontend: React, Tailwind CSS
- Deployment: Railway + Vercel

Key features:
📊 Interactive dashboards with charts
🔒 Secure JWT authentication
💰 Budget tracking with alerts
📱 Fully responsive design

Live demo: [your-link]
GitHub: [your-repo]

#FullStackDevelopment #Java #React #SpringBoot
```

**Interview Talking Points:**

1. **Architecture:** "I implemented a three-tier architecture with separation of concerns..."

2. **Security:** "I used JWT for stateless authentication and BCrypt for password hashing..."

3. **Database:** "I designed a normalized schema with proper relationships and indexes..."

4. **Frontend:** "I built a responsive UI using React hooks and Tailwind CSS..."

5. **Challenges:** "One challenge was handling date timezone issues across backend and frontend..."

6. **Performance:** "I optimized queries using indexes and implemented pagination for large datasets..."

---

## 🎯 Next Steps After Completion

### Immediate (Week 1):
1. Add project to portfolio website
2. Update resume
3. Post on LinkedIn with screenshots
4. Pin repository on GitHub
5. Write detailed README

### Short-term (Month 1):
1. Add unit tests
2. Implement CI/CD pipeline
3. Add more features from nice-to-have list
4. Create video demo
5. Write blog post about building it

### Long-term (Month 2+):
1. Learn Docker, containerize application
2. Add Kubernetes deployment
3. Implement microservices
4. Add monitoring and logging
5. Explore advanced features

---

## 📚 Learning Resources

**Spring Boot:**
- spring.io/guides
- baeldung.com
- Official Spring documentation

**React:**
- react.dev (official docs)
- React Router documentation
- Tailwind CSS documentation

**PostgreSQL:**
- postgresql.org/docs
- Database design patterns

**General:**
- Stack Overflow
- GitHub repositories
- YouTube tutorials

---

## ✅ Final Checklist

**Before Considering Project Complete:**

**Code Quality:**
- [ ] No console.log or System.out.println
- [ ] No commented code
- [ ] Consistent formatting
- [ ] Meaningful variable names
- [ ] No hardcoded values

**Functionality:**
- [ ] All features working
- [ ] No critical bugs
- [ ] Good error messages
- [ ] Loading states everywhere
- [ ] Mobile responsive

**Security:**
- [ ] JWT working correctly
- [ ] Passwords encrypted
- [ ] Authorization enforced
- [ ] CORS configured
- [ ] No sensitive data exposed

**Documentation:**
- [ ] Comprehensive README
- [ ] Screenshots included
- [ ] API documentation
- [ ] Environment variables documented
- [ ] Setup instructions clear

**Deployment:**
- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Database hosted
- [ ] HTTPS enabled
- [ ] Environment configured

**Portfolio:**
- [ ] Added to resume
- [ ] Posted on LinkedIn
- [ ] GitHub repo public
- [ ] Live demo link works
- [ ] Code clean and professional

---

## 🎉 Congratulations!

You've built a complete, production-ready full-stack application!

**What You've Accomplished:**
✅ Designed and implemented a RESTful API
✅ Created a secure authentication system
✅ Built a responsive, modern UI
✅ Integrated data visualization
✅ Deployed to production
✅ Created professional documentation

**Skills Demonstrated:**
- Java & Spring Boot
- PostgreSQL & SQL
- React & Modern JavaScript
- RESTful API design
- Authentication & Security
- Database design
- Frontend development
- Deployment & DevOps
- Problem-solving
- End-to-end ownership

**This project proves you can:**
- Work with both backend and frontend
- Design and implement complete systems
- Write production-quality code
- Deploy applications to the cloud
- Think about user experience
- Handle security properly
- Work independently

**You're ready for:**
- Full-stack developer roles
- Backend developer positions
- Frontend developer roles
- Junior software engineer positions

---

## 💪 Keep Building!

This is just the beginning. Continue learning, building, and improving!

**Next Projects Ideas:**
- E-commerce platform
- Social media app
- Task management system
- Real-time chat application
- Blog platform with CMS

Keep coding! 🚀
