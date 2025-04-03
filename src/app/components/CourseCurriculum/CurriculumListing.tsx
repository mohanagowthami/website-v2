'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { coursesData } from './CurriculumSectionContent';
import { CurriculumHeader } from './CurriculumHeader';
import Image from "next/image";

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
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const programFromUrl = pathname.split('/')[1];
    if (programFromUrl in coursesData) {
      setActiveCourse(programFromUrl);
    }
  }, [pathname]);

  const toggleWeek = (weekIndex: number) => {
    setExpandedWeeks(prev =>
      prev.includes(weekIndex)
        ? prev.filter(i => i !== weekIndex)
        : [...prev, weekIndex]
    );
  };

  if (!activeCourse || !coursesData[activeCourse]) {
    return (
      <div className="w-full max-w-3xl mx-auto p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Please select a program to view its curriculum</h2>
      </div>
    );
  }

  const course = coursesData[activeCourse];
  const week12Index = course.weeks.findIndex(week => week.title.includes('Week 12'));

  return (
    <div className="w-full">
      <CurriculumHeader />
      <h1 className=" text-[33px] font-semibold flex justify-center text-gray-800 mb-10"> Full-Stack</h1>

      <div className="max-w-full font-semibold mx-auto ml-15 mr-15 mb-42">
        <h1 className="text-[35px] font-normal flex justify-center text-black mt-20 mb-10">{course.title}</h1>
        

{/* Add the images here */}
<div className="flex justify-center gap-6">
<Image src="/react-svgrepo-com.svg" alt="react icon" width={48} height={48} />
<Image src="/coding.png" alt="coding icon" width={48} height={48} />
<Image src="/node-svgrepo-com.svg" alt="javascript icon" width={48} height={48} />
<Image src="/nextjs-svgrepo-com.svg" alt="nextjs icon" width={48} height={48} />

</div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Frontend -</h2>
        <div className="space-y-4">
          {course.weeks.map((week, weekIndex) => (
            <React.Fragment key={weekIndex}>
              {/* Add Backend heading after Week 12 */}
              {weekIndex === week12Index + 1 && (
                <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Backend -</h2>
              )}
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div
                  className="flex items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer gap-3"
                  onClick={() => toggleWeek(weekIndex)}
                >
                  <svg
                    className={`w-5 h-5 text-blue-400 transform transition-transform duration-200 ${expandedWeeks.includes(weekIndex) ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <h2 className="text-[16px] text-[#1D2838] flex-1">{week.title}</h2>
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
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumListing;