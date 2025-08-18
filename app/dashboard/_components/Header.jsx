"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
  const path = usePathname()

  useEffect(() => {
    console.log(path)
  }, [path])

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Questions", href: "/dashboard/questions" },
    { name: "Upgrade", href: "/dashboard/upgrade" },
    { name: "How it Works?", href: "/dashboard/how" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-gray-900 shadow-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between font-sans">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Company Logo"
            width={24}
            height={24}
            priority
          />
          <span className="text-lg font-extrabold text-orange-500 dark:text-orange-400">AI Interview Mocker</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium transition-all duration-300 ${
                path === item.href
                  ? 'text-orange-500 dark:text-orange-400 font-semibold'
                  : 'text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <UserButton />
      </div>
    </header>
  )
}

export default Header
