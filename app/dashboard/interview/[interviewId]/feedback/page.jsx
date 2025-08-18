"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function Feedback({params}) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  }

  return (
    <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        {feedbackList?.length === 0 ? (
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            No Interview Feedback Record Found
          </h2>
        ) : (
          <>
            <h2 className="text-4xl font-extrabold text-orange-500 dark:text-orange-400">
              Congratulations!
            </h2>
            <h2 className="text-2xl font-semibold text-black dark:text-white mt-2">
              Here is your interview feedback
            </h2>
            <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-4">
              Find below interview questions with correct answers, your answers, and feedback for improvement
            </h2>
            {feedbackList && feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-6">
                <CollapsibleTrigger className="p-3 bg-white dark:bg-gray-800 rounded-xl flex justify-between items-center text-left gap-4 w-full shadow-md hover:bg-orange-50 dark:hover:bg-gray-700 hover:border-green-500/20 transition-all duration-300">
                  <span className="text-black dark:text-white">{item.question}</span>
                  <ChevronsUpDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-3 mt-2">
                    <h2 className="p-3 border border-gray-200 rounded-xl bg-red-50 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400 shadow-sm">
                      <strong>Rating:</strong> {item.rating}
                    </h2>
                    <h2 className="p-3 border border-gray-200 rounded-xl bg-white text-sm text-black dark:bg-gray-800 dark:text-white shadow-sm">
                      <strong>Your Answer:</strong> {item.userAns}
                    </h2>
                    <h2 className="p-3 border border-gray-200 rounded-xl bg-green-50 text-sm text-green-600 dark:bg-green-900/20 dark:text-green-400 shadow-sm">
                      <strong>Correct Answer:</strong> {item.correctAns}
                    </h2>
                    <h2 className="p-3 border border-gray-200 rounded-xl bg-orange-50 text-sm text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 shadow-sm">
                      <strong>Feedback:</strong> {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </>
        )}
        <Button
          onClick={() => router.replace('/dashboard')}
          className="mt-8 rounded-xl bg-orange-500 text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-900 transition-all duration-300"
        >
          Go Home
        </Button>
      </div>
    </div>
  )
}

export default Feedback
