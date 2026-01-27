'use client'

import { LogOut, Menu, X, CheckSquare, Package, Megaphone, TrendingUp, User } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const workerNavItems = [
    {
        href: '/portal/worker/tasks',
        label: 'My Tasks',
        icon: CheckSquare,
    },
    {
        href: '/portal/worker/inventory',
        label: 'Inventory',
        icon: Package,
    },
    {
        href: '/portal/worker/announcements',
        label: 'Announcements',
        icon: Megaphone,
    },
    {
        href: '/portal/worker/performance',
        label: 'Performance',
        icon: TrendingUp,
    },
]

export function WorkerSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            {/* Mobile Toggle */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-foreground bg-card/80 backdrop-blur-sm"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
            </div>

            {/* Sidebar */}
            <div
                className={`${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    } fixed lg:relative inset-y-0 left-0 w-64 bg-card border-r border-primary/20 flex flex-col transition-transform duration-300 z-40`}
            >
                {/* Logo */}
                <div className="p-6 border-b border-primary/20">
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
                                Worker Portal
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {workerNavItems.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                    ? 'bg-primary text-primary-foreground shadow-sm font-semibold'
                                    : 'text-foreground/70 hover:text-foreground hover:bg-accent/50 border border-transparent'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Bottom Section */}
                <div className="p-4 space-y-3 border-t border-border/50">
                    <Link
                        href="/portal/worker/profile"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all border border-transparent"
                        onClick={() => setIsOpen(false)}
                    >
                        <User className="w-5 h-5" />
                        <span className="font-medium">Profile</span>
                    </Link>
                    <Button
                        variant="outline"
                        className="w-full justify-start gap-3 border-border/50 text-foreground/70 hover:text-foreground hover:bg-destructive/10 hover:border-destructive/30 bg-transparent"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Sign Out</span>
                    </Button>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 lg:hidden z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
