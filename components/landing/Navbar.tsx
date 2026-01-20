'use client'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo + Platform Name */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/bms-logo.png"
                        alt="BMS logo"
                        width={90}
                        height={90}

                    />
                    <div className="flex flex-col leading-tight ms-[-3.5rem]">
                        <span className="text-lg font-bold text-foreground">
                            BMS
                        </span>
                        <span className="text-xs text-muted-foreground">
                            Business Management Platform
                        </span>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                    <Link href="#features" className="text-sm hover:text-teal-400 cursor-pointer transition">
                        Features
                    </Link>
                    <Link href="#benefits" className="text-sm hover:text-teal-400 cursor-pointer transition">
                        Benefits
                    </Link>
                    <Link href="#pricing" className="text-sm hover:text-teal-400 cursor-pointer transition">
                        Pricing
                    </Link>
                    <ThemeToggle />
                    <Button size="lg" className='py-6 px-8 bg-teal-500 text-white cursor-pointer hover:bg-teal-600'>Get Started</Button>
                </div>

            </div>
        </nav>
    )
}
