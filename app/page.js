import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Header from './dashboard/_components/Header';
import { AtomIcon, Edit, Share2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <Image
        src="/grid.svg"
        className="absolute inset-0 z-[-10] w-full h-full object-cover opacity-20"
        width={1200}
        height={300}
        alt="Background grid"
      />
      <Header />
      <section className="relative z-10 py-20 px-4 mx-auto max-w-7xl text-center">
        <div className="max-w-4xl mx-auto">
          <a
            href="#"
            className="inline-flex items-center gap-3 py-2 px-5 mb-10 text-sm font-semibold text-gray-800 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:text-gray-200 dark:bg-gray-800/90 dark:hover:bg-gray-700 transition-all"
            role="alert"
          >
            <span className="text-xs bg-indigo-500 text-white px-4 py-1.5 rounded-full">
              New
            </span>
            <span>Discover cutting-edge AI interview prep tools</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Ace Your Interviews with AI-Powered Coaching
          </h1>
          <p className="mb-12 text-lg font-medium text-gray-600 lg:text-xl dark:text-gray-300 max-w-2xl mx-auto">
            Prepare smarter, not harder. Our AI-driven platform provides personalized feedback to help you shine in any interview.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center py-3 px-8 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900 transition-all"
            >
              Begin Your Journey
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://youtu.be/Q5LM985yUmQ"
              className="inline-flex items-center justify-center py-3 px-8 text-base font-semibold text-gray-900 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-all"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              See It in Action
            </a>
          </div>
          <div className="mt-16 text-center">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Featured In
            </span>
            <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-12">
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-gray-300 transition"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-gray-300 transition"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-gray-300 transition"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 mx-auto max-w-7xl text-center bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          How It Works
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Prepare for your dream job in 3 simple steps
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="#"
            className="block rounded-xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-indigo-500/20 transition-all dark:bg-gray-800 dark:border-gray-700"
          >
            <AtomIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Create Your Practice Session
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Input your job role and customize your mock interview with our AI-driven prompts tailored to your needs.
            </p>
          </a>
          <a
            href="#"
            className="block rounded-xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-indigo-500/20 transition-all dark:bg-gray-800 dark:border-gray-700"
          >
            <Edit className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Refine Your Responses
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Practice with real-time AI feedback to polish your answers and improve your confidence.
            </p>
          </a>
          <a
            href="#"
            className="block rounded-xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-indigo-500/20 transition-all dark:bg-gray-800 dark:border-gray-700"
          >
            <Share2 className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Share Your Progress
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Export your practice sessions or share your improvement metrics with mentors or peers.
            </p>
          </a>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/sign-in"
            className="inline-flex items-center justify-center py-3 px-8 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900 transition-all"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}
