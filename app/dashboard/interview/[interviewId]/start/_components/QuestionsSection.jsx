import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeach = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    } else {
      alert('Sorry, Your browser does not support text to speech')
    }
  }

  const questionList = Array.isArray(mockInterviewQuestion) ? mockInterviewQuestion : [];

  return questionList.length > 0 && (
    <div className="p-6 border border-gray-200 bg-white dark:bg-gray-900 rounded-xl shadow-md my-6 font-sans">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {questionList.map((question, index) => (
          <h2
            key={index}
            className={`p-2 border border-gray-200 rounded-full text-sm md:text-base text-center cursor-pointer transition-all duration-300 ${
              activeQuestionIndex === index
                ? 'bg-orange-500 text-white'
                : 'bg-white text-black dark:bg-gray-800 dark:text-white hover:bg-orange-50 dark:hover:bg-gray-700 hover:border-green-500/20'
            }`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>
      <h2 className="my-6 text-lg md:text-xl font-semibold text-black dark:text-white">
        {questionList[activeQuestionIndex]?.question}
      </h2>
      <Volume2
        className="h-6 w-6 text-orange-500 dark:text-orange-400 cursor-pointer hover:text-orange-600 dark:hover:text-orange-300 transition-all duration-300"
        onClick={() => textToSpeach(questionList[activeQuestionIndex]?.question)}
      />
      <div className="border border-gray-200 rounded-xl p-5 bg-green-50 dark:bg-green-900/20 mt-8">
        <h2 className="flex gap-2 items-center text-orange-500 dark:text-orange-400 font-medium">
          <Lightbulb className="h-5 w-5" />
          <strong>Note:</strong>
        </h2>
        <h2 className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium">
          {process.env.NEXT_PUBLIC_QUESTION_NOTE}
        </h2>
      </div>
    </div>
  )
}

export default QuestionsSection
