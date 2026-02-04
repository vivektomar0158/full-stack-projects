# Expense Tracker with Analytics - Complete Project Documentation

## 📑 Table of Contents
1. [Project Vision & Purpose](#project-vision--purpose)
2. [Problem Statement](#problem-statement)
3. [Target Audience](#target-audience)
4. [Solution Overview](#solution-overview)
5. [Tech Stack Deep Dive](#tech-stack-deep-dive)
6. [System Architecture](#system-architecture)
7. [Database Design](#database-design)
8. [API Design](#api-design)
9. [Frontend Architecture](#frontend-architecture)
10. [Detailed Implementation Timeline](#detailed-implementation-timeline)
11. [Testing Strategy](#testing-strategy)
12. [Deployment Guide](#deployment-guide)
13. [Success Metrics](#success-metrics)

---

## 🎯 Project Vision & Purpose

### Why Are We Building This?

#### Primary Goals:

**1. Portfolio Development**
This project serves as your flagship full-stack demonstration piece. It's not just another tutorial project—it's a complete, production-ready application that solves a real-world problem. When recruiters and hiring managers review your portfolio, this project will immediately showcase your ability to:
- Design and implement complete systems from scratch
- Work with industry-standard technologies
- Handle both frontend and backend development
- Deploy applications to production environments
- Think about user experience and business logic

**2. Skill Enhancement**
Through this project, you'll master:
- Java ecosystem: Spring Boot, Spring Security, Spring Data JPA, Hibernate
- Modern frontend development: React 18, hooks, component composition
- Database design: normalization, relationships, indexing, query optimization
- Authentication patterns: JWT tokens, password hashing, session management
- Data visualization: chart implementation, data transformation, visual analytics
- State management: React context, local state, API integration
- Responsive design: mobile-first approach, Tailwind utilities

**3. Real-World Application**
This isn't just a learning exercise. You're building something genuinely useful that:
- Helps people track their spending habits
- Provides visual insights into financial patterns
- Enables proactive budget management
- Can be used daily by real users (including yourself)
- Demonstrates understanding of business requirements

**4. Career Advancement**
This project directly supports your job search by:
- Providing concrete talking points for technical interviews
- Demonstrating end-to-end ownership and delivery
- Showing problem-solving capabilities beyond simple CRUD
- Proving you can work with modern, in-demand technologies
- Creating a live demo you can show to potential employers

---

## 🔍 Problem Statement

### The Real-World Problem We're Solving

#### Primary Pain Points:

**1. Financial Unawareness Crisis**
Most individuals lack clear visibility into their spending patterns:
- Money disappears without conscious awareness of where it went
- No systematic tracking leads to repeated overspending in certain categories
- End-of-month surprises when checking bank balance
- Difficulty in identifying wasteful spending or cost-cutting opportunities
- No historical data to review spending trends over time
- Inability to make informed financial decisions

**2. Existing Solutions Are Inadequate**

**Traditional Methods (Pen and Paper):**
- Extremely time-consuming to maintain
- Error-prone calculations
- No visual representation of data
- Difficult to search or filter entries
- Not accessible on-the-go
- No automatic calculations or insights

**Spreadsheet Approach:**
- Requires manual entry and formula creation
- No mobile-friendly interface
- Limited visualization capabilities
- No real-time budget warnings
- Tedious category management
- No built-in analytics

**Banking Apps:**
- Only show raw transaction data
- No categorization or budgeting features
- Can't track cash expenses
- Limited customization
- No budget alerts or insights
- Privacy concerns with third-party access

**Premium Apps (Mint, YNAB, etc):**
- Expensive subscription fees ($10-15/month)
- Overly complex feature sets
- Privacy concerns with linking bank accounts
- Steep learning curve
- May not support local payment methods
- Vendor lock-in

**3. Budget Management Challenges**

Users struggle with:
- Setting realistic category-based budgets
- Knowing when they're approaching spending limits
- Comparing current spending vs historical patterns
- Understanding percentage breakdown of expenses
- Getting actionable insights from their data
- Staying motivated to track expenses consistently

**4. Data Accessibility Issues**

People need:
- Cross-device access (desktop, mobile, tablet)
- Quick entry for on-the-go transactions
- Instant visual feedback on spending
- Historical data for tax purposes or analysis
- Exportable data for external use

### What Makes Our Solution Different?

**Simplicity First:**
- Only essential features, no overwhelming complexity
- Clean, intuitive interface
- Quick expense entry (under 30 seconds)
- Immediate visual feedback

**Privacy-Focused:**
- Your data stays on your own database
- No third-party data sharing
- No bank account linking required
- Complete control over your information

**Zero Cost:**
- Completely free to use
- No subscription fees
- Open source codebase
- Self-hostable if desired

**Visual Intelligence:**
- Automatic chart generation
- Category-wise breakdowns
- Trend analysis over time
- Budget progress visualization

**Fast & Responsive:**
- Modern tech stack ensures quick loading
- Optimized database queries
- Efficient frontend rendering
- Works seamlessly on all devices

---

## 👥 Target Audience

### Who Is This For?

#### Primary User Groups:

**1. Young Professionals (Age 22-35)**

**Demographics:**
- Recently entered workforce
- Earning between ₹3-15 LPA
- Living independently or recently moved out
- Managing salary for first time

**Pain Points:**
- Don't know where money goes each month
- Want to build emergency fund but keep failing
- Need to balance lifestyle vs savings
- Want to track multiple expense categories
- Need to plan for big purchases

**Goals:**
- Save specific amount monthly (₹10k-50k)
- Build 6-month emergency fund
- Track discretionary spending
- Reduce impulse purchases
- Plan for investments

**Tech Savviness:** High - comfortable with web apps and mobile interfaces

**Use Case Example:**
Rajesh, 26, software engineer earning ₹8 LPA. Wants to save ₹50,000 in 6 months for a bike down payment. Needs to track spending on food delivery, shopping, and entertainment to identify areas to cut back.

---

**2. College Students (Age 18-24)**

**Demographics:**
- Limited monthly budget (₹5k-15k)
- Receiving allowance or part-time income
- Living in hostels or shared accommodations
- First time managing money independently

**Pain Points:**
- Run out of money before month ends
- Overspend on food and entertainment
- Need to balance studies and part-time work
- Want to save but don't know how
- Parents ask where money went

**Goals:**
- Stay within monthly allowance
- Save ₹2k-5k per month
- Track every rupee to avoid running short
- Show responsible spending to parents
- Learn financial discipline

**Tech Savviness:** High - mobile-first users

**Use Case Example:**
Priya, 21, MBA student with ₹12,000 monthly allowance. Consistently overspends on food and cab rides. Wants to track expenses to have ₹3,000 left at month-end for savings.

---

**3. Freelancers & Gig Workers (Age 25-40)**

**Demographics:**
- Irregular monthly income (₹20k-1L+)
- Multiple income streams
- Need to track business vs personal expenses
- Planning for taxes and quarterly estimates

**Pain Points:**
- Income varies month to month
- Difficult to budget with variable income
- Need to separate business expenses
- Must track for tax purposes
- No employer benefits or fixed salary

**Goals:**
- Track business expenses for tax deductions
- Maintain minimum runway of expenses
- Separate personal vs business spending
- Plan for lean months
- Build emergency buffer

**Tech Savviness:** High - need efficient tools

**Use Case Example:**
Amit, 29, freelance graphic designer earning ₹40k-80k monthly. Needs to track project-related expenses separately, plan for taxes, and ensure 3-month runway is always available.

---

**4. Budget-Conscious Families (Age 30-50)**

**Demographics:**
- Managing household of 3-5 people
- Combined income ₹5-20 LPA
- Multiple spending categories (groceries, utilities, education, health)
- Planning for children's education and family goals

**Pain Points:**
- Too many expense categories to track mentally
- Multiple family members spending
- Need to optimize household budget
- Want to save for children's education
- Medical emergencies drain savings

**Goals:**
- Reduce household expenses by 15-20%
- Track category-wise spending (groceries, utilities, education)
- Set and maintain budgets
- Build education fund
- Emergency medical fund

**Tech Savviness:** Medium to High

**Use Case Example:**
The Sharma family (4 members) spending ₹60,000 monthly on household expenses. Want to identify where they can save to allocate ₹10,000 monthly towards children's education fund.

---

#### Secondary Audiences (Indirectly Benefited):

**5. Recruiters & Hiring Managers**

**What They're Looking For:**
- Proof of full-stack development skills
- Understanding of modern tech stacks
- Ability to complete projects end-to-end
- Code quality and architecture decisions
- Problem-solving approach
- User experience thinking

**What They See in This Project:**
- Complete CRUD operations with proper REST API
- Authentication and security implementation
- Database design with relationships
- Frontend state management
- Data visualization capabilities
- Production deployment experience
- Clean, maintainable code

---

**6. Fellow Developers & Learners**

**What They Need:**
- Learning resources for full-stack development
- Real-world project examples
- Best practices demonstration
- Code they can study and learn from
- Inspiration for their own projects

**What This Project Provides:**
- Complete, working codebase to study
- Proper project structure
- Industry-standard patterns
- Documentation and comments
- Deployment guide
- Learning pathway

---

### User Personas - Detailed Profiles

#### Persona 1: Raj - The Ambitious Engineer

**Demographics:**
- Age: 26
- Occupation: Software Engineer
- Salary: ₹8 LPA (₹67k monthly in-hand)
- Location: Bangalore (metro city)
- Living: Shared apartment (₹15k rent)

**Financial Situation:**
- Monthly Fixed Expenses: ₹25k (rent, subscriptions, utilities)
- Variable Expenses: ₹30k-40k (food, transport, entertainment, shopping)
- Current Savings: ₹20k per month (irregular)
- Debt: None
- Financial Goals: Buy a bike (₹80k down payment needed)

**Pain Point:**
"I earn well but I have no idea where my money goes. Some months I save ₹30k, other months only ₹10k. I want to buy a bike in 6 months but at this rate, I'll never save enough."

**Daily Behavior:**
- Orders food 4-5 times a week (Swiggy/Zomato)
- Takes Uber/Ola instead of metro
- Spontaneous weekend plans with friends
- Online shopping during sales
- Subscribes to Netflix, Spotify, Prime

**Goals:**
- Save ₹50,000 in next 6 months
- Reduce food delivery by 50%
- Track where money actually goes
- Set budgets for discretionary spending

**How This App Helps:**
- Quick expense logging after every transaction
- Category-wise breakdown shows food delivery is 30% of spending
- Budget alerts when approaching food limit
- Visual charts show daily spending patterns
- Progress tracking towards ₹50k goal

---

#### Persona 2: Priya - The Conscious Student

**Demographics:**
- Age: 21
- Status: MBA Student (2nd year)
- Monthly Allowance: ₹12,000 from parents
- Side Income: ₹3,000 from freelance content writing
- Location: Delhi (hostel)
- Living: University hostel (₹5k including food)

**Financial Situation:**
- Allowance: ₹12,000 (₹15,000 total with freelancing)
- Fixed Expenses: ₹5,000 hostel
- Variable Expenses: ₹8,000-12,000 (often overspends)
- Savings Goal: ₹3,000/month (rarely achieved)

**Pain Point:**
"My allowance is gone by 20th of every month. I keep overspending on cafe visits and cab rides. My parents keep asking where the money went and I can't even explain. I want to save but I literally have no money left."

**Daily Behavior:**
- Cafe study sessions (₹200-300 per visit, 3-4 times/week)
- Food delivery when hostel food is bad (2-3 times/week)
- Cab rides instead of metro (convenience)
- Impulsive shopping during college fests
- Splitting bills with friends (sometimes forgets to collect)

**Goals:**
- Stay within ₹12,000 allowance
- Save ₹3,000 every month
- Reduce cafe spending
- Show parents responsible spending
- Have emergency buffer

**How This App Helps:**
- Mobile-friendly quick logging (logs expense right after spending)
- Realizes ₹4,000/month goes to cafes and ₹3,000 to cabs
- Sets ₹2,000 monthly budget for cafes
- Gets alert when approaching budget limit
- Month-end summary to show parents

---

#### Persona 3: Amit - The Freelance Designer

**Demographics:**
- Age: 29
- Occupation: Freelance Graphic Designer
- Income: ₹40,000 - ₹80,000 monthly (variable)
- Location: Pune (1BHK apartment)
- Living: Rented apartment (₹18k)

**Financial Situation:**
- Good months: ₹80k income, ₹50k expenses
- Lean months: ₹40k income, ₹45k expenses
- Average monthly: ₹60k income
- Expenses: ₹35k-50k (varies)
- Tax liability: Needs to track for quarterly payments

**Pain Point:**
"My income changes every month. Some months are great, others are terrible. I need to track business expenses separately for taxes, and I need to ensure I always have at least 3 months of expenses saved as buffer. Right now I have no system."

**Daily Behavior:**
- Client meetings at cafes (business expense)
- Software subscriptions (Adobe, Figma - business)
- Client lunches and entertainment
- Personal vs business expense confusion
- Forgets to track small expenses

**Goals:**
- Maintain 3-month expense buffer (₹1.5L minimum)
- Separate business vs personal expenses
- Track for tax deductions
- Plan for lean months
- Invest surplus from good months

**How This App Helps:**
- Custom categories: "Business - Software", "Business - Client Meeting"
- Monthly comparison shows earning vs spending trends
- Can see if current month is tracking good or lean
- Expense descriptions help with tax filing
- Budget per category helps control personal spending even in good months

---

## 💡 Solution Overview

### How Our Application Solves These Problems

#### Core Value Propositions:

**1. Effortless Expense Tracking**

**The Challenge:**
Traditional expense tracking is tedious. People abandon it within weeks because it's too time-consuming.

**Our Solution:**
- **Quick Entry:** Add expense in under 30 seconds
- **Smart Defaults:** Auto-fill date to today, remember last category used
- **Mobile Responsive:** Log expenses immediately, anywhere
- **Minimal Fields:** Only essential information required (amount, category, date)
- **Payment Method Tracking:** Know if it was cash, card, or UPI

**User Flow Example:**
User buys lunch for ₹250 → Opens app on phone → Clicks "Add Expense" → Enters ₹250, selects "Food", today's date auto-filled → Clicks save → Done in 20 seconds

---

**2. Visual Financial Insights**

**The Challenge:**
Raw numbers in tables are overwhelming and provide no actionable insights.

**Our Solution:**
- **Pie Charts:** Instantly see which categories consume most money
- **Line Charts:** Visualize daily/weekly spending trends
- **Bar Charts:** Compare current month vs previous months
- **Summary Cards:** See totals at a glance (today, this month, average daily)
- **Percentage Breakdown:** Know exactly what % goes to each category

**Insight Example:**
User sees pie chart showing 35% of spending is on food delivery. This visual impact motivates reduction more than seeing "₹14,000 on food" in a table.

---

**3. Proactive Budget Management**

**The Challenge:**
People set budgets but have no system to track them in real-time.

**Our Solution:**
- **Category-Wise Budgets:** Set different limits for different categories
- **Visual Progress Bars:** See at-a-glance how much budget is used
- **Color-Coded Warnings:** Green (safe), Yellow (80% used), Red (over budget)
- **Remaining Amount Display:** Know exactly how much you can still spend
- **Monthly Reset:** Budgets reset automatically each month

**Budget Flow Example:**
User sets ₹5,000 monthly budget for food delivery → Already spent ₹4,200 → Sees orange warning "84% used" → Gets alert when opening food app → Decides to cook instead

---

**4. Powerful Filtering & Analysis**

**The Challenge:**
Need to analyze spending for specific periods or categories.

**Our Solution:**
- **Date Range Filters:** View last week, this month, last 30 days, custom range
- **Category Filters:** Focus on specific spending areas
- **Search by Description:** Find specific transactions
- **Sort Options:** By date, amount, category
- **Pagination:** Handle hundreds of expenses efficiently

**Analysis Example:**
User wants to know food spending in January → Filters by "Food" category and "Jan 2026" → Sees ₹15,000 total → Compares to December's ₹12,000 → Identifies 25% increase

---

**5. Data Security & Privacy**

**The Challenge:**
Users worry about financial data privacy and third-party access.

**Our Solution:**
- **JWT Authentication:** Secure, stateless authentication
- **Password Encryption:** BCrypt hashing (irreversible)
- **User Data Isolation:** Each user only sees their own data
- **No Third-Party Sharing:** Data stays on your server
- **HTTPS Encryption:** All data transmitted securely

**Security Features:**
- Passwords never stored in plain text
- JWT tokens expire after 24 hours
- API endpoints protected and require authentication
- SQL injection prevention through JPA
- XSS protection built-in

---

### Feature-Problem Mapping

| User Problem | Feature | How It Helps |
|--------------|---------|--------------|
| "Don't know where money goes" | Dashboard with category breakdown | Visual pie chart shows exactly where each rupee went |
| "Keep overspending" | Budget tracking with alerts | Real-time warnings prevent budget exceeding |
| "Hard to remember to track" | Mobile-responsive quick entry | Can log expenses immediately after spending |
| "Want to reduce specific category" | Category-wise filtering & trends | Identify problem areas and track improvement |
| "Need data for taxes" | Search, filter, and date range | Easily pull all business expenses for tax filing |
| "Bank app doesn't categorize" | Custom categories | Create categories that match your life |
| "Can't compare months" | Monthly trend charts | Line and bar charts show patterns over time |
| "Don't know if I'm improving" | Historical comparison | Compare current month vs previous months |
| "Privacy concerns with Mint" | Self-hosted option | Your data, your server, your control |
| "YNAB is expensive" | Free and open source | Zero cost, modify as needed |

---

### Key Differentiators

**vs. Spreadsheets:**
- ✅ Beautiful visualizations (not just numbers)
- ✅ Mobile-friendly interface
- ✅ Automatic calculations
- ✅ No formula errors
- ✅ Real-time budget tracking

**vs. Banking Apps:**
- ✅ Categorization and budgeting
- ✅ Cash expense tracking
- ✅ Custom categories
- ✅ Budget alerts
- ✅ Historical analysis

**vs. Premium Apps (Mint, YNAB):**
- ✅ Completely free
- ✅ No bank linking required
- ✅ Simpler, focused feature set
- ✅ Privacy-focused
- ✅ No vendor lock-in

**vs. Pen & Paper:**
- ✅ Digital accessibility
- ✅ Automatic calculations
- ✅ Visual charts
- ✅ Searchable history
- ✅ Cloud backup

---

## 🛠️ Tech Stack Deep Dive

### Backend Technologies

#### 1. **Java 17+**

**What It Is:**
Java is a mature, object-oriented programming language that has been the backbone of enterprise applications for over 25 years. Version 17 is a Long-Term Support (LTS) release with modern features while maintaining backward compatibility.

**Why We're Using It:**

**Industry Demand:**
- Over 60% of enterprise backends use Java
- Consistently in top 3 most-demanded programming languages
- Massive job market (lakhs of Java developer positions in India)
- High salary potential (₹6-15 LPA for 1-3 years experience)

**Technical Strengths:**
- **Platform Independence:** Write once, run anywhere (JVM abstraction)
- **Strong Type System:** Catch errors at compile-time, not runtime
- **Memory Management:** Automatic garbage collection
- **Performance:** JIT compilation provides near-native performance
- **Ecosystem:** Mature libraries for every use case
- **Backward Compatibility:** Code from 10 years ago still runs

**Enterprise Adoption:**
- Used by: Google, Amazon, Netflix, LinkedIn, Uber
- Banking sector: Almost exclusively Java
- E-commerce platforms: Most use Java backend
- Government projects: Preferred language

**What We'll Build With It:**
- All business logic (expense calculations, budget tracking)
- API endpoint handlers
- Data models and entities
- Service layer implementations
- Validation logic
- Utility functions

**Learning Curve:**
- Moderate to high (verbose syntax)
- But: Excellent IDE support (IntelliJ, Eclipse)
- Huge community and resources
- Clear error messages

**Career Impact:**
Mastering Java opens doors to:
- Backend developer roles
- Full-stack Java positions
- Enterprise application development
- Financial technology (Fintech)
- E-commerce platforms

---

#### 2. **Spring Boot 3.x**

**What It Is:**
Spring Boot is an opinionated framework built on top of the Spring Framework. It provides "convention over configuration" - sensible defaults that let you build production-ready applications quickly without extensive setup.

**The Spring Ecosystem:**
- **Spring Core:** Dependency Injection container
- **Spring MVC:** Web framework for REST APIs
- **Spring Data:** Database abstraction
- **Spring Security:** Authentication and authorization
- **Spring Boot:** Brings it all together with auto-configuration

**Why We're Using It:**

**Market Dominance:**
- #1 Java framework (used by 70%+ of Java projects)
- Required skill for 90% of Java backend jobs
- Salary premium: Spring Boot developers earn 20-30% more
- Microservices standard: Most companies use Spring Boot for microservices

**Productivity Boost:**
- **Auto-Configuration:** Automatically configures beans based on dependencies
- **Embedded Server:** No need to deploy to Tomcat (server included)
- **Starter Dependencies:** One dependency pulls in everything needed
- **Production-Ready:** Health checks, metrics, monitoring out-of-the-box
- **Fast Development:** Hot reload during development

**Technical Advantages:**
- **Dependency Injection:** Loose coupling, easy testing
- **Annotation-Based:** Clean, readable code
- **REST Support:** First-class REST API development
- **Error Handling:** Comprehensive exception handling
- **Validation:** Built-in input validation

**What We'll Build With It:**

**Application Structure:**
- REST Controllers (API endpoints)
- Service Layer (business logic)
- Repository Layer (database access)
- Configuration Classes (app settings)
- Exception Handlers (error management)

**Key Annotations We'll Use:**
- `@SpringBootApplication` - Main entry point
- `@RestController` - Marks REST API controllers
- `@Service` - Business logic layer
- `@Repository` - Database access layer
- `@Autowired` - Dependency injection

**Features We'll Leverage:**
- Auto-configuration of database connection
- Embedded Tomcat server
- JSON serialization/deserialization
- Request validation
- Exception handling
- CORS configuration

**Career Impact:**
Spring Boot is THE most requested skill in Java job descriptions. This project proves you can:
- Build RESTful APIs
- Structure Spring Boot applications properly
- Use Spring's dependency injection
- Configure Spring Security
- Work with Spring Data JPA

---

#### 3. **Spring Security**

**What It Is:**
Spring Security is a powerful and highly customizable authentication and authorization framework. It's the de-facto standard for securing Spring-based applications.

**Why We're Using It:**

**Security is Non-Negotiable:**
- Financial data must be protected
- User passwords must never be compromised
- API endpoints must be authenticated
- Authorization must be enforced

**Industry Standard:**
- Used by virtually all Spring applications
- Proven security model
- Regular security updates
- Community-vetted against vulnerabilities

**Features We Need:**
- Password encryption (BCrypt)
- JWT token generation and validation
- Stateless authentication (no sessions)
- Protected endpoints
- CORS configuration

**What We'll Implement:**

**Authentication Flow:**
1. User registers → Password hashed with BCrypt → Stored in database
2. User logs in → Credentials validated → JWT token generated
3. User makes API call → JWT sent in header → Token validated → Request processed
4. Token expires → User must login again

**Security Configuration:**
- Public endpoints: `/api/auth/register`, `/api/auth/login`
- Protected endpoints: Everything else requires JWT
- Password encoding: BCrypt with salt
- Token expiration: 24 hours
- CORS: Allow frontend origin only

**Why JWT Instead of Sessions:**
- **Stateless:** Server doesn't store session data (scalable)
- **Mobile-Friendly:** Works seamlessly with mobile apps
- **Microservices-Ready:** Can validate across multiple services
- **Performance:** No database lookup for session validation

**Security Best Practices We Follow:**
- Never store passwords in plain text
- Use strong hashing (BCrypt, not MD5)
- Validate all inputs
- Protect against SQL injection (JPA handles this)
- HTTPS in production
- Token expiration

**Career Impact:**
Security is critical. Showing you understand:
- Authentication vs Authorization
- Password hashing
- JWT tokens
- Secure API design
...makes you immediately more hireable.

---

#### 4. **Spring Data JPA**

**What It Is:**
Spring Data JPA is an abstraction layer over JPA (Java Persistence API) that dramatically reduces database boilerplate code. Instead of writing SQL queries, you define interfaces and Spring generates the implementation.

**Why We're Using It:**

**Productivity Multiplier:**
Without Spring Data JPA, to get all expenses for a user:

Create connection → Prepare statement → Execute query → Process ResultSet → Map to objects → Handle exceptions → Close resources → Return data

With Spring Data JPA:
`List<Expense> findByUserId(Long userId);`

That's it. Spring generates everything.

**Key Concepts:**

**Repository Pattern:**
- Define an interface extending `JpaRepository`
- Spring provides implementation automatically
- CRUD methods included by default (save, findById, findAll, delete)

**Query Methods:**
Spring generates queries from method names:
- `findByUserId` → SELECT * FROM expense WHERE user_id = ?
- `findByUserIdAndCategoryId` → Adds AND condition
- `findByDateBetween` → Adds BETWEEN clause
- `findByAmountGreaterThan` → Adds comparison

**What We'll Build:**

**Repository Interfaces:**
- UserRepository: User management
- ExpenseRepository: Expense operations with complex queries
- CategoryRepository: Category management
- BudgetRepository: Budget tracking

**Complex Queries We Need:**
- Get expenses by user and date range
- Calculate total spending per category
- Get monthly aggregates
- Filter by multiple criteria
- Pagination and sorting

**Custom Queries:**
When method names aren't enough, we use `@Query` annotation with JPQL (Java Persistence Query Language):

Example: Get total spending in date range
```java
@Query("SELECT SUM(e.amount) FROM Expense e WHERE e.user.id = :userId AND e.date BETWEEN :start AND :end")
```

**Pagination Support:**
Built-in pagination for handling large datasets:
- Page through results instead of loading all at once
- Reduces memory usage
- Faster API responses

**Career Impact:**
Spring Data JPA is used in almost every Spring Boot project. Understanding it shows you can:
- Work with databases efficiently
- Write clean repository code
- Optimize queries
- Handle large datasets

---

#### 5. **Hibernate (ORM)**

**What It Is:**
Hibernate is an Object-Relational Mapping (ORM) framework. It bridges the gap between Java objects (OO paradigm) and relational databases (tabular paradigm). You work with Java objects, Hibernate handles the database.

**Why We're Using It:**

**The Impedance Mismatch Problem:**
- Java thinks in objects and classes
- Databases think in tables and rows
- Hibernate translates between the two

**Benefits:**

**Database Agnostic:**
- Write code once, works with PostgreSQL, MySQL, Oracle, etc.
- Switch databases with just configuration change
- No database-specific SQL

**Automatic Mapping:**
- Java class → Database table
- Class fields → Table columns
- Object relationships → Foreign keys
- Java types → SQL types

**What We'll Implement:**

**Entity Classes:**
Each class represents a database table:
- User entity → users table
- Expense entity → expenses table
- Category entity → categories table
- Budget entity → budgets table

**Annotations We'll Use:**

**Table Mapping:**
- `@Entity` - Marks class as database entity
- `@Table(name = "users")` - Specifies table name
- `@Id` - Marks primary key field
- `@GeneratedValue` - Auto-generate ID values

**Column Mapping:**
- `@Column(nullable = false)` - NOT NULL constraint
- `@Column(unique = true)` - UNIQUE constraint
- `@Column(name = "created_at")` - Custom column name

**Relationships:**
- `@ManyToOne` - Many expenses belong to one user
- `@OneToMany` - One user has many expenses
- `@JoinColumn` - Specifies foreign key column

**Automatic Features:**

**Timestamps:**
- `@PrePersist` - Execute before saving (set created_at)
- `@PreUpdate` - Execute before updating (set updated_at)

**Lazy Loading:**
- Don't load related objects until accessed
- Improves performance
- Reduces memory usage

**Caching:**
- First-level cache (session-scoped)
- Second-level cache (application-scoped)
- Query result caching

**Schema Generation:**
- Hibernate can create tables automatically from entities
- Useful for development
- Production: Use migrations (Flyway/Liquibase)

**How It Works:**

When you do:
```java
User user = new User();
user.setName("John");
userRepository.save(user);
```

Hibernate:
1. Detects the object needs to be saved
2. Generates SQL: `INSERT INTO users (name, created_at) VALUES (?, ?)`
3. Executes the query
4. Returns the object with generated ID

**Career Impact:**
ORM is fundamental to modern backend development. Every company uses some ORM. Understanding Hibernate means you understand:
- Entity mapping
- Relationship management
- Transaction handling
- Performance optimization

---

#### 6. **PostgreSQL**

**What It Is:**
PostgreSQL is an advanced, open-source relational database management system (RDBMS). It's known for reliability, feature robustness, and performance.

**Why We're Using It:**

**Technical Excellence:**
- **ACID Compliance:** Guaranteed data consistency
- **Advanced Data Types:** JSON, Arrays, UUID, and more
- **Full-Text Search:** Built-in search capabilities
- **Performance:** Excellent query optimization
- **Reliability:** Battle-tested in production for decades

**Industry Adoption:**
- Used by: Instagram, Spotify, Reddit, Robinhood
- Preferred in startups and enterprises
- Growing faster than MySQL in recent years
- Strong in data analytics and reporting

**Open Source Benefits:**
- Completely free (no licensing costs)
- Active community
- Regular updates and security patches
- Extensive documentation

**What We'll Build:**

**Database Schema:**
Four main tables:
1. **users** - User accounts and authentication
2. **categories** - Expense categories (default + custom)
3. **expenses** - All expense records
4. **budgets** - Monthly budget limits per category

**Key Features We'll Use:**

**Data Integrity:**
- Primary keys (unique identifiers)
- Foreign keys (enforce relationships)
- NOT NULL constraints (required fields)
- UNIQUE constraints (no duplicate emails)
- CHECK constraints (amount must be positive)

**Relationships:**
- One-to-Many: One user has many expenses
- One-to-Many: One category has many expenses
- One-to-Many: One user has many budgets
- Foreign key cascading (delete user → delete their expenses)

**Indexes for Performance:**
- Primary key index (automatic)
- Foreign key indexes (for joins)
- Email index (for login queries)
- Date index (for date range queries)
- Composite indexes (user_id + date for common queries)

**Aggregation Queries:**
- SUM(amount) for totals
- GROUP BY category for category breakdown
- COUNT(*) for transaction counts
- AVG(amount) for averages

**Date Operations:**
- Date range filtering
- Monthly grouping
- Comparing dates

**Why PostgreSQL Over MySQL:**
- Better standards compliance
- More advanced features
- Superior JSON support (if we add JSON fields later)
- Better for complex queries
- Stronger data integrity

**Why PostgreSQL Over MongoDB:**
- We need strong relationships (users → expenses)
- We need ACID transactions (money must be accurate)
- We need aggregations (sums, averages)
- Structured data (not document-based)

**Cloud Deployment:**
Easy to deploy on:
- Railway (free tier available)
- Render (free tier available)
- AWS RDS (managed PostgreSQL)
- Heroku Postgres
- Supabase (PostgreSQL with extras)

**Career Impact:**
PostgreSQL skills are highly valued:
- Required for most backend roles
- Understanding of SQL is fundamental
- Database design is crucial skill
- Shows you can work with data

---

#### 7. **Maven**

**What It Is:**
Maven is a build automation and dependency management tool for Java projects. It handles downloading libraries, compiling code, running tests, and packaging applications.

**Why We're Using It:**

**Dependency Management:**
Instead of manually downloading 50+ JAR files:
- Declare dependencies in `pom.xml`
- Maven downloads them automatically
- Maven resolves transitive dependencies (dependencies of dependencies)

**Example:**
Add Spring Boot Starter Web:
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

This one declaration brings in:
- Spring MVC
- Tomcat server
- Jackson (JSON)
- 30+ other required libraries

**Build Lifecycle:**
Maven follows a standard build process:
1. **validate** - Check project is correct
2. **compile** - Compile source code
3. **test** - Run unit tests
4. **package** - Create JAR/WAR file
5. **install** - Install to local repository
6. **deploy** - Deploy to production

**Project Structure:**
Maven enforces standard structure:
```
src/
  main/
    java/          - Source code
    resources/     - Config files
  test/
    java/          - Test code
```

**What We'll Use Maven For:**

**Dependency Management:**
- Spring Boot dependencies
- PostgreSQL driver
- JWT libraries
- Lombok
- Validation API

**Build Commands:**
- `mvn clean` - Delete old builds
- `mvn compile` - Compile code
- `mvn test` - Run tests
- `mvn package` - Create JAR file
- `mvn spring-boot:run` - Run application

**Why Maven Over Gradle:**
- More common in enterprise
- Simpler for beginners
- Better IDE support
- Huge ecosystem

**Career Impact:**
Maven is standard in Java world. Every Java developer must know:
- How to add dependencies
- How to run builds
- How to create JARs
- How to manage versions

---

#### 8. **Lombok**

**What It Is:**
Lombok is a Java library that uses annotations to automatically generate boilerplate code at compile time. It dramatically reduces the amount of code you need to write.

**Why We're Using It:**

**The Boilerplate Problem:**

A typical Java class without Lombok (100+ lines):
- Private fields (10 lines)
- Getters for all fields (30 lines)
- Setters for all fields (30 lines)
- Constructor (10 lines)
- equals() method (20 lines)
- hashCode() method (10 lines)
- toString() method (10 lines)

Same class with Lombok (15 lines):
Just the fields + `@Data` annotation

**Benefits:**

**Code Reduction:**
- 70-80% less boilerplate code
- Cleaner, more readable classes
- Focus on business logic, not ceremony
- Easier maintenance (less code to change)

**Type Safety:**
- Generated at compile time (not reflection)
- Full IDE support (autocomplete works)
- No runtime overhead
- Refactoring-friendly

**What We'll Use:**

**Common Annotations:**

`@Data` - Generates:
- Getters for all fields
- Setters for all fields
- toString()
- equals() and hashCode()
- Constructor for required fields

`@NoArgsConstructor` - Empty constructor

`@AllArgsConstructor` - Constructor with all fields

`@Builder` - Builder pattern implementation

**Example Use Cases:**

**Entity Classes:**
User, Expense, Category, Budget - all use `@Data`
Reduces 50-line classes to 10 lines

**DTOs (Data Transfer Objects):**
Request and Response classes - use `@Data` and `@Builder`
Clean API layer code

**Why Some Companies Don't Use It:**
- "Magic" code generation (some prefer explicit code)
- IDE plugin required
- Debugging can be tricky

**Why We're Still Using It:**
- Industry standard (used by 60%+ of Java projects)
- Massive productivity boost
- Easy to learn
- Career-relevant skill

**Career Impact:**
Lombok is expected in modern Java projects. Shows you:
- Know modern Java practices
- Value clean code
- Understand compile-time vs runtime
- Can work efficiently

---

#### 9. **Spring Validation**

**What It Is:**
Spring Validation (based on Jakarta Bean Validation) provides a declarative way to validate user input using annotations. It ensures data integrity before it reaches your business logic.

**Why We're Using It:**

**The Security Layer:**
- Never trust user input
- Validate before processing
- Clear error messages
- Prevent database corruption

**Benefits:**

**Declarative Validation:**
Instead of manual if-else checks:
```java
if (email == null || email.isEmpty()) throw new Exception();
if (!email.contains("@")) throw new Exception();
// etc...
```

Use annotations:
```java
@NotBlank @Email private String email;
```

**What We'll Validate:**

**User Registration:**
- Email: Not blank, valid format, max length
- Password: Not blank, minimum length
- Name: Not blank, max length

**Expense Creation:**
- Amount: Not null, positive, max digits
- Category: Not null, exists in database
- Date: Not null, valid date format
- Description: Max length
- Payment method: Not null, valid enum value

**Budget Creation:**
- Monthly limit: Not null, positive
- Category: Not null, exists
- Month: Not blank, valid format (YYYY-MM)

**Common Validation Annotations:**

**String Validation:**
- `@NotNull` - Cannot be null
- `@NotBlank` - Not null, not empty, not whitespace
- `@Email` - Valid email format
- `@Size(min=6, max=100)` - Length constraints
- `@Pattern(regexp="...")` - Regex matching

**Numeric Validation:**
- `@NotNull` - Cannot be null
- `@Positive` - Must be > 0
- `@PositiveOrZero` - Must be >= 0
- `@Min(value=1)` - Minimum value
- `@Max(value=1000000)` - Maximum value
- `@Digits(integer=10, fraction=2)` - Decimal constraints

**Custom Messages:**
```java
@NotBlank(message = "Email is required")
@Email(message = "Invalid email format")
private String email;
```

**How It Works:**

1. User sends request with JSON data
2. Spring deserializes JSON to DTO object
3. `@Valid` annotation triggers validation
4. If validation fails → Return 400 Bad Request with error details
5. If validation passes → Process request

**Error Response Format:**
Automatic JSON error response with:
- Field name that failed
- Validation message
- Rejected value
- Timestamp

**Career Impact:**
Input validation is critical for:
- Security (prevent injection attacks)
- Data integrity
- User experience (clear error messages)
- Professional applications

Shows you understand:
- API design
- Security principles
- User experience
- Error handling

---

### Frontend Technologies

#### 10. **React 18**

**What It Is:**
React is a JavaScript library for building user interfaces using a component-based architecture. Version 18 introduced concurrent features and improved performance.

**Why We're Using It:**

**Market Dominance:**
- #1 frontend framework/library
- Used by Facebook, Instagram, Netflix, Airbnb
- 80% of frontend job postings mention React
- Huge salary potential (₹6-20 LPA)

**Technical Advantages:**
- **Component Reusability:** Write once, use everywhere
- **Virtual DOM:** Efficient rendering, fast updates
- **One-Way Data Flow:** Predictable state management
- **Rich Ecosystem:** Libraries for everything
- **Strong Community:** Millions of developers

**Modern React (Hooks):**
- useState - Manage component state
- useEffect - Handle side effects
- useContext - Global state
- Custom hooks - Reusable logic

**What We'll Build:**

**Page Components:**
- Login page
- Register page
- Dashboard page
- Expenses page
- Budgets page

**Reusable Components:**
- Navbar (used on all pages)
- ExpenseForm (add/edit modal)
- StatCard (dashboard metrics)
- ExpenseTable (list display)
- BudgetCard (budget display)
- Charts (pie, line, bar)
- FilterPanel (date/category filters)

**State Management:**
- Auth state (user logged in?)
- Expenses list (current view)
- Filters (active filters)
- Form data (input values)
- Loading states (API calls in progress)
- Error states (API failures)

**React Concepts We'll Use:**

**Components:**
- Function components (modern approach)
- Props (passing data down)
- State (component data)
- Composition (combining components)

**Lifecycle:**
- Component mount (fetch data)
- Component update (refetch on filter change)
- Component unmount (cleanup)

**Conditional Rendering:**
- Show loading spinner while fetching
- Show error message if API fails
- Show empty state if no data
- Show content when data loaded

**Lists & Keys:**
- Map over expenses array
- Unique key for each item
- Efficient updates

**Career Impact:**
React is THE most in-demand frontend skill. This project shows you can:
- Build complete React applications
- Use modern hooks
- Manage state properly
- Work with APIs
- Create reusable components

---

#### 11. **Vite**

**What It Is:**
Vite is a next-generation frontend build tool that provides blazing-fast development experience. Created by Evan You (Vue.js creator), it's become the preferred alternative to Create React App.

**Why We're Using It:**

**Speed Comparison:**
- **Create React App:** 30-60 seconds to start server
- **Vite:** < 1 second to start server

**Why So Fast:**
- **Native ES Modules:** No bundling in development
- **Hot Module Replacement:** Instant updates
- **Optimized Dependencies:** Pre-bundled with esbuild

**Benefits:**

**Development Experience:**
- Instant server start
- Lightning-fast hot reload
- Smaller bundle sizes
- Faster builds
- Better developer experience

**Modern by Default:**
- ES6+ support
- CSS modules
- TypeScript support
- JSX support
- Environment variables

**What We'll Do:**

**Project Setup:**
Create React + Vite project with one command
Configure Tailwind CSS
Set environment variables

**Development:**
- Run dev server: `npm run dev`
- Instant feedback on code changes
- Fast iteration cycle

**Production Build:**
- Optimized bundle
- Code splitting
- Tree shaking
- Minification
- Gzip compression

**Career Impact:**
Vite is rapidly becoming industry standard for new projects. Shows you:
- Keep up with modern tools
- Value developer experience
- Understand build tools
- Can optimize workflow

---

#### 12. **React Router**

**What It Is:**
React Router is the standard routing library for React applications. It enables navigation between different components (pages) without page reloads (Single Page Application).

**Why We're Using It:**

**Single Page Application (SPA):**
- One HTML file
- JavaScript changes content
- No page refreshes
- Faster navigation
- Better user experience

**Features We Need:**
- Client-side routing
- URL parameter handling
- Nested routes
- Protected routes (authentication)
- Navigation guards

**What We'll Implement:**

**Route Structure:**
```
/ → Redirect to /dashboard (if logged in) or /login
/login → Login page (public)
/register → Register page (public)
/dashboard → Dashboard with charts (protected)
/expenses → Expense list and management (protected)
/budgets → Budget management (protected)
```

**Protected Routes:**
- Check if user is logged in
- If yes → Show requested page
- If no → Redirect to /login
- Preserve intended destination

**Navigation:**
- Programmatic navigation after login
- Link components in navbar
- Back button support
- Browser history

**URL State:**
- Can add filters in URL
- Share specific views
- Bookmark filtered results

**Career Impact:**
React Router is essential for React apps. Shows you understand:
- SPA architecture
- Client-side routing
- Authentication flows
- Navigation patterns

---

#### 13. **Tailwind CSS**

**What It Is:**
Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS, you use pre-built utility classes directly in your HTML/JSX.

**Why We're Using It:**

**Traditional CSS Problems:**
- Naming classes is hard
- CSS grows unbounded
- Hard to maintain
- Specificity conflicts
- Unused CSS accumulates

**Tailwind Solution:**
- Utility classes (small, single-purpose)
- No naming needed
- Purges unused CSS
- Consistent design system
- Responsive by default

**Example Comparison:**

Traditional approach:
```css
/* styles.css */
.my-button {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
.my-button:hover {
  background-color: #2563eb;
}
```

Tailwind approach:
```jsx
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
```

**What We'll Build:**

**Layout Components:**
- Responsive grid layouts
- Flexbox containers
- Spacing and padding
- Container widths

**UI Components:**
- Buttons (primary, secondary, danger)
- Input fields
- Cards
- Tables
- Modal dialogs
- Navigation bars

**Responsive Design:**
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Different layouts per screen size
- Responsive typography

**Color Scheme:**
- Primary: Blue (buttons, links)
- Success: Green (budgets on track)
- Warning: Yellow (approaching limit)
- Danger: Red (over budget)
- Neutral: Gray (text, borders)

**Design System:**
- Consistent spacing (4px grid)
- Typography scale
- Color palette
- Shadow depths
- Border radius

**Career Impact:**
Tailwind is exploding in popularity. Modern companies prefer it for:
- Rapid prototyping
- Consistent designs
- Easy maintenance
- Small bundle sizes

Shows you:
- Can build modern UIs
- Understand design systems
- Value productivity
- Keep up with trends

---

#### 14. **Recharts**

**What It Is:**
Recharts is a composable charting library built specifically for React. It's built on top of D3.js but provides React-friendly API.

**Why We're Using It:**

**React-First Design:**
- Components, not configuration
- Declarative API
- Customizable with props
- Responsive by default

**Ease of Use:**
Compared to raw D3.js or Chart.js:
- Less code
- Easier to understand
- Better React integration
- Good documentation

**What We'll Build:**

**1. Pie Chart (Category Breakdown):**
- Shows spending by category
- Color-coded segments
- Percentage labels
- Interactive tooltips
- Legend with category names

**Data Example:**
```javascript
[
  { name: 'Food', value: 15000, color: '#FF6384' },
  { name: 'Transport', value: 5000, color: '#36A2EB' },
  { name: 'Shopping', value: 8000, color: '#FFCE56' }
]
```

**User Insight:**
"I'm spending 54% of my budget on food!"

---

**2. Line Chart (Spending Trend):**
- Daily/weekly spending over time
- Smooth curves
- Dot markers for each day
- Date on X-axis, amount on Y-axis
- Tooltip shows exact amount

**Data Example:**
```javascript
[
  { date: '2026-01-01', amount: 500 },
  { date: '2026-01-02', amount: 1200 },
  { date: '2026-01-03', amount: 300 }
]
```

**User Insight:**
"I spend more on weekends"

---

**3. Bar Chart (Monthly Comparison):**
- Side-by-side bars for current vs previous month
- Category-wise comparison
- Easy to spot increases/decreases

**Data Example:**
```javascript
[
  { category: 'Food', thisMonth: 15000, lastMonth: 12000 },
  { category: 'Transport', thisMonth: 5000, lastMonth: 6000 }
]
```

**User Insight:**
"Food spending increased by 25% this month"

---

**Why Not Other Libraries:**

**vs. Chart.js:**
- Chart.js not built for React
- Recharts has better React integration
- Easier to customize

**vs. Victory:**
- Victory is more complex
- Recharts has simpler API
- Better documentation

**vs. D3.js directly:**
- D3 has steep learning curve
- Recharts abstracts complexity
- Faster development

**Career Impact:**
Data visualization is valuable skill. Shows you can:
- Present data visually
- Work with charting libraries
- Transform data for display
- Create interactive UIs

---

#### 15. **Axios**

**What It Is:**
Axios is a promise-based HTTP client for JavaScript. It simplifies making HTTP requests to your backend API.

**Why We're Using It:**

**Better Than Fetch:**

**Automatic JSON Transformation:**
- Axios: Auto-converts response to JSON
- Fetch: Must call `.json()` manually

**Better Error Handling:**
- Axios: Any non-2xx status triggers catch
- Fetch: Only network errors trigger catch

**Interceptors:**
- Modify all requests before sending
- Modify all responses before handling
- Perfect for adding JWT tokens

**Request/Response Transformation:**
- Automatic serialization
- Custom transformers
- Default configurations

**What We'll Build:**

**API Service Layer:**
Central place for all API calls:
- authService.js (login, register)
- expenseService.js (CRUD operations)
- budgetService.js (budget management)
- dashboardService.js (analytics)

**Axios Instance:**
Configured with:
- Base URL (backend API)
- Default headers
- Timeout settings

**Request Interceptor:**
Automatically add JWT token to every request:
```javascript
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

**Response Interceptor:**
Handle authentication errors globally:
```javascript
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Token expired, redirect to login
      localStorage.removeItem('token');
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);
```

**API Calls:**
- Login: POST /api/auth/login
- Register: POST /api/auth/register
- Get Expenses: GET /api/expenses
- Create Expense: POST /api/expenses
- Update Expense: PUT /api/expenses/:id
- Delete Expense: DELETE /api/expenses/:id
- Dashboard Stats: GET /api/dashboard/stats

**Error Handling:**
- Network errors
- Server errors (500)
- Client errors (400, 404)
- Authentication errors (401)
- Validation errors (400 with details)

**Career Impact:**
API integration is fundamental frontend skill. Shows you can:
- Consume REST APIs
- Handle async operations
- Manage authentication
- Handle errors gracefully

---

#### 16. **React Hook Form**

**What It Is:**
React Hook Form is a performant, flexible form library that uses React hooks. It minimizes re-renders and reduces boilerplate code.

**Why We're Using It:**

**Performance Problem:**
Traditional controlled components cause re-render on every keystroke:
- User types in input
- onChange updates state
- Component re-renders
- Multiply by 10 fields = 10 re-renders per character!

**React Hook Form Solution:**
- Uncontrolled components (better performance)
- Validation built-in
- Less code
- Better UX

**What We'll Build:**

**Forms We Need:**
1. Login Form (email, password)
2. Register Form (name, email, password)
3. Expense Form (amount, category, date, description, payment method)
4. Budget Form (category, monthly limit, month)

**Features We'll Use:**

**Validation:**
- Required fields
- Email format
- Min/max length
- Number constraints
- Custom validation rules

**Error Display:**
- Show errors below fields
- Clear error messages
- Field-level validation
- Form-level validation

**Form State:**
- isDirty (form changed?)
- isValid (all validations pass?)
- isSubmitting (submit in progress?)
- errors object (what's wrong?)

**Submission:**
- Prevent default form submit
- Validate all fields
- Call API on success
- Show errors on failure
- Reset form after success

**Career Impact:**
Form handling is everyday frontend work. Shows you understand:
- Performance optimization
- User experience
- Validation patterns
- State management

---

#### 17. **date-fns**

**What It Is:**
date-fns is a modern JavaScript date utility library. It provides simple, consistent functions for working with dates.

**Why We're Using It:**

**JavaScript Date Problems:**
- Confusing API
- Mutable dates (dangerous)
- No built-in formatting
- Timezone headaches

**date-fns Benefits:**
- Immutable (safer)
- Pure functions
- Tree-shakable (small bundle)
- Consistent API
- No global pollution

**What We'll Use It For:**

**Date Formatting:**
- Database format: "2026-01-31"
- Display format: "Jan 31, 2026"
- Relative: "2 days ago"
- Month: "January 2026"

**Date Calculations:**
- Start of month
- End of month
- Add/subtract days
- Difference between dates
- Is same month?

**Filter Date Ranges:**
- Last 7 days
- Last 30 days
- This month
- Last month
- Custom range

**Example Use Cases:**

**Dashboard:**
- Format dates for chart labels
- Calculate month start/end
- Group by day/week/month

**Expense Table:**
- Format display dates
- Sort by date
- Filter by date range

**Budget:**
- Get current month (YYYY-MM)
- Check if expense in budget month

**Why date-fns Over Moment.js:**
- Smaller size (tree-shakable)
- Immutable (safer)
- Still actively maintained
- Modern codebase

**Career Impact:**
Date handling is common requirement. Shows you:
- Can work with dates properly
- Understand immutability
- Use modern libraries
- Handle edge cases

---

#### 18. **Lucide React**

**What It Is:**
Lucide is a beautiful, customizable icon library with over 1000 SVG icons, specifically designed for React.

**Why We're Using It:**

**Icon Benefits:**
- Visual clarity (users recognize icons faster)
- Space saving (icon instead of text)
- Professional look
- Universal understanding

**Lucide Advantages:**
- Tree-shakable (only import icons you use)
- Customizable size and color
- React components (not fonts)
- Consistent style
- Lightweight

**Icons We'll Use:**

**Navigation:**
- Wallet (app logo)
- LayoutDashboard (dashboard link)
- Receipt (expenses link)
- PiggyBank (budgets link)
- LogOut (logout button)

**Actions:**
- Plus (add expense/budget)
- Edit (edit button)
- Trash2 (delete button)
- Filter (filter panel)
- Search (search box)

**Dashboard:**
- TrendingUp (spending trends)
- DollarSign (money amounts)
- Calendar (date display)
- ShoppingCart (transactions)

**Categories:**
- Utensils (food)
- Car (transport)
- ShoppingBag (shopping)
- Film (entertainment)
- FileText (bills)
- Heart (health)

**Feedback:**
- AlertTriangle (warnings)
- CheckCircle (success)
- XCircle (errors)
- Info (information)

**Usage:**
Each icon is a React component:
- Import what you need
- Use like any component
- Customize with props (size, color, strokeWidth)

**Career Impact:**
Good UI design matters. Using icons properly shows:
- Attention to UX
- Design sensibility
- Modern UI patterns
- Professional polish

---

### Additional Technologies

#### 19. **JWT (JSON Web Tokens)**

**What It Is:**
JWT is an open standard for securely transmitting information between parties as a JSON object. It's digitally signed, so it can be verified and trusted.

**Why We're Using It:**

**Stateless Authentication:**
Traditional sessions:
- Server stores session data
- Cookie contains session ID
- Requires database lookup on each request
- Doesn't scale well (server must store all sessions)

JWT approach:
- All user data in token itself
- No server-side storage needed
- Self-contained and verifiable
- Scales infinitely (stateless)

**JWT Structure:**

**Three Parts (separated by dots):**
1. **Header:** Algorithm and token type
2. **Payload:** User data (claims)
3. **Signature:** Verification signature

Example token:
`eyJhbGc...header.eyJ1c2Vy...payload.SflKxw...signature`

**What's Inside:**

**Header:**
- Algorithm used (HS512, RS256, etc.)
- Token type (JWT)

**Payload (Claims):**
- Subject (user email)
- Issued at (timestamp)
- Expiration (24 hours)
- Custom data (user ID, name)

**Signature:**
- Created by combining header + payload + secret key
- Ensures token hasn't been tampered with
- Only server can create valid signatures

**How It Works:**

**Login Flow:**
1. User enters email/password
2. Server validates credentials
3. Server creates JWT with user info
4. Server signs JWT with secret key
5. Server returns JWT to client
6. Client stores JWT (localStorage)

**Authenticated Request:**
1. Client sends request with JWT in header: `Authorization: Bearer <token>`
2. Server extracts JWT from header
3. Server verifies signature (is it valid?)
4. Server checks expiration (is it expired?)
5. Server extracts user info from payload
6. Server processes request for that user

**Security Features:**

**Tamper-Proof:**
If someone modifies the payload, signature won't match → rejected

**Expiration:**
Token expires after 24 hours → must login again

**Not Encrypted:**
Payload is Base64 encoded (NOT encrypted)
Anyone can decode and read it
NEVER put sensitive data (passwords) in JWT

**Where We Store It:**
- Frontend: localStorage
- Sent with every API request
- Removed on logout

**Advantages:**
- Stateless (scales better)
- Works across domains
- Mobile-friendly
- Microservices-ready
- Industry standard

**Disadvantages:**
- Can't revoke (until expiration)
- Size larger than session ID
- If stolen, valid until expiration

**Career Impact:**
JWT is standard for modern authentication. Understanding it shows:
- Security awareness
- Scalable architecture knowledge
- API design skills
- Industry best practices

---

#### 20. **BCrypt**

**What It Is:**
BCrypt is a password-hashing function designed to be slow and computationally expensive. This makes it resistant to brute-force attacks.

**Why We're Using It:**

**Never Store Plain Passwords:**
Bad (criminal):
```
users table:
email: john@example.com, password: "password123"
```

If database is breached → all passwords exposed

Good (secure):
```
email: john@example.com, password: "$2a$10$N9qo8uLOickgx2ZMRZoMye..."
```

Hash is useless to attackers → can't reverse-engineer

**How BCrypt Works:**

**Hashing Process:**
1. User registers with password: "mypassword"
2. BCrypt generates random salt
3. BCrypt combines password + salt
4. BCrypt hashes result 2^10 times (slow!)
5. BCrypt stores final hash in database

**Login Process:**
1. User enters password: "mypassword"
2. BCrypt retrieves stored hash
3. BCrypt extracts salt from hash
4. BCrypt hashes entered password with same salt
5. BCrypt compares new hash with stored hash
6. If match → correct password

**Key Features:**

**Salting:**
Salt is random data added to password before hashing
- Same password → different hash each time
- Protects against rainbow table attacks
- Salt is stored in hash itself (no separate column needed)

**Cost Factor:**
Number of hashing rounds (work factor)
- Higher = slower = more secure
- We use 10 (2^10 = 1024 rounds)
- Can increase over time as computers get faster

**Slow by Design:**
Takes ~100ms to hash password
- User doesn't notice 100ms delay
- Attacker trying 1 billion passwords takes 3 years!

**What We'll Do:**

**Registration:**
- User enters: "password123"
- BCrypt hashes: "$2a$10$N9qo8uLO..."
- Store hash in database

**Login:**
- User enters: "password123"
- BCrypt compares with stored hash
- Match → login success
- No match → login failure

**Security Best Practices:**

**Never:**
- Store passwords in plain text
- Use MD5 or SHA1 (too fast, crackable)
- Log passwords
- Send passwords in response
- Display passwords anywhere

**Always:**
- Use BCrypt (or Argon2, scrypt)
- Use HTTPS in production
- Validate password strength
- Rate-limit login attempts
- Use 2FA for extra security (future enhancement)

**Why BCrypt Over Others:**

**vs. MD5/SHA1:**
- Too fast (can try billions per second)
- No salt
- Proven vulnerable

**vs. SHA256:**
- Still too fast
- Not designed for passwords
- No built-in salt

**vs. Argon2:**
- Argon2 is newer and better
- But BCrypt is more widely supported
- BCrypt is proven and trusted
- Easy to use in Spring Security

**Career Impact:**
Password security is critical. Shows you:
- Take security seriously
- Understand cryptography basics
- Follow industry standards
- Protect user data

---

#### 21. **CORS Configuration**

**What It Is:**
CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers. It prevents web pages from making requests to a different domain than the one serving the web page.

**Why We Need It:**

**The Same-Origin Problem:**

Our setup:
- Frontend: `http://localhost:5173` (Vite dev server)
- Backend: `http://localhost:8080` (Spring Boot server)

Different ports = different origins

Browser: "Whoa! This page from :5173 is trying to talk to :8080. That's a different origin. I'm blocking this for security!"

**The Attack CORS Prevents:**

Evil scenario:
1. User logs into bank.com
2. User visits evil.com
3. evil.com JavaScript tries to make request to bank.com
4. Without CORS: Request succeeds, evil.com steals data
5. With CORS: Browser blocks request, user protected

**What We'll Configure:**

**Allowed Origins:**
- Development: `http://localhost:5173`
- Production: `https://your-app.vercel.app`

**Allowed Methods:**
- GET (read data)
- POST (create data)
- PUT (update data)
- DELETE (remove data)
- OPTIONS (preflight check)

**Allowed Headers:**
- Content-Type (JSON)
- Authorization (JWT token)
- Custom headers

**Credentials:**
- Allow cookies and Authorization header
- Needed for JWT authentication

**How It Works:**

**Simple Request:**
1. Frontend: `GET /api/expenses`
2. Browser: Adds `Origin: http://localhost:5173` header
3. Server: Checks if origin is allowed
4. Server: Responds with `Access-Control-Allow-Origin: http://localhost:5173`
5. Browser: Origin matches, request allowed

**Preflight Request:**
For POST/PUT/DELETE, browser sends OPTIONS request first:
1. Browser: `OPTIONS /api/expenses`
2. Server: "I allow POST from localhost:5173"
3. Browser: "OK, sending actual POST request"
4. Browser: `POST /api/expenses`

**Spring Boot Configuration:**

We'll configure CORS in a configuration class:
- Add allowed origins
- Add allowed methods
- Add allowed headers
- Enable credentials
- Apply to /api/** paths

**Common CORS Errors:**

**"CORS error: No 'Access-Control-Allow-Origin' header"**
- Solution: Add frontend URL to allowed origins

**"CORS error: Method not allowed"**
- Solution: Add HTTP method to allowed methods

**"CORS error: Credentials not allowed"**
- Solution: Set allowCredentials to true

**Production Considerations:**

**Don't use wildcards in production:**
Bad: `allowedOrigins("*")`
Good: `allowedOrigins("https://your-app.vercel.app")`

**Use environment variables:**
- Dev: localhost:5173
- Prod: actual domain

**Career Impact:**
CORS is common stumbling block. Understanding it shows:
- Web security knowledge
- Full-stack integration skills
- Debugging ability
- Production-ready thinking

---

## 🏗️ System Architecture

### High-Level Overview

**Three-Tier Architecture:**

**Tier 1 - Presentation Layer (Frontend):**
- React application running in browser
- Handles UI rendering and user interactions
- Communicates with backend via HTTP/REST
- Manages local state and session

**Tier 2 - Application Layer (Backend):**
- Spring Boot application
- Processes business logic
- Validates requests
- Enforces security
- Transforms data

**Tier 3 - Data Layer (Database):**
- PostgreSQL database
- Stores all persistent data
- Ensures data integrity
- Handles complex queries

---

### Request Flow

**Example: User Views Dashboard**

1. **User opens browser** → Loads React app from Vercel
2. **React checks authentication** → JWT token in localStorage?
3. **If no token** → Redirect to /login
4. **If has token** → Continue to dashboard
5. **Dashboard component mounts** → useEffect triggers
6. **API call initiated** → axios.get('/api/dashboard/stats')
7. **Request interceptor** → Adds JWT to Authorization header
8. **Request sent** → HTTP GET to backend
9. **Backend receives request** → Spring Boot controller
10. **Security filter** → JWT validation
11. **If invalid token** → Return 401 Unauthorized
12. **If valid token** → Extract user ID from token
13. **Controller** → Calls DashboardService
14. **Service layer** → Calls multiple repositories
15. **Repositories** → Query PostgreSQL database
16. **Database** → Returns expense data
17. **Service** → Calculates statistics and aggregates
18. **Controller** → Returns JSON response
19. **Response sent** → Back to frontend
20. **Axios receives response** → Parses JSON
21. **React updates state** → Dashboard re-renders
22. **Charts render** → Recharts displays visualizations
23. **User sees data** → Mission accomplished!

---

### Component Interaction

**Authentication Flow:**

**Registration:**
User → Register Form → Axios POST → AuthController → AuthService → UserRepository → Database → Password hashed with BCrypt → User saved → JWT generated → Token returned → Frontend stores token → Redirect to dashboard

**Login:**
User → Login Form → Axios POST → AuthController → Spring Security → BCrypt validates → JWT generated → Token returned → Frontend stores token → Redirect to dashboard

**Authenticated Request:**
User → Action → Axios request → Interceptor adds JWT → Backend receives → Security filter validates → Extract user from token → Process request → Return response

---

**Expense Creation Flow:**

User clicks "Add Expense" → Modal opens → User fills form → Submit → React Hook Form validates → If invalid, show errors → If valid, call API → Axios POST /api/expenses → Security validates JWT → Controller receives → Validates DTO → Service processes → Repository saves → Database stores → Returns saved expense → Frontend updates expense list → Modal closes → Success message → Expense appears in table

---

**Dashboard Analytics Flow:**

Component mounts → Fetch stats API → Backend receives → Service queries: Total this month (SUM query) → Total today (filtered SUM) → Transaction count (COUNT) → Category breakdown (GROUP BY) → Daily trend (GROUP BY date) → All queries execute → Data aggregated → Service calculates percentages → Returns structured response → Frontend receives → Updates state → Pie chart renders → Line chart renders → Stats cards update → User sees complete dashboard

---

### Security Layers

**Layer 1 - HTTPS (Production):**
- All traffic encrypted
- Man-in-the-middle protection
- Certificate validation

**Layer 2 - CORS:**
- Only allowed origins can access API
- Prevents cross-site attacks
- Configured in Spring Boot

**Layer 3 - Spring Security:**
- JWT validation on every request
- Expired tokens rejected
- Invalid tokens rejected
- User authentication enforced

**Layer 4 - Authorization:**
- User can only access own data
- Service layer checks user ID
- Database queries filtered by user

**Layer 5 - Input Validation:**
- Bean Validation annotations
- SQL injection prevention (JPA)
- XSS prevention (React escapes by default)

**Layer 6 - Password Security:**
- BCrypt hashing
- Salt included
- Slow hashing (brute-force resistant)

---

## 💾 Database Design

### Schema Overview

**Four Core Tables:**
1. users
2. categories
3. expenses
4. budgets

### Table Structures

#### **users Table**

**Purpose:** Store user accounts and authentication

**Columns:**
- `id` (BIGSERIAL PRIMARY KEY) - Unique identifier, auto-increment
- `email` (VARCHAR(255) UNIQUE NOT NULL) - Login email, must be unique
- `password` (VARCHAR(255) NOT NULL) - BCrypt hashed password
- `name` (VARCHAR(100) NOT NULL) - User's display name
- `created_at` (TIMESTAMP DEFAULT NOW()) - Account creation timestamp

**Indexes:**
- PRIMARY KEY on id (automatic)
- UNIQUE INDEX on email (for fast login queries)

**Constraints:**
- Email must be unique (no duplicate accounts)
- All fields required except for future additions

**Sample Data:**
```
id | email              | password (hashed)          | name      | created_at
1  | raj@example.com    | $2a$10$N9qo8uLO...       | Raj       | 2026-01-15
2  | priya@example.com  | $2a$10$KdP2mL9Q...       | Priya     | 2026-01-20
```

---

#### **categories Table**

**Purpose:** Store expense categories (default + custom)

**Columns:**
- `id` (BIGSERIAL PRIMARY KEY) - Category identifier
- `name` (VARCHAR(50) NOT NULL) - Category name (e.g., "Food & Dining")
- `color` (VARCHAR(7)) - Hex color code (e.g., "#FF6384")
- `icon` (VARCHAR(50)) - Icon name (e.g., "utensils")
- `user_id` (BIGINT FOREIGN KEY) - NULL for default categories, user ID for custom

**Relationships:**
- FOREIGN KEY user_id REFERENCES users(id) ON DELETE CASCADE
- If user deleted, their custom categories deleted

**Indexes:**
- PRIMARY KEY on id
- INDEX on user_id (for filtering user's categories)

**Sample Data:**
```
id | name               | color    | icon          | user_id
1  | Food & Dining      | #FF6384  | utensils      | NULL (default)
2  | Transportation     | #36A2EB  | car           | NULL (default)
3  | Shopping           | #FFCE56  | shopping-bag  | NULL (default)
9  | Gym & Fitness      | #4BC0C0  | dumbbell      | 1 (Raj's custom)
```

**Why NULL user_id?**
- Default categories available to all users
- Custom categories only visible to creator
- Query: WHERE user_id = ? OR user_id IS NULL

---

#### **expenses Table**

**Purpose:** Store all expense transactions

**Columns:**
- `id` (BIGSERIAL PRIMARY KEY) - Expense identifier
- `amount` (DECIMAL(12,2) NOT NULL) - Money amount (up to 10 digits, 2 decimal)
- `category_id` (BIGINT FOREIGN KEY NOT NULL) - Which category
- `date` (DATE NOT NULL) - When expense occurred
- `description` (VARCHAR(500)) - Optional notes
- `payment_method` (VARCHAR(20) NOT NULL) - CASH, CARD, UPI, etc.
- `user_id` (BIGINT FOREIGN KEY NOT NULL) - Who created this expense
- `created_at` (TIMESTAMP DEFAULT NOW()) - When record created
- `updated_at` (TIMESTAMP DEFAULT NOW()) - When last modified

**Relationships:**
- FOREIGN KEY user_id REFERENCES users(id) ON DELETE CASCADE
- FOREIGN KEY category_id REFERENCES categories(id)
- If user deleted, all their expenses deleted
- If category deleted, expenses keep reference (or we prevent deletion)

**Indexes:**
- PRIMARY KEY on id
- INDEX on user_id (filter by user)
- INDEX on date (date range queries)
- COMPOSITE INDEX on (user_id, date) - most common query pattern
- INDEX on category_id (filter by category)

**Constraints:**
- amount must be positive: CHECK (amount > 0)
- payment_method must be valid enum value

**Sample Data:**
```
id | amount  | category_id | date       | description      | payment_method | user_id | created_at
1  | 500.00  | 1          | 2026-01-31 | Lunch at cafe    | CARD           | 1       | 2026-01-31
2  | 1200.50 | 2          | 2026-01-31 | Uber ride        | UPI            | 1       | 2026-01-31
3  | 2500.00 | 3          | 2026-01-30 | New shoes        | CARD           | 1       | 2026-01-30
```

---

#### **budgets Table**

**Purpose:** Store monthly budget limits per category

**Columns:**
- `id` (BIGSERIAL PRIMARY KEY) - Budget identifier
- `user_id` (BIGINT FOREIGN KEY NOT NULL) - Who set this budget
- `category_id` (BIGINT FOREIGN KEY NOT NULL) - For which category
- `monthly_limit` (DECIMAL(12,2) NOT NULL) - Budget amount
- `month` (VARCHAR(7) NOT NULL) - Format: "2026-01" (YYYY-MM)

**Relationships:**
- FOREIGN KEY user_id REFERENCES users(id) ON DELETE CASCADE
- FOREIGN KEY category_id REFERENCES categories(id)
- One budget per user per category per month

**Indexes:**
- PRIMARY KEY on id
- COMPOSITE INDEX on (user_id, month) - get all budgets for a month
- UNIQUE INDEX on (user_id, category_id, month) - prevent duplicates

**Constraints:**
- monthly_limit must be positive: CHECK (monthly_limit > 0)
- month must match pattern: CHECK (month ~ '^[0-9]{4}-[0-9]{2}$')

**Sample Data:**
```
id | user_id | category_id | monthly_limit | month
1  | 1       | 1           | 5000.00       | 2026-01
2  | 1       | 2           | 3000.00       | 2026-01
3  | 1       | 3           | 10000.00      | 2026-01
```

---

### Relationships

**One-to-Many Relationships:**

**users → expenses (1:N)**
- One user has many expenses
- Each expense belongs to one user
- Cascade delete: Delete user → delete all their expenses

**users → budgets (1:N)**
- One user has many budgets
- Each budget belongs to one user
- Cascade delete: Delete user → delete all their budgets

**categories → expenses (1:N)**
- One category has many expenses
- Each expense belongs to one category
- Handle delete: Either prevent deletion or set to "Other" category

**categories → budgets (1:N)**
- One category has many budgets
- Each budget is for one category

---

### Query Patterns

**Common Queries We'll Need:**

**1. Get all expenses for user in date range:**
```sql
SELECT * FROM expenses 
WHERE user_id = ? AND date BETWEEN ? AND ?
ORDER BY date DESC;
```

**2. Calculate total spending by category:**
```sql
SELECT c.name, c.color, SUM(e.amount) as total
FROM expenses e
JOIN categories c ON e.category_id = c.id
WHERE e.user_id = ? AND e.date BETWEEN ? AND ?
GROUP BY c.id, c.name, c.color;
```

**3. Get daily spending trend:**
```sql
SELECT date, SUM(amount) as total
FROM expenses
WHERE user_id = ? AND date BETWEEN ? AND ?
GROUP BY date
ORDER BY date;
```

**4. Get budget with current spending:**
```sql
SELECT 
  b.id, 
  b.monthly_limit,
  c.name as category_name,
  COALESCE(SUM(e.amount), 0) as spent
FROM budgets b
JOIN categories c ON b.category_id = c.id
LEFT JOIN expenses e ON e.category_id = b.category_id 
  AND e.user_id = b.user_id 
  AND e.date >= ? AND e.date <= ?
WHERE b.user_id = ? AND b.month = ?
GROUP BY b.id, b.monthly_limit, c.name;
```

---

### Performance Considerations

**Indexes Strategy:**

**Why Indexes Matter:**
- Without index: Database scans entire table (slow for millions of rows)
- With index: Database uses B-tree lookup (fast even for billions of rows)

**Our Indexes:**
1. **Primary Keys** - Automatic, unique identifier lookup
2. **Email** - Fast login queries
3. **user_id** - Filter user's data
4. **date** - Date range queries
5. **(user_id, date)** - Combined filter (most common pattern)
6. **category_id** - Filter by category

**Trade-offs:**
- Indexes speed up reads
- But slow down writes slightly
- Use indexes on frequently queried columns
- Don't over-index (diminishing returns)

---

### Data Integrity

**Constraints Ensure:**

**Referential Integrity:**
- Can't create expense for non-existent user
- Can't create budget for non-existent category
- Foreign keys enforced by database

**Data Validity:**
- Amount must be positive (no negative expenses)
- Email must be unique (no duplicate accounts)
- Required fields can't be NULL

**Cascade Delete:**
- Delete user → automatically delete their expenses and budgets
- Prevents orphaned records
- Maintains database consistency

---

## 🔌 API Design

### RESTful Principles

**REST (Representational State Transfer) Guidelines:**

**1. Resource-Based URLs:**
- Resources are nouns: `/api/expenses`, `/api/budgets`
- Not actions: NOT `/api/getExpenses`, NOT `/api/createBudget`

**2. HTTP Methods Represent Actions:**
- GET - Read/Retrieve
- POST - Create
- PUT - Update/Replace
- DELETE - Remove

**3. Stateless:**
- Each request contains all needed information
- No server-side session state
- JWT contains user identity

**4. JSON Format:**
- Requests and responses use JSON
- Content-Type: application/json

**5. Proper Status Codes:**
- 200 OK - Success
- 201 Created - Resource created
- 400 Bad Request - Validation error
- 401 Unauthorized - Not authenticated
- 404 Not Found - Resource doesn't exist
- 500 Internal Server Error - Server problem

---

### API Endpoints

#### **Authentication Endpoints**

**Register New User**
- **URL:** `POST /api/auth/register`
- **Auth Required:** No
- **Request Body:**
  ```json
  {
    "name": "Raj Kumar",
    "email": "raj@example.com",
    "password": "securepass123"
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "token": "eyJhbGc...",
    "type": "Bearer",
    "id": 1,
    "name": "Raj Kumar",
    "email": "raj@example.com"
  }
  ```
- **Validations:**
  - Name: Not blank, max 100 chars
  - Email: Valid format, unique
  - Password: Min 6 chars
- **Errors:**
  - 400: Email already exists
  - 400: Validation errors

---

**Login**
- **URL:** `POST /api/auth/login`
- **Auth Required:** No
- **Request Body:**
  ```json
  {
    "email": "raj@example.com",
    "password": "securepass123"
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "token": "eyJhbGc...",
    "type": "Bearer",
    "id": 1,
    "name": "Raj Kumar",
    "email": "raj@example.com"
  }
  ```
- **Errors:**
  - 400: Invalid credentials

---

**Get Current User**
- **URL:** `GET /api/auth/me`
- **Auth Required:** Yes (JWT)
- **Response (200 OK):**
  ```json
  {
    "id": 1,
    "name": "Raj Kumar",
    "email": "raj@example.com"
  }
  ```

---

#### **Category Endpoints**

**Get All Categories**
- **URL:** `GET /api/categories`
- **Auth Required:** Yes
- **Description:** Returns default categories + user's custom categories
- **Response (200 OK):**
  ```json
  [
    {
      "id": 1,
      "name": "Food & Dining",
      "color": "#FF6384",
      "icon": "utensils"
    },
    {
      "id": 9,
      "name": "Gym Membership",
      "color": "#4BC0C0",
      "icon": "dumbbell"
    }
  ]
  ```

---

**Create Custom Category**
- **URL:** `POST /api/categories`
- **Auth Required:** Yes
- **Request Body:**
  ```json
  {
    "name": "Gym Membership",
    "color": "#4BC0C0",
    "icon": "dumbbell"
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "id": 9,
    "name": "Gym Membership",
    "color": "#4BC0C0",
    "icon": "dumbbell"
  }
  ```

---

#### **Expense Endpoints**

**Get All Expenses**
- **URL:** `GET /api/expenses`
- **Auth Required:** Yes
- **Query Parameters:**
  - `page` (optional, default: 0)
  - `size` (optional, default: 10)
  - `sort` (optional, default: "date,desc") - format: "field,direction"
  - `categoryId` (optional) - filter by category
  - `startDate` (optional) - format: YYYY-MM-DD
  - `endDate` (optional) - format: YYYY-MM-DD
- **Example:** `/api/expenses?categoryId=1&startDate=2026-01-01&endDate=2026-01-31&page=0&size=20&sort=date,desc`
- **Response (200 OK):**
  ```json
  {
    "content": [
      {
        "id": 1,
        "amount": 500.00,
        "category": {
          "id": 1,
          "name": "Food & Dining",
          "color": "#FF6384",
          "icon": "utensils"
        },
        "date": "2026-01-31",
        "description": "Lunch at cafe",
        "paymentMethod": "CARD",
        "createdAt": "2026-01-31T14:30:00"
      }
    ],
    "pageable": {
      "pageNumber": 0,
      "pageSize": 10
    },
    "totalElements": 45,
    "totalPages": 5
  }
  ```

---

**Get Single Expense**
- **URL:** `GET /api/expenses/{id}`
- **Auth Required:** Yes
- **Response (200 OK):** Same as single expense object above
- **Errors:**
  - 404: Expense not found
  - 403: Not authorized (belongs to different user)

---

**Create Expense**
- **URL:** `POST /api/expenses`
- **Auth Required:** Yes
- **Request Body:**
  ```json
  {
    "amount": 500.00,
    "categoryId": 1,
    "date": "2026-01-31",
    "description": "Lunch at cafe",
    "paymentMethod": "CARD"
  }
  ```
- **Validations:**
  - amount: Not null, positive
  - categoryId: Not null, must exist
  - date: Not null, valid date
  - description: Max 500 chars (optional)
  - paymentMethod: Not null, valid enum (CASH, CARD, UPI, NET_BANKING, OTHER)
- **Response (201 Created):** Created expense object
- **Errors:**
  - 400: Validation errors
  - 404: Category not found

---

**Update Expense**
- **URL:** `PUT /api/expenses/{id}`
- **Auth Required:** Yes
- **Request Body:** Same as create
- **Response (200 OK):** Updated expense object
- **Errors:**
  - 404: Expense not found
  - 403: Not authorized
  - 400: Validation errors

---

**Delete Expense**
- **URL:** `DELETE /api/expenses/{id}`
- **Auth Required:** Yes
- **Response (204 No Content)**
- **Errors:**
  - 404: Expense not found
  - 403: Not authorized

---

#### **Dashboard Endpoints**

**Get Dashboard Statistics**
- **URL:** `GET /api/dashboard/stats`
- **Auth Required:** Yes
- **Query Parameters:**
  - `month` (optional, default: current month) - format: YYYY-MM
- **Example:** `/api/dashboard/stats?month=2026-01`
- **Response (200 OK):**
  ```json
  {
    "totalThisMonth": 45000.00,
    "totalToday": 1200.00,
    "transactionCount": 87,
    "averageDaily": 1451.61,
    "categoryBreakdown": [
      {
        "categoryName": "Food & Dining",
        "categoryColor": "#FF6384",
        "amount": 15000.00,
        "percentage": 33.33
      },
      {
        "categoryName": "Transportation",
        "categoryColor": "#36A2EB",
        "amount": 8000.00,
        "percentage": 17.78
      }
    ],
    "dailyTrend": [
      {
        "date": "2026-01-01",
        "amount": 1200.00
      },
      {
        "date": "2026-01-02",
        "amount": 2500.00
      }
    ]
  }
  ```

---

#### **Budget Endpoints**

**Get All Budgets**
- **URL:** `GET /api/budgets`
- **Auth Required:** Yes
- **Query Parameters:**
  - `month` (optional, default: current month) - format: YYYY-MM
- **Example:** `/api/budgets?month=2026-01`
- **Response (200 OK):**
  ```json
  [
    {
      "id": 1,
      "category": {
        "id": 1,
        "name": "Food & Dining",
        "color": "#FF6384",
        "icon": "utensils"
      },
      "monthlyLimit": 5000.00,
      "spent": 4200.00,
      "remaining": 800.00,
      "percentageUsed": 84.0,
      "month": "2026-01"
    }
  ]
  ```

---

**Create Budget**
- **URL:** `POST /api/budgets`
- **Auth Required:** Yes
- **Request Body:**
  ```json
  {
    "categoryId": 1,
    "monthlyLimit": 5000.00,
    "month": "2026-01"
  }
  ```
- **Validations:**
  - categoryId: Not null, must exist
  - monthlyLimit: Not null, positive
  - month: Not blank, format YYYY-MM
- **Response (201 Created):** Created budget object
- **Errors:**
  - 400: Budget already exists for this category and month
  - 400: Validation errors

---

**Update Budget**
- **URL:** `PUT /api/budgets/{id}`
- **Auth Required:** Yes
- **Request Body:**
  ```json
  {
    "categoryId": 1,
    "monthlyLimit": 6000.00,
    "month": "2026-01"
  }
  ```
- **Response (200 OK):** Updated budget object

---

**Delete Budget**
- **URL:** `DELETE /api/budgets/{id}`
- **Auth Required:** Yes
- **Response (204 No Content)**

---

### Error Response Format

**Consistent Error Structure:**

**Validation Errors (400):**
```json
{
  "timestamp": "2026-01-31T14:30:00",
  "status": 400,
  "error": "Bad Request",
  "errors": [
    {
      "field": "amount",
      "message": "Amount must be positive"
    },
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ],
  "path": "/api/expenses"
}
```

**Authentication Error (401):**
```json
{
  "timestamp": "2026-01-31T14:30:00",
  "status": 401,
  "error": "Unauthorized",
  "message": "JWT token is expired or invalid"
}
```

**Not Found (404):**
```json
{
  "timestamp": "2026-01-31T14:30:00",
  "status": 404,
  "error": "Not Found",
  "message": "Expense with id 999 not found"
}
```

---

## 🎨 Frontend Architecture

### Component Structure

**Page Components (Routes):**
- Login.jsx
- Register.jsx
- Dashboard.jsx
- Expenses.jsx
- Budgets.jsx

**Layout Components:**
- Navbar.jsx
- ProtectedRoute.jsx

**Feature Components:**
- ExpenseForm.jsx (modal)
- ExpenseTable.jsx
- StatCard.jsx (dashboard metrics)
- Charts (PieChart, LineChart, BarChart wrappers)
- BudgetCard.jsx
- FilterPanel.jsx

**Common Components:**
- Button.jsx
- Input.jsx
- Modal.jsx
- Loading.jsx
- ErrorMessage.jsx

---

### State Management

**Global State (Context):**
- AuthContext: User authentication state, login/logout functions

**Component State (useState):**
- Expenses list
- Budgets list
- Categories list
- Dashboard stats
- Loading states
- Error states
- Form data
- Filter values

**Server State:**
- Fetched from API
- Cached in component state
- Refetched on certain actions

---

### Routing Structure

**Public Routes:**
- `/login` - Login page
- `/register` - Register page

**Protected Routes (require authentication):**
- `/` - Redirects to `/dashboard`
- `/dashboard` - Main dashboard with analytics
- `/expenses` - Expense list and management
- `/budgets` - Budget management

**Navigation Flow:**
- Unauthenticated user tries to access /dashboard → Redirect to /login
- User logs in → Redirect to /dashboard
- User manually goes to /login while logged in → Redirect to /dashboard

---

### Data Flow

**Fetching Data:**
1. Component mounts
2. useEffect triggers API call
3. Set loading state to true
4. API call via Axios
5. On success: Update state with data, set loading to false
6. On error: Set error state, set loading to false
7. Component re-renders with new data

**Creating/Updating Data:**
1. User fills form
2. User submits
3. Validate client-side (React Hook Form)
4. If invalid, show errors
5. If valid, call API
6. Show loading state on button
7. On success: Refetch data, close modal, show success message
8. On error: Show error message

**Filtering Data:**
1. User changes filter (date range, category)
2. Update filter state
3. useEffect detects filter change
4. Trigger new API call with filters
5. Update displayed data

---

## ⏱️ Detailed Implementation Timeline

I'll create this in the second file to keep things organized.
