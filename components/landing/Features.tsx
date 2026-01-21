'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight, Network, Users, Lock, Zap, Globe, Settings } from 'lucide-react'

const features = [
    { title: 'Dynamic Structure', description: 'Configure departments on-demand.', icon: Network },
    { title: 'Worker Management', description: 'Manage your team with control.', icon: Users },
    { title: 'Role & Permissions', description: 'Define custom roles.', icon: Lock },
    { title: 'Lightning Fast', description: 'Real-time updates.', icon: Zap },
    { title: 'Multi-Business', description: 'Multiple businesses, one dashboard.', icon: Globe },
    { title: 'Enterprise Ready', description: 'Secure & scalable.', icon: Settings },
]

export default function Features() {
    return (
        <section id="features" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col items-center justify-center space-y-4 mb-4'>
                    <h1 className='text-teal-400 text-3xl'>BMS Features</h1>
                    <p className='text-gray-500 text-center  text-lg w-1/2'>BMS Offers Different Features Intended To Improve Overall Business Management </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => {
                        const Icon = f.icon
                        return (
                            <Card key={i} className="group p-6 hover:border-primary/50 transition">
                                <Icon className="w-6 h-6 text-primary mb-4" />
                                <h3 className="font-semibold">{f.title}</h3>
                                <p className="text-sm text-muted-foreground">{f.description}</p>
                                <div className="flex items-center gap-2 text-primary mt-3 opacity-0 group-hover:opacity-100">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
