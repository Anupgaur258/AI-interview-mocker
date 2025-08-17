"use client";
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id));

      console.log("Fetched Interviews:", result);
      setInterviewList(result);
    } catch (error) {
      console.error("Error fetching interviews:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="font-medium text-xl mb-4">Previous Mock Interviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {loading ? (
          // Skeleton loaders while fetching
          [1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[100px] w-full bg-gray-200 animate-pulse rounded-lg"
            />
          ))
        ) : interviewList?.length > 0 ? (
          // Render Interview Cards
          interviewList.map((interview, index) => (
            <InterviewItemCard key={index} interview={interview} />
          ))
        ) : (
          // Show message if list is empty
          <p className="text-gray-500 col-span-3">No interviews found.</p>
        )}
      </div>
    </div>
  );
}

export default InterviewList;
