import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold text-orange-500 dark:text-orange-400">
            Dashboard
          </h2>
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200 mt-2">
            Create and Start your AI Mockup Interview
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 my-6 gap-6">
          <AddNewInterview />
        </div>

        <InterviewList />
      </div>
    </div>
  )
}

export default Dashboard
