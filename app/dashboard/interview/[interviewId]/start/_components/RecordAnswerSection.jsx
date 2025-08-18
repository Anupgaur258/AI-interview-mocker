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
    continuous: true,
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
    <div className="flex items-center justify-center flex-col p-6 font-sans">
      <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md relative">
        <Image
          src="/webcam.png"
          width={200}
          height={200}
          className="absolute opacity-10"
          alt="webcam-overlay"
        />
        <Webcam
          mirrored
          audio
          style={{ height: 400, width: 400, zIndex: 10, borderRadius: 12 }}
        />
      </div>

      <Button
        disabled={loading}
        className={`my-6 text-lg px-8 py-3 rounded-xl shadow-md transition-all duration-300 ${
          isRecording
            ? 'bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300 dark:focus:ring-red-900'
            : 'bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-900'
        }`}
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <span className="flex items-center gap-2 text-white">
            <StopCircle className="h-5 w-5" /> Stop Recording
          </span>
        ) : (
          <span className="flex items-center gap-2 text-white">
            <Mic className="h-5 w-5" /> Start Recording
          </span>
        )}
      </Button>

      <div className="w-full max-w-xl text-sm bg-green-50 dark:bg-green-900/20 p-5 rounded-xl shadow-md border border-green-500/20">
        <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
          🗣️ Your Answer:
        </p>
        <p className="text-black dark:text-white">
          {userAnswer || "Nothing recorded yet..."}
        </p>
      </div>

      {error && (
        <div className="mt-4 text-red-600 dark:text-red-400 font-medium">
          Error: {error.message}
        </div>
      )}
    </div>
  )
}

export default RecordAnswerSection
