import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Header from './dashboard/_components/Header';
import { AtomIcon, Edit, Share2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 font-sans">
      <Image
        src="/grid.svg"
        className="absolute inset-0 z-[-10] w-full h-full object-cover opacity-10"
        width={1200}
        height={300}
        alt="Background grid"
      />
      <Header />
      <section className="relative z-10 py-24 px-6 mx-auto max-w-7xl text-center">
        <div className="max-w-4xl mx-auto">
          <a
            href="#"
            className="inline-flex items-center gap-3 py-2 px-6 mb-12 text-sm font-medium text-black bg-white/95 backdrop-blur-lg rounded-full shadow-md hover:bg-orange-50 dark:text-white dark:bg-gray-800/95 dark:hover:bg-gray-700 transition-all duration-300"
            role="alert"
          >
            <span className="text-xs bg-orange-500 text-white px-4 py-1.5 rounded-full">
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
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-black md:text-6xl lg:text-7xl dark:text-white">
            Ace Your Interviews with AI-Powered Coaching
          </h1>
          <p className="mb-12 text-lg font-medium text-gray-700 lg:text-xl dark:text-gray-200 max-w-2xl mx-auto">
            Prepare smarter, not harder. Our AI-driven platform provides personalized feedback to help you shine in any interview.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center py-4 px-10 text-base font-semibold text-white bg-orange-500 rounded-xl shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900 transition-all duration-300"
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
            
          </div>
          <div className="mt-16 text-center">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Featured In
            </span>
            <div className="mt-8 flex flex-wrap justify-center gap-10 sm:gap-14">
              <a
                href="#"
                className="text-green-600 hover:text-green-800 dark:hover:text-green-400 transition duration-300"
              >
                <svg
                  className="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-green-600 hover:text-green-800 dark:hover:text-green-400 transition duration-300"
              >
                <svg
                  className="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-green-600 hover:text-green-800 dark:hover:text-green-400 transition duration-300"
              >
                <svg
                  className="h-10 w-10"
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
      <section className="py-16 px-6 mx-auto max-w-7xl text-center bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-extrabold text-black dark:text-white">
          How It Works
        </h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-200">
          Prepare for your dream job in 3 simple steps
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="#"
            className="block rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-green-500/20 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
          >
            <AtomIcon className="h-12 w-12 text-orange-500 dark:text-orange-400" />
            <h3 className="mt-4 text-xl font-semibold text-black dark:text-white">
              Create Your Practice Session
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Input your job role and customize your mock interview with our AI-driven prompts tailored to your needs.
            </p>
          </a>
          <a
            href="#"
            className="block rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-green-500/20 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
          >
            <Edit className="h-12 w-12 text-orange-500 dark:text-orange-400" />
            <h3 className="mt-4 text-xl font-semibold text-black dark:text-white">
              Refine Your Responses
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Practice with real-time AI feedback to polish your answers and improve your confidence.
            </p>
          </a>
          <a
            href="#"
            className="block rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-green-500/20 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
          >
            <Share2 className="h-12 w-12 text-orange-500 dark:text-orange-400" />
            <h3 className="mt-4 text-xl font-semibold text-black dark:text-white">
              Share Your Progress
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Export your practice sessions or share your improvement metrics with mentors or peers.
            </p>
          </a>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/sign-in"
            className="inline-flex items-center justify-center py-4 px-10 text-base font-semibold text-white bg-orange-500 rounded-xl shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900 transition-all duration-300"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}
