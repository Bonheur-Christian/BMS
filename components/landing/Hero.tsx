'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Network } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative pt-48 pb-20 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium animate-bounce">
                        ✨ Next-Gen Business Tools
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold">
                        Simplify Your
                        <span className="bg-gradient-to-r from-teal-500 via-gray-500 to-teal-900 bg-clip-text text-transparent">
                            {' '}Business Ops
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground">
                        A configurable business management system built for modern entrepreneurs.
                    </p>

                    <div className="flex gap-4">
                        <Button size="lg" className='py-6 px-4 bg-teal-500 text-gray-200 hover:bg-teal-600 cursor-pointer'>
                            Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" className='px-4 py-6 cursor-pointer'>
                            Watch Demo
                        </Button>
                    </div>
                </div>

                <div className="hidden lg:block relative">
                    <div className="absolute inset-0 bg-teal-900 blur-3xl rounded-2xl animate-pulse" />
                    <div className="relative bg-card border rounded-2xl p-8">
                        <Network className="w-24 h-24 text-primary mx-auto animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    )
}
