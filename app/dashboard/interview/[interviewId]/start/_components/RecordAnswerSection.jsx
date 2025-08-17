"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text'
import { Mic, StopCircle } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModal'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState('')
  const { user } = useUser()
  const [loading, setLoading] = useState(false)

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,        // capture longer answers
    useLegacyResults: false
  })

  useEffect(() => {
    if (results?.length > 0) {
      const transcript = results.map(r => r.transcript).join(' ')
      setUserAnswer(prev => prev + ' ' + transcript)
    }
  }, [results])

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText()
    } else {
      setUserAnswer('')
      setResults([])
      try {
        await startSpeechToText()
      } catch (err) {
        console.error("🎤 Microphone start error:", err)
        toast.error("Failed to start recording. Check mic permissions.")
      }
    }
  }

  const UpdateUserAnswer = async () => {
    if (!userAnswer || userAnswer.length < 5) return
    setLoading(true)
    try {
      const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, User Answer: ${userAnswer}. Return JSON with 'rating' and 'feedback'.`
      const result = await chatSession.sendMessage(feedbackPrompt)
      const rawText = await result.response.text()
      const cleaned = rawText.replace('```json', '').replace('```', '')
      const jsonFeedback = JSON.parse(cleaned)

      await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: jsonFeedback?.feedback,
        rating: jsonFeedback?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-yyyy')
      })

      toast.success('✅ Answer saved & feedback added.')
      setUserAnswer('')
      setResults([])
    } catch (err) {
      console.error("❌ Feedback parsing failed:", err)
      toast.error("Something went wrong during feedback.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isRecording) UpdateUserAnswer()
  }, [isRecording])

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col mt-10 justify-center items-center bg-black rounded-lg p-5 relative'>
        <Image src='/webcam.png' width={200} height={200} className='absolute opacity-20' alt="webcam-overlay" />
        <Webcam
          mirrored
          audio
          style={{ height: 400, width: 400, zIndex: 10, borderRadius: 10 }}
        />
      </div>

      <Button
        disabled={loading}
        variant="default"
        className={`my-8 text-lg px-6 py-3 ${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-green-600 hover:bg-green-700"}`}
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <span className='flex items-center gap-2 text-white'>
            <StopCircle /> Stop Recording
          </span>
        ) : (
          <span className='flex items-center gap-2 text-white'>
            <Mic /> Start Recording
          </span>
        )}
      </Button>

      <div className='w-full max-w-xl text-sm bg-gray-100 p-4 rounded-md shadow'>
        <p className='text-gray-600 mb-2'>🗣️ <strong>Your Answer:</strong></p>
        <p>{userAnswer || "Nothing recorded yet..."}</p>
      </div>

      {error && <div className='mt-4 text-red-600 font-medium'>Error: {error.message}</div>}
    </div>
  )
}

export default RecordAnswerSection
