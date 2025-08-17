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

    // Array of nav items for cleaner mapping
    const navItems = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Questions", href: "/dashboard/questions" },
        { name: "Upgrade", href: "/dashboard/upgrade" },
        { name: "How it Works?", href: "/dashboard/how" },
    ]

    return (
        <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
            {/* Logo */}
            <Link href="/dashboard">
                <Image
                    src="/logo.svg"
                    alt="Company Logo"
                    width={100}           // fixed width
                    height={0}            // let height auto adjust
                    style={{ height: "auto" }}
                    priority
                />
            </Link>

            {/* Navigation */}
            <ul className="hidden md:flex gap-6">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                        <li
                            className={`
                                cursor-pointer
                                hover:text-primary hover:font-bold transition-all
                                ${path === item.href ? "text-primary font-bold" : ""}
                            `}
                        >
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>

            {/* User Button */}
            <UserButton />
        </div>
    )
}

export default Header
