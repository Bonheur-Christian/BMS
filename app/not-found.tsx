'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* 404 Illustration */}
                <div className="relative">
                    <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Search className="w-20 h-20 md:w-24 md:h-24 text-primary/30 animate-pulse" />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto">
                        Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link href="/">
                        <Button className="gap-2 min-w-[200px]">
                            <Home className="w-4 h-4" />
                            Go to Homepage
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                        className="gap-2 min-w-[200px]"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </Button>
                </div>

                {/* Helpful Links */}
                <div className="pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-4">
                        Here are some helpful links instead:
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <Link href="/" className="text-primary hover:underline">
                            Home
                        </Link>
                        <Link href="/portal/business-owner/dashboard" className="text-primary hover:underline">
                            Dashboard
                        </Link>
                        <Link href="/portal/business-owner/businesses" className="text-primary hover:underline">
                            Businesses
                        </Link>
                        <Link href="/portal/business-owner/workers" className="text-primary hover:underline">
                            Team
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
