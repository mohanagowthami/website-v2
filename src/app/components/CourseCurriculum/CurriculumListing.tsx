'use client';
import React, { useState } from 'react';
import { CurriculumHeader } from './CurriculumHeader';

const CurriculumListing = () => {
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([]);

  const weeks = [
    {
      title: "Week 1: HTML5 & CSS3 Fundamentals",
      days: [
        "Day 1: Introduction to HTML5, Basic Tags ('<div>', '<p>', '<a>', '<img>')",
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
  ];

  const toggleWeek = (weekIndex: number) => {
    setExpandedWeeks(prev =>
      prev.includes(weekIndex)
        ? prev.filter(i => i !== weekIndex)
        : [...prev, weekIndex]
    );
  };

  return (
    <div className="w-full">
      <CurriculumHeader />
      <div className=" max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Full Stack Header */}
        <div className="flex justify-center items-center gap-4 mb-8">
    <div className="flex items-center gap-4">
      <h1 className="text-2xl font-bold text-gray-800">Full Stack</h1>
      <img 
        src="/your-icon-path.png" 
        alt="Curriculum icon"
        className="w-11 h-11"
      />
    </div>
  </div>
       
      <div className="  max-w-full mx-auto ml-15 mr-15">
     
        <h1 className="text-[22px]  text-[#344053] mb-6">Frontend-</h1>
        
        <div className="space-y-4">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="border border-gray-200 rounded-lg overflow-hidden">
              <div 
                className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer gap-3"
                onClick={() => toggleWeek(weekIndex)}
              >
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    expandedWeeks.includes(weekIndex) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <h2 className="text-xl text-[16px] text-[#1D2838] flex-1">{week.title}</h2>
              </div>
              
              {expandedWeeks.includes(weekIndex) && (
                <ul className="p-4 space-y-3 border-t border-gray-200">
                  {week.days.map((day, dayIndex) => (
                    <li key={dayIndex} className="text-[#475466] text-[14px] pl-2">
                      {day}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CurriculumListing;