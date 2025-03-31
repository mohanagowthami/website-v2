"use client";
import React, { useState } from 'react';

interface Week {
  title: string;
  days: string[];
}

interface Course {
  title: string;
  weeks: Week[];
}

interface CoursesData {
  [key: string]: Course;
}

const CurriculumListing: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<string | null>(null);
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  const coursesData: CoursesData = {
    frontend: {
      title: "Frontend",
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
          days: []
        }
      ]
    },
    backend: {
      title: "Backend",
      weeks: [
        {
          title: "Week 1: Node.js Fundamentals",
          days: [
            "Day 1: Introduction to Node.js",
            "Day 2: Working with Express.js",
            "Day 3: REST API Basics"
          ]
        }
      ]
    },
    softskills: {
      title: "Soft Skills",
      weeks: [
        {
          title: "Week 1: Communication Skills",
          days: [
            "Day 1: Effective Communication",
            "Day 2: Public Speaking Basics"
          ]
        }
      ]
    }
  };

  const toggleCourse = (courseKey: string) => {
    const newCourse = activeCourse === courseKey ? null : courseKey;
    setActiveCourse(newCourse);
    setActiveWeek(null);
  };

  const toggleWeek = (weekIndex: number) => {
    setActiveWeek(activeWeek === weekIndex ? null : weekIndex);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {Object.entries(coursesData).map(([courseKey, course]) => (
        <div key={courseKey} className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div 
            className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            onClick={() => toggleCourse(courseKey)}
          >
            <h2 className="text-lg font-semibold text-gray-800">{course.title}</h2>
            <span className="text-gray-600 font-bold text-xl">
              {activeCourse === courseKey ? '−' : '+'}
            </span>
          </div>
          
          {activeCourse === courseKey && (
            <div className="p-2 bg-white">
              {course.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="mb-2 border border-gray-100 rounded-md">
                  <div 
                    className="flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                    onClick={() => toggleWeek(weekIndex)}
                  >
                    <h3 className="text-md font-medium text-gray-700">{week.title}</h3>
                    <span className="text-gray-600 font-bold">
                      {activeWeek === weekIndex ? '−' : '+'}
                    </span>
                  </div>
                  
                  {activeWeek === weekIndex && (
                    <ul className="p-3 space-y-2 bg-white">
                      {week.days.map((day, dayIndex) => (
                        <li key={dayIndex} className="py-2 px-3 border-b border-gray-100 last:border-b-0 text-gray-600">
                          {day}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CurriculumListing;