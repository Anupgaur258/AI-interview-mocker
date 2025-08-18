"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({params}) {
  const [interviewData, setInterviewData] = useState()
  const [webCamEnabled, setWebCamEnabled] = useState()

  useEffect(() => {
    console.log(params.interviewId)
    GetInterviewDetails()
  }, [])

  const GetInterviewDetails = async () => {
    const result = await db.select().from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId))

    setInterviewData(result[0])
  }

  return (
    <div className="my-6 p-6 font-sans">
      <h2 className="text-3xl font-extrabold text-orange-500 dark:text-orange-400">
        Let's Get Started
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col p-6 rounded-xl border border-gray-200 bg-white dark:bg-gray-900 shadow-md">
            <h2 className="text-lg font-semibold text-black dark:text-white">
              Job Role/Job Position: {interviewData?.jobPosition}
            </h2>
            <h2 className="text-lg font-semibold text-black dark:text-white">
              Job Description/Tech Stack: {interviewData?.jobDesc}
            </h2>
            <h2 className="text-lg font-semibold text-black dark:text-white">
              Years of Experience: {interviewData?.jobExperience}
            </h2>
          </div>
          <div className="p-6 border border-green-500/20 rounded-xl bg-green-50 dark:bg-green-900/20 shadow-md">
            <h2 className="flex gap-2 items-center text-orange-500 dark:text-orange-400 font-medium">
              <Lightbulb className="h-5 w-5" />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-sm text-green-600 dark:text-green-400 font-medium">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
        <div>
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{ height: 300, width: 300, borderRadius: 12 }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-6 p-20 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 shadow-md" />
              <Button
                variant="ghost"
                className="w-full rounded-xl text-orange-500 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 border border-gray-200 shadow-md transition-all duration-300"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <Link href={'/dashboard/interview/' + params.interviewId + '/start'}>
          <Button className="rounded-xl bg-orange-500 text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-900 transition-all duration-300">
            Start Interview
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Interview
