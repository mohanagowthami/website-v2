
 export interface Week {
    title: string;
    days: string[];
  }
  
  export interface Course {
    title: string;
    weeks: Week[];
  }
  
   export interface CoursesData {
    [key: string]: Course;
  }

  
   export const coursesData: CoursesData = {
    "Full-Stack": {
      title: "Full Stack",
      weeks: [
        {
          title: "Week 1: HTML5 & CSS3 Fundamentals",
          days: [
            "Day 1: Introduction to HTML5, Basic Tags ('<div>', '<p>', '<q>', '<img>')",
            "Day 2: HTML5 Forms, Inputs, and Semantic Elements ('<header>', '<section>', '<footer>')",
            "Day 3: Introduction to CSS3, Selectors, Colors, and Units ('px', 'rem')",
            "Day 4: CSS3 Box Model (margin, padding, border), Flexbox Basics ('display: flex')",
            "Day 5: Responsive Design with Media Queries, Basic Layout Techniques",
            "Weekend Project: Build a simple personal profile page with a responsive layout using HTML5 and CSS3."
          ]
        },
        {
          title: "Week 2: Advanced CSS3 & Introduction to Tailwind CSS",
          days: [
            "Day 1: CSS Grid Layout, Creating Complex Layouts",
            "Day 2: Animations and Transitions ('@keyframes', 'transition')",
            "Day 3: Introduction to Tailwind CSS, Setting Up Tailwind in a Project",
            "Day 4: Tailwind Utility Classes for Spacing, Colors, Flexbox, and Grid",
            "Day 5: Building Responsive Layouts with Tailwind CSS (mobile-first approach)",
            "Weekend Project: Rebuild the personal profile page from Week 1 using Tailwind CSS for styling."
          ]
        },
        {
          title: "Week 3: JavaScript Basics",
          days: [
            "Day 1: JavaScript Variables, Data Types, and Operators (`let`, `const`)",
            "Day 2: Functions (declaration, arrow functions), Control Flow (`if`, `for`, `while`)",
            "Day 3:  Arrays and Objects (methods like `map`, `filter`)",
            "Day 4: DOM Manipulation (`document.querySelector`, `addEventListener`)",
            "Day 5: JavaScript Events, Forms, and Validation",
            "Weekend Project: Create an interactive form with validation and feedback messages using vanilla JavaScript."
          ]
        },
        {
          title: "Week 4: Intermediate JavaScript & Introduction to React",
          days: [
            "Day 1:  ES6+ Features (spread/rest operators, destructuring)",
            "Day 2: `fetch` API, Promises, and `async/await` for HTTP requests",
            "Day 3:  Setting up a React project using Create React App",
            "Day 4: Understanding JSX and React Components (`function` components)",
            "Day 5:  Managing state with `useState`, passing data with `props`",
            "Weekend Project: Build a weather app using `fetch` API and React to display weather data based on user input."
          ]
        },
        {
          title: "Week 5: React Fundamentals & Tailwind CSS",
          days: [
            "Day 1:  React Component Lifecycle with `useEffect`",
            "Day 2: Handling Events in React (`onClick`, `onChange`)",
            "Day 3:  Forms in React and Controlled Components",
            "Day 4:  Styling React Components with Tailwind CSS",
            "Day 5: Reusable Components and File Structure in React",
            "Weekend Project: Create a To-Do app using React and Tailwind CSS with features like adding, editing, and deleting tasks."
          ]
        },
        {
          title: "Week 6: Advanced React & Introduction to Redux Toolkit",
          days: [
            "Day 1:  React Hooks (`useRef`, `useContext`)",
            "Day 2:  Introduction to Redux, Setting up Redux Toolkit (`configureStore`, `createSlice`)",
            "Day 3:  Using `useSelector` and `useDispatch` to access and modify state",
            "Day 4: Writing async actions with `createAsyncThunk`",
            "Day 5: Combining Redux Toolkit with React components ",
            "Weekend Project: Create a simple counter app with Redux Toolkit and Tailwind CSS for styling."
          ]
        },
        {
          title: "Week 7: Next.js Basics & Core Features",
          days: [
            "Day 1: What is Next.js? Setting up a Next.js project",
            "Day 2:  Pages and File-Based Routing (`pages` directory)",
            "Day 3:  Static Generation with `getStaticProps` and `getStaticPaths`",
            "Day 4: Server-Side Rendering with `getServerSideProps`",
            "Day 5: Client-Side Data Fetching with `useEffect` and Axios in Next.js ",
            "Weekend Project:  Build a blog using Next.js, fetching data from an API, and using Tailwind CSS for styling."
          ]
        },
        {
          title: "Week 8: Advanced Next.js &amp; Redux Toolkit Integration ",
          days: [
            "Day 1:  API Routes in Next.js for creating backend endpoints",
            "Day 2:  Customizing `_app.js` and `_document.js` for global styles",
            "Day 3:  Dynamic Routing and Nested Routes in Next.js",
            "Day 4:  Integrating Redux Toolkit in a Next.js project",
            "Day 5:  Using `next/image` for optimized images",
            "Weekend Project: Create a portfolio website with projects fetched from an API, using Next.js and Redux Toolkit."
          ]
        },
        {
          title: "Week 9: Full-Stack Development with Next.js ",
          days: [
            "Day 1:  Introduction to Databases (MongoDB or Firebase)",
            "Day 2:  Connecting Next.js to a Database (CRUD operations)",
            "Day 3:   Setting up user authentication with NextAuth.js",
            "Day 4:  Managing Protected Routes in Next.js",
            "Day 5:  Real-time Data Updates with Firebase or WebSockets",
            "Weekend Project: Build a full-stack app with registration, login, and user-specific content."
          ]
        },
        {
          title: "Week 10: Advanced CSS3, Tailwind CSS, and Performance Optimization",
          days: [
            "Day 1:  Advanced Tailwind CSS (custom themes, extending configurations)",
            "Day 2:  Animations and transitions using Tailwind CSS classes",
            "Day 3:   Performance Optimization in React and Next.js (`React.memo`, `useMemo`)",
            "Day 4:   Next.js Middleware for custom logic",
            "Day 5:  Analyzing and Reducing Bundle Size in Next.js",
            "Weekend Project: Optimize the blog project by adding Tailwind animations and improving performance."
          ]
        },
        {
          title: "Week 11: Deployment, CI/CD, and Best Practices",
          days: [
            "Day 1:  Deploying Next.js applications on Vercel",
            "Day 2:  Setting up GitHub Actions for CI/CD pipelines",
            "Day 3:  Version control best practices (branching, PRs)",
            "Day 4:  Environment Variables and Configurations in Next.js ",
            "Day 5:  SEO Best Practices with Next.js (`Head`, meta tags)",
            "Weekend Project:  Deploy a full-stack project on Vercel with environment configurations."
          ]
        },
        {
          title: "Week 12: Capstone Project &amp; Final Review",
          days: [
            "Day 1-5: Capstone Project:",
                       "-  Choose a project idea (e.g., social media app, e-commerce platform, real-time chat app).",
                       "-Break down tasks, plan integrations, and set up a project plan." ,
                       "- Implement and refine features with mentorship and guidance.",
                       "Weekend Final Project: presentation, code review, and feedback session."
          ]
        },
      // ]
    
        
      // title: "Backend",
      // weeks: [
     
    {
      title: "Week 1: Introduction to Backend Development",
      days: [
        "Day 1: Overview of Web Development: Understanding Frontend vs. Backend",
        "Day 2: Role of the Backend in a Web Application: What happens behind the scenes",
        "Day 3: Overview of Backend Languages: Python, Java, Go, Node.js",
        "Day 4: Pros and Cons of Backend Languages: Choosing the right language for a project",
        "Day 5: Setting Up Development Environment: Installing IDEs (VS Code, PyCharm, etc.)",
        "Day 6: Introduction to Version Control: Git basics (init, clone, add, commit)",
        "Day 7: Command Line Basics: Navigating the filesystem, creating folders, etc."
      ]
    },
    {
      title: "Week 2: Deeper into Backend Basics",
      days: [
        "Day 8: Understanding Repositories: Pushing, pulling, and branching in Git",
        "Day 9: Collaborating with Git: Pull requests, merging, resolving conflicts",
        "Day 10: Introduction to Python/Go/Node.js: Writing your first program",
        "Day 11: Basic Syntax and Structure of Chosen Language",
        "Day 12: Setting Up a Simple Server: Introduction to HTTP and web servers",
        "Day 13: Building Your First API Endpoint: Returning JSON data",
        "Day 14: Recap and Practice: Building simple scripts and APIs"
      ]
    },
   
    {
      title: "Week 3: Programming Fundamentals",
      days: [
        "Day 15: Data Types and Variables: Understanding strings, numbers, booleans",
        "Day 16: More Data Types: Lists/Arrays, Dictionaries/Objects",
        "Day 17: Control Structures: Understanding conditionals (if-else)",
        "Day 18: Loops: For and while loops, iteration over data structures",
        "Day 19: Switch-Case (if supported): Writing more complex control flows",
        "Day 20: Functions: Writing and using functions",
        "Day 21: Recap and Practice: Coding challenges on control structures and functions",
       
      ]
    },
   
    {
      title: "Week 4: Advanced Programming Concepts",
      days: [
        "Day 22: Understanding Modules: Importing and using libraries",
        "Day 23: Writing Your Own Modules: Structuring code for reusability",
        "Day 24: Error Handling: Using try-catch or try-except",
        "Day 25: Debugging Techniques: Using print statements, IDE debugger",
        "Day 26: Advanced Functions: Lambda functions, closures",
        "Day 27: Understanding Recursion and Iterative Solutions",
        "Day 28: Recap and Practice: Coding challenges focusing on functions and error handling",
        
      ]
    },
    {
      title: "Week 5: Introduction to Databases",
      days: [
        "Day 29: What are Databases? Overview of SQL vs. NoSQL",
        "Day 30: Introduction to SQL: Basic queries (SELECT, INSERT, UPDATE, DELETE)",
        "Day 31: Understanding Tables and Relationships: Primary keys, foreign keys",
        "Day 32: SQL Practice: Complex queries with JOIN, GROUP BY",
        "Day 33: Introduction to NoSQL: Understanding documents, collections",
        "Day 34: MongoDB Basics: Inserting and querying data",
        "Day 35: Recap and Practice: Building a simple database schema",
      ]
    },
    {
      title: "Week 6: ORMs and Database Integration",
      days: [
        "Day 36: Understanding ORMs: What and why",
        "Day 37: Setting Up an ORM (e.g., SQLAlchemy, GORM, Sequelize)",
        "Day 38: Working with ORMs: Creating models, saving data",
        "Day 39: Querying with ORMs: Retrieving and updating data",
        "Day 40: Relationships in ORMs: One-to-many, many-to-many",
        "Day 41: Integrating Database with API: Building a simple API that interacts with a database",
        "Day 42: Recap and Practice: Create a mini-project with database interactions",
      ]
    },
    {
      title: "Week 7: RESTful API Development",
      days: [
        "Day 43: What is REST? Principles and architecture",
        "Day 44: Designing RESTful APIs: Resources, URLs, and methods",
        "Day 45: Building a Basic API with Flask/Django/Express.js",
        "Day 46: HTTP Methods Explained: GET, POST, PUT, DELETE",
        "Day 47: Handling Request and Response: JSON formatting",
        "Day 48: Testing APIs with Postman: Writing and automating tests",
        "Day 49: Recap and Practice: Build an API with at least three endpoints",
      ]
    },
    {
      title: "Week 8: Advanced API Concepts",
      days: [
        "Day 50: Handling Query Parameters and Headers in APIs",
        "Day 51: Understanding RESTful Status Codes: 200, 404, 500, etc",
        "Day 52: Error Handling in APIs: Returning proper status codes",
        "Day 53: CORS and API Security Basics",
        "Day 54: API Documentation with Swagger or OpenAPI",
        "Day 55: API Versioning and Best Practices",
        "Day 56: Recap and Practice: Document your API and add error handling",
      
      ]
    },
    {
      title: "Week 9: Authentication and Authorization",
      days: [
        "Day 57: Understanding Authentication vs. Authorization",
        "Day 58: Introduction to JWT: Why and how it works",
        "Day 59: Implementing JWT Authentication in Your API",
        "Day 60: OAuth Basics: What it is and how it works",
        "Day 61: Using OAuth with Google/Facebook in your API",
        "Day 62: Introduction to Role-Based Access Control",
        "Day 63: Recap and Practice: Implement authentication in your API",
       
      ]
    },
    {
      title: "Week 10: Security in Backend",
      days: [
        "Day 64: Securing API Endpoints: Best practices",
        "Day 65: Hashing Passwords: Using bcrypt",
        "Day 66: Implementing Sessions and Cookies",
        "Day 67: Protecting against common vulnerabilities: XSS, CSRF",
        "Day 68: Understanding HTTPS and SSL",
        "Day 69: Testing Security with Postman",
        "Day 70: Recap and Practice: Secure an existing API",
      
      ]
    },
    {
      title: "Week 11: Middleware and Error Handling",
      days: [
        "Day 71: What is Middleware? Concepts and use cases",
        "Day 72: Writing Custom Middleware: Logging requests",
        "Day 73: Using Middleware for Authentication",
        "Day 74: Advanced Error Handling Techniques",
        "Day 75: Implementing Logging in APIs: Using libraries",
        "Day 76: Handling Async Operations: Promises and async/await",
        "Day 77: Recap and Practice: Build custom middleware and add logging",
       
      ]
    },
    {
      title: "Week 12: Caching and File Handling",
      days: [
        "Day 78: Introduction to Caching: Why and how",
        "Day 79: Using Redis for Caching API Responses",
        "Day 80: Implementing Caching in API",
        "Day 81: Introduction to File Uploads in APIs",
        "Day 82: Handling File Uploads with Express/Django",
        "Day 83: Processing Uploaded Files: Image resizing, CSV parsing",
        "Day 84: Recap and Practice: Add caching and file handling to your API",
        
      ]
    },
    {
      title: "Week 13: Deployment and Scalability",
      days: [
        "Day 85: Overview of Deployment: Cloud vs. Self-hosting",
        "Day 86: Introduction to Docker: Why and how",
        "Day 87: Creating a Dockerfile for Your Application",
        "Day 88: Deploying with Docker Compose",
        "Day 89: Introduction to CI/CD Pipelines",
        "Day 90: Setting up a CI/CD Pipeline using GitHub Actions",
        "Day 91: Deploying on AWS/Heroku",
        
      ]
    },
    {
      title: "Capstone Project",
      days: [
        "Day 92: Understanding Load Balancers and Auto-scaling",
        "Day 93: Dockerize and deploy a simple API",
        "Day 94: Project Planning: Define scope and features",
        "Day 95: Setting Up the Repository and Initial Setup",
        "Day 96-98: Building APIs: Focus on CRUD functionality",
        "Day 99-101: Integrate Authentication and Caching",
        "Day 102-103: Test, Debug, and Prepare Documentation",
        "Day 104: Code Review and Feedback",
        "Day 105: Final Presentation Preparation",
      ]
    },
    {
      title: " Supplementary Topics",
      days: [
        "Day 106-110: Deep Dive into Supplimentary topics (GraphQL,Websockets, etc.)",
        "Day 111-115: Continue Capstone Project Development and Implement Optional Topics",
        " Day 116-118: Finalize Capstone Project, Polish Codebase.",
        "Day 119: Dry Run of the Final Presentation",
        "Day 120: Finalize Capstone Project, Polish Codebase.",
      ]
    },
  ]
},

    
    "Cybersecurity": {
      title: "Cybersecurity",
      weeks: [
        {
          title: "Week 1: Introduction to Cybersecurity",
          days: [
            "Day 1: Introduction to Cybersecurity: Understanding Threats, Vulnerabilities, and Risk.",
            "Day 2: History of Cybersecurity: Key Milestones and Events.",
            "Day 3: Overview of Cybersecurity Domains: Network Security, Application Security, Cloud Security.",
            "Day 4: Cybersecurity Terminology: Common terms (malware, ransomware, phishing).",
            "Day 5:  Introduction to the CIA Triad: Confidentiality, Integrity, and Availability.",
            "Day 6: Setting Up Your Home Lab: Virtualization tools and OS installations.",
            "Day 7: Introduction to Linux: Basic commands, file system navigation.",
            
          ]
        },
        {
          title: "Week 2: Networking Basics and Security",
          days: [
            "Day 8:  Networking Fundamentals: TCP/IP Model and OSI Model.",
            "Day 9:  IP Addressing and Subnetting.",
            "Day 10:  Introduction to Firewalls: Types, Functions, and Configuration.",
            "Day 11:  Network Devices: Routers, Switches, and Access Points.",
            "Day 12:  VPNs and Proxies: How they work and their security implications.",
            "Day 13: Packet Analysis with Wireshark: Capturing and analyzing traffic.",
            "Day 14: Network Security Best Practices: Hardening network devices.",
            
          ]
        },
        {
          title: "Week 3: Networking Basics and Security", 
          days: [
            "Day 15:   Introduction to Operating System Security: Hardening Windows and Linux.",
            "Day 16:   Windows Security Features: Group Policies, Windows Defender.",
            "Day 17:  Linux Security Features: IPTables, SELinux.",
            "Day 18:   Malware Analysis: Identifying and analyzing malware.",
            "Day 19:   Endpoint Detection and Response (EDR) Tools.",
            "Day 20: Introduction to Syslog: Centralized logging.",
            "Day 21: Setting Up a Syslog Server: Logging from various devices.",
            
          ]
        },
        {
          title: "Week 4: Cryptography Basics", 
          days: [
            "Day 22:    Introduction to Cryptography: Symmetric vs. Asymmetric encryption.",
            "Day 23:  Understanding Hashing: MD5, SHA-1, SHA-256.",
            "Day 24:  Public Key Infrastructure (PKI): Certificates, SSL/TLS.",
            "Day 25:   Implementing Encryption in Windows and Linux.",
            "Day 26:  Understanding Steganography: Hiding data in plain sight.",
            "Day 27: Real-world Cryptography Applications: VPN, HTTPS, digital signatures.",
            "Day 28: Recap and Practice: Using OpenSSL for encryption tasks.",
            
          ]
        },
        {
          title: "Week 5: Threat Intelligence and Analysis", 
          days: [
            "Day 29:    Introduction to Threat Intelligence: What it is and why it's important.",
            "Day 30:  Understanding Threat Hunting: Techniques and tools.",
            "Day 31:  Gathering Threat Intelligence: OSINT (Open-Source Intelligence).",
            "Day 32:   MITRE ATT&CK Framework: Understanding tactics and techniques.",
            "Day 33:  Analyzing Threat Intelligence Feeds: Integrating with SIEM.",
            "Day 34:  Introduction to STIX and TAXII for Threat Information Sharing.",
            "Day 35: Recap and Practice: Hands-on with OSINT tools.",
            
          ]
        },

        {
          title: "Week 6: Security Information and Event Management (SIEM)", 
          days: [
            "Day 36:   Introduction to SIEM: What it is and its role in SOC.",
            "Day 37:  Overview of SIEM Platforms: Splunk, QRadar, Elastic Stack.",
            "Day 38:  Setting Up a SIEM Environment: Creating a home lab.",
            "Day 39:   Adding Log Sources to SIEM: Windows, Linux, and Network devices.",
            "Day 40:  Writing Custom Correlation Rules in SIEM.",
            "Day 41:  Managing and Analyzing Events: Alerts and offenses.",
            "Day 42: Recap and Practice: Detecting specific attacks using SIEM.",
            
          ]
        },

        {
          title: "Week 7: Web Application Security", 
          days: [
            "Day 43:    Understanding Web Application Architecture.",
            "Day 44:  Common Web Vulnerabilities: OWASP Top 10 Overview.",
            "Day 45:  SQL Injection: Understanding and mitigating.",
            "Day 46:    Cross-Site Scripting (XSS): Understanding and mitigating.",
            "Day 47:  Cross-Site Request Forgery (CSRF): Understanding and mitigating.",
            "Day 48:   Using Burp Suite for Web Application Testing.",
            "Day 49:  Recap and Practice: Vulnerability scanning with OWASP ZAP.",
            
          ]
        },

        {
          title: "Week 8: Incident Response and Forensics", 
          days: [
            "Day 50:    Introduction to Incident Response: NIST framework.",
            "Day 51:  Incident Response Planning: Creating an IR plan.",
            "Day 52:  Digital Forensics: Understanding the basics.",
            "Day 53:    Forensic Imaging: Using tools like FTK Imager.",
            "Day 54:  Analyzing Disk Images: Extracting evidence.",
            "Day 55: Memory Forensics: Using Volatility. ",
            "Day 56:  Recap and Practice: Create a simulated incident and respond.",
            
          ]
        },

        {
          title: "Week 9: Ethical Hacking and Penetration Testing", 
          days: [
            "Day 57:    Introduction to Ethical Hacking: Understanding the legal aspects.",
            "Day 58:  Penetration Testing Methodology: Phases of a penetration test.",
            "Day 59:  Using Nmap for Network Scanning.",
            "Day 60:  Vulnerability Scanning with Nessus.",
            "Day 61:  Introduction to Metasploit: Exploiting known vulnerabilities.",
            "Day 62:  Post-Exploitation Techniques: Maintaining access. ",
            "Day 63:  Recap and Practice: Conduct a simple penetration test on a vulnerable VM.",
            
          ]
        },

        {
          title: "Week 10: Cloud Security Basics", 
          days: [
            "Day 64:   Introduction to Cloud Computing: Understanding IaaS, PaaS, SaaS.",
            "Day 65:  Cloud Security Overview: Key concerns and threats.",
            "Day 66:  Identity and Access Management (IAM) in the Cloud.",
            "Day 67: Securing Data in the Cloud: Encryption and storage.",
            "Day 68:   Introduction to AWS Security: Key services (IAM, S3, CloudTrail).",
            "Day 69:  Using Cloud Security Tools: GuardDuty, Security Hub. ",
            "Day 70:   Recap and Practice: Setting up a secure AWS environment.",
            
          ]
        },

        {
          title: "Week 11: Advanced Threats and Vulnerability Management", 
          days: [
            "Day 71:    Project Planning: Define scope and objectives.",
            "Day 72:   Project Setup: Setting up the lab and environment.",
            "Day 73: Project Development: Implementing key features.",
            "Day 74:    Testing and Debugging: Ensuring functionality.",
            "Day 75:    Documentation and Final Adjustments.",
            "Day 76:   Presentation Preparation: Creating slides and demo.",
            "Day 77:   Final Project Presentation and Wrap-up.",
            
          ]
        },

        {
          title: "Final Project and Presentation", 
          days: [
            "Day 78:    Advanced Persistent Threats (APT): Understanding tactics.",
            "Day 79-80:   Vulnerability Management Lifecycle.",
            "Day 81-85:  Patch Management Best Practices.",
            "Day 86-90:    Conducting Vulnerability Assessments.",
            "Day 91-93:    Zero-Day Exploits: Understanding and defending.",
            "Day 94-94:  Buffer Overflow Attacks: Understanding and mitigating.",
            "Day 96:   Recap and Practice: Simulate a vulnerability assessment.",
            
          ]
        },

      ]
    },
    "Soft-Skills": {
      title: "Soft Skills",
      weeks: [
        {
          title: "Week 1: Introduction to Soft Skills",
          days: [
            "Day 1-2: Overview of soft skills and their importance in personal and professional life.",
            "Day 3-4: Understanding self-awareness and self-assessment.",
            "Day 5: Setting personal and professional goals.",
            "Day 6-7: Introduction to effective communication basics."
          ]
        },
        {
          title: "Week 2: Effective Communication",
          days: [
            "Day 1-2: Verbal communication skills: Tone, clarity, and conciseness.",
            "Day 3-4: Non-verbal communication: Body language, facial expressions, and gestures.",
            "Day 5: Listening skills: Active listening and paraphrasing.",
            "Day 6-7: Role-playing and practical exercises on communication."
          ]
        },
        {
          title: "Week 3: Emotional Intelligence (EQ)",
          days: [
            "Day 1-2: Understanding emotional intelligence and its impact.",
            "Day 3-4: Self-regulation: Managing emotions and stress.",
            "Day 5: Empathy: Understanding others' emotions.",
            "Day 6-7: Building resilience through practical exercises."
          ]
        },
        {
          title: "Week 4: Teamwork and Collaboration",
          days: [
            "Day 1-2: Understanding team dynamics and roles.",
            "Day 3-4: Building trust and rapport within a team.",
            "Day 5: Problem-solving and conflict resolution in teams.",
            "Day 6-7: Group activities to enhance collaboration."
          ]
        },
        {
          title: "Week 5: Public Speaking and Presentation Skills",
          days: [
            "Day 1-2: Fundamentals of public speaking: Structuring a speech.",
            "Day 3-4: Overcoming stage fear and building confidence.",
            "Day 5: Use of visual aids and storytelling techniques.",
            "Day 6-7: Practice sessions and feedback."
          ]
        },
        {
          title: "Week 6: Time Management and Productivity",
          days: [
            "Day 1-2: Prioritization techniques: Time management matrix.",
            "Day 3-4: Goal setting and action planning.",
            "Day 5: Dealing with procrastination and distractions.",
            "Day 6-7: Tools and apps for productivity and time tracking."
          ]
        },
        {
          title: "Week 7: Conflict Resolution and Negotiation",
          days: [
            "Day 1-2: Understanding conflict types and their roots.",
            "Day 3-4: Negotiation techniques and finding win-win solutions.",
            "Day 5: Handling difficult conversations with ease.",
            "Day 6-7: Role-plays and case studies on conflict scenarios."
          ]
        },
        {
          title: "Week 8: Personal Branding and Networking",
          days: [
            "Day 1-2: Building a strong personal brand: Online and offline.",
            "Day 3-4: Networking skills: Building meaningful connections.",
            "Day 5: Elevator pitch: Crafting and delivering it effectively.",
            "Day 6-7: Final assessment, feedback, and creating a personal development plan."
          ]
        }

      ]
    }
  };