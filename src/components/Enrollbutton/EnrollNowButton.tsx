'use client';

import { useRouter } from 'next/navigation';

const CoursePage = () => {
  const router = useRouter();

  const handleEnroll = () => {
    router.push("/Enroll"); // Now scrolls to that section
  };

  return (
  
    
    <div>
      <button onClick={handleEnroll}>
        EnrollNow
      </button>

      {/* OR use a regular anchor link: */}
      {/* <a href="/enroll#enroll-section">Go to Enroll Section</a> */}
    </div>
    
  );
};

export default CoursePage;
