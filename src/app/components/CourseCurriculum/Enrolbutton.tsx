'use client';
import { useRouter } from 'next/navigation';

const CoursePage = () => {
  const router = useRouter();

  const handleEnroll = () => {
    router.push("/enrollSession"); // Redirects to the EnrollPage
  };

  return (
    <div className=" ">
     
      
      <button
        onClick={handleEnroll}
        
      >
        EnrollNow
      </button>
    </div>
  );
};

export default CoursePage;
