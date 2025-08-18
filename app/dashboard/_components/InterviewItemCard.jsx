import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {
  const router = useRouter();

  const onStart = () => {
    router.push('/dashboard/interview/' + interview?.mockId)
  }

  const onFeedbackPress = () => {
    router.push('/dashboard/interview/' + interview.mockId + "/feedback")
  }

  return (
    <div className="border border-gray-200 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-lg hover:border-green-500/20 transition-all duration-300 font-sans">
      <h2 className="text-lg font-bold text-orange-500 dark:text-orange-400">
        {interview?.jobPosition}
      </h2>
      <h2 className="text-sm font-medium text-gray-700 dark:text-gray-200">
        {interview?.jobExperience} Years of Experience
      </h2>
      <h2 className="text-xs text-gray-500 dark:text-gray-400">
        Created At: {interview.createdAt}
      </h2>
      <div className="flex justify-between mt-4 gap-4">
        <Button
          size="sm"
          variant="outline"
          className="w-full rounded-xl border-gray-200 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-green-300 transition-all duration-300"
          onClick={onFeedbackPress}
        >
          Feedback
        </Button>
        <Button
          size="sm"
          className="w-full rounded-xl bg-orange-500 text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-900 transition-all duration-300"
          onClick={onStart}
        >
          Start
        </Button>
      </div>
    </div>
  )
}

export default InterviewItemCard
